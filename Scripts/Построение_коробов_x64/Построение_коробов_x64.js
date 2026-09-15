currentFileData.model.UnSelectAll();

// Обязательно укажите полный путь к Settings.xml вашего БАЗИС-Мебельщика.
// Из него скрипт берёт <PathFastener> и находит Fasteners.config для сохранения
// и восстановления схем фурнитуры

// пример - 'C:\\Users\\User\\AppData\\Roaming\\Bazis\\Settings.xml'
const BAZIS_SETTINGS_XML_PATH = 'D:\\Bazis_2026_6_2_x64\\Settings\\Settings.xml';

const fs = require('fs');
const path = require('path');

// Вся конфигурация лежит в одном файле двумя объектами: core и interface.
// Тот же формат у шаблонов — шаблон это просто копия config.json целиком.
const CONFIG_PATH = path.join(__dirname, 'config.json');
const CONFIG = require('./config.json');
const CORE_CONFIG = CONFIG.core;
const INTERFACE_CONFIG = CONFIG.interface;

// Архитектура: core хранит параметры и строит модель, interface управляет
// формой, а CONFIG используется и как основной config.json, и как шаблон.
// Файл конфигурации записывается только после нажатия «Построить».
// Во время работы формы объекты CONFIG лишь синхронизируются в памяти —
// это также позволяет сохранить шаблон с текущими значениями, не меняя
// основной config.json.
function writeConfig() {
	if (interface.isApplyingConfig) return;
	fs.writeFileSync(CONFIG_PATH, JSON.stringify(CONFIG, null, '\t'));
}

// Соответствие индекса комбобоксов установки крепежа корпуса и полок значению
// fastenerOperations.basePlaneMount. Порядок пунктов комбобокса:
// Изнутри, Снаружи, Снизу, Сверху, Видимая, Невидимая.
const BASE_PLANE_BY_INDEX = [
	fastenerOperations.basePlaneMount.inside,
	fastenerOperations.basePlaneMount.outside,
	fastenerOperations.basePlaneMount.down,
	fastenerOperations.basePlaneMount.up,
	fastenerOperations.basePlaneMount.visible,
	fastenerOperations.basePlaneMount.invisible,
];

// Схемы из диалога выбора живут в Fasteners.config. У FurnitureInfo для них
// пустой FileName, а важное состояние находится в нативном Params. Поэтому
// при загрузке нужен живой TInstallationScheme из этой базы, а не копия его
// полей в обычный JavaScript-объект.
let paramFastenerDatabase = null;
let paramFastenerDatabaseWasLoaded = false;

// Раскодирует XML-сущности в пути, если в имени папки есть спецсимволы.
function decodeXmlText(value) {
	return value
		.replace(/&amp;/gi, '&')
		.replace(/&lt;/gi, '<')
		.replace(/&gt;/gi, '>')
		.replace(/&quot;/gi, '"')
		.replace(/&apos;/gi, "'");
}

// Извлекает каталог фурнитуры из Settings.xml и добавляет имя базы.
function getFastenersConfigPathFromSettings() {
	if (typeof BAZIS_SETTINGS_XML_PATH !== 'string' || !BAZIS_SETTINGS_XML_PATH.trim()) return null;

	try {
		const settingsXml = fs.readFileSync(BAZIS_SETTINGS_XML_PATH.trim(), 'utf8');
		const pathMatch = settingsXml.match(/<PathFastener>\s*([\s\S]*?)\s*<\/PathFastener>/i);
		if (!pathMatch) return null;

		const fastenerDirectory = decodeXmlText(pathMatch[1]).trim();
		return fastenerDirectory ? path.join(fastenerDirectory, 'Fasteners.config') : null;
	} catch (_error) {
		return null;
	}
}

// Загружает Fasteners.config один раз и удерживает базу живой до конца работы.
function getParamFastenerDatabase() {
	if (paramFastenerDatabaseWasLoaded) return paramFastenerDatabase;
	paramFastenerDatabaseWasLoaded = true;
	if (typeof NewParamFastenerDB === 'undefined') return null;

	const databasePath = getFastenersConfigPathFromSettings();
	if (!databasePath || !fs.existsSync(databasePath)) return null;

	try {
		const database = NewParamFastenerDB();
		database.LoadFromFile(databasePath);
		// Базу держим до завершения скрипта: Params восстановленной схемы
		// ссылается на принадлежащую ей нативную запись.
		paramFastenerDatabase = database;
	} catch (_error) {
		paramFastenerDatabase = null;
	}
	return paramFastenerDatabase;
}

// Приводит строковые ключи фурнитуры к виду для нечувствительного поиска.
function normalizeFurnitureKey(value) {
	return typeof value === 'string' ? value.trim().toLowerCase() : '';
}

// Формирует ключ записи базы для сохранения выбранной схемы в JSON.
function getParamFastenerReference(info) {
	const params = info && info.Params;
	if (!params) return null;

	const reference = {
		name: typeof info.Name === 'string' ? info.Name : typeof params.Name === 'string' ? params.Name : '',
		paramsName: typeof params.Name === 'string' ? params.Name : '',
		fastType: params.FastType,
		datumMode: params.DatumMode,
	};
	const database = getParamFastenerDatabase();
	if (!database || !reference.paramsName) return reference;

	try {
		for (let groupIndex = 0; groupIndex < database.Count; groupIndex++) {
			const group = database[groupIndex];
			for (let recordIndex = 0; recordIndex < group.Count; recordIndex++) {
				const record = group[recordIndex];
				const sameParams = typeof params.Equals === 'function' && params.Equals(record);
				if (!sameParams) continue;

				reference.groupName = typeof group.Name === 'string' ? group.Name : '';
				reference.groupFastType = group.FastType;
				reference.name = typeof record.Name === 'string' ? record.Name : reference.name;
				reference.fileName = typeof record.FileName === 'string' ? record.FileName : '';
				reference.fastType = record.FastType;
				reference.datumMode = record.DatumMode;
				return reference;
			}
		}
	} catch (_error) {
		// Если одна запись базы недоступна, остаётся запасной ключ по имени.
	}
	return reference;
}

// По сохранённому ключу возвращает живую запись параметрической фурнитуры.
function getFurnitureRecordFromDatabase(reference) {
	if (!reference || typeof reference !== 'object') return null;
	const database = getParamFastenerDatabase();
	if (!database) return null;

	const names = [reference.name, reference.paramsName, reference.fileName].map(normalizeFurnitureKey).filter(Boolean);
	if (!names.length) return null;

	function findInGroups(onlyReferenceGroup) {
		for (let groupIndex = 0; groupIndex < database.Count; groupIndex++) {
			const group = database[groupIndex];
			if (onlyReferenceGroup && normalizeFurnitureKey(group.Name) !== normalizeFurnitureKey(reference.groupName))
				continue;

			for (let recordIndex = 0; recordIndex < group.Count; recordIndex++) {
				const record = group[recordIndex];
				if (
					reference.fastType !== undefined &&
					record.FastType !== undefined &&
					record.FastType !== reference.fastType
				)
					continue;

				const recordNames = [record.Name, record.FileName, record.FullName]
					.map(normalizeFurnitureKey)
					.filter(Boolean);
				if (recordNames.some((recordName) => names.includes(recordName))) return record;
			}
		}
		return null;
	}

	return reference.groupName ? findInGroups(true) || findInGroups(false) : findInGroups(false);
}

// Создаёт корректный FurnitureInfo, привязанный к найденной записи базы.
function restoreFurnitureInfoFromDatabase(savedInfo) {
	const savedParams = savedInfo && savedInfo.Params;
	const reference = savedInfo.DatabaseReference || {
		name: savedInfo.Name || (savedParams && savedParams.Name),
		paramsName: savedParams && savedParams.Name,
		fastType: savedParams && savedParams.FastType,
		datumMode: savedParams && savedParams.DatumMode,
	};
	const record = getFurnitureRecordFromDatabase(reference);
	if (!record) return null;

	try {
		const info = fastenerOperations.CreateFurnitureInfo();
		info.Params = record;
		info.Name = record.Name;
		return info;
	} catch (_error) {
		return null;
	}
}

// Сохраняем JSON-снимок как запасной вариант для файловой фурнитуры. Для
// параметрической фурнитуры дополнительно сохраняем ключ живой записи базы.
function saveFurnitureInfo(info) {
	if (!info) return null;

	let savedInfo = {};
	try {
		const json = JSON.stringify(info);
		if (json) savedInfo = JSON.parse(json);
	} catch (_error) {
		// Некоторые объекты движка могут не сериализоваться целиком. Ниже
		// всё равно будет записан минимум, из которого создаётся TFurnitureInfo.
	}

	if (!savedInfo || typeof savedInfo !== 'object' || Array.isArray(savedInfo)) savedInfo = {};
	if (typeof savedInfo.FileName !== 'string') {
		savedInfo.FileName = typeof info.FileName === 'string' ? info.FileName : '';
	}
	if (typeof savedInfo.Name !== 'string') {
		savedInfo.Name = typeof info.Name === 'string' ? info.Name : '';
	}

	const params = info.Params;
	if (params) {
		if (!savedInfo.Params || typeof savedInfo.Params !== 'object' || Array.isArray(savedInfo.Params)) {
			savedInfo.Params = {};
		}
		savedInfo.Params.DatumMode = params.DatumMode;
		savedInfo.Params.FastType = params.FastType;
		savedInfo.Params.Name = params.Name;
	}

	const databaseReference = getParamFastenerReference(info);
	if (databaseReference) savedInfo.DatabaseReference = databaseReference;

	try {
		savedInfo.DatumMode = info.FindDatumMode();
	} catch (_error) {
		// Для части параметрической фурнитуры способ базирования определяется
		// самим БАЗИС при установке; FileName и Params всё равно сохранены.
	}
	return savedInfo;
}

// Переносит все свойства из JSON-снимка в объект БАЗИС. Для вложенных
// объектов (например, Params) значения переносятся внутрь уже созданного
// движком объекта, а не подменяют его обычным JavaScript-объектом.
function applySavedFurnitureProperties(target, savedValues) {
	if (!target || !savedValues || typeof savedValues !== 'object') return;

	Object.keys(savedValues).forEach((propertyName) => {
		if (propertyName === 'DatabaseReference') return;
		const savedValue = savedValues[propertyName];
		try {
			const targetValue = target[propertyName];
			if (
				savedValue &&
				targetValue &&
				typeof savedValue === 'object' &&
				typeof targetValue === 'object' &&
				!Array.isArray(savedValue)
			) {
				applySavedFurnitureProperties(targetValue, savedValue);
			} else {
				target[propertyName] = savedValue;
			}
		} catch (_error) {
			// Свойство из снимка может быть только для чтения или отсутствовать
			// в установленной версии БАЗИС. Остальные свойства всё равно применим.
		}
	});
}

// Сначала пытается восстановить схему из базы, затем использует JSON-резерв.
function loadFurnitureInfo(savedInfo) {
	if (!savedInfo || typeof savedInfo !== 'object') return null;

	const databaseInfo = restoreFurnitureInfoFromDatabase(savedInfo);
	if (databaseInfo) return databaseInfo;

	try {
		const info =
			typeof savedInfo.FileName === 'string' && savedInfo.FileName
				? fastenerOperations.CreateFurnitureInfo(savedInfo.FileName)
				: fastenerOperations.CreateFurnitureInfo();
		applySavedFurnitureProperties(info, savedInfo);
		return info;
	} catch (_error) {
		// Не прерываем загрузку старого шаблона, если файл фурнитуры уже удалён.
		return null;
	}
}

// Единое отображаемое имя схемы для всех селекторов на форме.
function furnitureInfoCaption(info) {
	if (!info) return '';
	if (info.Params && info.Params.Name) return info.Params.Name;
	if (info.FileName) return path.basename(info.FileName);
	return 'Схема крепежа';
}

// Значения, приходящие из конфигурации, отделены от состояния текущей
// сборки: тот же набор применяется при загрузке шаблона.
function coreConfigValues(cfg) {
	return {
		blockName: cfg.blockName,
		blockVariant: cfg.blockVariant,
		backSideVariant: cfg.backSideVariant,
		topSideVariant: cfg.topSideVariant,
		bottomSideVariant: cfg.bottomSideVariant,
		x: cfg.x,
		y: cfg.y,
		z: cfg.z,
		innerBlockWidth: cfg.innerBlockWidth,
		innerBlockHeight: cfg.innerBlockHeight,
		innerBlockDepth: cfg.innerBlockDepth,
		backSideMoveZ: cfg.backSideMoveZ,
		plinthSize: cfg.plinthSize,
		frontPlinthIndent: cfg.frontPlinthIndent,
		backPlinthIndent: cfg.backPlinthIndent,
		blockMaterial: cfg.blockMaterial,
		backSideMaterial: cfg.backSideMaterial,
		buttMaterial: cfg.buttMaterial,
		buttVariant: cfg.buttVariant,
		furnitureInfo: loadFurnitureInfo(cfg.furnitureInfo),
		backFurnitureInfo: loadFurnitureInfo(cfg.backFurnitureInfo),
		mainBlockFurnMountVariant: cfg.mainBlockFurnMountVariant,
		// Для старых конфигураций вариант ЗС повторяет прежний общий вариант.
		backFurnMountVariant:
			Number.isInteger(cfg.backFurnMountVariant) && cfg.backFurnMountVariant >= 0 && cfg.backFurnMountVariant <= 5
				? cfg.backFurnMountVariant
				: cfg.mainBlockFurnMountVariant || 0,
		// Точки базирования схемы: 0 — первое значение в соответствующем
		// комбобоксе (слева / сверху / спереди), 1 — противоположное.
		mainBlockFurnBaseX: cfg.mainBlockFurnBaseX === 1 ? 1 : 0,
		mainBlockFurnBaseY: cfg.mainBlockFurnBaseY === 1 ? 1 : 0,
		mainBlockFurnBaseZ: cfg.mainBlockFurnBaseZ === 1 ? 1 : 0,
		// Нумеровать полки/перегородки/фасады номером секции/позиции в имени
		// объекта. По умолчанию включено, поэтому проверка через !== false.
		numberElements: cfg.numberElements !== false,
		shelfFurnitureInfo: loadFurnitureInfo(cfg.shelfFurnitureInfo),
		shelfFurnMountVariant: cfg.shelfFurnMountVariant || 0,
		sectionCount: cfg.sectionCount,
		sectionVariant: cfg.sectionVariant,
		// Номер секции слева направо, начиная с 1 (sectionCount хранит индекс списка).
		reducedSection: cfg.reducedSection || 1,
		// Чистые ширины слева направо, отдельно для каждого количества секций.
		// Например, sectionSizes[3][0] — размер первой из трёх секций.
		sectionSizes: cfg.sectionSizes || {},
		// Настройки полок по количеству секций, внутри — слева направо.
		shelves: cfg.shelves || {},
		// Доп. отступ полок вглубь от перегородок (сверх толщины фасада и
		// facadeIndent) — только полки, перегородок не касается. Живёт на
		// вкладке "Наполнение" ("Отступ полок"), но участвует в фасадной
		// геометрии наравне с facadeGap/facadeIndent.
		// 0 — валидное значение, поэтому не через "||" (иначе 0 не сохранялся бы).
		shelfIndent: Number.isFinite(cfg.shelfIndent) ? cfg.shelfIndent : cfg.facadeFillingGap || 2,

		// 0 Нет / 1 По перегородкам / 2 Редактируемые.
		facadeVariant: cfg.facadeVariant || 0,
		// 0 Накладные / 1 Вкладные.
		facadeMountVariant: cfg.facadeMountVariant || 0,
		// Редактируемые (без перегородок).
		// 0 Вертикальные (колонки, как по перегородкам) / 1 Горизонтальные (ряды, как ящики).
		facadeEditableOrientation: cfg.facadeEditableOrientation || 0,
		facadeEditableCount: Number.isFinite(cfg.facadeEditableCount) ? cfg.facadeEditableCount : 2,
		// Только для горизонтальных: 0 Равные / 1 Изменение 1го / 2 Изменение 2ух.
		facadeEditableLayout: cfg.facadeEditableLayout || 0,
		// База отсчёта для изменяемых рядов: 0 Сверху (меняются нижние) / 1 Снизу (верхние).
		facadeEditableBase: cfg.facadeEditableBase || 0,
		// Высоты изменяемых рядов (снизу вверх среди изменяемых — 1й ниже, 2й выше).
		facadeEditableSize1: Number.isFinite(cfg.facadeEditableSize1) ? cfg.facadeEditableSize1 : 200,
		facadeEditableSize2: Number.isFinite(cfg.facadeEditableSize2) ? cfg.facadeEditableSize2 : 200,
		// Для каждого количества вертикальных фасадов: 0 — стык слева,
		// 1 — стык справа. Нужен одному фасаду и средним фасадам.
		facadeJointSides: cfg.facadeJointSides || {},
		facadeMaterial: cfg.facadeMaterial || cfg.blockMaterial,
		facadeButtMaterial: cfg.facadeButtMaterial || cfg.buttMaterial,
		facadeFurnitureInfo: loadFurnitureInfo(cfg.facadeFurnitureInfo),
		halfFacadeFurnitureInfo: loadFurnitureInfo(cfg.halfFacadeFurnitureInfo),
		// Зазор сверху/снизу/по бокам внутри фасадного пространства — один
		// на оба варианта наложения (перед корпусом у накладных, у лицевых
		// торцов боковин/перегородок у вкладных); на стыке двух фасадов
		// у перегородки виден удвоенным.
		// 0 — валидное значение (без зазора), поэтому не через "||".
		facadeGap: Number.isFinite(cfg.facadeGap) ? cfg.facadeGap : 2,
		// Перегородки (а с ними и сами фасады) всегда полунакладные на них —
		// уходят вглубь от лицевого габарита корпуса на толщину фасада плюс
		// этот отступ, одинаково для накладных и вкладных.
		facadeIndent: Number.isFinite(cfg.facadeIndent) ? cfg.facadeIndent : 0,
	};
}

// Состояние изделия и все операции построения. В CONFIG попадают только
// пользовательские параметры; созданные панели и установленные объекты нет.
const core = {
	// Текущий блок и его фурнитура по зонам изделия.
	block: null,
	blockUid: null,
	furnitureInfo: null,
	panelPairs: [],
	mountedFurniture: [],
	backFurnitureInfo: null,
	backPanelPairs: [],
	mountedBackFurniture: [],
	// Габариты корпуса до установки фурнитуры: база для повторного монтажа.
	furnitureBaseBounds: null,
	shelfFurnitureInfo: null,
	shelfPanelPairs: [],
	shelfMountedFurniture: [],
	facadeFurnitureInfo: null,
	facadePanelPairs: [],
	facadeSectionWalls: [],
	mountedFacadeFurniture: [],
	halfFacadeFurnitureInfo: null,
	halfFacadePanelPairs: [],
	mountedHalfFacadeFurniture: [],
	// Временные панели и пары для монтажа; при следующей сборке создаются заново.
	facadePanels: [],
	// Одна операция истории на полную перестройку блока. Во время неё
	// внутренние операции (кромка и фурнитура) не фиксируются отдельно.
	historyName: null,
	lastGeometrySignature: null,

	// Одна операция истории объединяет полную перестройку и её последствия.
	beginHistory(name) {
		historyOperations.RegisterObjectChanging(currentFileData.model);
		this.historyName = name;
	},

	commitHistory(fallbackName) {
		historyOperations.CommitCurrentChanges(this.historyName || fallbackName);
		this.historyName = null;
	},

	// Принудительно строит панели блока перед кромлением и установкой крепежа.
	materializePanels(block) {
		for (let i = 0; i < block.Count; i++) {
			const obj = block.Objects[i];
			if (objectTypeChecker.ObjectIsPanel(obj)) obj.Build();
		}
	},

	// Сохраняет чистый габарит корпуса до добавления выступающей фурнитуры.
	updateFurnitureBaseBounds() {
		if (!this.block) {
			this.furnitureBaseBounds = null;
			return;
		}
		const min = this.block.GabMin;
		const max = this.block.GabMax;
		this.furnitureBaseBounds = {
			min: { x: min.x, y: min.y, z: min.z },
			max: { x: max.x, y: max.y, z: max.z },
		};
	},

	// Возвращает угловую точку корпуса по трём выбранным базам схемы.
	getFurnitureBasePoint() {
		const bounds = this.furnitureBaseBounds || {
			min: this.block.GabMin,
			max: this.block.GabMax,
		};
		return {
			x: this.mainBlockFurnBaseX === 0 ? bounds.min.x : bounds.max.x,
			y: this.mainBlockFurnBaseY === 0 ? bounds.max.y : bounds.min.y,
			z: this.mainBlockFurnBaseZ === 0 ? bounds.max.z : bounds.min.z,
		};
	},

	hasBackFurnitureSupport() {
		return this.backSideVariant === 0 && this.backSideMaterial.thickness >= 4;
	},

	isVerticalFacadeHardwareSupported() {
		return this.facadeVariant === 1 || (this.facadeVariant === 2 && this.facadeEditableOrientation === 0);
	},

	hasHalfFacadeHardware() {
		return this.facadeVariant === 1 && this.sectionCount > 1;
	},

	hasSingleFacadeJoint() {
		return this.facadeVariant === 2 && this.facadeEditableOrientation === 0 && this.facadeEditableCount === 1;
	},

	getFacadeJointSide(facadeCount, facadeIndex) {
		if (!Array.isArray(this.facadeJointSides[facadeCount])) this.facadeJointSides[facadeCount] = [];
		if (this.facadeJointSides[facadeCount][facadeIndex] !== 1) this.facadeJointSides[facadeCount][facadeIndex] = 0;
		return this.facadeJointSides[facadeCount][facadeIndex];
	},

	setFacadeJointSide(facadeCount, facadeIndex, side) {
		this.getFacadeJointSide(facadeCount, facadeIndex);
		this.facadeJointSides[facadeCount][facadeIndex] = side === 1 ? 1 : 0;
	},

	// Подбирает пары панелей для обычной и полунакладной фурнитуры фасадов.
	updateFacadeFurniturePairs(sectionWalls = this.facadeSectionWalls) {
		this.facadePanelPairs = [];
		this.halfFacadePanelPairs = [];
		const count = this.facadePanels.length;
		if (!count || !sectionWalls.length) return;

		if (this.facadeVariant === 1) {
			// Крайние фасады крепятся к боковинам обычной схемой.
			this.facadePanelPairs.push(
				[sectionWalls[0], this.facadePanels[0]],
				[sectionWalls[count], this.facadePanels[count - 1]],
			);
			// Средний фасад — полунакладной на одну из соседних перегородок.
			for (let i = 1; i < count - 1; i++) {
				const side = this.getFacadeJointSide(count, i);
				this.halfFacadePanelPairs.push([sectionWalls[i + side], this.facadePanels[i]]);
			}
			return;
		}

		if (this.facadeVariant === 2 && this.facadeEditableOrientation === 0) {
			if (count === 1) {
				const side = this.getFacadeJointSide(1, 0);
				this.facadePanelPairs.push([sectionWalls[side], this.facadePanels[0]]);
			} else {
				this.facadePanelPairs.push(
					[sectionWalls[0], this.facadePanels[0]],
					[sectionWalls[1], this.facadePanels[count - 1]],
				);
			}
		}
	},

	getFacadeMountParams(panel1, panel2) {
		// Во всех вариантах наложения первой панелью остаётся боковина или
		// перегородка, второй — фасад.
		return {
			panel1,
			panel2,
			furnOwner: this.block,
		};
	},

	materialSignature(material) {
		return material ? [material.name, material.thickness, material.width] : null;
	},

	// Считает высоты редактируемых горизонтальных фасадов с учётом базы.
	calculateEditableFacadeRowSizes() {
		if (this.facadeVariant !== 2 || this.facadeEditableOrientation !== 1) return null;
		const count = Math.max(1, Math.floor(this.facadeEditableCount) || 1);
		const Q = this.blockVariant === 0 ? 0 : this.plinthSize;
		const t = this.blockMaterial.thickness;
		const isOverlay = this.facadeMountVariant === 0;
		const rawBottom = isOverlay ? Q : Q + t;
		const rawTop = isOverlay ? this.y : this.y - t;
		const available = rawTop - rawBottom - 2 * this.facadeGap * count;
		const customCount = Math.min(this.facadeEditableLayout, count - 1);
		if (customCount === 0) return new Array(count).fill(available / count);

		const customIndices = [];
		for (let i = 0; i < customCount; i++) {
			customIndices.push(this.facadeEditableBase === 0 ? i : count - 1 - i);
		}
		customIndices.sort((a, b) => a - b);
		const customSizes = [this.facadeEditableSize1, this.facadeEditableSize2];
		const rowSizes = new Array(count).fill(0);
		let customSum = 0;
		customIndices.forEach((index, i) => {
			const size = Math.max(1, customSizes[i] || 0);
			rowSizes[index] = size;
			customSum += size;
		});
		const equalSize = (available - customSum) / (count - customCount);
		for (let i = 0; i < count; i++) {
			if (!customIndices.includes(i)) rowSizes[i] = equalSize;
		}
		return rowSizes;
	},

	// Запоминает вычисленную равную высоту, чтобы поля формы не расходились.
	syncEditableFacadeSizesToEqual() {
		const rowSizes = this.calculateEditableFacadeRowSizes();
		if (!rowSizes || this.facadeEditableLayout !== 0 || !Number.isFinite(rowSizes[0])) return;
		this.facadeEditableSize1 = rowSizes[0];
		this.facadeEditableSize2 = rowSizes[0];
	},

	// Снимок именно результата построения. Настройки, которые не меняют
	// модель (например, выбор уменьшаемой секции при равных размерах), сюда
	// намеренно не входят.
	getGeometrySignature() {
		const sectionWidths = this.calculateSectionSizes(this.x);
		if (!sectionWidths) return null;
		const round = (value) => Math.round(value * 1000000) / 1000000;
		const shelfHeight = this.getShelfHeight();
		const shelves = sectionWidths.map((_, index) => {
			const settings = this.getShelfSettings(index);
			if (!settings.enabled) return null;
			return this.calculateShelfPositions(index, shelfHeight).map(round);
		});
		const hasFacades = this.facadeVariant !== 0;
		const facade = !hasFacades
			? null
			: {
					variant: this.facadeVariant,
					mount: this.facadeMountVariant,
					gap: round(this.facadeGap),
					indent: this.facadeMountVariant === 1 ? round(this.facadeIndent) : 0,
					material: this.materialSignature(this.facadeMaterial),
					editable:
						this.facadeVariant !== 2
							? null
							: [
									this.facadeEditableOrientation,
									this.facadeEditableCount,
									...(this.facadeEditableOrientation === 1
										? this.calculateEditableFacadeRowSizes().map(round)
										: []),
								],
				};
		return JSON.stringify({
			size: [round(this.x), round(this.y), round(this.z)],
			blockVariant: this.blockVariant,
			blockMaterial: this.materialSignature(this.blockMaterial),
			back: [
				this.backSideVariant,
				this.materialSignature(this.backSideMaterial),
				this.backSideVariant < 2 ? round(this.backSideMoveZ) : 0,
			],
			plinth:
				this.blockVariant === 0
					? null
					: [
							round(this.plinthSize),
							round(this.backPlinthIndent),
							this.blockVariant === 1 ? round(this.frontPlinthIndent) : 0,
						],
			top: this.topSideVariant,
			bottom: this.blockVariant === 1 ? 1 : this.bottomSideVariant,
			sectionWidths: sectionWidths.map(round),
			shelves,
			// Отступ полок не зависит от наличия фасадов (см. shelfClearance выше).
			shelfIndent: shelves.some(Boolean) ? round(this.shelfIndent) : 0,
			facade,
		});
	},

	// Создаёт или дополняет настройки полок для указанной секции.
	getShelfSettings(index) {
		const count = this.sectionCount + 1;
		if (!Array.isArray(this.shelves[count])) this.shelves[count] = [];
		if (!this.shelves[count][index]) {
			this.shelves[count][index] = {
				enabled: false,
				count: 1,
				layout: 0,
				top: 0,
				bottom: 0,
				topFixed: false,
				bottomFixed: false,
			};
		}
		const settings = this.shelves[count][index];
		// В старых настройках режима «Отступы» оба края задавались явно.
		if (typeof settings.topFixed !== 'boolean') settings.topFixed = settings.layout === 1;
		if (typeof settings.bottomFixed !== 'boolean') settings.bottomFixed = settings.layout === 1;
		return settings;
	},

	getShelfHeight() {
		return this.y - 2 * this.blockMaterial.thickness - (this.blockVariant === 0 ? 0 : this.plinthSize);
	},

	// Рассчитывает позиции полок, одновременно ограничивая невыполнимые значения.
	calculateShelfPositions(index, height) {
		const settings = this.getShelfSettings(index);
		const t = this.blockMaterial.thickness;
		if (settings.layout !== 1) {
			settings.topFixed = false;
			settings.bottomFixed = false;
		}
		// Между панелями оставляем не менее 1 мм чистого пространства.
		const maxCount = Math.floor((height - 1) / (t + 1));
		if (!Number.isFinite(maxCount) || maxCount < 1) return [];
		settings.count = Math.max(1, Math.min(maxCount, Math.floor(settings.count) || 1));
		const available = height - settings.count * t;
		let gap;
		if (!settings.topFixed && !settings.bottomFixed) {
			gap = available / (settings.count + 1);
			settings.top = gap;
			settings.bottom = gap;
		} else {
			const equalGap = available / (settings.count + 1);
			settings.bottom = Number.isFinite(settings.bottom) ? Math.max(1, settings.bottom) : equalGap;
			settings.top = Number.isFinite(settings.top) ? Math.max(1, settings.top) : equalGap;
			// При сокращении до одной полки два независимых отступа невозможны.
			if (settings.count === 1 && settings.topFixed && settings.bottomFixed) settings.topFixed = false;
			if (settings.topFixed && settings.bottomFixed) {
				const maxEdges = available - (settings.count - 1);
				const edgeSum = settings.top + settings.bottom;
				if (edgeSum > maxEdges) {
					const scale = (maxEdges - 2) / (edgeSum - 2);
					settings.top = 1 + (settings.top - 1) * scale;
					settings.bottom = 1 + (settings.bottom - 1) * scale;
				}
				gap = (available - settings.top - settings.bottom) / (settings.count - 1);
			} else if (settings.topFixed) {
				settings.top = Math.min(settings.top, available - settings.count);
				gap = (available - settings.top) / settings.count;
				settings.bottom = gap;
			} else {
				settings.bottom = Math.min(settings.bottom, available - settings.count);
				gap = (available - settings.bottom) / settings.count;
				settings.top = gap;
			}
		}
		return Array.from({ length: settings.count }, (_, i) => settings.bottom + i * (t + gap));
	},

	// Применяет ручной отступ одной стороны, оставляя место для остальных полок.
	setShelfOffset(index, side, value) {
		if (!Number.isFinite(value)) return;
		const height = this.getShelfHeight();
		if (!this.calculateShelfPositions(index, height).length) return;
		const settings = this.getShelfSettings(index);
		const available = height - settings.count * this.blockMaterial.thickness;
		const other = side === 'top' ? 'bottom' : 'top';
		// Программное обновление полей сюда не попадает: фиксируем только ручной ввод.
		settings[side + 'Fixed'] = true;
		if (settings.count === 1) settings[other + 'Fixed'] = false;
		const maxOffset = settings[other + 'Fixed']
			? available - (settings.count - 1) - settings[other]
			: available - settings.count;
		settings[side] = Math.max(1, Math.min(value, maxOffset));
	},

	// Вычисляет чистые ширины секций и корректирует их при нехватке места.
	calculateSectionSizes(width) {
		const count = this.sectionCount + 1;
		const available = width - (count + 1) * this.blockMaterial.thickness;
		if (!Number.isFinite(available) || available < count) return null;
		const equalSize = available / count;
		if (this.sectionVariant === 0 || count === 1) {
			// После «Равнозначно» ручное редактирование начинается с фактических равных размеров.
			this.sectionSizes[count] = Array(count).fill(equalSize);
			return this.sectionSizes[count];
		}
		if (!Array.isArray(this.sectionSizes[count])) {
			this.sectionSizes[count] = Array(count).fill(equalSize);
		}

		const reduced = this.reducedSection - 1;
		const sizes = Array.from({ length: count }, (_, i) => {
			const value = this.sectionSizes[count][i];
			return Number.isFinite(value) && value >= 1 ? value : equalSize;
		});
		let fixedSum = sizes.reduce((sum, value, i) => sum + (i === reduced ? 0 : value), 0);
		// При сужении корпуса или увеличении толщины материала сохраняем
		// минимум 1 мм для каждой секции, пропорционально уменьшая остальные.
		if (fixedSum > available - 1) {
			const scale = (available - count) / (fixedSum - (count - 1));
			for (let i = 0; i < count; i++) {
				if (i !== reduced) sizes[i] = 1 + (sizes[i] - 1) * scale;
			}
			fixedSum = sizes.reduce((sum, value, i) => sum + (i === reduced ? 0 : value), 0);
		}
		sizes[reduced] = available - fixedSum;
		this.sectionSizes[count] = sizes;
		return sizes;
	},

	// Меняет ширину одной секции; остаток автоматически получает уменьшаемая.
	setSectionSize(number, value) {
		const sizes = this.calculateSectionSizes(this.x);
		if (!sizes || !Number.isFinite(value)) return;
		const index = number - 1;
		const reduced = this.reducedSection - 1;
		if (index === reduced || index < 0 || index >= sizes.length) return;
		// Изменяется только выбранная секция и остаток уменьшаемой.
		const maxSize = sizes[index] + sizes[reduced] - 1;
		this.sectionSizes[sizes.length][index] = Math.max(1, Math.min(value, maxSize));
	},

	// Пересобирает модель только при фактическом изменении геометрии.
	rebuildBlock(historyName = 'Блок изменён') {
		if (interface.isApplyingConfig) return null;
		const signature = this.getGeometrySignature();
		if (signature !== null && signature === this.lastGeometrySignature) return null;
		this.beginHistory(historyName);
		const block = this.buildBlock(
			this.x,
			this.y,
			this.z,
			this.plinthSize,
			this.backPlinthIndent,
			this.frontPlinthIndent,
			this.backSideMoveZ,
		);
		if (block === null) {
			historyOperations.RevertCurrentChanges();
			this.historyName = null;
		} else {
			this.lastGeometrySignature = this.getGeometrySignature();
		}
		return block;
	},

	// Создаёт все панели корпуса, наполнения, фасадов, кромку и фурнитуру.
	buildBlock(sX, sY, sZ, sPlinth, plinthIndB, plinthIndF, moveBackSideZ) {
		const sectionWidths = this.calculateSectionSizes(sX);
		if (!sectionWidths) {
			UI.dialogs.MessageBox('Недостаточно ширины корпуса для выбранного количества секций и толщины панелей.');
			return null;
		}
		const shelfHeight = sY - 2 * this.blockMaterial.thickness - (this.blockVariant === 0 ? 0 : sPlinth);
		const shelfPositions = sectionWidths.map((_, i) => this.calculateShelfPositions(i, shelfHeight));
		if (shelfPositions.some((positions, i) => this.getShelfSettings(i).enabled && !positions.length)) {
			UI.dialogs.MessageBox('Недостаточно высоты для полок выбранной толщины.');
			return null;
		}
		this.panelPairs = [];
		this.backPanelPairs = [];
		this.shelfPanelPairs = [];
		this.facadePanelPairs = [];
		this.halfFacadePanelPairs = [];
		this.facadeSectionWalls = [];
		// Старая фурнитура уже будет удалена вместе со всем блоком ниже —
		// достаточно забыть о ней, повторно удалять не нужно (и нельзя,
		// объекты уже не существуют).
		this.mountedFurniture = [];
		this.mountedBackFurniture = [];
		this.shelfMountedFurniture = [];
		this.mountedFacadeFurniture = [];
		this.mountedHalfFacadeFurniture = [];

		if (this.block !== null) {
			objects3d.DeleteObject(this.block);
			this.block = null;
			this.blockUid = null;
		}

		materialData.SetupActiveMaterial(
			core.blockMaterial.name,
			core.blockMaterial.thickness,
			core.blockMaterial.width,
		);

		const block = objects3d.NewBlock(this.blockName, currentFileData.model);

		const t = this.blockMaterial.thickness;

		const top = this.topSideVariant; // 0 - накладная крышка, 1 - вкладная

		// Дно у варианта "с цоколем" всегда вкладное (1), т.к. его
		// вариант наложения не выбирается пользователем. У простого
		// блока и у подиума берётся реальный выбор.
		const bottomEff = this.blockVariant === 1 ? 1 : this.bottomSideVariant;

		// Подъём дна/задней стенки над низом корпуса из-за зоны цоколя.
		const Q = this.blockVariant === 0 ? 0 : sPlinth;

		// Укорочение боковин снизу из-за отдельной тумбы подиума.
		const P = this.blockVariant === 2 ? sPlinth : 0;

		this.innerBlockWidth = sX - 2 * t;
		this.innerBlockHeight = sY - 2 * t - Q;

		// ----- Фасады: коробка "утапливается" по глубине только под накладные фасады -----
		// И "По перегородкам", и "Редактируемые" реально строят фасады.
		const hasFacades = this.facadeVariant !== 0;
		const isOverlayFacade = hasFacades && this.facadeMountVariant === 0;
		const facadeThickness = hasFacades ? this.facadeMaterial.thickness : 0;
		// Коробка (боковины/крышка/дно) утапливается только под накладные —
		// ровно на толщину фасада, т.к. фасад полностью закрывает эту грань.
		const frontOffset = isOverlayFacade ? facadeThickness : 0;
		const boxFrontZ = sZ - frontOffset;

		// Перегородки всегда полунакладные на фасады по X (двойной зазор
		// facadeGap на стыке по центру перегородки — см. buildFacades) —
		// это не зависит от отступа. А вот отступ (facadeIndent) по Z
		// действует только на вкладных: там он задаёт, насколько перегородки
		// (и сами фасады) утоплены от лицевого габарита корпуса. На накладных
		// коробка и так утапливается ровно на толщину фасада (boxFrontZ) —
		// перегородки садятся прямо на её срез, без дополнительного отступа.
		// В core.facadeIndent при этом остаётся настоящее сохранённое
		// значение — на накладных оно просто не участвует в расчёте.
		const effectiveFacadeIndent = hasFacades && !isOverlayFacade ? this.facadeIndent : 0;
		const partitionClearance = hasFacades ? facadeThickness + effectiveFacadeIndent : 0;
		const partitionFrontZ = hasFacades ? sZ - partitionClearance : boxFrontZ;

		// Полки уходят вглубь ещё дальше перегородок — на отдельный отступ
		// полок (см. вкладку "Наполнение"), чтобы не упираться в фасад.
		// Отступ действует и без фасадов (partitionClearance тогда просто 0) —
		// это самостоятельная настройка полок, а не только "зазор до фасада".
		const shelfClearance = partitionClearance + this.shelfIndent;
		const shelfFrontZ = sZ - shelfClearance;

		// ----- Боковина левая [0] -----
		// top === 0 или bottomEff === 0 означает "торец панели подрезан
		// на толщину соседней панели" -> из высоты вычитается t за
		// каждую такую грань. P дополнительно отрезает низ у подиума.
		const sideHeight = sY - P - t * (top === 0 ? 1 : 0) - t * (bottomEff === 0 ? 1 : 0);
		const sideY = P + t * (1 - bottomEff);

		let bLeftSide = objects3d.NewPanel(boxFrontZ, sideHeight, objects3d.PanelOrientation.vertical, block);
		bLeftSide.Translate({ x: t, y: sideY, z: 0 });
		bLeftSide.Name = 'боковина левая';

		// ----- Боковина правая [1] -----
		let bRightSide = objects3d.NewPanel(boxFrontZ, sideHeight, objects3d.PanelOrientation.vertical, block);
		bRightSide.Translate({ x: sX, y: sideY, z: 0 });
		bRightSide.Name = 'боковина правая';

		// ----- Горизонт верхний [2] -----
		// Не зависит от blockVariant, Q и P — крышка всегда садится
		// на верх боковин по тем же правилам, что и в простом блоке.
		let bTopSide = objects3d.NewPanel(
			top === 0 ? sX : sX - 2 * t,
			boxFrontZ,
			objects3d.PanelOrientation.horizont,
			block,
		);
		bTopSide.Translate({ x: top === 0 ? 0 : t, y: sY - t, z: boxFrontZ });
		bTopSide.Name = 'горизонт верхний';

		// ----- Горизонт нижний [3] -----
		let bBottomSide = objects3d.NewPanel(
			bottomEff === 0 ? sX : sX - 2 * t,
			boxFrontZ,
			objects3d.PanelOrientation.horizont,
			block,
		);
		bBottomSide.Translate({ x: bottomEff === 0 ? 0 : t, y: Q, z: boxFrontZ });
		bBottomSide.Name = 'горизонт нижний';

		// ----- Пары для схемы крепежа: крышка/боковины -----
		if (top === 0) {
			// Накладная крышка: торец боковины перекрывается плоскостью крышки.
			this.panelPairs.push([bLeftSide, bTopSide], [bRightSide, bTopSide]);
		} else {
			// Вкладная крышка: торец крышки перекрывается плоскостями боковин.
			this.panelPairs.push([bTopSide, bLeftSide], [bTopSide, bRightSide]);
		}

		// ----- Пары для схемы крепежа: дно/боковины -----
		if (bottomEff === 0) {
			this.panelPairs.push([bLeftSide, bBottomSide], [bRightSide, bBottomSide]);
		} else {
			this.panelPairs.push([bBottomSide, bLeftSide], [bBottomSide, bRightSide]);
		}

		let shelfBackSide = null;
		let furnitureBackSide = null;
		switch (this.backSideVariant) {
			case 0: {
				// ----- Задняя стенка [4] -----
				const bBackSide = objects3d.NewPanel(
					sX - t * 2,
					sY - t * 2 - Q,
					objects3d.PanelOrientation.front,
					block,
				);
				bBackSide.Translate({ x: t, y: t + Q, z: moveBackSideZ });
				bBackSide.Name = 'задняя стенка';
				materialData.SetupObjectMaterial(bBackSide, this.backSideMaterial, true);
				if (this.backSideMaterial.thickness > 4) shelfBackSide = bBackSide;

				// ----- Пары для отдельной схемы крепежа ЗС -----
				// Схема доступна только для вкладной ЗС толщиной от 4 мм.
				// ЗС всегда первая в паре; основной крепёж сюда не попадает.
				if (this.hasBackFurnitureSupport()) {
					furnitureBackSide = bBackSide;
					this.backPanelPairs.push(
						[bBackSide, bTopSide],
						[bBackSide, bBottomSide],
						[bBackSide, bLeftSide],
						[bBackSide, bRightSide],
					);
				}

				this.innerBlockDepth = partitionFrontZ - moveBackSideZ - this.backSideMaterial.thickness;
				break;
			}
			case 1: {
				// ----- Многофункциональный вырез -----
				this.applyCustomGroove(block, Q, moveBackSideZ);

				// ----- Задняя стенка [4] -----
				const bBackSide = objects3d.NewPanel(
					sX - t - 1,
					sY - t - 1 - Q,
					objects3d.PanelOrientation.front,
					block,
				);
				bBackSide.Translate({ x: t / 2 + 0.5, y: t / 2 + 0.5 + Q, z: moveBackSideZ });
				bBackSide.Name = 'задняя стенка';
				materialData.SetupObjectMaterial(bBackSide, this.backSideMaterial, true);

				this.innerBlockDepth = partitionFrontZ - moveBackSideZ - t - 1;
				break;
			}
			case 2: {
				// ----- Многофункциональный вырез -----
				this.applyCustomGroove(block, Q, 0);

				// ----- Задняя стенка [4] -----
				const bBackSide = objects3d.NewPanel(
					sX - 2 * t + 20 - 1,
					sY - 2 * t + 20 - 1 - Q,
					objects3d.PanelOrientation.front,
					block,
				);
				bBackSide.Translate({ x: t - 10 + 0.5, y: t - 10 + 0.5 + Q, z: 0 });
				bBackSide.Name = 'задняя стенка';
				materialData.SetupObjectMaterial(bBackSide, this.backSideMaterial, true);

				this.innerBlockDepth = partitionFrontZ - t - 1;
				break;
			}
			case 3: {
				// ----- Задняя стенка [4] -----
				const bBackSide = objects3d.NewPanel(sX - 4, sY - 4 - Q, objects3d.PanelOrientation.front, block);
				bBackSide.Translate({
					x: 2,
					y: 2 + Q,
					z: 0 - this.backSideMaterial.thickness,
				});
				bBackSide.Name = 'задняя стенка';
				materialData.SetupObjectMaterial(bBackSide, this.backSideMaterial, true);

				this.innerBlockDepth = partitionFrontZ;
				break;
			}
		}

		// Объявлены здесь (а не внутри if), т.к. нужны ниже, в блоке
		// тумбы подиума, для формирования пар схемы крепежа.
		let bFrontPlinthSide;
		let bBackPlinthSide;

		// ----- Цокольные панели: только у блока с цоколем и у подиума -----
		if (this.blockVariant >= 1) {
			// Отступ переднего цокольного щита учитывается только
			// у варианта "с цоколем" (plinthIndF). У подиума лицевой
			// цокольный щит подиума отдельный (bFacePlinthSide ниже),
			// а этот щит всегда стоит заподлицо с боковинами (sZ - t).
			// У "с цоколем" нет отдельной тумбы — цоколь часть той же
			// коробки и сдвигается вместе с ней под накладные фасады;
			// у подиума цокольная коробка отдельная и не сдвигается.
			const frontZ = (this.blockVariant === 1 ? boxFrontZ : sZ) - t - (this.blockVariant === 1 ? plinthIndF : 0);

			// ----- Цоколь передний [5] -----
			bFrontPlinthSide = objects3d.NewPanel(sX - t * 2, sPlinth, objects3d.PanelOrientation.front, block);
			bFrontPlinthSide.Translate({ x: t, y: 0, z: frontZ });
			bFrontPlinthSide.Name = 'цоколь передний';

			// ----- Цоколь задний [6] -----
			bBackPlinthSide = objects3d.NewPanel(sX - t * 2, sPlinth, objects3d.PanelOrientation.front, block);
			bBackPlinthSide.Translate({ x: t, y: 0, z: plinthIndB });
			bBackPlinthSide.Name = 'цоколь задний';

			// ----- Пары для схемы крепежа: дно/цоколь передний и задний -----
			// Та же логика направления, что и для дно/боковины.
			if (bottomEff === 0) {
				this.panelPairs.push([bFrontPlinthSide, bBottomSide], [bBackPlinthSide, bBottomSide]);
			} else {
				this.panelPairs.push([bBottomSide, bFrontPlinthSide], [bBottomSide, bBackPlinthSide]);
			}

			// ----- Пары для схемы крепежа: цоколь/боковины -----
			// У варианта "с цоколем" нет отдельной тумбы — цоколь стоит
			// прямо между основными боковинами.
			if (this.blockVariant === 1) {
				this.panelPairs.push(
					[bFrontPlinthSide, bLeftSide],
					[bFrontPlinthSide, bRightSide],
					[bBackPlinthSide, bLeftSide],
					[bBackPlinthSide, bRightSide],
				);
			}
		}

		// ----- Панели тумбы подиума: только у подиума -----
		if (this.blockVariant === 2) {
			// ----- Боковина подиума левая [7] -----
			let bLeftPlinthSide = objects3d.NewPanel(
				sZ - plinthIndB,
				sPlinth,
				objects3d.PanelOrientation.vertical,
				block,
			);
			bLeftPlinthSide.Translate({ x: t, y: 0, z: plinthIndB });
			bLeftPlinthSide.Name = 'боковина подиума левая';

			// ----- Боковина подиума правая [8] -----
			let bRightPlinthSide = objects3d.NewPanel(
				sZ - plinthIndB,
				sPlinth,
				objects3d.PanelOrientation.vertical,
				block,
			);
			bRightPlinthSide.Translate({ x: sX, y: 0, z: plinthIndB });
			bRightPlinthSide.Name = 'боковина подиума правая';

			// ----- Пары для схемы крепежа: цоколь/боковины подиума -----
			this.panelPairs.push(
				[bFrontPlinthSide, bLeftPlinthSide],
				[bFrontPlinthSide, bRightPlinthSide],
				[bBackPlinthSide, bLeftPlinthSide],
				[bBackPlinthSide, bRightPlinthSide],
			);

			// ----- Цоколь лицевой [9] -----
			// Не крепится — исключён из panelPairs намеренно.
			let bFacePlinthSide = objects3d.NewPanel(sX - 4, sPlinth - 4, objects3d.PanelOrientation.front, block);
			bFacePlinthSide.Translate({ x: 2, y: 2, z: sZ });
			bFacePlinthSide.Name = 'цоколь лицевой';
			// Материал фасадов по умолчанию равен материалу корпуса,
			// поэтому без фасадов поведение не меняется.
			materialData.SetupObjectMaterial(bFacePlinthSide, this.facadeMaterial, true);

			// ----- Горизонт подиума [10] -----
			let bTopPlinthSide = objects3d.NewPanel(
				sX - 2 * t,
				sZ - 2 * t - plinthIndB,
				objects3d.PanelOrientation.horizont,
				block,
			);
			bTopPlinthSide.Translate({
				x: t,
				y: sPlinth - t,
				z: sZ - t,
			});
			bTopPlinthSide.Name = 'горизонт подиума';
		}

		const sectionWalls = [bLeftSide];
		if (this.sectionCount > 0) {
			// X вертикальной панели задаёт её правую грань.
			let partitionX = t;

			for (let i = 0; i < this.sectionCount; i++) {
				partitionX += sectionWidths[i] + t;
				const partition = objects3d.NewPanel(
					this.innerBlockDepth,
					this.innerBlockHeight,
					objects3d.PanelOrientation.vertical,
					block,
				);

				partition.Translate({
					x: partitionX,
					y: Q + t,
					z:
						this.backSideVariant > 2
							? 0
							: this.backSideVariant < 1
								? this.backSideMaterial.thickness + moveBackSideZ
								: t + moveBackSideZ + 1,
				});

				partition.Name = this.numberElements ? `перегородка №${i + 1}` : 'перегородка';
				// Пары основной схемы: перегородка/крышка и дно.
				// Перегородка — первая в паре.
				this.panelPairs.push([partition, bTopSide], [partition, bBottomSide]);
				// Пара с ЗС принадлежит только отдельной схеме фурнитуры ЗС.
				if (furnitureBackSide) this.backPanelPairs.push([partition, furnitureBackSide]);
				sectionWalls.push(partition);
			}
		}
		sectionWalls.push(bRightSide);

		// Полки занимают чистую ширину своей секции и глубину до задней стенки.
		// Глубина полки отсчитывается от той же "внутренней" передней грани,
		// что и у перегородок (см. shelfFrontZ/partitionFrontZ выше) — под
		// накладные фасады это совпадает с перегородками, под вкладные полки
		// дополнительно короче перегородок на толщину фасада и передний зазор.
		const shelfDepth = this.innerBlockDepth - (partitionFrontZ - shelfFrontZ);
		let shelfX = t;
		for (let i = 0; i < sectionWidths.length; i++) {
			if (this.getShelfSettings(i).enabled) {
				for (let j = 0; j < shelfPositions[i].length; j++) {
					const shelf = objects3d.NewPanel(
						sectionWidths[i],
						shelfDepth,
						objects3d.PanelOrientation.horizont,
						block,
					);
					shelf.Translate({ x: shelfX, y: Q + t + shelfPositions[i][j], z: shelfFrontZ });
					shelf.Name = this.numberElements ? `полка сек. №${i + 1}` : 'полка';
					// Торец полки — первый, плоскость боковины/перегородки — вторая.
					this.shelfPanelPairs.push([shelf, sectionWalls[i]], [shelf, sectionWalls[i + 1]]);
					if (shelfBackSide) this.shelfPanelPairs.push([shelf, shelfBackSide]);
				}
			}
			shelfX += sectionWidths[i] + t;
		}

		this.buildFacades(block, sX, sY, Q, t, sectionWidths, sectionWalls, boxFrontZ, partitionFrontZ, sZ);

		this.block = block;
		this.blockUid = block.UID;
		// IsButtVisible() на только что созданных панелях требует, чтобы их
		// геометрия была построена. Раньше это неявно обеспечивал commit.
		this.materializePanels(block);
		this.updateFurnitureBaseBounds();
		this.setButt(false);
		this.setFacadeButt(false);
		this.mountFurnitureScheme(false);
		this.mountBackFurnitureScheme(false);
		this.mountShelfFurnitureScheme(false);
		this.mountFacadeFurnitureScheme(false);
		this.mountHalfFacadeFurnitureScheme(false);
		this.commitHistory('Блок изменён');
		interface.updateSectionSizeFields(sectionWidths);
		interface.updateShelfFields();

		return block;
	},

	// Строит паз или четверть задней стенки и применяет её к панели-владельцу.
	applyCustomGroove(owner, moveY, moveZ) {
		const t = this.blockMaterial.thickness;
		const tBack = this.backSideMaterial.thickness;

		let grv = objects3d.NewCustomGroove('вырез', owner);
		let grvParams = grv.GrooveParams;
		switch (this.backSideVariant) {
			case 1: {
				grvParams.Trajectory.AddLine(0, 0, this.innerBlockWidth + t, 0);
				grvParams.Contour.AddRectangle(0, 0, this.innerBlockHeight + t, tBack + 1);
				grvParams.GrooveName = `Паз ${tBack + 1}x${t / 2}`;
				grvParams.GrooveSign = `Паз ${tBack + 1}x${t / 2}`;

				grv.Translate({
					x: t / 2,
					y: t / 2 + moveY,
					z: moveZ,
				});
				break;
			}
			case 2: {
				grvParams.Trajectory.AddLine(0, 0, this.innerBlockWidth + 20, 0);
				grvParams.Contour.AddRectangle(0, 0, this.innerBlockHeight + 20, tBack + 1);
				grvParams.GrooveName = `Четверть ${tBack + 1}x${t - 6}`;
				grvParams.GrooveSign = `Четверть ${tBack + 1}x${t - 6}`;

				grv.Translate({
					x: t - 10,
					y: t - 10 + moveY,
					z: moveZ,
				});
				break;
			}
		}
		grv.MakeGroovingInsideOwner = true;

		grv.Build();

		historyOperations.CommitCurrentChanges('Построение МФВ');

		panelOperations.ApplyCustomGrooves(grv, {
			deleteCustomGrooveObjects: true,
			deletePanelIfItIsCoveredByGroove: true,
			makeContourSubtractionInsteadOfThroughPocket: true,
			visiblePanelsOnly: true,
		});

		historyOperations.CommitCurrentChanges('Применение МФВ');
	},

	// Меняет имя уже созданного блока отдельной операцией истории.
	changeBlockName(name) {
		if (interface.isApplyingConfig) return;
		if (!this.block || this.block.Name === name) return;
		this.blockName = name;
		historyOperations.RegisterObjectChanging(this.block);
		const prevName = this.block.Name;
		this.block.Name = name;
		historyOperations.CommitCurrentChanges(`Имя блока ${prevName} изменено на ${this.block.Name}`);
	},

	// Наносит кромку корпуса согласно выбранному режиму; фасады исключены.
	setButt(registerHistory = true, historyName = 'Кромка корпуса изменена') {
		if (interface.isApplyingConfig) return;
		switch (this.buttVariant) {
			case 0:
				if (registerHistory) historyOperations.RegisterObjectChanging(currentFileData.model);
				for (let i = 0; i < this.block.Count; i++) {
					let obj = this.block.Objects[i];
					if (this.facadePanels.includes(obj)) continue;
					if (!objectTypeChecker.ObjectIsPanel(obj)) continue;
					obj.Butts.Clear();
					obj.Build();
				}
				if (registerHistory) historyOperations.CommitCurrentChanges(historyName);
				break;
			case 1:
				if (registerHistory) historyOperations.RegisterObjectChanging(currentFileData.model);
				for (let i = 0; i < this.block.Count; i++) {
					let obj = this.block.Objects[i];
					if (this.facadePanels.includes(obj)) continue;
					if (!objectTypeChecker.ObjectIsPanel(obj)) continue;
					if (obj.Thickness <= 4) continue;
					obj.Butts.Clear();
					for (let j = 0; j < obj.Contour.Count; j++) {
						if (obj.IsButtVisible(j, 5)) {
							panelOperations.AddButt(obj, j, this.buttMaterial);
						}
					}
					obj.Build();
				}
				if (registerHistory) historyOperations.CommitCurrentChanges(historyName);
				break;
			case 2:
				if (registerHistory) historyOperations.RegisterObjectChanging(currentFileData.model);
				for (let i = 0; i < this.block.Count; i++) {
					let obj = this.block.Objects[i];
					if (this.facadePanels.includes(obj)) continue;
					if (!objectTypeChecker.ObjectIsPanel(obj)) continue;
					if (obj.Thickness <= 4) continue;
					obj.Butts.Clear();
					for (let j = 0; j < obj.Contour.Count; j++) {
						panelOperations.AddButt(obj, j, this.buttMaterial);
					}
					obj.Build();
				}
				if (registerHistory) historyOperations.CommitCurrentChanges(historyName);
				break;
		}
	},

	// Кромка фасадов всегда наносится на все 4 торца, независимо от
	// настройки "Кромить" корпуса (см. исключение facadePanels в setButt).
	setFacadeButt(registerHistory = true, historyName = 'Кромка фасадов изменена') {
		if (interface.isApplyingConfig) return;
		if (!this.facadePanels.length) return;
		if (registerHistory) historyOperations.RegisterObjectChanging(currentFileData.model);
		for (const obj of this.facadePanels) {
			obj.Butts.Clear();
			for (let j = 0; j < obj.Contour.Count; j++) {
				panelOperations.AddButt(obj, j, this.facadeButtMaterial);
			}
			obj.Build();
		}
		if (registerHistory) historyOperations.CommitCurrentChanges(historyName);
	},

	// Создаёт фасады по секциям либо как редактируемые колонки/ряды.
	buildFacades(block, sX, sY, Q, t, sectionWidths, sectionWalls, boxFrontZ, partitionFrontZ, sZ) {
		this.facadePanels = [];
		this.facadeSectionWalls = sectionWalls;
		if (this.facadeVariant === 0) return;

		const isOverlay = this.facadeMountVariant === 0;
		const gap = this.facadeGap;

		// Нумеруются только фасады "по перегородкам" (index передан) — там
		// номер соответствует секции. Редактируемые фасады (без перегородок,
		// index не передан) всегда называются просто "фасад", независимо
		// от галочки "Нумеровать элементы".
		const addFacade = (left, right, bottom, top, z, index) => {
			const facade = objects3d.NewPanel(right - left, top - bottom, objects3d.PanelOrientation.front, block);
			facade.Translate({ x: left, y: bottom, z });
			facade.Name = this.numberElements && index !== undefined ? `фасад сек. №${index + 1}` : 'фасад';
			materialData.SetupObjectMaterial(facade, this.facadeMaterial, true);
			this.facadePanels.push(facade);
		};

		if (this.facadeVariant === 1) {
			// ----- По перегородкам -----
			// Границы чистых проёмов секций (как для полок): [левая, правая].
			let boundX = t;
			const clearBounds = [];
			for (const width of sectionWidths) {
				clearBounds.push([boundX, boundX + width]);
				boundX += width + t;
			}

			const n = sectionWidths.length;
			for (let i = 0; i < n; i++) {
				// И накладные, и вкладные — полунакладные на перегородки: на
				// внутренних стыках делят перегородку пополам между соседними
				// фасадами (двойной зазор по центру). Снаружи — у боковин —
				// накладные перекрывают их с лица, а вкладные стоят внутри проёма.
				const left =
					i === 0
						? isOverlay
							? gap
							: clearBounds[0][0] + gap
						: (clearBounds[i - 1][1] + clearBounds[i][0]) / 2 + gap;
				const right =
					i === n - 1
						? isOverlay
							? sX - gap
							: clearBounds[n - 1][1] - gap
						: (clearBounds[i][1] + clearBounds[i + 1][0]) / 2 - gap;

				let bottom, top, z;
				if (isOverlay) {
					// Накладные: по высоте тоже перекрывают крышку/дно с лица.
					bottom = Q + gap;
					top = sY - gap;
					z = boxFrontZ;
				} else {
					// Вкладные: по высоте — внутри проёма (между дном и крышкой).
					// По глубине садятся прямо на срез перегородок (partitionFrontZ).
					bottom = Q + t + gap;
					top = sY - t - gap;
					z = partitionFrontZ;
				}

				addFacade(left, right, bottom, top, z, i);
			}
			this.updateFacadeFurniturePairs(sectionWalls);
			return;
		}

		// ----- Редактируемые -----
		// Доступны только без перегородок (одна секция на всю ширину): либо
		// колонки (вертикальные, как по перегородкам, пока только
		// равнозначные), либо ряды (горизонтальные, как ящики — с
		// возможностью сделать 1 или 2 крайних ряда своего размера).
		const n = Math.max(1, Math.floor(this.facadeEditableCount) || 1);
		const isHorizontal = this.facadeEditableOrientation === 1;

		// "Сырые" границы единственной секции, без обрезки зазором — зазор
		// применяется один раз по каждой оси внутри циклов ниже (как по
		// периметру всей фасадной области, x1 от поля "Зазор фасадов").
		const rawLeft = isOverlay ? 0 : t;
		const rawRight = isOverlay ? sX : sX - t;
		const rawBottom = isOverlay ? Q : Q + t;
		const rawTop = isOverlay ? sY : sY - t;
		const z = isOverlay ? boxFrontZ : partitionFrontZ;

		if (isHorizontal) {
			// Ряды снизу вверх (двойной зазор между ними), колонка одна — на
			// всю ширину с одинарным зазором по бокам.
			const left = rawLeft + gap;
			const right = rawRight - gap;
			const available = rawTop - rawBottom - 2 * gap * n;

			// 0 Равные / 1 Изменение 1го / 2 Изменение 2ух (если рядов хватает).
			const customCount = Math.min(this.facadeEditableLayout, n - 1);
			let rowSizes;
			if (customCount > 0) {
				// У базы "Сверху" меняются нижние ряды (младшие индексы, i=0
				// снизу), у "Снизу" — верхние (старшие индексы).
				const isBaseTop = this.facadeEditableBase === 0;
				const customIndices = [];
				for (let k = 0; k < customCount; k++) {
					customIndices.push(isBaseTop ? k : n - 1 - k);
				}
				customIndices.sort((a, b) => a - b);
				// 1й (ниже среди изменяемых) — facadeEditableSize1, 2й (выше) — Size2.
				const customSizes = [this.facadeEditableSize1, this.facadeEditableSize2];
				rowSizes = new Array(n).fill(0);
				let customSum = 0;
				customIndices.forEach((idx, k) => {
					const size = Math.max(1, customSizes[k] || 0);
					rowSizes[idx] = size;
					customSum += size;
				});
				const equalSize = (available - customSum) / (n - customCount);
				for (let i = 0; i < n; i++) {
					if (!customIndices.includes(i)) rowSizes[i] = equalSize;
				}
			} else {
				rowSizes = new Array(n).fill(available / n);
			}

			let rowBottom = rawBottom + gap;
			for (let i = 0; i < n; i++) {
				const top = rowBottom + rowSizes[i];
				addFacade(left, right, rowBottom, top, z);
				rowBottom = top + 2 * gap;
			}
		} else {
			// Колонки слева направо (двойной зазор между ними), по высоте —
			// одна строка на всю высоту с одинарным зазором сверху/снизу.
			const bottom = rawBottom + gap;
			const top = rawTop - gap;
			const colSize = (rawRight - rawLeft - 2 * gap * n) / n;
			for (let i = 0; i < n; i++) {
				const left = rawLeft + gap + i * (colSize + 2 * gap);
				const right = left + colSize;
				addFacade(left, right, bottom, top, z);
			}
		}

		this.updateFacadeFurniturePairs(sectionWalls);
	},

	// Следующие методы заменяют крепёж только в своей зоне изделия.
	mountFurnitureScheme(registerHistory = true, historyName = 'Фурнитура корпуса изменена') {
		if (interface.isApplyingConfig) return;
		if (registerHistory) historyOperations.RegisterObjectChanging(this.block);

		for (const obj of this.mountedFurniture) {
			objects3d.DeleteObject(obj);
		}
		this.mountedFurniture = [];

		if (this.furnitureInfo) {
			for (const [panel1, panel2] of this.panelPairs) {
				const obj = fastenerOperations.MountFurniture(this.furnitureInfo, {
					panel1,
					panel2,
					furnOwner: this.block,
					basePlane: BASE_PLANE_BY_INDEX[this.mainBlockFurnMountVariant],
					basePoint: this.getFurnitureBasePoint(),
				});
				if (obj) this.mountedFurniture.push(obj);
			}
		}

		if (registerHistory) historyOperations.CommitCurrentChanges(historyName);
	},

	mountBackFurnitureScheme(registerHistory = true, historyName = 'Фурнитура ЗС изменена') {
		if (interface.isApplyingConfig) return;
		if (!this.block) return;
		if (registerHistory) historyOperations.RegisterObjectChanging(this.block);

		for (const obj of this.mountedBackFurniture) objects3d.DeleteObject(obj);
		this.mountedBackFurniture = [];

		if (this.backFurnitureInfo) {
			for (const [panel1, panel2] of this.backPanelPairs) {
				const obj = fastenerOperations.MountFurniture(this.backFurnitureInfo, {
					panel1,
					panel2,
					furnOwner: this.block,
					basePlane: BASE_PLANE_BY_INDEX[this.backFurnMountVariant],
					basePoint: this.getFurnitureBasePoint(),
				});
				if (obj) this.mountedBackFurniture.push(obj);
			}
		}

		if (registerHistory) historyOperations.CommitCurrentChanges(historyName);
	},

	// Повторно ставит схемы корпуса и задней стенки после смены общей базы.
	remountFurnitureSchemes(historyName = 'Фурнитура корпуса изменена') {
		if (interface.isApplyingConfig || !this.block) return;
		historyOperations.RegisterObjectChanging(this.block);
		this.mountFurnitureScheme(false);
		this.mountBackFurnitureScheme(false);
		historyOperations.CommitCurrentChanges(historyName);
	},

	mountShelfFurnitureScheme(registerHistory = true, historyName = 'Фурнитура полок изменена') {
		if (interface.isApplyingConfig) return;
		if (!this.block) return;
		if (registerHistory) historyOperations.RegisterObjectChanging(this.block);
		// Удаляем только крепёж полок; схема корпуса хранится отдельно.
		for (const obj of this.shelfMountedFurniture) objects3d.DeleteObject(obj);
		this.shelfMountedFurniture = [];
		if (this.shelfFurnitureInfo) {
			for (const [panel1, panel2] of this.shelfPanelPairs) {
				const obj = fastenerOperations.MountFurniture(this.shelfFurnitureInfo, {
					panel1,
					panel2,
					furnOwner: this.block,
					basePlane: BASE_PLANE_BY_INDEX[this.shelfFurnMountVariant],
				});
				if (obj) this.shelfMountedFurniture.push(obj);
			}
		}
		if (registerHistory) historyOperations.CommitCurrentChanges(historyName);
	},

	mountFacadeFurnitureScheme(registerHistory = true, historyName = 'Фурнитура фасадов изменена') {
		if (interface.isApplyingConfig || !this.block) return;
		if (registerHistory) historyOperations.RegisterObjectChanging(this.block);
		for (const obj of this.mountedFacadeFurniture) objects3d.DeleteObject(obj);
		this.mountedFacadeFurniture = [];
		if (this.facadeFurnitureInfo) {
			for (const [panel1, panel2] of this.facadePanelPairs) {
				const obj = fastenerOperations.MountFurniture(
					this.facadeFurnitureInfo,
					this.getFacadeMountParams(panel1, panel2),
				);
				if (obj) this.mountedFacadeFurniture.push(obj);
			}
		}
		if (registerHistory) historyOperations.CommitCurrentChanges(historyName);
	},

	mountHalfFacadeFurnitureScheme(registerHistory = true, historyName = 'Полунакладная фурнитура фасадов изменена') {
		if (interface.isApplyingConfig || !this.block) return;
		if (registerHistory) historyOperations.RegisterObjectChanging(this.block);
		for (const obj of this.mountedHalfFacadeFurniture) objects3d.DeleteObject(obj);
		this.mountedHalfFacadeFurniture = [];
		if (this.halfFacadeFurnitureInfo) {
			for (const [panel1, panel2] of this.halfFacadePanelPairs) {
				const obj = fastenerOperations.MountFurniture(
					this.halfFacadeFurnitureInfo,
					this.getFacadeMountParams(panel1, panel2),
				);
				if (obj) this.mountedHalfFacadeFurniture.push(obj);
			}
		}
		if (registerHistory) historyOperations.CommitCurrentChanges(historyName);
	},

	// Повторно ставит обычную и полунакладную схему после изменения стыка фасада.
	remountFacadeFurnitureSchemes(historyName = 'Стык фасада изменён') {
		if (interface.isApplyingConfig || !this.block) return;
		historyOperations.RegisterObjectChanging(this.block);
		this.mountFacadeFurnitureScheme(false);
		this.mountHalfFacadeFurnitureScheme(false);
		historyOperations.CommitCurrentChanges(historyName);
	},

	// Загрузка шаблона: значения заменяются целиком, состояние текущей
	// сборки (панели, схемы крепежа) остаётся прежним.
	applyConfig(cfg) {
		Object.assign(this, coreConfigValues(cfg));
	},

	// Переносит только сохраняемые настройки состояния в общий объект CONFIG.
	saveConfig() {
		CORE_CONFIG.blockName = this.blockName;
		CORE_CONFIG.blockVariant = this.blockVariant;
		CORE_CONFIG.backSideVariant = this.backSideVariant;
		CORE_CONFIG.topSideVariant = this.topSideVariant;
		CORE_CONFIG.bottomSideVariant = this.bottomSideVariant;
		CORE_CONFIG.x = this.x;
		CORE_CONFIG.y = this.y;
		CORE_CONFIG.z = this.z;
		CORE_CONFIG.innerBlockWidth = this.innerBlockWidth;
		CORE_CONFIG.innerBlockHeight = this.innerBlockHeight;
		CORE_CONFIG.backSideMoveZ = this.backSideMoveZ;
		CORE_CONFIG.plinthSize = this.plinthSize;
		CORE_CONFIG.frontPlinthIndent = this.frontPlinthIndent;
		CORE_CONFIG.backPlinthIndent = this.backPlinthIndent;
		CORE_CONFIG.blockMaterial = this.blockMaterial;
		CORE_CONFIG.backSideMaterial = this.backSideMaterial;
		CORE_CONFIG.buttMaterial = this.buttMaterial;
		CORE_CONFIG.buttVariant = this.buttVariant;
		CORE_CONFIG.furnitureInfo = saveFurnitureInfo(this.furnitureInfo);
		CORE_CONFIG.backFurnitureInfo = saveFurnitureInfo(this.backFurnitureInfo);
		CORE_CONFIG.mainBlockFurnMountVariant = this.mainBlockFurnMountVariant;
		CORE_CONFIG.backFurnMountVariant = this.backFurnMountVariant;
		CORE_CONFIG.mainBlockFurnBaseX = this.mainBlockFurnBaseX;
		CORE_CONFIG.mainBlockFurnBaseY = this.mainBlockFurnBaseY;
		CORE_CONFIG.mainBlockFurnBaseZ = this.mainBlockFurnBaseZ;
		CORE_CONFIG.numberElements = this.numberElements;
		CORE_CONFIG.shelfFurnitureInfo = saveFurnitureInfo(this.shelfFurnitureInfo);
		CORE_CONFIG.shelfFurnMountVariant = this.shelfFurnMountVariant;
		CORE_CONFIG.sectionCount = this.sectionCount;
		CORE_CONFIG.sectionVariant = this.sectionVariant;
		CORE_CONFIG.reducedSection = this.reducedSection;
		CORE_CONFIG.sectionSizes = this.sectionSizes;
		CORE_CONFIG.shelves = this.shelves;
		CORE_CONFIG.shelfIndent = this.shelfIndent;
		CORE_CONFIG.facadeVariant = this.facadeVariant;
		CORE_CONFIG.facadeMountVariant = this.facadeMountVariant;
		CORE_CONFIG.facadeEditableOrientation = this.facadeEditableOrientation;
		CORE_CONFIG.facadeEditableCount = this.facadeEditableCount;
		CORE_CONFIG.facadeEditableLayout = this.facadeEditableLayout;
		CORE_CONFIG.facadeEditableBase = this.facadeEditableBase;
		CORE_CONFIG.facadeEditableSize1 = this.facadeEditableSize1;
		CORE_CONFIG.facadeEditableSize2 = this.facadeEditableSize2;
		CORE_CONFIG.facadeJointSides = this.facadeJointSides;
		CORE_CONFIG.facadeMaterial = this.facadeMaterial;
		CORE_CONFIG.facadeButtMaterial = this.facadeButtMaterial;
		CORE_CONFIG.facadeFurnitureInfo = saveFurnitureInfo(this.facadeFurnitureInfo);
		CORE_CONFIG.halfFacadeFurnitureInfo = saveFurnitureInfo(this.halfFacadeFurnitureInfo);
		CORE_CONFIG.facadeGap = this.facadeGap;
		CORE_CONFIG.facadeIndent = this.facadeIndent;
	},
};

core.applyConfig(CORE_CONFIG);

// Слой интерфейса: синхронизирует форму с core и показывает только нужные поля.
const interface = {
	// Коллекции строк формы, сгруппированные по вкладкам и порядку вывода.
	WIDGETS: [],
	CORPUS_WIDGETS: [],
	FILLING_WIDGETS: [],
	FILLING_FOOTER_WIDGETS: [],
	FACADE_WIDGETS: [],
	FACADE_FOOTER_WIDGETS: [],
	FACADE_JOINT_WIDGETS: [],
	// До показа формы программные изменения ItemIndex не должны запускать
	// построение: модель будет создана один раз в mainForm.OnShow.
	isInitializing: true,
	// Пока шаблон применяется, обработчики полей не перестраивают модель.
	isApplyingConfig: false,
	// Раздел не сохраняется: каждый запуск начинается с корпуса.
	activeSection: 0,
	updatingReducedSection: false,
	updatingSectionSizes: false,
	SECTION_SIZE_WIDGETS: [],
	SHELF_WIDGETS: [],
	updatingShelves: false,
	updatingFacadeFields: false,
	updatingFacadeSizes: false,
	updatingFacadeLayout: false,
	updatingFacadeJoints: false,

	// Обновляет все строки полок после смены количества секций или шаблона.
	updateShelfFields() {
		this.updatingShelves = true;
		try {
			for (let i = 0; i <= core.sectionCount; i++) {
				const settings = core.getShelfSettings(i);
				const widgets = this.SHELF_WIDGETS[i];
				widgets.enabled.edit.ItemIndex = settings.enabled ? 1 : 0;
				widgets.count.edit.Value = settings.count;
				widgets.layout.edit.ItemIndex = settings.layout;
				widgets.top.edit.Value = settings.top;
				widgets.bottom.edit.Value = settings.bottom;
			}
		} finally {
			this.updatingShelves = false;
		}
		this.relayoutMainForm();
	},

	// Передаёт рассчитанные чистые ширины в поля неуменьшаемых секций.
	updateSectionSizeFields(sizes) {
		if (!sizes) return;
		this.updatingSectionSizes = true;
		try {
			for (let i = 0; i < sizes.length; i++) {
				this.SECTION_SIZE_WIDGETS[i].calc.Value = sizes[i];
			}
		} finally {
			this.updatingSectionSizes = false;
		}
	},

	// Ограничивает и показывает выбор уменьшаемой секции.
	updateReducedSection() {
		const count = core.sectionCount + 1;
		core.reducedSection = Math.max(1, Math.min(count, Math.floor(core.reducedSection) || 1));
		this.updatingReducedSection = true;
		try {
			for (let i = 0; i < reducedSectionComboBoxes.length; i++) {
				const comboBox = reducedSectionComboBoxes[i];
				comboBox.Visible = i === core.sectionCount;
				if (comboBox.Visible) comboBox.ItemIndex = core.reducedSection - 1;
			}
		} finally {
			this.updatingReducedSection = false;
		}
	},

	// Вычисляет видимость полей, зависящую только от текущих настроек core.
	getItemVisibility() {
		return {
			bottomSideVariantPanelVisible: core.blockVariant !== 1,
			backSideMoveZPanelVisible: core.backSideVariant === 0 || core.backSideVariant === 1,
			plinthSizePanelVisible: core.blockVariant !== 0,
			frontPlinthIndentPanelVisible: core.blockVariant === 1,
			backPlinthIndentPanelVisible: core.blockVariant !== 0,
			sectionVariantPanelVisible: core.sectionCount > 0,
			reducedSectionPanelVisible: core.sectionCount > 0 && core.sectionVariant === 1,
			facadeEditableOrientationPanelVisible: core.facadeVariant === 2,
			facadeEditableCountPanelVisible: core.facadeVariant === 2,
			// У одного горизонтального фасада нет выбора распределения высоты:
			// строку скрываем вместо блокировки списка.
			facadeEditableLayoutPanelVisible:
				core.facadeVariant === 2 && core.facadeEditableOrientation === 1 && core.facadeEditableCount > 1,
			facadeEditableBasePanelVisible:
				core.facadeVariant === 2 && core.facadeEditableOrientation === 1 && core.facadeEditableLayout !== 0,
			facadeEditableSize1PanelVisible:
				core.facadeVariant === 2 && core.facadeEditableOrientation === 1 && core.facadeEditableLayout !== 0,
			facadeEditableSize2PanelVisible:
				core.facadeVariant === 2 && core.facadeEditableOrientation === 1 && core.facadeEditableLayout === 2,
			facadeMountVariantPanelVisible: core.facadeVariant !== 0,
			facadeGapPanelVisible: core.facadeVariant !== 0,
			facadeIndentPanelVisible: core.facadeVariant !== 0 && core.facadeMountVariant === 1,
			facadeMaterialPanelVisible: core.facadeVariant !== 0,
			facadeButtMaterialPanelVisible: core.facadeVariant !== 0,
		};
	},

	// Пересобирает список пунктов "Фасады" по наличию перегородок и
	// сбрасывает выбор на "Нет" при переключении между "есть/нет перегородок".
	updateFacadeFields() {
		const hasPartitions = core.sectionCount > 0;
		this.updatingFacadeFields = true;
		try {
			if ((core.facadeVariant === 1 && !hasPartitions) || (core.facadeVariant === 2 && hasPartitions)) {
				core.facadeVariant = 0;
			}
			facadeVariantComboBox.Properties.Items.Clear();
			facadeVariantComboBox.Properties.Items.Add('Нет');
			facadeVariantComboBox.Properties.Items.Add(hasPartitions ? 'По перегородкам' : 'Редактируемые');
			facadeVariantComboBox.ItemIndex = core.facadeVariant === 0 ? 0 : 1;
		} finally {
			this.updatingFacadeFields = false;
		}
	},

	// Синхронизирует числовые поля высоты редактируемых фасадов.
	updateFacadeSizeFields() {
		this.updatingFacadeSizes = true;
		try {
			facadeEditableSize1Calc.Value = core.facadeEditableSize1;
			facadeEditableSize2Calc.Value = core.facadeEditableSize2;
		} finally {
			this.updatingFacadeSizes = false;
		}
	},

	// Передаёт в комбобоксы сторону стыка каждого фасада.
	updateFacadeJointFields() {
		this.updatingFacadeJoints = true;
		try {
			facadeSingleJointRow.edit.ItemIndex = core.getFacadeJointSide(1, 0);
			for (const row of this.FACADE_JOINT_WIDGETS) {
				const count = core.sectionCount + 1;
				row.edit.ItemIndex = core.getFacadeJointSide(count, row.facadeIndex);
			}
		} finally {
			this.updatingFacadeJoints = false;
		}
	},

	// Список вариантов высоты зависит от количества фасадов:
	// для одного фасада доступны только равные размеры, для двух —
	// только равные размеры и изменение первого фасада.
	updateFacadeEditableLayoutOptions() {
		const count = Math.max(1, Math.floor(core.facadeEditableCount) || 1);
		const maxLayout = Math.min(2, count - 1);
		const layout = Math.max(0, Math.min(core.facadeEditableLayout, maxLayout));
		core.facadeEditableCount = count;
		core.facadeEditableLayout = layout;

		this.updatingFacadeLayout = true;
		try {
			facadeEditableLayoutComboBox.Properties.Items.Clear();
			facadeEditableLayoutComboBox.Properties.Items.Add('Равные');
			if (maxLayout >= 1) facadeEditableLayoutComboBox.Properties.Items.Add('Изменение 1го');
			if (maxLayout >= 2) facadeEditableLayoutComboBox.Properties.Items.Add('Изменение 2ух');
			facadeEditableLayoutComboBox.ItemIndex = layout;
		} finally {
			this.updatingFacadeLayout = false;
		}

		// При одном фасаде режим всегда равнозначный, поэтому значения
		// редактируемых размеров тоже синхронизируются.
		if (layout === 0) {
			this.updatingFacadeSizes = true;
			try {
				core.syncEditableFacadeSizesToEqual();
				facadeEditableSize1Calc.Value = core.facadeEditableSize1;
				facadeEditableSize2Calc.Value = core.facadeEditableSize2;
			} finally {
				this.updatingFacadeSizes = false;
			}
		}
	},

	// Раскладывает видимые строки активной вкладки без пересоздания компонентов.
	relayoutMainForm() {
		const isCorpus = this.activeSection === 0;
		const isFilling = this.activeSection === 1;
		const isFacades = this.activeSection === 2;
		const visibility = this.getItemVisibility();
		// Компоненты остаются теми же: значения и выбранная фурнитура
		// не теряются при переходе между разделами.
		for (const widget of this.CORPUS_WIDGETS) widget.Visible = isCorpus;
		for (const widget of this.FILLING_WIDGETS) widget.Visible = isFilling;
		for (const widget of this.FACADE_WIDGETS) widget.Visible = isFacades;
		bottomSideVariantPanel.Visible = isCorpus && visibility.bottomSideVariantPanelVisible;
		backSideMoveZPanel.Visible = isCorpus && visibility.backSideMoveZPanelVisible;
		plinthSizePanel.Visible = isCorpus && visibility.plinthSizePanelVisible;
		frontPlinthIndentPanel.Visible = isCorpus && visibility.frontPlinthIndentPanelVisible;
		backPlinthIndentPanel.Visible = isCorpus && visibility.backPlinthIndentPanelVisible;
		// Сама схема ЗС доступна только при совместимой задней стенке;
		// вариант её установки — только после выбора схемы.
		mainBlockFurnBackVariantPanel.Visible = isCorpus && core.hasBackFurnitureSupport();
		mainBlockFurnMountVariantPanel.Visible = isCorpus && !!core.furnitureInfo;
		mainBlockFurnBackMountVariantPanel.Visible =
			isCorpus && core.hasBackFurnitureSupport() && !!core.backFurnitureInfo;
		// Базы общие для схемы корпуса и отдельной схемы ЗС.
		const hasFurnitureScheme = !!core.furnitureInfo || (core.hasBackFurnitureSupport() && !!core.backFurnitureInfo);
		mainBlockFurnBaseXRow.panel.Visible = isCorpus && hasFurnitureScheme;
		mainBlockFurnBaseYRow.panel.Visible = isCorpus && hasFurnitureScheme;
		mainBlockFurnBaseZRow.panel.Visible = isCorpus && hasFurnitureScheme;
		sectionVariantPanel.Visible = isFilling && visibility.sectionVariantPanelVisible;
		reducedSectionPanel.Visible = isFilling && visibility.reducedSectionPanelVisible;
		for (let i = 0; i < this.SECTION_SIZE_WIDGETS.length; i++) {
			this.SECTION_SIZE_WIDGETS[i].panel.Visible =
				reducedSectionPanel.Visible && i <= core.sectionCount && i + 1 !== core.reducedSection;
		}
		let anyShelfEnabled = false;
		for (let i = 0; i < this.SHELF_WIDGETS.length; i++) {
			const widgets = this.SHELF_WIDGETS[i];
			const visible = isFilling && i <= core.sectionCount;
			const settings = i <= core.sectionCount ? core.getShelfSettings(i) : null;
			widgets.enabled.panel.Visible = visible;
			widgets.count.panel.Visible = visible && settings.enabled;
			widgets.layout.panel.Visible = visible && settings.enabled;
			widgets.top.panel.Visible = visible && settings.enabled && settings.layout === 1;
			widgets.bottom.panel.Visible = widgets.top.panel.Visible;
			if (visible && settings.enabled) anyShelfEnabled = true;
		}
		// Схему полок можно выбрать при наличии полок, а её настройки —
		// только после выбора схемы.
		shelfFurnVariantPanel.Visible = isFilling && anyShelfEnabled;
		shelfFurnMountVariantRow.panel.Visible = isFilling && anyShelfEnabled && !!core.shelfFurnitureInfo;
		// Отступ полок виден при наличии хотя бы одной полки, независимо от фасадов.
		shelfIndentPanel.Visible = isFilling && anyShelfEnabled;

		// Вкладка "Фасады": все пункты, кроме самого выбора режима, только при выбранных фасадах.
		facadeEditableOrientationPanel.Visible = isFacades && visibility.facadeEditableOrientationPanelVisible;
		facadeEditableCountPanel.Visible = isFacades && visibility.facadeEditableCountPanelVisible;
		facadeEditableLayoutPanel.Visible = isFacades && visibility.facadeEditableLayoutPanelVisible;
		facadeEditableBasePanel.Visible = isFacades && visibility.facadeEditableBasePanelVisible;
		facadeEditableSize1Panel.Visible = isFacades && visibility.facadeEditableSize1PanelVisible;
		facadeEditableSize2Panel.Visible = isFacades && visibility.facadeEditableSize2PanelVisible;
		facadeMountVariantPanel.Visible = isFacades && visibility.facadeMountVariantPanelVisible;
		facadeGapPanel.Visible = isFacades && visibility.facadeGapPanelVisible;
		facadeIndentPanel.Visible = isFacades && visibility.facadeIndentPanelVisible;
		facadeMaterialPanel.Visible = isFacades && visibility.facadeMaterialPanelVisible;
		facadeButtMaterialPanel.Visible = isFacades && visibility.facadeButtMaterialPanelVisible;
		facadeFurniturePanel.Visible = isFacades && core.isVerticalFacadeHardwareSupported();
		halfFacadeFurniturePanel.Visible = isFacades && core.hasHalfFacadeHardware();
		// Сторона стыка нужна только для уже выбранной соответствующей схемы.
		facadeSingleJointRow.panel.Visible =
			isFacades && core.hasSingleFacadeJoint() && !!core.facadeFurnitureInfo;
		for (const row of this.FACADE_JOINT_WIDGETS) {
			row.panel.Visible =
				isFacades &&
				core.hasHalfFacadeHardware() &&
				!!core.halfFacadeFurnitureInfo &&
				row.facadeIndex < core.sectionCount;
		}

		let top = 5;
		// Крепёж наполнения и фурнитура фасадов всегда следуют после обычных
		// пунктов своего раздела; на фасадах это после материалов и кромки.
		const footerWidgets = this.FILLING_FOOTER_WIDGETS.concat(this.FACADE_FOOTER_WIDGETS);
		const orderedWidgets = this.WIDGETS.filter((widget) => !footerWidgets.includes(widget)).concat(footerWidgets);
		for (const widget of orderedWidgets) {
			if (!widget.Visible) continue;
			widget.Top = top;
			top += widget.Height;
		}
		// Строка завершения всегда остаётся последней на каждой вкладке.
		actionPanel.Top = top;
		top += actionPanel.Height;
		// Поля везде прижаты к низу своей строки (Top=5) — отступ снизу формы
		// добавляется отдельно, единообразно для всех вкладок.
		mainForm.Height = top + 5;
	},

	// Возвращает названия загруженных схем во все селекторы фурнитуры.
	syncFurnitureSchemeSelectors() {
		mainBlockFurnVariantEdit.edit.EditValue = furnitureInfoCaption(core.furnitureInfo);
		mainBlockFurnBackVariantEdit.edit.EditValue = furnitureInfoCaption(core.backFurnitureInfo);
		shelfFurnVariantEdit.edit.EditValue = furnitureInfoCaption(core.shelfFurnitureInfo);
		facadeFurnitureEdit.edit.EditValue = furnitureInfoCaption(core.facadeFurnitureInfo);
		halfFacadeFurnitureEdit.edit.EditValue = furnitureInfoCaption(core.halfFacadeFurnitureInfo);
	},

	// Переносит в поля формы значения core целиком — после загрузки шаблона.
	syncFieldsFromCore() {
		this.isApplyingConfig = true;
		try {
			this.syncFurnitureSchemeSelectors();
			blockNameEdit.EditValue = core.blockName;
			blockVariantComboBox.ItemIndex = core.blockVariant;
			backSideVariantComboBox.ItemIndex = core.backSideVariant;
			topSideVariantComboBox.ItemIndex = core.topSideVariant;
			bottomSideVariantComboBox.ItemIndex = core.bottomSideVariant;
			sizeXCalc.Value = core.x;
			sizeYCalc.Value = core.y;
			sizeZCalc.Value = core.z;
			backSideMoveZCalc.Value = core.backSideMoveZ;
			plinthSizeCalc.Value = core.plinthSize;
			frontPlinthIndentCalc.Value = core.frontPlinthIndent;
			backPlinthIndentCalc.Value = core.backPlinthIndent;
			blockMaterialEdit.Material = core.blockMaterial;
			backSideMaterialEdit.Material = core.backSideMaterial;
			panelButtMaterialEdit.ButtMaterial = core.buttMaterial;
			buttVariantComboBox.ItemIndex = core.buttVariant;
			mainBlockFurnMountVariantComboBox.ItemIndex = core.mainBlockFurnMountVariant;
			mainBlockFurnBackMountVariantComboBox.ItemIndex = core.backFurnMountVariant;
			mainBlockFurnBaseXRow.edit.ItemIndex = core.mainBlockFurnBaseX;
			mainBlockFurnBaseYRow.edit.ItemIndex = core.mainBlockFurnBaseY;
			mainBlockFurnBaseZRow.edit.ItemIndex = core.mainBlockFurnBaseZ;
			numberElementsCheckBox.Checked = core.numberElements;
			numberElementsCheckBox.Caption = core.numberElements ? 'Да' : 'Нет';
			sectionCountComboBox.ItemIndex = core.sectionCount;
			sectionVariantComboBox.ItemIndex = core.sectionVariant;
			shelfIndentCalc.Value = core.shelfIndent;
			shelfFurnMountVariantRow.edit.ItemIndex = core.shelfFurnMountVariant;
			facadeEditableOrientationComboBox.ItemIndex = core.facadeEditableOrientation;
			facadeEditableCountCalc.Value = core.facadeEditableCount;
			facadeEditableBaseComboBox.ItemIndex = core.facadeEditableBase;
			facadeMountVariantComboBox.ItemIndex = core.facadeMountVariant;
			facadeGapCalc.Value = core.facadeGap;
			facadeIndentCalc.Value = core.facadeIndent;
			facadeMaterialEdit.Material = core.facadeMaterial;
			facadeButtMaterialEdit.ButtMaterial = core.facadeButtMaterial;

			// Списки и поля, зависящие от количества секций и фасадов.
			this.updateReducedSection();
			this.updateSectionSizeFields(core.calculateSectionSizes(core.x));
			this.updateShelfFields();
			this.updateFacadeFields();
			this.updateFacadeEditableLayoutOptions();
			this.updateFacadeSizeFields();
			this.updateFacadeJointFields();
		} finally {
			this.isApplyingConfig = false;
		}
	},

	saveConfig() {
		// Синхронизируем состояние отдельных пунктов независимо от раздела.
		// Запись на диск выполняется только обработчиком кнопки «Построить».
		Object.assign(INTERFACE_CONFIG, this.getItemVisibility());
		delete INTERFACE_CONFIG.sizeGroupHeight;
		delete INTERFACE_CONFIG.fillingGroupHeight;
		INTERFACE_CONFIG.mainFormHeight = mainForm.Height;
	},
};

// ----- Главная форма -----
const mainForm = UI.components.NewForm();
mainForm.Parent = FileControl;
mainForm.Top = 0;
mainForm.Left = 0;
mainForm.Width = 300;
mainForm.Height = 100; // Окончательная высота рассчитывается перед показом.
mainForm.ShowHint = true;
mainForm.BorderStyle = 0;
mainForm.Position = 0;
mainForm.Font.Name = 'Bahnschrift';
mainForm.Font.Size = 10;

// ----- Заголовок формы -----
const labelPanel = UI.components.NewPanel(mainForm, mainForm);
labelPanel.Left = 5;
labelPanel.Height = 30;
labelPanel.Width = 300;
labelPanel.ShowHint = true;
labelPanel.BevelOuter = 0;

interface.WIDGETS.push(labelPanel);

const label = UI.components.NewLabel(labelPanel, labelPanel);
label.AutoSize = false;
label.Top = 5;
label.Left = 0;
label.Height = 25;
label.Width = 300;
label.Caption = 'Furniture Build';
label.Properties.Alignment.Horz = 2;
label.Style.Font.Size = 11;

// ----- Раздел настроек -----
const sectionPanel = UI.components.NewPanel(mainForm, mainForm);
sectionPanel.Left = 5;
sectionPanel.Height = 30;
sectionPanel.Width = 290;
sectionPanel.BevelOuter = 0;
sectionPanel.ParentFont = true;
interface.WIDGETS.push(sectionPanel);

const sectionComboBox = UI.components.NewComboBox(sectionPanel, sectionPanel);
sectionComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
sectionComboBox.Properties.Items.Add('КОРПУС');
sectionComboBox.Properties.Items.Add('НАПОЛНЕНИЕ');
sectionComboBox.Properties.Items.Add('ФАСАДЫ');
sectionComboBox.Top = 5;
sectionComboBox.Left = 0;
sectionComboBox.AutoSize = false;
sectionComboBox.Height = 25;
sectionComboBox.Width = 290;
sectionComboBox.ItemIndex = interface.activeSection;
sectionComboBox.Properties.OnChange = () => {
	interface.activeSection = sectionComboBox.ItemIndex;
	interface.relayoutMainForm();
	interface.saveConfig();
};

// ----- Шаблоны -----
// Шаблон — это тот же формат, что config.json: объекты core и interface.
// Категория — папка внутри «Шаблоны», «Без категории» означает её корень.
const TEMPLATES_DIR = path.join(__dirname, 'Шаблоны');
const ROOT_TEMPLATE_CATEGORY = 'Без категории';
const INVALID_TEMPLATE_PATH_NAME = /[<>:"/\\|?*\x00-\x1F]/;
let activeTemplateCategory = ROOT_TEMPLATE_CATEGORY;

// Создаёт корневую папку шаблонов при первом обращении.
function ensureTemplatesDir() {
	try {
		if (!fs.existsSync(TEMPLATES_DIR)) {
			fs.mkdirSync(TEMPLATES_DIR);
		}
		if (!fs.statSync(TEMPLATES_DIR).isDirectory()) {
			throw new Error(`Путь "${TEMPLATES_DIR}" занят файлом`);
		}
	} catch (error) {
		UI.dialogs.ErrorBox(`Не удалось подготовить папку шаблонов:\n${error.message}`);
		return false;
	}

	return true;
}

// Не допускает в именах файлов и папок недопустимые для Windows символы.
function isTemplatePathNameValid(name) {
	return (
		!!name &&
		name !== '.' &&
		name !== '..' &&
		path.basename(name) === name &&
		!INVALID_TEMPLATE_PATH_NAME.test(name) &&
		!/[. ]$/.test(name)
	);
}

// Возвращает корень и все папки-категории в порядке отображения.
function getTemplateCategories() {
	if (!ensureTemplatesDir()) return null;
	try {
		const categories = fs
			.readdirSync(TEMPLATES_DIR)
			.filter((categoryName) => {
				const categoryPath = path.join(TEMPLATES_DIR, categoryName);
				return categoryName !== ROOT_TEMPLATE_CATEGORY && fs.statSync(categoryPath).isDirectory();
			})
			.sort((a, b) => a.localeCompare(b));
		return [ROOT_TEMPLATE_CATEGORY, ...categories];
	} catch (error) {
		UI.dialogs.ErrorBox(`Не удалось прочитать папку шаблонов:\n${error.message}`);
		return null;
	}
}

// Преобразует отображаемую категорию в фактический путь на диске.
function getTemplateCategoryPath(categoryName) {
	const categories = getTemplateCategories();
	if (!categories) return null;
	if (categories.indexOf(categoryName) < 0) {
		UI.dialogs.ErrorBox('Категория не найдена. Выберите существующую или создайте новую.');
		return null;
	}
	return categoryName === ROOT_TEMPLATE_CATEGORY ? TEMPLATES_DIR : path.join(TEMPLATES_DIR, categoryName);
}

// Возвращает JSON-шаблоны только из выбранной категории.
function getTemplateFiles(categoryName) {
	const categoryPath = getTemplateCategoryPath(categoryName);
	if (!categoryPath) return null;
	try {
		return fs
			.readdirSync(categoryPath)
			.filter((fileName) => {
				const filePath = path.join(categoryPath, fileName);
				return path.extname(fileName).toLowerCase() === '.json' && fs.statSync(filePath).isFile();
			})
			.sort((a, b) => a.localeCompare(b));
	} catch (error) {
		UI.dialogs.ErrorBox(`Не удалось прочитать категорию шаблонов:\n${error.message}`);
		return null;
	}
}

// Создаёт категорию и сообщает, была ли папка новой.
function createTemplateCategory(categoryName) {
	if (!ensureTemplatesDir()) return null;
	if (categoryName === ROOT_TEMPLATE_CATEGORY) {
		UI.dialogs.ErrorBox(`«${ROOT_TEMPLATE_CATEGORY}» — это корень папки шаблонов, его создавать не нужно.`);
		return null;
	}
	if (!isTemplatePathNameValid(categoryName)) {
		UI.dialogs.ErrorBox('Название категории содержит недопустимые символы.');
		return null;
	}

	const categoryPath = path.join(TEMPLATES_DIR, categoryName);
	try {
		if (fs.existsSync(categoryPath)) {
			if (!fs.statSync(categoryPath).isDirectory()) {
				throw new Error(`Путь "${categoryPath}" занят файлом`);
			}
			return { categoryPath, created: false };
		}
		fs.mkdirSync(categoryPath);
		return { categoryPath, created: true };
	} catch (error) {
		UI.dialogs.ErrorBox(`Не удалось создать категорию:\n${error.message}`);
		return null;
	}
}

// Удаляет только пустые категории, созданные в отменённом окне сохранения.
function removeEmptyTemplateCategories(categoryPaths) {
	for (let i = categoryPaths.length - 1; i >= 0; i--) {
		const categoryPath = categoryPaths[i];
		try {
			if (
				fs.existsSync(categoryPath) &&
				fs.statSync(categoryPath).isDirectory() &&
				fs.readdirSync(categoryPath).length === 0
			) {
				fs.rmdirSync(categoryPath);
			}
		} catch (error) {
			if (!isExecutionFinishing) {
				UI.dialogs.ErrorBox(`Не удалось удалить созданную категорию:\n${error.message}`);
			}
		}
	}
}

// Заполняет список категорий и старается сохранить текущий выбор.
function setCategoryComboItems(comboBox, categories, selectedCategory) {
	comboBox.Properties.Items.Clear();
	for (const categoryName of categories) comboBox.Properties.Items.Add(categoryName);
	const categoryName = categories.indexOf(selectedCategory) >= 0 ? selectedCategory : ROOT_TEMPLATE_CATEGORY;
	comboBox.ItemIndex = categories.indexOf(categoryName);
	return categoryName;
}

// Возвращает текст выбранного или введённого пункта комбобокса.
function getComboText(comboBox) {
	return String(comboBox.EditValue || '').trim();
}

// Создаёт общую форму выбора шаблона без освобождения её вручную при закрытии.
function createTemplateDialog(caption) {
	const form = UI.components.NewForm();
	form.Position = UI.constants.formPosition.screenCenter;
	form.Caption = caption;
	form.Width = 500;
	form.Height = 140;
	form.Constraints.MinWidth = 500;
	form.Constraints.MaxWidth = 500;
	form.Constraints.MinHeight = 140;
	form.Constraints.MaxHeight = 140;
	form.FormStyle = UI.constants.formStyle.stayOnTop;
	form.Position = UI.constants.formPosition.screenCenter;
	form.OnClose = (_sender, action) => {
		if (!isExecutionFinishing) mainForm.Enabled = true;
		// Движок БАЗИС сам освобождает дочерние формы при завершении скрипта.
		// Здесь форму только скрываем, чтобы не освободить её дважды.
		action.value = UI.constants.closeAction.hide;
	};
	return form;
}

// Строит стандартную подпись строки в диалоге шаблонов.
function addTemplateDialogLabel(form, caption, top) {
	const label = UI.components.NewLabel(form, form);
	label.Caption = caption;
	label.Left = 10;
	label.Top = top;
	label.Width = 90;
	label.Height = 25;
	return label;
}

// Строит кнопку стандартного размера в диалоге шаблонов.
function addTemplateDialogButton(form, caption, left, top) {
	const button = UI.components.NewButton(form, form);
	button.AutoSize = false;
	button.Caption = caption;
	button.Left = left;
	button.Top = top;
	button.Width = 100;
	button.Height = 25;
	return button;
}

// Предлагает имя шаблона на основе имени текущего блока.
function getDefaultTemplateFileName() {
	const name =
		String(core.blockName || 'Шаблон')
			.replace(/[<>:"/\\|?*\x00-\x1F]/g, '_')
			.replace(/[. ]+$/g, '') || 'Шаблон';
	return path.extname(name).toLowerCase() === '.json' ? name : `${name}.json`;
}

// Нормализует имя шаблона и гарантирует расширение .json.
function normalizeTemplateFileName(fileName) {
	const name = String(fileName || '').trim();
	if (!isTemplatePathNameValid(name)) {
		UI.dialogs.ErrorBox('Имя шаблона содержит недопустимые символы.');
		return null;
	}
	return path.extname(name).toLowerCase() === '.json' ? name : `${name}.json`;
}

// Сохраняет актуальные core и interface в файл выбранной категории.
function saveTemplateToCategory(categoryName, fileName) {
	const categoryPath = getTemplateCategoryPath(categoryName);
	if (!categoryPath) return false;
	const normalizedFileName = normalizeTemplateFileName(fileName);
	if (!normalizedFileName) return false;
	const target = path.join(categoryPath, normalizedFileName);
	if (
		fs.existsSync(target) &&
		!UI.dialogs.RunYesNoDialog(`Шаблон "${normalizedFileName}" уже существует. Перезаписать?`)
	) {
		return false;
	}

	try {
		// Пишем в шаблон актуальное состояние, а не то, что успело попасть в файл.
		core.saveConfig();
		interface.saveConfig();
		fs.writeFileSync(target, JSON.stringify(CONFIG, null, '\t'));
		activeTemplateCategory = categoryName;
		return true;
	} catch (error) {
		UI.dialogs.ErrorBox(`Не удалось сохранить шаблон:\n${error.message}`);
		return false;
	}
}

// Загружает шаблон, обновляет форму и один раз пересобирает изделие.
function applyTemplate(fileName) {
	let data;
	try {
		data = JSON.parse(fs.readFileSync(fileName, 'utf8'));
	} catch (error) {
		UI.dialogs.ErrorBox(`Не удалось прочитать шаблон:\n${error.message}`);
		return false;
	}
	if (!data || !data.core || !data.interface) {
		UI.dialogs.ErrorBox('Файл не является шаблоном: нет разделов "core" и "interface".');
		return false;
	}
	core.applyConfig(data.core);
	Object.assign(INTERFACE_CONFIG, data.interface);
	// Поля обновляются с поднятым флагом, поэтому модель перестраивается
	// один раз здесь, а не на каждом изменившемся поле.
	interface.syncFieldsFromCore();
	// Шаблон меняет и то, что не входит в геометрическую подпись (имя блока,
	// кромку, материалы), поэтому блок пересобирается безусловно.
	core.lastGeometrySignature = null;
	core.rebuildBlock('Шаблон загружен');
	interface.relayoutMainForm();
	core.saveConfig();
	interface.saveConfig();
	return true;
}

// Открывает диалог сохранения и откатывает пустые новые категории при отмене.
function saveTemplate() {
	const categories = getTemplateCategories();
	if (!categories) return;

	const form = createTemplateDialog('Сохранить шаблон');
	const createdCategoryPaths = [];
	let templateSaved = false;
	const onClose = form.OnClose;
	form.OnClose = (sender, action) => {
		if (!templateSaved) removeEmptyTemplateCategories(createdCategoryPaths);
		onClose(sender, action);
	};
	addTemplateDialogLabel(form, 'Категория:', 10);
	const categoryComboBox = UI.components.NewComboBox(form, form);
	categoryComboBox.Left = 85;
	categoryComboBox.Top = 10;
	categoryComboBox.Width = 260;
	categoryComboBox.Height = 25;
	categoryComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.editList;
	categoryComboBox.Properties.DropDownRows = 10;
	setCategoryComboItems(categoryComboBox, categories, activeTemplateCategory);

	const createCategoryButton = UI.components.NewButton(form, form);
	createCategoryButton.AutoSize = false;
	createCategoryButton.Caption = 'Создать категорию';
	createCategoryButton.Left = 350;
	createCategoryButton.Top = 9;
	createCategoryButton.Width = 129;
	createCategoryButton.Height = 25;

	addTemplateDialogLabel(form, 'Шаблон:', 40);
	const templateNameEdit = UI.components.NewTextEdit(form, form);
	templateNameEdit.Left = 85;
	templateNameEdit.Top = 40;
	templateNameEdit.Width = 394;
	templateNameEdit.Height = 25;
	templateNameEdit.EditValue = getDefaultTemplateFileName();

	const folderLabel = UI.components.NewLabel(form, form);
	folderLabel.Left = 10;
	folderLabel.Top = 70;
	folderLabel.Width = 385;
	folderLabel.Height = 20;
	folderLabel.Caption = `Папка: Шаблоны\\${getComboText(categoryComboBox)}`;

	categoryComboBox.Properties.OnChange = () => {
		folderLabel.Caption = `Папка: Шаблоны\\${getComboText(categoryComboBox)}`;
	};

	createCategoryButton.OnClick = () => {
		const categoryName = getComboText(categoryComboBox);
		const categoryResult = createTemplateCategory(categoryName);
		if (!categoryResult) return;
		if (categoryResult.created) createdCategoryPaths.push(categoryResult.categoryPath);
		const updatedCategories = getTemplateCategories();
		if (!updatedCategories) return;
		activeTemplateCategory = setCategoryComboItems(categoryComboBox, updatedCategories, categoryName);
		folderLabel.Caption = `Папка: Шаблоны\\${activeTemplateCategory}`;
	};

	const saveButton = addTemplateDialogButton(form, 'Сохранить', 270, 70);
	saveButton.Default = true;
	saveButton.OnClick = () => {
		const categoryName = getComboText(categoryComboBox);
		if (saveTemplateToCategory(categoryName, templateNameEdit.EditValue)) {
			templateSaved = true;
			form.Close();
		}
	};

	const cancelButton = addTemplateDialogButton(form, 'Отмена', 380, 70);
	cancelButton.Cancel = true;
	cancelButton.OnClick = () => form.Close();

	mainForm.Enabled = false;
	form.Show();
}

// Открывает диалог категории и выбора файла для загрузки.
function loadTemplate() {
	const categories = getTemplateCategories();
	if (!categories) return;

	const form = createTemplateDialog('Загрузить шаблон');
	addTemplateDialogLabel(form, 'Категория:', 10);
	const categoryComboBox = UI.components.NewComboBox(form, form);
	categoryComboBox.Left = 85;
	categoryComboBox.Top = 10;
	categoryComboBox.Width = 394;
	categoryComboBox.Height = 25;
	categoryComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
	categoryComboBox.Properties.DropDownRows = 10;
	setCategoryComboItems(categoryComboBox, categories, activeTemplateCategory);

	addTemplateDialogLabel(form, 'Шаблон:', 40);
	const templateComboBox = UI.components.NewComboBox(form, form);
	templateComboBox.Left = 85;
	templateComboBox.Top = 40;
	templateComboBox.Width = 394;
	templateComboBox.Height = 25;
	templateComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
	templateComboBox.Properties.DropDownRows = 10;

	const infoLabel = UI.components.NewLabel(form, form);
	infoLabel.Left = 10;
	infoLabel.Top = 70;
	infoLabel.Width = 385;
	infoLabel.Height = 20;

	const loadButton = addTemplateDialogButton(form, 'Загрузить', 270, 70);
	loadButton.Default = true;
	const cancelButton = addTemplateDialogButton(form, 'Отмена', 380, 70);
	cancelButton.Cancel = true;
	cancelButton.OnClick = () => form.Close();

	function updateTemplateList() {
		const categoryName = getComboText(categoryComboBox);
		const templateFiles = getTemplateFiles(categoryName);
		templateComboBox.Properties.Items.Clear();
		if (!templateFiles) {
			templateComboBox.ItemIndex = -1;
			templateComboBox.Enabled = false;
			loadButton.Enabled = false;
			infoLabel.Caption = '';
			return;
		}
		for (const fileName of templateFiles) templateComboBox.Properties.Items.Add(fileName);
		templateComboBox.ItemIndex = templateFiles.length ? 0 : -1;
		templateComboBox.Enabled = !!templateFiles.length;
		loadButton.Enabled = !!templateFiles.length;
		infoLabel.Caption = templateFiles.length
			? `Шаблонов в категории: ${templateFiles.length}`
			: 'В выбранной категории пока нет шаблонов.';
	}

	categoryComboBox.Properties.OnChange = updateTemplateList;
	updateTemplateList();

	loadButton.OnClick = () => {
		const categoryName = getComboText(categoryComboBox);
		const categoryPath = getTemplateCategoryPath(categoryName);
		const fileName = getComboText(templateComboBox);
		if (!categoryPath || !fileName) return;
		if (applyTemplate(path.join(categoryPath, fileName))) {
			activeTemplateCategory = categoryName;
			form.Close();
		}
	};

	mainForm.Enabled = false;
	form.Show();
}

const templatePanel = UI.components.NewPanel(mainForm, mainForm);
templatePanel.Left = 5;
templatePanel.Height = 30;
templatePanel.Width = 290;
templatePanel.BevelOuter = 0;
templatePanel.ParentFont = true;

interface.WIDGETS.push(templatePanel);
interface.CORPUS_WIDGETS.push(templatePanel);

// Кнопки занимают те же две половины строки, что подпись и поле в остальных
// панелях (145 px, высота 25 px). Левый край второй кнопки совпадает с левым
// краем полей, а первая укорочена на 2 px, чтобы кнопки не стояли вплотную.
const templateLoadButton = UI.components.NewButton(templatePanel, templatePanel);
templateLoadButton.AutoSize = false;
templateLoadButton.Top = 5;
templateLoadButton.Left = 0;
templateLoadButton.Height = 25;
templateLoadButton.Width = 143;
templateLoadButton.Caption = 'Загрузить';
templateLoadButton.OnClick = loadTemplate;

const templateSaveButton = UI.components.NewButton(templatePanel, templatePanel);
templateSaveButton.AutoSize = false;
templateSaveButton.Top = 5;
templateSaveButton.Left = 145;
templateSaveButton.Height = 25;
templateSaveButton.Width = 145;
templateSaveButton.Caption = 'Сохранить';
templateSaveButton.OnClick = saveTemplate;

// ----- Нумерация элементов -----
const numberElementsPanel = UI.components.NewPanel(mainForm, mainForm);
numberElementsPanel.Left = 0;
numberElementsPanel.Height = 30;
numberElementsPanel.Width = 300;
numberElementsPanel.ShowHint = true;
numberElementsPanel.BevelOuter = 0;
numberElementsPanel.ParentFont = true;

interface.WIDGETS.push(numberElementsPanel);
interface.CORPUS_WIDGETS.push(numberElementsPanel);

const numberElementsLabel = UI.components.NewLabel(numberElementsPanel, numberElementsPanel);
numberElementsLabel.Top = 5;
numberElementsLabel.Left = 5;
numberElementsLabel.AutoSize = false;
numberElementsLabel.Height = 25;
numberElementsLabel.Width = 145;
numberElementsLabel.Caption = 'Нумерация эл.:';

// Обычный чекбокс, но занимает место поля строки: подпись "Да"/"Нет"
// вместо статичного текста, ширина и позиция как у combobox-полей.
const numberElementsCheckBox = UI.components.NewCheckBox(numberElementsPanel, numberElementsPanel);
numberElementsCheckBox.AutoSize = false;
numberElementsCheckBox.Top = 5;
numberElementsCheckBox.Left = 150;
numberElementsCheckBox.Height = 25;
numberElementsCheckBox.Width = 145;
numberElementsCheckBox.Checked = core.numberElements;
numberElementsCheckBox.Caption = core.numberElements ? 'Да' : 'Нет';

// ----- Событие изменения "Нумерация элементов" -----
numberElementsCheckBox.Properties.OnChange = () => {
	core.numberElements = numberElementsCheckBox.Checked;
	numberElementsCheckBox.Caption = core.numberElements ? 'Да' : 'Нет';
	// Само наименование не входит в геометрическую подпись (это не
	// геометрия), поэтому перестройку приходится форсировать явно.
	core.lastGeometrySignature = null;
	core.rebuildBlock('Нумерация элементов изменена');
	core.saveConfig();
};

// ----- Имя блока -----
const blockNamePanel = UI.components.NewPanel(mainForm, mainForm);
blockNamePanel.Left = 0;
blockNamePanel.Height = 30;
blockNamePanel.Width = 300;
blockNamePanel.ShowHint = true;
blockNamePanel.AlignWithMargins = true;
blockNamePanel.BevelOuter = 0;
blockNamePanel.ParentFont = true;

interface.WIDGETS.push(blockNamePanel);
interface.CORPUS_WIDGETS.push(blockNamePanel);

const blockNameLabel = UI.components.NewLabel(blockNamePanel, blockNamePanel);
blockNameLabel.Top = 5;
blockNameLabel.Left = 5;
blockNameLabel.AutoSize = false;
blockNameLabel.Height = 25;
blockNameLabel.Width = 145;
blockNameLabel.Caption = 'Имя блока:';

const blockNameEdit = UI.components.NewTextEdit(blockNamePanel, blockNamePanel);
blockNameEdit.Top = 5;
blockNameEdit.Left = 150;
blockNameEdit.AutoSize = false;
blockNameEdit.Height = 25;
blockNameEdit.Width = 145;
blockNameEdit.EditValue = core.blockName;

// ----- Событие изменения "Имя блока" -----
blockNameEdit.Properties.OnEditValueChanged = () => {
	core.changeBlockName(blockNameEdit.EditValue);
	core.saveConfig();
};

// ----- Вариант блока -----
const blockVariantPanel = UI.components.NewPanel(mainForm, mainForm);
blockVariantPanel.Left = 0;
blockVariantPanel.Height = 30;
blockVariantPanel.Width = 300;
blockVariantPanel.ShowHint = true;
blockVariantPanel.BevelOuter = 0;
blockVariantPanel.ParentFont = true;

interface.WIDGETS.push(blockVariantPanel);
interface.CORPUS_WIDGETS.push(blockVariantPanel);

const blockVariantLabel = UI.components.NewLabel(blockVariantPanel, blockVariantPanel);
blockVariantLabel.Top = 5;
blockVariantLabel.Left = 5;
blockVariantLabel.AutoSize = false;
blockVariantLabel.Height = 25;
blockVariantLabel.Width = 145;
blockVariantLabel.Caption = 'Вариант блока:';

const blockVariantComboBox = UI.components.NewComboBox(blockVariantPanel, blockVariantPanel);
blockVariantComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
blockVariantComboBox.Properties.Items.Add('Простой');
blockVariantComboBox.Properties.Items.Add('С цоколем');
blockVariantComboBox.Properties.Items.Add('Подиум');
blockVariantComboBox.Top = 5;
blockVariantComboBox.Left = 150;
blockVariantComboBox.AutoSize = false;
blockVariantComboBox.Height = 25;
blockVariantComboBox.Width = 145;
blockVariantComboBox.ItemIndex = core.blockVariant;

// ----- Событие изменения "Вариант блока" -----
blockVariantComboBox.Properties.OnChange = () => {
	core.blockVariant = blockVariantComboBox.ItemIndex;
	core.rebuildBlock('Вариант корпуса изменён');
	interface.relayoutMainForm();
	interface.saveConfig();
	core.saveConfig();
};

// ----- Вариант задней стенки -----
const backSideVariantPanel = UI.components.NewPanel(mainForm, mainForm);
backSideVariantPanel.Left = 0;
backSideVariantPanel.Height = 30;
backSideVariantPanel.Width = 300;
backSideVariantPanel.ShowHint = true;
backSideVariantPanel.BevelOuter = 0;
backSideVariantPanel.ParentFont = true;

interface.WIDGETS.push(backSideVariantPanel);
interface.CORPUS_WIDGETS.push(backSideVariantPanel);

const backSideVariantLabel = UI.components.NewLabel(backSideVariantPanel, backSideVariantPanel);
backSideVariantLabel.Top = 5;
backSideVariantLabel.Left = 5;
backSideVariantLabel.AutoSize = false;
backSideVariantLabel.Height = 25;
backSideVariantLabel.Width = 145;
backSideVariantLabel.Caption = 'Вариант ЗС:';

const backSideVariantComboBox = UI.components.NewComboBox(backSideVariantPanel, backSideVariantPanel);
backSideVariantComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
backSideVariantComboBox.Properties.Items.Add('Вкладная');
backSideVariantComboBox.Properties.Items.Add('В паз');
backSideVariantComboBox.Properties.Items.Add('В четверть');
backSideVariantComboBox.Properties.Items.Add('Набивная');
backSideVariantComboBox.Top = 5;
backSideVariantComboBox.Left = 150;
backSideVariantComboBox.AutoSize = false;
backSideVariantComboBox.Height = 25;
backSideVariantComboBox.Width = 145;
backSideVariantComboBox.ItemIndex = core.backSideVariant;

// ----- Событие изменения "Вариант задней стенки" -----
backSideVariantComboBox.Properties.OnChange = () => {
	core.backSideVariant = backSideVariantComboBox.ItemIndex;
	core.rebuildBlock('Вариант задней стенки изменён');
	interface.relayoutMainForm();
	interface.saveConfig();
	core.saveConfig();
};

// ----- Наложение крышки -----
const topSideVariantPanel = UI.components.NewPanel(mainForm, mainForm);
topSideVariantPanel.Left = 0;
topSideVariantPanel.Height = 30;
topSideVariantPanel.Width = 300;
topSideVariantPanel.ShowHint = true;
topSideVariantPanel.BevelOuter = 0;
topSideVariantPanel.ParentFont = true;

interface.WIDGETS.push(topSideVariantPanel);
interface.CORPUS_WIDGETS.push(topSideVariantPanel);

const topSideVariantLabel = UI.components.NewLabel(topSideVariantPanel, topSideVariantPanel);
topSideVariantLabel.Top = 5;
topSideVariantLabel.Left = 5;
topSideVariantLabel.AutoSize = false;
topSideVariantLabel.Height = 25;
topSideVariantLabel.Width = 145;
topSideVariantLabel.Caption = 'Наложение крышки:';

const topSideVariantComboBox = UI.components.NewComboBox(topSideVariantPanel, topSideVariantPanel);
topSideVariantComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
topSideVariantComboBox.Properties.Items.Add('Накладная');
topSideVariantComboBox.Properties.Items.Add('Вкладная');
topSideVariantComboBox.Top = 5;
topSideVariantComboBox.Left = 150;
topSideVariantComboBox.AutoSize = false;
topSideVariantComboBox.Height = 25;
topSideVariantComboBox.Width = 145;
topSideVariantComboBox.ItemIndex = core.topSideVariant;

// ----- Событие изменения "Наложение крышки" -----
topSideVariantComboBox.Properties.OnChange = () => {
	core.topSideVariant = topSideVariantComboBox.ItemIndex;
	core.rebuildBlock('Наложение крышки изменено');
	core.saveConfig();
};

// ----- Наложение дна -----
const bottomSideVariantPanel = UI.components.NewPanel(mainForm, mainForm);
bottomSideVariantPanel.Left = 0;
bottomSideVariantPanel.Height = 30;
bottomSideVariantPanel.Width = 300;
bottomSideVariantPanel.ShowHint = true;
bottomSideVariantPanel.BevelOuter = 0;
bottomSideVariantPanel.ParentFont = true;

interface.WIDGETS.push(bottomSideVariantPanel);
interface.CORPUS_WIDGETS.push(bottomSideVariantPanel);

const bottomSideVariantLabel = UI.components.NewLabel(bottomSideVariantPanel, bottomSideVariantPanel);
bottomSideVariantLabel.Top = 5;
bottomSideVariantLabel.Left = 5;
bottomSideVariantLabel.AutoSize = false;
bottomSideVariantLabel.Height = 25;
bottomSideVariantLabel.Width = 145;
bottomSideVariantLabel.Caption = 'Наложение дна:';

const bottomSideVariantComboBox = UI.components.NewComboBox(bottomSideVariantPanel, bottomSideVariantPanel);
bottomSideVariantComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
bottomSideVariantComboBox.Properties.Items.Add('Накладное');
bottomSideVariantComboBox.Properties.Items.Add('Вкладное');
bottomSideVariantComboBox.Top = 5;
bottomSideVariantComboBox.Left = 150;
bottomSideVariantComboBox.AutoSize = false;
bottomSideVariantComboBox.Height = 25;
bottomSideVariantComboBox.Width = 145;
bottomSideVariantComboBox.ItemIndex = core.bottomSideVariant;

// ----- Событие изменения "Наложение дна" -----
bottomSideVariantComboBox.Properties.OnChange = () => {
	core.bottomSideVariant = bottomSideVariantComboBox.ItemIndex;
	core.rebuildBlock('Наложение дна изменено');
	core.saveConfig();
};

// ----- Ширина -----
const sizeXPanel = UI.components.NewPanel(mainForm, mainForm);
sizeXPanel.Left = 0;
sizeXPanel.Height = 30;
sizeXPanel.Width = 300;
sizeXPanel.ShowHint = true;
sizeXPanel.BevelOuter = 0;
sizeXPanel.ParentFont = true;

interface.WIDGETS.push(sizeXPanel);
interface.CORPUS_WIDGETS.push(sizeXPanel);

const sizeXLabel = UI.components.NewLabel(sizeXPanel, sizeXPanel);
sizeXLabel.AutoSize = false;
sizeXLabel.Top = 5;
sizeXLabel.Left = 5;
sizeXLabel.Height = 25;
sizeXLabel.Width = 145;
sizeXLabel.Caption = 'Ширина:';

const sizeXCalc = UI.components.NewCalcEdit(sizeXPanel, sizeXPanel);
sizeXCalc.AutoSize = false;
sizeXCalc.Top = 5;
sizeXCalc.Left = 150;
sizeXCalc.Height = 25;
sizeXCalc.Width = 145;
sizeXCalc.Value = core.x;

// ----- Событие изменения "Ширина" -----
sizeXCalc.Properties.OnEditValueChanged = () => {
	core.x = sizeXCalc.Value;
	core.rebuildBlock('Ширина корпуса изменена');
	core.saveConfig();
};

// ----- Высота -----
const sizeYPanel = UI.components.NewPanel(mainForm, mainForm);
sizeYPanel.Left = 0;
sizeYPanel.Height = 30;
sizeYPanel.Width = 300;
sizeYPanel.ShowHint = true;
sizeYPanel.BevelOuter = 0;
sizeYPanel.ParentFont = true;

interface.WIDGETS.push(sizeYPanel);
interface.CORPUS_WIDGETS.push(sizeYPanel);

const sizeYLabel = UI.components.NewLabel(sizeYPanel, sizeYPanel);
sizeYLabel.AutoSize = false;
sizeYLabel.Top = 5;
sizeYLabel.Left = 5;
sizeYLabel.Height = 25;
sizeYLabel.Width = 145;
sizeYLabel.Caption = 'Высота:';

const sizeYCalc = UI.components.NewCalcEdit(sizeYPanel, sizeYPanel);
sizeYCalc.AutoSize = false;
sizeYCalc.Top = 5;
sizeYCalc.Left = 150;
sizeYCalc.Height = 25;
sizeYCalc.Width = 145;
sizeYCalc.Value = core.y;

// ----- Событие изменения "Высота" -----
sizeYCalc.Properties.OnEditValueChanged = () => {
	core.y = sizeYCalc.Value;
	core.rebuildBlock('Высота корпуса изменена');
	core.saveConfig();
};

// ----- Глубина -----
const sizeZPanel = UI.components.NewPanel(mainForm, mainForm);
sizeZPanel.Left = 0;
sizeZPanel.Height = 30;
sizeZPanel.Width = 300;
sizeZPanel.ShowHint = true;
sizeZPanel.BevelOuter = 0;
sizeZPanel.ParentFont = true;

interface.WIDGETS.push(sizeZPanel);
interface.CORPUS_WIDGETS.push(sizeZPanel);

const sizeZLabel = UI.components.NewLabel(sizeZPanel, sizeZPanel);
sizeZLabel.AutoSize = false;
sizeZLabel.Top = 5;
sizeZLabel.Left = 5;
sizeZLabel.Height = 25;
sizeZLabel.Width = 145;
sizeZLabel.Caption = 'Глубина:';

const sizeZCalc = UI.components.NewCalcEdit(sizeZPanel, sizeZPanel);
sizeZCalc.AutoSize = false;
sizeZCalc.Top = 5;
sizeZCalc.Left = 150;
sizeZCalc.Height = 25;
sizeZCalc.Width = 145;
sizeZCalc.Value = core.z;

// ----- Событие изменения "Глубина" -----
sizeZCalc.Properties.OnEditValueChanged = () => {
	core.z = sizeZCalc.Value;
	core.rebuildBlock('Глубина корпуса изменена');
	core.saveConfig();
};

// ----- Отступ зс -----
const backSideMoveZPanel = UI.components.NewPanel(mainForm, mainForm);
backSideMoveZPanel.Left = 0;
backSideMoveZPanel.Height = 30;
backSideMoveZPanel.Width = 300;
backSideMoveZPanel.ShowHint = true;
backSideMoveZPanel.BevelOuter = 0;
backSideMoveZPanel.ParentFont = true;

interface.WIDGETS.push(backSideMoveZPanel);
interface.CORPUS_WIDGETS.push(backSideMoveZPanel);

const backSideMoveZLabel = UI.components.NewLabel(backSideMoveZPanel, backSideMoveZPanel);
backSideMoveZLabel.AutoSize = false;
backSideMoveZLabel.Top = 5;
backSideMoveZLabel.Left = 5;
backSideMoveZLabel.Height = 25;
backSideMoveZLabel.Width = 145;
backSideMoveZLabel.Caption = 'Отступ зс:';

const backSideMoveZCalc = UI.components.NewCalcEdit(backSideMoveZPanel, backSideMoveZPanel);
backSideMoveZCalc.AutoSize = false;
backSideMoveZCalc.Top = 5;
backSideMoveZCalc.Left = 150;
backSideMoveZCalc.Height = 25;
backSideMoveZCalc.Width = 145;
backSideMoveZCalc.Value = core.backSideMoveZ;

// ----- Событие изменения "Отступ зс" -----
backSideMoveZCalc.Properties.OnEditValueChanged = () => {
	core.backSideMoveZ = backSideMoveZCalc.Value;
	core.rebuildBlock('Отступ задней стенки изменён');
	core.saveConfig();
};

// ----- Высота цоколя -----
const plinthSizePanel = UI.components.NewPanel(mainForm, mainForm);
plinthSizePanel.Left = 0;
plinthSizePanel.Height = 30;
plinthSizePanel.Width = 300;
plinthSizePanel.ShowHint = true;
plinthSizePanel.BevelOuter = 0;
plinthSizePanel.ParentFont = true;

interface.WIDGETS.push(plinthSizePanel);
interface.CORPUS_WIDGETS.push(plinthSizePanel);

const plinthSizeLabel = UI.components.NewLabel(plinthSizePanel, plinthSizePanel);
plinthSizeLabel.AutoSize = false;
plinthSizeLabel.Top = 5;
plinthSizeLabel.Left = 5;
plinthSizeLabel.Height = 25;
plinthSizeLabel.Width = 145;
plinthSizeLabel.Caption = 'Высота цоколя:';

const plinthSizeCalc = UI.components.NewCalcEdit(plinthSizePanel, plinthSizePanel);
plinthSizeCalc.AutoSize = false;
plinthSizeCalc.Top = 5;
plinthSizeCalc.Left = 150;
plinthSizeCalc.Height = 25;
plinthSizeCalc.Width = 145;
plinthSizeCalc.Value = core.plinthSize;

// ----- Событие изменения "Высота цоколя" -----
plinthSizeCalc.Properties.OnEditValueChanged = () => {
	core.plinthSize = plinthSizeCalc.Value;
	core.rebuildBlock('Высота цоколя изменена');
	core.saveConfig();
};

// ----- Отступ цоколя спереди -----
const frontPlinthIndentPanel = UI.components.NewPanel(mainForm, mainForm);
frontPlinthIndentPanel.Left = 0;
frontPlinthIndentPanel.Height = 30;
frontPlinthIndentPanel.Width = 300;
frontPlinthIndentPanel.ShowHint = true;
frontPlinthIndentPanel.BevelOuter = 0;
frontPlinthIndentPanel.ParentFont = true;

interface.WIDGETS.push(frontPlinthIndentPanel);
interface.CORPUS_WIDGETS.push(frontPlinthIndentPanel);

const frontPlinthIndentLabel = UI.components.NewLabel(frontPlinthIndentPanel, frontPlinthIndentPanel);
frontPlinthIndentLabel.AutoSize = false;
frontPlinthIndentLabel.Top = 5;
frontPlinthIndentLabel.Left = 5;
frontPlinthIndentLabel.Height = 25;
frontPlinthIndentLabel.Width = 145;
frontPlinthIndentLabel.Caption = 'Отступ спереди:';

const frontPlinthIndentCalc = UI.components.NewCalcEdit(frontPlinthIndentPanel, frontPlinthIndentPanel);
frontPlinthIndentCalc.AutoSize = false;
frontPlinthIndentCalc.Top = 5;
frontPlinthIndentCalc.Left = 150;
frontPlinthIndentCalc.Height = 25;
frontPlinthIndentCalc.Width = 145;
frontPlinthIndentCalc.Value = core.frontPlinthIndent;

// ----- Событие изменения "Отступ цоколя спереди" -----
frontPlinthIndentCalc.Properties.OnEditValueChanged = () => {
	core.frontPlinthIndent = frontPlinthIndentCalc.Value;
	core.rebuildBlock('Передний отступ цоколя изменён');
	core.saveConfig();
};

// ----- Отступ цоколя сзади -----
const backPlinthIndentPanel = UI.components.NewPanel(mainForm, mainForm);
backPlinthIndentPanel.Left = 0;
backPlinthIndentPanel.Height = 30;
backPlinthIndentPanel.Width = 300;
backPlinthIndentPanel.ShowHint = true;
backPlinthIndentPanel.BevelOuter = 0;
backPlinthIndentPanel.ParentFont = true;

interface.WIDGETS.push(backPlinthIndentPanel);
interface.CORPUS_WIDGETS.push(backPlinthIndentPanel);

const backPlinthIndentLabel = UI.components.NewLabel(backPlinthIndentPanel, backPlinthIndentPanel);
backPlinthIndentLabel.AutoSize = false;
backPlinthIndentLabel.Top = 5;
backPlinthIndentLabel.Left = 5;
backPlinthIndentLabel.Height = 25;
backPlinthIndentLabel.Width = 145;
backPlinthIndentLabel.Caption = 'Отступ сзади:';

const backPlinthIndentCalc = UI.components.NewCalcEdit(backPlinthIndentPanel, backPlinthIndentPanel);
backPlinthIndentCalc.AutoSize = false;
backPlinthIndentCalc.Top = 5;
backPlinthIndentCalc.Left = 150;
backPlinthIndentCalc.Height = 25;
backPlinthIndentCalc.Width = 145;
backPlinthIndentCalc.Value = core.backPlinthIndent;

// ----- Событие изменения "Отступ цоколя сзади" -----
backPlinthIndentCalc.Properties.OnEditValueChanged = () => {
	core.backPlinthIndent = backPlinthIndentCalc.Value;
	core.rebuildBlock('Задний отступ цоколя изменён');
	core.saveConfig();
};

// ----- Материал корпуса -----
const blockMaterialPanel = UI.components.NewPanel(mainForm, mainForm);
blockMaterialPanel.Left = 5;
blockMaterialPanel.Height = 30;
blockMaterialPanel.Width = 290;
blockMaterialPanel.ShowHint = true;
blockMaterialPanel.BevelOuter = 0;
blockMaterialPanel.ParentFont = true;

interface.WIDGETS.push(blockMaterialPanel);
interface.CORPUS_WIDGETS.push(blockMaterialPanel);

const blockMaterialLabel = UI.components.NewLabel(blockMaterialPanel, blockMaterialPanel);
blockMaterialLabel.Top = 5;
blockMaterialLabel.Left = 0;
blockMaterialLabel.AutoSize = false;
blockMaterialLabel.Height = 25;
blockMaterialLabel.Width = 145;
blockMaterialLabel.Caption = 'Материал корпуса: ';

const blockMaterialEdit = UI.components.NewMaterialEdit(blockMaterialPanel, blockMaterialPanel);
blockMaterialEdit.Top = 5;
blockMaterialEdit.Left = 145;
blockMaterialEdit.AutoSize = false;
blockMaterialEdit.Height = 25;
blockMaterialEdit.Width = 145;
blockMaterialEdit.Material = core.blockMaterial;

// ----- Событие изменения "Материал корпуса" -----
blockMaterialEdit.Properties.OnChange = () => {
	core.blockMaterial = blockMaterialEdit.Material;
	core.rebuildBlock('Материал корпуса изменён');
	core.saveConfig();
};

// ----- Материал зс -----
const backSideMaterialPanel = UI.components.NewPanel(mainForm, mainForm);
backSideMaterialPanel.Left = 5;
backSideMaterialPanel.Height = 30;
backSideMaterialPanel.Width = 290;
backSideMaterialPanel.ShowHint = true;
backSideMaterialPanel.BevelOuter = 0;
backSideMaterialPanel.ParentFont = true;

interface.WIDGETS.push(backSideMaterialPanel);
interface.CORPUS_WIDGETS.push(backSideMaterialPanel);

const backSideMaterialLabel = UI.components.NewLabel(backSideMaterialPanel, backSideMaterialPanel);
backSideMaterialLabel.AutoSize = false;
backSideMaterialLabel.Top = 5;
backSideMaterialLabel.Left = 0;
backSideMaterialLabel.Height = 25;
backSideMaterialLabel.Width = 145;
backSideMaterialLabel.Caption = 'Материал зс:';

const backSideMaterialEdit = UI.components.NewMaterialEdit(backSideMaterialPanel, backSideMaterialPanel);
backSideMaterialEdit.AutoSize = false;
backSideMaterialEdit.Top = 5;
backSideMaterialEdit.Left = 145;
backSideMaterialEdit.Height = 25;
backSideMaterialEdit.Width = 145;
backSideMaterialEdit.Material = core.backSideMaterial;

// ----- Событие изменения "Материал зс" -----
backSideMaterialEdit.Properties.OnChange = () => {
	core.backSideMaterial = backSideMaterialEdit.Material;
	core.rebuildBlock('Материал задней стенки изменён');
	interface.relayoutMainForm();
	core.saveConfig();
};

// ----- Кромка корпуса -----
const panelButtMaterialPanel = UI.components.NewPanel(mainForm, mainForm);
panelButtMaterialPanel.Left = 5;
panelButtMaterialPanel.Height = 30;
panelButtMaterialPanel.Width = 290;
panelButtMaterialPanel.ShowHint = true;
panelButtMaterialPanel.BevelOuter = 0;
panelButtMaterialPanel.ParentFont = true;

interface.WIDGETS.push(panelButtMaterialPanel);
interface.CORPUS_WIDGETS.push(panelButtMaterialPanel);

const panelButtMaterialLabel = UI.components.NewLabel(panelButtMaterialPanel, panelButtMaterialPanel);
panelButtMaterialLabel.AutoSize = false;
panelButtMaterialLabel.Top = 5;
panelButtMaterialLabel.Left = 0;
panelButtMaterialLabel.Height = 25;
panelButtMaterialLabel.Width = 145;
panelButtMaterialLabel.Caption = 'Кромка корпуса:';

const panelButtMaterialEdit = UI.components.NewButtMaterialEdit(panelButtMaterialPanel, panelButtMaterialPanel);
panelButtMaterialEdit.AutoSize = false;
panelButtMaterialEdit.Top = 5;
panelButtMaterialEdit.Left = 145;
panelButtMaterialEdit.Height = 25;
panelButtMaterialEdit.Width = 145;
panelButtMaterialEdit.ButtMaterial = core.buttMaterial;

// ----- Событие изменения "Кромка корпуса" -----
panelButtMaterialEdit.Properties.OnChange = () => {
	core.buttMaterial = panelButtMaterialEdit.ButtMaterial;
	core.setButt(true, 'Материал кромки корпуса изменён');
	core.saveConfig();
};

// ----- Кромить -----
const buttVariantPanel = UI.components.NewPanel(mainForm, mainForm);
buttVariantPanel.Left = 5;
buttVariantPanel.Height = 30;
buttVariantPanel.Width = 290;
buttVariantPanel.ShowHint = true;
buttVariantPanel.BevelOuter = 0;
buttVariantPanel.ParentFont = true;

interface.WIDGETS.push(buttVariantPanel);
interface.CORPUS_WIDGETS.push(buttVariantPanel);

const buttVariantLabel = UI.components.NewLabel(buttVariantPanel, buttVariantPanel);
buttVariantLabel.Top = 5;
buttVariantLabel.Left = 0;
buttVariantLabel.AutoSize = false;
buttVariantLabel.Height = 25;
buttVariantLabel.Width = 145;
buttVariantLabel.Caption = 'Кромить:';

const buttVariantComboBox = UI.components.NewComboBox(buttVariantPanel, buttVariantPanel);
buttVariantComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
buttVariantComboBox.Properties.Items.Add('Нет');
buttVariantComboBox.Properties.Items.Add('Видимые');
buttVariantComboBox.Properties.Items.Add('Все торцы');
buttVariantComboBox.Top = 5;
buttVariantComboBox.Left = 145;
buttVariantComboBox.AutoSize = false;
buttVariantComboBox.Height = 25;
buttVariantComboBox.Width = 145;
buttVariantComboBox.ItemIndex = core.buttVariant;

// ----- Событие изменения "Кромить" -----
buttVariantComboBox.Properties.OnChange = () => {
	core.buttVariant = buttVariantComboBox.ItemIndex;
	core.setButt(true, 'Режим кромления корпуса изменён');
	core.saveConfig();
};

// ----- Фурнитура -----
const mainBlockFurnVariantPanel = UI.components.NewPanel(mainForm, mainForm);
mainBlockFurnVariantPanel.Left = 5;
mainBlockFurnVariantPanel.Height = 30;
mainBlockFurnVariantPanel.Width = 290;
mainBlockFurnVariantPanel.ShowHint = true;
mainBlockFurnVariantPanel.BevelOuter = 0;
mainBlockFurnVariantPanel.ParentFont = true;

interface.WIDGETS.push(mainBlockFurnVariantPanel);
interface.CORPUS_WIDGETS.push(mainBlockFurnVariantPanel);

const mainBlockFurnVariantLabel = UI.components.NewLabel(mainBlockFurnVariantPanel, mainBlockFurnVariantPanel);
mainBlockFurnVariantLabel.Top = 5;
mainBlockFurnVariantLabel.Left = 0;
mainBlockFurnVariantLabel.AutoSize = false;
mainBlockFurnVariantLabel.Height = 25;
mainBlockFurnVariantLabel.Width = 145;
mainBlockFurnVariantLabel.Caption = 'Фурнитура';

const mainBlockFurnVariantEdit = createFurnitureSchemeSelector(
	mainBlockFurnVariantPanel,
	145,
	5,
	(info) => {
		core.furnitureInfo = info;
		interface.relayoutMainForm();
		core.mountFurnitureScheme(true, 'Схема фурнитуры корпуса изменена');
	},
	() => {
		core.furnitureInfo = null;
		interface.relayoutMainForm();
		core.mountFurnitureScheme(true, 'Схема фурнитуры корпуса очищена');
	},
);

// ----- Фурнитура задней стенки -----
const mainBlockFurnBackVariantPanel = UI.components.NewPanel(mainForm, mainForm);
mainBlockFurnBackVariantPanel.Left = 5;
mainBlockFurnBackVariantPanel.Height = 32;
mainBlockFurnBackVariantPanel.Width = 290;
mainBlockFurnBackVariantPanel.ShowHint = true;
mainBlockFurnBackVariantPanel.BevelOuter = 0;
mainBlockFurnBackVariantPanel.ParentFont = true;

interface.WIDGETS.push(mainBlockFurnBackVariantPanel);
interface.CORPUS_WIDGETS.push(mainBlockFurnBackVariantPanel);

const mainBlockFurnBackVariantLabel = UI.components.NewLabel(
	mainBlockFurnBackVariantPanel,
	mainBlockFurnBackVariantPanel,
);
mainBlockFurnBackVariantLabel.Top = 5;
mainBlockFurnBackVariantLabel.Left = 0;
mainBlockFurnBackVariantLabel.AutoSize = false;
mainBlockFurnBackVariantLabel.Height = 25;
mainBlockFurnBackVariantLabel.Width = 145;
mainBlockFurnBackVariantLabel.Caption = 'Фурнитура ЗС';

const mainBlockFurnBackVariantEdit = createFurnitureSchemeSelector(
	mainBlockFurnBackVariantPanel,
	145,
	5,
	(info) => {
		core.backFurnitureInfo = info;
		interface.relayoutMainForm();
		core.mountBackFurnitureScheme(true, 'Схема фурнитуры ЗС изменена');
	},
	() => {
		core.backFurnitureInfo = null;
		interface.relayoutMainForm();
		core.mountBackFurnitureScheme(true, 'Схема фурнитуры ЗС очищена');
	},
);

// ----- Базы схемы фурнитуры -----
const mainBlockFurnBaseXRow = createFurnitureBaseRow('База по X', ['Слева', 'Справа'], () => {
	core.mainBlockFurnBaseX = mainBlockFurnBaseXRow.edit.ItemIndex;
	core.remountFurnitureSchemes('База схемы фурнитуры по X изменена');
	core.saveConfig();
});
mainBlockFurnBaseXRow.edit.ItemIndex = core.mainBlockFurnBaseX;

const mainBlockFurnBaseYRow = createFurnitureBaseRow('База по Y', ['Сверху', 'Снизу'], () => {
	core.mainBlockFurnBaseY = mainBlockFurnBaseYRow.edit.ItemIndex;
	core.remountFurnitureSchemes('База схемы фурнитуры по Y изменена');
	core.saveConfig();
});
mainBlockFurnBaseYRow.edit.ItemIndex = core.mainBlockFurnBaseY;

const mainBlockFurnBaseZRow = createFurnitureBaseRow('База по Z', ['Спереди', 'Сзади'], () => {
	core.mainBlockFurnBaseZ = mainBlockFurnBaseZRow.edit.ItemIndex;
	core.remountFurnitureSchemes('База схемы фурнитуры по Z изменена');
	core.saveConfig();
});
mainBlockFurnBaseZRow.edit.ItemIndex = core.mainBlockFurnBaseZ;

// ----- Тип установки фурнитуры -----
const mainBlockFurnMountVariantPanel = UI.components.NewPanel(mainForm, mainForm);
mainBlockFurnMountVariantPanel.Left = 5;
mainBlockFurnMountVariantPanel.Height = 30;
mainBlockFurnMountVariantPanel.Width = 290;
mainBlockFurnMountVariantPanel.ShowHint = true;
mainBlockFurnMountVariantPanel.BevelOuter = 0;
mainBlockFurnMountVariantPanel.ParentFont = true;

interface.WIDGETS.push(mainBlockFurnMountVariantPanel);
interface.CORPUS_WIDGETS.push(mainBlockFurnMountVariantPanel);

const mainBlockFurnMountVariantLabel = UI.components.NewLabel(
	mainBlockFurnMountVariantPanel,
	mainBlockFurnMountVariantPanel,
);
mainBlockFurnMountVariantLabel.Top = 5;
mainBlockFurnMountVariantLabel.Left = 0;
mainBlockFurnMountVariantLabel.AutoSize = false;
mainBlockFurnMountVariantLabel.Height = 25;
mainBlockFurnMountVariantLabel.Width = 145;
mainBlockFurnMountVariantLabel.Caption = 'Вариант установки';

const mainBlockFurnMountVariantComboBox = UI.components.NewComboBox(
	mainBlockFurnMountVariantPanel,
	mainBlockFurnMountVariantPanel,
);
mainBlockFurnMountVariantComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
mainBlockFurnMountVariantComboBox.Properties.Items.Add('Изнутри');
mainBlockFurnMountVariantComboBox.Properties.Items.Add('Снаружи');
mainBlockFurnMountVariantComboBox.Properties.Items.Add('Снизу');
mainBlockFurnMountVariantComboBox.Properties.Items.Add('Сверху');
mainBlockFurnMountVariantComboBox.Properties.Items.Add('Видимая');
mainBlockFurnMountVariantComboBox.Properties.Items.Add('Невидимая');
mainBlockFurnMountVariantComboBox.Top = 5;
mainBlockFurnMountVariantComboBox.Left = 145;
mainBlockFurnMountVariantComboBox.AutoSize = false;
mainBlockFurnMountVariantComboBox.Height = 25;
mainBlockFurnMountVariantComboBox.Width = 145;
mainBlockFurnMountVariantComboBox.ItemIndex = core.mainBlockFurnMountVariant;

// ----- Событие изменения "Тип установки фурнитуры" -----
mainBlockFurnMountVariantComboBox.Properties.OnChange = () => {
	core.mainBlockFurnMountVariant = mainBlockFurnMountVariantComboBox.ItemIndex;
	core.mountFurnitureScheme(true, 'Вариант установки фурнитуры корпуса изменён');
	core.saveConfig();
};

// ----- Тип установки фурнитуры ЗС -----
const mainBlockFurnBackMountVariantPanel = UI.components.NewPanel(mainForm, mainForm);
mainBlockFurnBackMountVariantPanel.Left = 5;
mainBlockFurnBackMountVariantPanel.Height = 30;
mainBlockFurnBackMountVariantPanel.Width = 290;
mainBlockFurnBackMountVariantPanel.ShowHint = true;
mainBlockFurnBackMountVariantPanel.BevelOuter = 0;
mainBlockFurnBackMountVariantPanel.ParentFont = true;

interface.WIDGETS.push(mainBlockFurnBackMountVariantPanel);
interface.CORPUS_WIDGETS.push(mainBlockFurnBackMountVariantPanel);

const mainBlockFurnBackMountVariantLabel = UI.components.NewLabel(
	mainBlockFurnBackMountVariantPanel,
	mainBlockFurnBackMountVariantPanel,
);
mainBlockFurnBackMountVariantLabel.Top = 5;
mainBlockFurnBackMountVariantLabel.Left = 0;
mainBlockFurnBackMountVariantLabel.AutoSize = false;
mainBlockFurnBackMountVariantLabel.Height = 25;
mainBlockFurnBackMountVariantLabel.Width = 145;
mainBlockFurnBackMountVariantLabel.Caption = 'Вариант установки ЗС';

const mainBlockFurnBackMountVariantComboBox = UI.components.NewComboBox(
	mainBlockFurnBackMountVariantPanel,
	mainBlockFurnBackMountVariantPanel,
);
mainBlockFurnBackMountVariantComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
mainBlockFurnBackMountVariantComboBox.Properties.Items.Add('Изнутри');
mainBlockFurnBackMountVariantComboBox.Properties.Items.Add('Снаружи');
mainBlockFurnBackMountVariantComboBox.Properties.Items.Add('Снизу');
mainBlockFurnBackMountVariantComboBox.Properties.Items.Add('Сверху');
mainBlockFurnBackMountVariantComboBox.Properties.Items.Add('Видимая');
mainBlockFurnBackMountVariantComboBox.Properties.Items.Add('Невидимая');
mainBlockFurnBackMountVariantComboBox.Top = 5;
mainBlockFurnBackMountVariantComboBox.Left = 145;
mainBlockFurnBackMountVariantComboBox.AutoSize = false;
mainBlockFurnBackMountVariantComboBox.Height = 25;
mainBlockFurnBackMountVariantComboBox.Width = 145;
mainBlockFurnBackMountVariantComboBox.ItemIndex = core.backFurnMountVariant;

mainBlockFurnBackMountVariantComboBox.Properties.OnChange = () => {
	core.backFurnMountVariant = mainBlockFurnBackMountVariantComboBox.ItemIndex;
	core.mountBackFurnitureScheme(true, 'Вариант установки фурнитуры ЗС изменён');
	core.saveConfig();
};

// ----- Наполнение -----
// ----- Количество секций -----
const sectionCountPanel = UI.components.NewPanel(mainForm, mainForm);
sectionCountPanel.Left = 0;
sectionCountPanel.Height = 30;
sectionCountPanel.Width = 300;
sectionCountPanel.ShowHint = true;
sectionCountPanel.BevelOuter = 0;
sectionCountPanel.ParentFont = true;

interface.WIDGETS.push(sectionCountPanel);
interface.FILLING_WIDGETS.push(sectionCountPanel);

const sectionCountLabel = UI.components.NewLabel(sectionCountPanel, sectionCountPanel);
sectionCountLabel.AutoSize = false;
sectionCountLabel.Top = 5;
sectionCountLabel.Left = 5;
sectionCountLabel.Height = 25;
sectionCountLabel.Width = 145;
sectionCountLabel.Caption = 'Кол-во секций';

const sectionCountComboBox = UI.components.NewComboBox(sectionCountPanel, sectionCountPanel);
sectionCountComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
sectionCountComboBox.Properties.Items.Add('1');
sectionCountComboBox.Properties.Items.Add('2');
sectionCountComboBox.Properties.Items.Add('3');
sectionCountComboBox.Properties.Items.Add('4');
sectionCountComboBox.Top = 5;
sectionCountComboBox.Left = 150;
sectionCountComboBox.AutoSize = false;
sectionCountComboBox.Height = 25;
sectionCountComboBox.Width = 145;
sectionCountComboBox.ItemIndex = core.sectionCount;

// ----- Событие изменения "Количество секций" -----
sectionCountComboBox.Properties.OnChange = () => {
	core.sectionCount = sectionCountComboBox.ItemIndex;
	interface.updateReducedSection();
	// updateFacadeFields сама сбросит core.facadeVariant на "Нет", если
	// состояние "есть/нет перегородок" сменилось.
	interface.updateFacadeFields();
	interface.updateFacadeJointFields();
	interface.relayoutMainForm();
	core.rebuildBlock('Количество секций изменено');
	interface.saveConfig();
	core.saveConfig();
};

// ----- Вариант секций -----
const sectionVariantPanel = UI.components.NewPanel(mainForm, mainForm);
sectionVariantPanel.Left = 0;
sectionVariantPanel.Height = 30;
sectionVariantPanel.Width = 300;
sectionVariantPanel.ShowHint = true;
sectionVariantPanel.BevelOuter = 0;
sectionVariantPanel.ParentFont = true;

interface.WIDGETS.push(sectionVariantPanel);
interface.FILLING_WIDGETS.push(sectionVariantPanel);

const sectionVariantLabel = UI.components.NewLabel(sectionVariantPanel, sectionVariantPanel);
sectionVariantLabel.AutoSize = false;
sectionVariantLabel.Top = 5;
sectionVariantLabel.Left = 5;
sectionVariantLabel.Height = 25;
sectionVariantLabel.Width = 145;
sectionVariantLabel.Caption = 'Вариант секций';

const sectionVariantComboBox = UI.components.NewComboBox(sectionVariantPanel, sectionVariantPanel);
sectionVariantComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
sectionVariantComboBox.Properties.Items.Add('Равнозначно');
sectionVariantComboBox.Properties.Items.Add('Редактируемые');
sectionVariantComboBox.Top = 5;
sectionVariantComboBox.Left = 150;
sectionVariantComboBox.AutoSize = false;
sectionVariantComboBox.Height = 25;
sectionVariantComboBox.Width = 145;
sectionVariantComboBox.ItemIndex = core.sectionVariant;

// ----- Событие изменения "Количество секций" -----
sectionVariantComboBox.Properties.OnChange = () => {
	core.sectionVariant = sectionVariantComboBox.ItemIndex;
	interface.relayoutMainForm();
	interface.saveConfig();
	core.rebuildBlock('Вариант размеров секций изменён');
	core.saveConfig();
};

// ----- Уменьшаемая секция -----
const reducedSectionPanel = UI.components.NewPanel(mainForm, mainForm);
reducedSectionPanel.Left = 0;
reducedSectionPanel.Height = 30;
reducedSectionPanel.Width = 300;
reducedSectionPanel.ShowHint = true;
reducedSectionPanel.BevelOuter = 0;
reducedSectionPanel.ParentFont = true;

interface.WIDGETS.push(reducedSectionPanel);
interface.FILLING_WIDGETS.push(reducedSectionPanel);

const reducedSectionLabel = UI.components.NewLabel(reducedSectionPanel, reducedSectionPanel);
reducedSectionLabel.AutoSize = false;
reducedSectionLabel.Top = 5;
reducedSectionLabel.Left = 5;
reducedSectionLabel.Height = 25;
reducedSectionLabel.Width = 145;
reducedSectionLabel.Caption = 'Уменьшаемая секция';

const reducedSectionComboBoxes = [];
const sectionCountOptions = sectionCountComboBox.Properties.Items.ToStringArray();
for (let i = 0; i < sectionCountOptions.length; i++) {
	const comboBox = UI.components.NewComboBox(reducedSectionPanel, reducedSectionPanel);
	comboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
	for (let number = 1; number <= i + 1; number++) {
		comboBox.Properties.Items.Add(String(number));
	}
	comboBox.Top = 5;
	comboBox.Left = 150;
	comboBox.AutoSize = false;
	comboBox.Height = 25;
	comboBox.Width = 145;
	comboBox.Visible = false;
	comboBox.Properties.OnChange = () => {
		if (interface.updatingReducedSection || i !== core.sectionCount || comboBox.ItemIndex < 0) return;
		core.reducedSection = comboBox.ItemIndex + 1;
		interface.relayoutMainForm();
		core.rebuildBlock('Уменьшаемая секция изменена');
		interface.saveConfig();
		core.saveConfig();
	};
	reducedSectionComboBoxes.push(comboBox);
}

// ----- Размеры секций -----
for (let i = 0; i < sectionCountOptions.length; i++) {
	const number = i + 1;
	const panel = UI.components.NewPanel(mainForm, mainForm);
	panel.Left = 0;
	panel.Height = 30;
	panel.Width = 300;
	panel.ShowHint = true;
	panel.BevelOuter = 0;
	panel.ParentFont = true;
	interface.WIDGETS.push(panel);
	interface.FILLING_WIDGETS.push(panel);

	const label = UI.components.NewLabel(panel, panel);
	label.AutoSize = false;
	label.Top = 5;
	label.Left = 5;
	label.Height = 25;
	label.Width = 145;
	label.Caption = `Размер секции ${number}`;

	const calc = UI.components.NewCalcEdit(panel, panel);
	calc.AutoSize = false;
	calc.Top = 5;
	calc.Left = 150;
	calc.Height = 25;
	calc.Width = 145;
	calc.Properties.OnEditValueChanged = () => {
		if (interface.updatingSectionSizes || !panel.Visible) return;
		core.setSectionSize(number, calc.Value);
		core.rebuildBlock(`Размер секции ${number} изменён`);
		core.saveConfig();
	};
	interface.SECTION_SIZE_WIDGETS.push({ panel, calc });
}

// ----- Полки по секциям -----
// Строка настроек одной секции: метка, комбобокс или числовое поле.
function createShelfRow(caption, items) {
	const panel = UI.components.NewPanel(mainForm, mainForm);
	panel.Left = 0;
	panel.Height = 30;
	panel.Width = 300;
	panel.ShowHint = true;
	panel.BevelOuter = 0;
	panel.ParentFont = true;
	interface.WIDGETS.push(panel);
	interface.FILLING_WIDGETS.push(panel);

	const label = UI.components.NewLabel(panel, panel);
	label.AutoSize = false;
	label.Top = 5;
	label.Left = 5;
	label.Height = 25;
	label.Width = 145;
	label.Caption = caption;

	const edit = items ? UI.components.NewComboBox(panel, panel) : UI.components.NewCalcEdit(panel, panel);
	edit.AutoSize = false;
	edit.Top = 5;
	edit.Left = 150;
	edit.Height = 25;
	edit.Width = 145;
	if (items) {
		edit.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
		for (const item of items) edit.Properties.Items.Add(item);
	}
	return { panel, edit };
}

for (let i = 0; i < sectionCountOptions.length; i++) {
	interface.SHELF_WIDGETS.push({});
}

// Меняет настройку полок секции, синхронизирует форму и пересобирает блок.
function changeShelfSetting(i, key, value) {
	const widgets = interface.SHELF_WIDGETS[i];
	if (interface.updatingShelves || !widgets[key].panel.Visible) return;
	const settings = core.getShelfSettings(i);
	if (key === 'top' || key === 'bottom') {
		core.setShelfOffset(i, key, value);
	} else if (key === 'layout') {
		// Перед переходом из равномерного режима фиксируем реальные отступы.
		core.calculateShelfPositions(i, core.getShelfHeight());
		settings.layout = value;
	} else if (key === 'count') {
		if (Number.isFinite(value)) settings.count = Math.max(1, Math.floor(value));
	} else {
		settings.enabled = value === 1;
	}
	const historyNames = {
		enabled: `Полки в секции ${i + 1} изменены`,
		count: `Количество полок в секции ${i + 1} изменено`,
		layout: `Расположение полок в секции ${i + 1} изменено`,
		top: `Верхний отступ полок в секции ${i + 1} изменён`,
		bottom: `Нижний отступ полок в секции ${i + 1} изменён`,
	};
	core.rebuildBlock(historyNames[key]);
	// Режим «Отступы» может не изменить фактическую геометрию, но должен
	// сразу показать поля верхнего и нижнего отступов.
	interface.updateShelfFields();
	interface.saveConfig();
	core.saveConfig();
}

// Сначала — есть ли полки, подряд для всех секций...
for (let i = 0; i < sectionCountOptions.length; i++) {
	const widgets = interface.SHELF_WIDGETS[i];
	widgets.enabled = createShelfRow(`Полки сек. ${i + 1}`, ['Нет', 'Да']);
	widgets.enabled.edit.Properties.OnChange = () => changeShelfSetting(i, 'enabled', widgets.enabled.edit.ItemIndex);
}

// ...затем настройки полок для всех секций отдельным блоком — чтобы вкладка
// не выглядела одной сплошной кучей полей.
for (let i = 0; i < sectionCountOptions.length; i++) {
	const widgets = interface.SHELF_WIDGETS[i];
	const number = i + 1;
	widgets.count = createShelfRow(`Кол-во полок (${number})`);
	widgets.layout = createShelfRow(`Отст. полок (${number})`, ['Равнозначно', 'Отступы']);
	widgets.top = createShelfRow(`Отст. сверху (${number})`);
	widgets.bottom = createShelfRow(`Отст. снизу (${number})`);

	widgets.count.edit.Properties.OnEditValueChanged = () => changeShelfSetting(i, 'count', widgets.count.edit.Value);
	widgets.layout.edit.Properties.OnChange = () => changeShelfSetting(i, 'layout', widgets.layout.edit.ItemIndex);
	widgets.top.edit.Properties.OnEditValueChanged = () => changeShelfSetting(i, 'top', widgets.top.edit.Value);
	widgets.bottom.edit.Properties.OnEditValueChanged = () =>
		changeShelfSetting(i, 'bottom', widgets.bottom.edit.Value);
}

// У FurnitureEdit фильтр не документирован; используем диалог с явными фильтрами.
// Возвращает поле, кнопки выбора/очистки и передаёт схему в onSelected.
function createFurnitureSchemeSelector(
	panel,
	left,
	top,
	onSelected,
	onCleared,
	paramFilter = new Set([fastenerOperations.paramFastType.scheme]),
) {
	panel.Height = 32; // Кнопка 27 px и прежний межстрочный отступ 5 px.
	const edit = UI.components.NewTextEdit(panel, panel);
	edit.AutoSize = false;
	edit.Top = top + 1;
	edit.Left = left;
	edit.Height = 25;
	edit.Width = 81; // Поле + «…» + «X» укладываются в прежние 145 px.
	edit.Properties.ReadOnly = true;

	const button = UI.components.NewButton(panel, panel);
	button.AutoSize = false;
	button.Top = top;
	button.Left = edit.Left + edit.Width + 5;
	button.Height = 27;
	button.Width = 27;
	button.Caption = '…';
	button.OnClick = () => {
		// Диалог получает отдельный объект: отмена не меняет установленную схему.
		const info = fastenerOperations.CreateFurnitureInfo();
		if (!fastenerOperations.ChooseFurnitureInfo(info, paramFilter, new Set([fastenerOperations.datumMode.joint])))
			return;
		edit.EditValue = furnitureInfoCaption(info);
		onSelected(info);
	};

	const clearButton = UI.components.NewButton(panel, panel);
	clearButton.AutoSize = false;
	clearButton.Top = top;
	clearButton.Left = button.Left + button.Width + 5;
	clearButton.Height = 27;
	clearButton.Width = 27;
	clearButton.Caption = 'X';
	clearButton.Hint = 'Очистить схему фурнитуры';
	clearButton.ShowHint = true;
	clearButton.OnClick = () => {
		if (!edit.EditValue) return;
		onCleared();
		edit.EditValue = '';
	};
	return { edit, button, clearButton };
}

// Создаёт строку выбора одной координаты базы схемы крепежа.
function createFurnitureBaseRow(caption, items, onChange) {
	const panel = UI.components.NewPanel(mainForm, mainForm);
	panel.Left = 5;
	panel.Height = 30;
	panel.Width = 290;
	panel.ShowHint = true;
	panel.BevelOuter = 0;
	panel.ParentFont = true;
	interface.WIDGETS.push(panel);
	interface.CORPUS_WIDGETS.push(panel);

	const label = UI.components.NewLabel(panel, panel);
	label.Top = 5;
	label.Left = 0;
	label.AutoSize = false;
	label.Height = 25;
	label.Width = 145;
	label.Caption = caption;

	const edit = UI.components.NewComboBox(panel, panel);
	edit.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
	for (const item of items) edit.Properties.Items.Add(item);
	edit.Top = 5;
	edit.Left = 145;
	edit.AutoSize = false;
	edit.Height = 25;
	edit.Width = 145;
	edit.Properties.OnChange = () => {
		if (interface.isInitializing || interface.isApplyingConfig) return;
		onChange();
	};
	return { panel, edit };
}

// ----- Отступ полок (доп. отступ от фасадов/перегородок, только для полок) -----
const shelfIndentPanel = UI.components.NewPanel(mainForm, mainForm);
shelfIndentPanel.Left = 0;
shelfIndentPanel.Height = 30;
shelfIndentPanel.Width = 300;
shelfIndentPanel.ShowHint = true;
shelfIndentPanel.BevelOuter = 0;
shelfIndentPanel.ParentFont = true;

interface.WIDGETS.push(shelfIndentPanel);
interface.FILLING_WIDGETS.push(shelfIndentPanel);

const shelfIndentLabel = UI.components.NewLabel(shelfIndentPanel, shelfIndentPanel);
shelfIndentLabel.AutoSize = false;
shelfIndentLabel.Top = 5;
shelfIndentLabel.Left = 5;
shelfIndentLabel.Height = 25;
shelfIndentLabel.Width = 145;
shelfIndentLabel.Caption = 'Отст. полок спереди:';

const shelfIndentCalc = UI.components.NewCalcEdit(shelfIndentPanel, shelfIndentPanel);
shelfIndentCalc.AutoSize = false;
shelfIndentCalc.Top = 5;
shelfIndentCalc.Left = 150;
shelfIndentCalc.Height = 25;
shelfIndentCalc.Width = 145;
shelfIndentCalc.Value = core.shelfIndent;

// ----- Событие изменения "Отступ полок" -----
shelfIndentCalc.Properties.OnEditValueChanged = () => {
	core.shelfIndent = shelfIndentCalc.Value;
	core.rebuildBlock('Передний отступ полок изменён');
	core.saveConfig();
};

// ----- Отдельная схема крепежа полок -----
const shelfFurnVariantPanel = UI.components.NewPanel(mainForm, mainForm);
shelfFurnVariantPanel.Left = 0;
shelfFurnVariantPanel.Height = 30;
shelfFurnVariantPanel.Width = 300;
shelfFurnVariantPanel.ShowHint = true;
shelfFurnVariantPanel.BevelOuter = 0;
shelfFurnVariantPanel.ParentFont = true;
interface.WIDGETS.push(shelfFurnVariantPanel);
interface.FILLING_WIDGETS.push(shelfFurnVariantPanel);

const shelfFurnVariantLabel = UI.components.NewLabel(shelfFurnVariantPanel, shelfFurnVariantPanel);
shelfFurnVariantLabel.AutoSize = false;
shelfFurnVariantLabel.Top = 5;
shelfFurnVariantLabel.Left = 5;
shelfFurnVariantLabel.Height = 25;
shelfFurnVariantLabel.Width = 145;
shelfFurnVariantLabel.Caption = 'Фурнитура';

const shelfFurnVariantEdit = createFurnitureSchemeSelector(
	shelfFurnVariantPanel,
	150,
	5,
	(info) => {
		core.shelfFurnitureInfo = info;
		interface.relayoutMainForm();
		core.mountShelfFurnitureScheme(true, 'Схема фурнитуры полок изменена');
	},
	() => {
		core.shelfFurnitureInfo = null;
		interface.relayoutMainForm();
		core.mountShelfFurnitureScheme(true, 'Схема фурнитуры полок очищена');
	},
);

const shelfFurnMountVariantRow = createShelfRow('Вариант установки', [
	'Изнутри',
	'Снаружи',
	'Снизу',
	'Сверху',
	'Видимая',
	'Невидимая',
]);
interface.FILLING_FOOTER_WIDGETS.push(shelfFurnVariantPanel, shelfFurnMountVariantRow.panel);
shelfFurnMountVariantRow.edit.ItemIndex = core.shelfFurnMountVariant;
shelfFurnMountVariantRow.edit.Properties.OnChange = () => {
	core.shelfFurnMountVariant = shelfFurnMountVariantRow.edit.ItemIndex;
	core.mountShelfFurnitureScheme(true, 'Вариант установки фурнитуры полок изменён');
	core.saveConfig();
};

// ----- Фасады -----
// ----- Фасады: режим -----
const facadeVariantPanel = UI.components.NewPanel(mainForm, mainForm);
facadeVariantPanel.Left = 0;
facadeVariantPanel.Height = 30;
facadeVariantPanel.Width = 300;
facadeVariantPanel.ShowHint = true;
facadeVariantPanel.BevelOuter = 0;
facadeVariantPanel.ParentFont = true;

interface.WIDGETS.push(facadeVariantPanel);
interface.FACADE_WIDGETS.push(facadeVariantPanel);

const facadeVariantLabel = UI.components.NewLabel(facadeVariantPanel, facadeVariantPanel);
facadeVariantLabel.AutoSize = false;
facadeVariantLabel.Top = 5;
facadeVariantLabel.Left = 5;
facadeVariantLabel.Height = 25;
facadeVariantLabel.Width = 145;
facadeVariantLabel.Caption = 'Фасады';

const facadeVariantComboBox = UI.components.NewComboBox(facadeVariantPanel, facadeVariantPanel);
facadeVariantComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
facadeVariantComboBox.Top = 5;
facadeVariantComboBox.Left = 150;
facadeVariantComboBox.AutoSize = false;
facadeVariantComboBox.Height = 25;
facadeVariantComboBox.Width = 145;

// ----- Событие изменения "Фасады" -----
facadeVariantComboBox.Properties.OnChange = () => {
	if (interface.isInitializing || interface.updatingFacadeFields) return;
	const hasPartitions = core.sectionCount > 0;
	core.facadeVariant = facadeVariantComboBox.ItemIndex === 0 ? 0 : hasPartitions ? 1 : 2;
	interface.relayoutMainForm();
	core.rebuildBlock('Вариант фасадов изменён');
	interface.saveConfig();
	core.saveConfig();
};

// ----- Фурнитура фасадов -----
const facadeFurniturePanel = UI.components.NewPanel(mainForm, mainForm);
facadeFurniturePanel.Left = 5;
facadeFurniturePanel.Height = 32;
facadeFurniturePanel.Width = 290;
facadeFurniturePanel.ShowHint = true;
facadeFurniturePanel.BevelOuter = 0;
facadeFurniturePanel.ParentFont = true;
interface.WIDGETS.push(facadeFurniturePanel);
interface.FACADE_WIDGETS.push(facadeFurniturePanel);

const facadeFurnitureLabel = UI.components.NewLabel(facadeFurniturePanel, facadeFurniturePanel);
facadeFurnitureLabel.Top = 5;
facadeFurnitureLabel.Left = 0;
facadeFurnitureLabel.AutoSize = false;
facadeFurnitureLabel.Height = 25;
facadeFurnitureLabel.Width = 145;
facadeFurnitureLabel.Caption = 'Фурнитура';

const facadeFurnitureEdit = createFurnitureSchemeSelector(
	facadeFurniturePanel,
	145,
	5,
	(info) => {
		core.facadeFurnitureInfo = info;
		interface.relayoutMainForm();
		core.mountFacadeFurnitureScheme(true, 'Схема фурнитуры фасадов изменена');
	},
	() => {
		core.facadeFurnitureInfo = null;
		interface.relayoutMainForm();
		core.mountFacadeFurnitureScheme(true, 'Схема фурнитуры фасадов очищена');
	},
	new Set([fastenerOperations.paramFastType.scheme]),
);

// ----- Фурнитура полунакладных фасадов -----
const halfFacadeFurniturePanel = UI.components.NewPanel(mainForm, mainForm);
halfFacadeFurniturePanel.Left = 5;
halfFacadeFurniturePanel.Height = 32;
halfFacadeFurniturePanel.Width = 290;
halfFacadeFurniturePanel.ShowHint = true;
halfFacadeFurniturePanel.BevelOuter = 0;
halfFacadeFurniturePanel.ParentFont = true;
interface.WIDGETS.push(halfFacadeFurniturePanel);
interface.FACADE_WIDGETS.push(halfFacadeFurniturePanel);

const halfFacadeFurnitureLabel = UI.components.NewLabel(halfFacadeFurniturePanel, halfFacadeFurniturePanel);
halfFacadeFurnitureLabel.Top = 5;
halfFacadeFurnitureLabel.Left = 0;
halfFacadeFurnitureLabel.AutoSize = false;
halfFacadeFurnitureLabel.Height = 25;
halfFacadeFurnitureLabel.Width = 145;
halfFacadeFurnitureLabel.Caption = 'Фурнитура полунакл.';

const halfFacadeFurnitureEdit = createFurnitureSchemeSelector(
	halfFacadeFurniturePanel,
	145,
	5,
	(info) => {
		core.halfFacadeFurnitureInfo = info;
		interface.relayoutMainForm();
		core.mountHalfFacadeFurnitureScheme(true, 'Схема полунакладной фурнитуры изменена');
	},
	() => {
		core.halfFacadeFurnitureInfo = null;
		interface.relayoutMainForm();
		core.mountHalfFacadeFurnitureScheme(true, 'Схема полунакладной фурнитуры очищена');
	},
	new Set([fastenerOperations.paramFastType.scheme]),
);

// Создаёт выбор стороны перегородки для полунакладного фасада.
function createFacadeJointRow(caption, facadeCount, facadeIndex, collection) {
	const panel = UI.components.NewPanel(mainForm, mainForm);
	panel.Left = 0;
	panel.Height = 30;
	panel.Width = 300;
	panel.ShowHint = true;
	panel.BevelOuter = 0;
	panel.ParentFont = true;
	interface.WIDGETS.push(panel);
	interface.FACADE_WIDGETS.push(panel);

	const label = UI.components.NewLabel(panel, panel);
	label.AutoSize = false;
	label.Top = 5;
	label.Left = 5;
	label.Height = 25;
	label.Width = 145;
	label.Caption = caption;

	const edit = UI.components.NewComboBox(panel, panel);
	edit.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
	edit.Properties.Items.Add('Слева');
	edit.Properties.Items.Add('Справа');
	edit.Top = 5;
	edit.Left = 150;
	edit.AutoSize = false;
	edit.Height = 25;
	edit.Width = 145;
	const row = { panel, edit, facadeIndex };
	if (collection) collection.push(row);
	edit.Properties.OnChange = () => {
		if (interface.isInitializing || interface.isApplyingConfig || interface.updatingFacadeJoints) return;
		const count = facadeCount === null ? core.sectionCount + 1 : facadeCount;
		core.setFacadeJointSide(count, facadeIndex, edit.ItemIndex);
		core.updateFacadeFurniturePairs();
		core.remountFacadeFurnitureSchemes('Стык фасада изменён');
		core.saveConfig();
	};
	return row;
}

const facadeSingleJointRow = createFacadeJointRow('Стык', 1, 0);
const facadeMiddleJointRows = [
	createFacadeJointRow('Стык фасада №2', null, 1, interface.FACADE_JOINT_WIDGETS),
	createFacadeJointRow('Стык фасада №3', null, 2, interface.FACADE_JOINT_WIDGETS),
];
facadeSingleJointRow.edit.ItemIndex = core.getFacadeJointSide(1, 0);
for (const row of facadeMiddleJointRows) {
	row.edit.ItemIndex = core.getFacadeJointSide(core.sectionCount + 1, row.facadeIndex);
}
interface.FACADE_FOOTER_WIDGETS.push(
	facadeFurniturePanel,
	halfFacadeFurniturePanel,
	facadeSingleJointRow.panel,
	...facadeMiddleJointRows.map((row) => row.panel),
);

// ----- Редактируемые фасады: ориентация -----
const facadeEditableOrientationPanel = UI.components.NewPanel(mainForm, mainForm);
facadeEditableOrientationPanel.Left = 0;
facadeEditableOrientationPanel.Height = 30;
facadeEditableOrientationPanel.Width = 300;
facadeEditableOrientationPanel.ShowHint = true;
facadeEditableOrientationPanel.BevelOuter = 0;
facadeEditableOrientationPanel.ParentFont = true;

interface.WIDGETS.push(facadeEditableOrientationPanel);
interface.FACADE_WIDGETS.push(facadeEditableOrientationPanel);

const facadeEditableOrientationLabel = UI.components.NewLabel(
	facadeEditableOrientationPanel,
	facadeEditableOrientationPanel,
);
facadeEditableOrientationLabel.AutoSize = false;
facadeEditableOrientationLabel.Top = 5;
facadeEditableOrientationLabel.Left = 5;
facadeEditableOrientationLabel.Height = 25;
facadeEditableOrientationLabel.Width = 145;
facadeEditableOrientationLabel.Caption = 'Ориентация';

const facadeEditableOrientationComboBox = UI.components.NewComboBox(
	facadeEditableOrientationPanel,
	facadeEditableOrientationPanel,
);
facadeEditableOrientationComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
facadeEditableOrientationComboBox.Properties.Items.Add('Вертикальные');
facadeEditableOrientationComboBox.Properties.Items.Add('Горизонтальные');
facadeEditableOrientationComboBox.Top = 5;
facadeEditableOrientationComboBox.Left = 150;
facadeEditableOrientationComboBox.AutoSize = false;
facadeEditableOrientationComboBox.Height = 25;
facadeEditableOrientationComboBox.Width = 145;
facadeEditableOrientationComboBox.ItemIndex = core.facadeEditableOrientation;

// ----- Событие изменения "Ориентация" -----
facadeEditableOrientationComboBox.Properties.OnChange = () => {
	core.facadeEditableOrientation = facadeEditableOrientationComboBox.ItemIndex;
	interface.relayoutMainForm();
	core.rebuildBlock('Ориентация фасадов изменена');
	core.saveConfig();
};

// ----- Редактируемые фасады: количество -----
const facadeEditableCountPanel = UI.components.NewPanel(mainForm, mainForm);
facadeEditableCountPanel.Left = 0;
facadeEditableCountPanel.Height = 30;
facadeEditableCountPanel.Width = 300;
facadeEditableCountPanel.ShowHint = true;
facadeEditableCountPanel.BevelOuter = 0;
facadeEditableCountPanel.ParentFont = true;

interface.WIDGETS.push(facadeEditableCountPanel);
interface.FACADE_WIDGETS.push(facadeEditableCountPanel);

const facadeEditableCountLabel = UI.components.NewLabel(facadeEditableCountPanel, facadeEditableCountPanel);
facadeEditableCountLabel.AutoSize = false;
facadeEditableCountLabel.Top = 5;
facadeEditableCountLabel.Left = 5;
facadeEditableCountLabel.Height = 25;
facadeEditableCountLabel.Width = 145;
facadeEditableCountLabel.Caption = 'Количество';

const facadeEditableCountCalc = UI.components.NewCalcEdit(facadeEditableCountPanel, facadeEditableCountPanel);
facadeEditableCountCalc.AutoSize = false;
facadeEditableCountCalc.Top = 5;
facadeEditableCountCalc.Left = 150;
facadeEditableCountCalc.Height = 25;
facadeEditableCountCalc.Width = 145;
facadeEditableCountCalc.Value = core.facadeEditableCount;

// ----- Событие изменения "Количество" -----
facadeEditableCountCalc.Properties.OnEditValueChanged = () => {
	core.facadeEditableCount = Math.max(1, Math.floor(facadeEditableCountCalc.Value) || 1);
	interface.updateFacadeEditableLayoutOptions();
	interface.relayoutMainForm();
	core.rebuildBlock('Количество фасадов изменено');
	core.saveConfig();
};

// ----- Редактируемые горизонтальные: Высота фасадов -----
const facadeEditableLayoutPanel = UI.components.NewPanel(mainForm, mainForm);
facadeEditableLayoutPanel.Left = 0;
facadeEditableLayoutPanel.Height = 30;
facadeEditableLayoutPanel.Width = 300;
facadeEditableLayoutPanel.ShowHint = true;
facadeEditableLayoutPanel.BevelOuter = 0;
facadeEditableLayoutPanel.ParentFont = true;

interface.WIDGETS.push(facadeEditableLayoutPanel);
interface.FACADE_WIDGETS.push(facadeEditableLayoutPanel);

const facadeEditableLayoutLabel = UI.components.NewLabel(facadeEditableLayoutPanel, facadeEditableLayoutPanel);
facadeEditableLayoutLabel.AutoSize = false;
facadeEditableLayoutLabel.Top = 5;
facadeEditableLayoutLabel.Left = 5;
facadeEditableLayoutLabel.Height = 25;
facadeEditableLayoutLabel.Width = 145;
facadeEditableLayoutLabel.Caption = 'Высота фасадов';

const facadeEditableLayoutComboBox = UI.components.NewComboBox(facadeEditableLayoutPanel, facadeEditableLayoutPanel);
facadeEditableLayoutComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
facadeEditableLayoutComboBox.Properties.Items.Add('Равные');
facadeEditableLayoutComboBox.Properties.Items.Add('Изменение 1го');
facadeEditableLayoutComboBox.Properties.Items.Add('Изменение 2ух');
facadeEditableLayoutComboBox.Top = 5;
facadeEditableLayoutComboBox.Left = 150;
facadeEditableLayoutComboBox.AutoSize = false;
facadeEditableLayoutComboBox.Height = 25;
facadeEditableLayoutComboBox.Width = 145;
facadeEditableLayoutComboBox.ItemIndex = core.facadeEditableLayout;

// ----- Событие изменения "Высота фасадов" -----
facadeEditableLayoutComboBox.Properties.OnChange = () => {
	if (interface.updatingFacadeLayout) return;
	core.facadeEditableLayout = facadeEditableLayoutComboBox.ItemIndex;
	if (core.facadeEditableLayout === 0) {
		core.syncEditableFacadeSizesToEqual();
		interface.updateFacadeSizeFields();
	}
	interface.relayoutMainForm();
	core.rebuildBlock('Вариант высоты фасадов изменён');
	core.saveConfig();
};

// ----- Редактируемые горизонтальные: база -----
const facadeEditableBasePanel = UI.components.NewPanel(mainForm, mainForm);
facadeEditableBasePanel.Left = 0;
facadeEditableBasePanel.Height = 30;
facadeEditableBasePanel.Width = 300;
facadeEditableBasePanel.ShowHint = true;
facadeEditableBasePanel.BevelOuter = 0;
facadeEditableBasePanel.ParentFont = true;

interface.WIDGETS.push(facadeEditableBasePanel);
interface.FACADE_WIDGETS.push(facadeEditableBasePanel);

const facadeEditableBaseLabel = UI.components.NewLabel(facadeEditableBasePanel, facadeEditableBasePanel);
facadeEditableBaseLabel.AutoSize = false;
facadeEditableBaseLabel.Top = 5;
facadeEditableBaseLabel.Left = 5;
facadeEditableBaseLabel.Height = 25;
facadeEditableBaseLabel.Width = 145;
facadeEditableBaseLabel.Caption = 'База';

const facadeEditableBaseComboBox = UI.components.NewComboBox(facadeEditableBasePanel, facadeEditableBasePanel);
facadeEditableBaseComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
facadeEditableBaseComboBox.Properties.Items.Add('Сверху');
facadeEditableBaseComboBox.Properties.Items.Add('Снизу');
facadeEditableBaseComboBox.Top = 5;
facadeEditableBaseComboBox.Left = 150;
facadeEditableBaseComboBox.AutoSize = false;
facadeEditableBaseComboBox.Height = 25;
facadeEditableBaseComboBox.Width = 145;
facadeEditableBaseComboBox.ItemIndex = core.facadeEditableBase;

// ----- Событие изменения "База" -----
facadeEditableBaseComboBox.Properties.OnChange = () => {
	core.facadeEditableBase = facadeEditableBaseComboBox.ItemIndex;
	core.rebuildBlock('База изменяемых фасадов изменена');
	core.saveConfig();
};

// ----- Редактируемые горизонтальные: Высота 1го -----
const facadeEditableSize1Panel = UI.components.NewPanel(mainForm, mainForm);
facadeEditableSize1Panel.Left = 0;
facadeEditableSize1Panel.Height = 30;
facadeEditableSize1Panel.Width = 300;
facadeEditableSize1Panel.ShowHint = true;
facadeEditableSize1Panel.BevelOuter = 0;
facadeEditableSize1Panel.ParentFont = true;

interface.WIDGETS.push(facadeEditableSize1Panel);
interface.FACADE_WIDGETS.push(facadeEditableSize1Panel);

const facadeEditableSize1Label = UI.components.NewLabel(facadeEditableSize1Panel, facadeEditableSize1Panel);
facadeEditableSize1Label.AutoSize = false;
facadeEditableSize1Label.Top = 5;
facadeEditableSize1Label.Left = 5;
facadeEditableSize1Label.Height = 25;
facadeEditableSize1Label.Width = 145;
facadeEditableSize1Label.Caption = 'Высота 1го';

const facadeEditableSize1Calc = UI.components.NewCalcEdit(facadeEditableSize1Panel, facadeEditableSize1Panel);
facadeEditableSize1Calc.AutoSize = false;
facadeEditableSize1Calc.Top = 5;
facadeEditableSize1Calc.Left = 150;
facadeEditableSize1Calc.Height = 25;
facadeEditableSize1Calc.Width = 145;
facadeEditableSize1Calc.Value = core.facadeEditableSize1;

// ----- Событие изменения "Высота 1го" -----
facadeEditableSize1Calc.Properties.OnEditValueChanged = () => {
	if (interface.updatingFacadeSizes) return;
	core.facadeEditableSize1 = facadeEditableSize1Calc.Value;
	core.rebuildBlock('Высота первого фасада изменена');
	core.saveConfig();
};

// ----- Редактируемые горизонтальные: Высота 2го -----
const facadeEditableSize2Panel = UI.components.NewPanel(mainForm, mainForm);
facadeEditableSize2Panel.Left = 0;
facadeEditableSize2Panel.Height = 30;
facadeEditableSize2Panel.Width = 300;
facadeEditableSize2Panel.ShowHint = true;
facadeEditableSize2Panel.BevelOuter = 0;
facadeEditableSize2Panel.ParentFont = true;

interface.WIDGETS.push(facadeEditableSize2Panel);
interface.FACADE_WIDGETS.push(facadeEditableSize2Panel);

const facadeEditableSize2Label = UI.components.NewLabel(facadeEditableSize2Panel, facadeEditableSize2Panel);
facadeEditableSize2Label.AutoSize = false;
facadeEditableSize2Label.Top = 5;
facadeEditableSize2Label.Left = 5;
facadeEditableSize2Label.Height = 25;
facadeEditableSize2Label.Width = 145;
facadeEditableSize2Label.Caption = 'Высота 2го';

const facadeEditableSize2Calc = UI.components.NewCalcEdit(facadeEditableSize2Panel, facadeEditableSize2Panel);
facadeEditableSize2Calc.AutoSize = false;
facadeEditableSize2Calc.Top = 5;
facadeEditableSize2Calc.Left = 150;
facadeEditableSize2Calc.Height = 25;
facadeEditableSize2Calc.Width = 145;
facadeEditableSize2Calc.Value = core.facadeEditableSize2;

// ----- Событие изменения "Высота 2го" -----
facadeEditableSize2Calc.Properties.OnEditValueChanged = () => {
	if (interface.updatingFacadeSizes) return;
	core.facadeEditableSize2 = facadeEditableSize2Calc.Value;
	core.rebuildBlock('Высота второго фасада изменена');
	core.saveConfig();
};

// ----- Фасады: наложение -----
const facadeMountVariantPanel = UI.components.NewPanel(mainForm, mainForm);
facadeMountVariantPanel.Left = 0;
facadeMountVariantPanel.Height = 30;
facadeMountVariantPanel.Width = 300;
facadeMountVariantPanel.ShowHint = true;
facadeMountVariantPanel.BevelOuter = 0;
facadeMountVariantPanel.ParentFont = true;

interface.WIDGETS.push(facadeMountVariantPanel);
interface.FACADE_WIDGETS.push(facadeMountVariantPanel);

const facadeMountVariantLabel = UI.components.NewLabel(facadeMountVariantPanel, facadeMountVariantPanel);
facadeMountVariantLabel.AutoSize = false;
facadeMountVariantLabel.Top = 5;
facadeMountVariantLabel.Left = 5;
facadeMountVariantLabel.Height = 25;
facadeMountVariantLabel.Width = 145;
facadeMountVariantLabel.Caption = 'Наложение';

const facadeMountVariantComboBox = UI.components.NewComboBox(facadeMountVariantPanel, facadeMountVariantPanel);
facadeMountVariantComboBox.Properties.DropDownListStyle = UI.constants.cxEditDropDownListStyle.fixedList;
facadeMountVariantComboBox.Properties.Items.Add('Накладные');
facadeMountVariantComboBox.Properties.Items.Add('Вкладные');
facadeMountVariantComboBox.Top = 5;
facadeMountVariantComboBox.Left = 150;
facadeMountVariantComboBox.AutoSize = false;
facadeMountVariantComboBox.Height = 25;
facadeMountVariantComboBox.Width = 145;
facadeMountVariantComboBox.ItemIndex = core.facadeMountVariant;

// ----- Событие изменения "Наложение" -----
facadeMountVariantComboBox.Properties.OnChange = () => {
	core.facadeMountVariant = facadeMountVariantComboBox.ItemIndex;
	interface.relayoutMainForm();
	core.rebuildBlock('Наложение фасадов изменено');
	interface.saveConfig();
	core.saveConfig();
};

// ----- Зазор фасадов (сверху/снизу/по бокам, один на оба наложения) -----
const facadeGapPanel = UI.components.NewPanel(mainForm, mainForm);
facadeGapPanel.Left = 0;
facadeGapPanel.Height = 30;
facadeGapPanel.Width = 300;
facadeGapPanel.ShowHint = true;
facadeGapPanel.BevelOuter = 0;
facadeGapPanel.ParentFont = true;

interface.WIDGETS.push(facadeGapPanel);
interface.FACADE_WIDGETS.push(facadeGapPanel);

const facadeGapLabel = UI.components.NewLabel(facadeGapPanel, facadeGapPanel);
facadeGapLabel.AutoSize = false;
facadeGapLabel.Top = 5;
facadeGapLabel.Left = 5;
facadeGapLabel.Height = 25;
facadeGapLabel.Width = 145;
facadeGapLabel.Caption = 'Зазор фасадов:';

const facadeGapCalc = UI.components.NewCalcEdit(facadeGapPanel, facadeGapPanel);
facadeGapCalc.AutoSize = false;
facadeGapCalc.Top = 5;
facadeGapCalc.Left = 150;
facadeGapCalc.Height = 25;
facadeGapCalc.Width = 145;
facadeGapCalc.Value = core.facadeGap;

// ----- Событие изменения "Зазор фасадов" -----
facadeGapCalc.Properties.OnEditValueChanged = () => {
	core.facadeGap = facadeGapCalc.Value;
	core.rebuildBlock('Зазор фасадов изменён');
	core.saveConfig();
};

// ----- Отступ вкладных фасадов (утопление вглубь от лица корпуса) -----
const facadeIndentPanel = UI.components.NewPanel(mainForm, mainForm);
facadeIndentPanel.Left = 0;
facadeIndentPanel.Height = 30;
facadeIndentPanel.Width = 300;
facadeIndentPanel.ShowHint = true;
facadeIndentPanel.BevelOuter = 0;
facadeIndentPanel.ParentFont = true;

interface.WIDGETS.push(facadeIndentPanel);
interface.FACADE_WIDGETS.push(facadeIndentPanel);

const facadeIndentLabel = UI.components.NewLabel(facadeIndentPanel, facadeIndentPanel);
facadeIndentLabel.AutoSize = false;
facadeIndentLabel.Top = 5;
facadeIndentLabel.Left = 5;
facadeIndentLabel.Height = 25;
facadeIndentLabel.Width = 145;
facadeIndentLabel.Caption = 'Отступ фасадов:';

const facadeIndentCalc = UI.components.NewCalcEdit(facadeIndentPanel, facadeIndentPanel);
facadeIndentCalc.AutoSize = false;
facadeIndentCalc.Top = 5;
facadeIndentCalc.Left = 150;
facadeIndentCalc.Height = 25;
facadeIndentCalc.Width = 145;
facadeIndentCalc.Value = core.facadeIndent;

// ----- Событие изменения "Отступ фасадов" -----
facadeIndentCalc.Properties.OnEditValueChanged = () => {
	core.facadeIndent = facadeIndentCalc.Value;
	core.rebuildBlock('Отступ фасадов изменён');
	core.saveConfig();
};

// ----- Материал фасадов -----
// Материал и кромка всегда последние в разделе, как во вкладке "Корпус".
const facadeMaterialPanel = UI.components.NewPanel(mainForm, mainForm);
facadeMaterialPanel.Left = 5;
facadeMaterialPanel.Height = 30;
facadeMaterialPanel.Width = 290;
facadeMaterialPanel.ShowHint = true;
facadeMaterialPanel.BevelOuter = 0;
facadeMaterialPanel.ParentFont = true;

interface.WIDGETS.push(facadeMaterialPanel);
interface.FACADE_WIDGETS.push(facadeMaterialPanel);

const facadeMaterialLabel = UI.components.NewLabel(facadeMaterialPanel, facadeMaterialPanel);
facadeMaterialLabel.Top = 5;
facadeMaterialLabel.Left = 0;
facadeMaterialLabel.AutoSize = false;
facadeMaterialLabel.Height = 25;
facadeMaterialLabel.Width = 145;
facadeMaterialLabel.Caption = 'Материал фасадов: ';

const facadeMaterialEdit = UI.components.NewMaterialEdit(facadeMaterialPanel, facadeMaterialPanel);
facadeMaterialEdit.Top = 5;
facadeMaterialEdit.Left = 145;
facadeMaterialEdit.AutoSize = false;
facadeMaterialEdit.Height = 25;
facadeMaterialEdit.Width = 145;
facadeMaterialEdit.Material = core.facadeMaterial;

// ----- Событие изменения "Материал фасадов" -----
facadeMaterialEdit.Properties.OnChange = () => {
	core.facadeMaterial = facadeMaterialEdit.Material;
	core.rebuildBlock('Материал фасадов изменён');
	core.saveConfig();
};

// ----- Кромка фасадов -----
const facadeButtMaterialPanel = UI.components.NewPanel(mainForm, mainForm);
facadeButtMaterialPanel.Left = 5;
facadeButtMaterialPanel.Height = 30;
facadeButtMaterialPanel.Width = 290;
facadeButtMaterialPanel.ShowHint = true;
facadeButtMaterialPanel.BevelOuter = 0;
facadeButtMaterialPanel.ParentFont = true;

interface.WIDGETS.push(facadeButtMaterialPanel);
interface.FACADE_WIDGETS.push(facadeButtMaterialPanel);

const facadeButtMaterialLabel = UI.components.NewLabel(facadeButtMaterialPanel, facadeButtMaterialPanel);
facadeButtMaterialLabel.AutoSize = false;
facadeButtMaterialLabel.Top = 5;
facadeButtMaterialLabel.Left = 0;
facadeButtMaterialLabel.Height = 25;
facadeButtMaterialLabel.Width = 145;
facadeButtMaterialLabel.Caption = 'Кромка фасадов:';

const facadeButtMaterialEdit = UI.components.NewButtMaterialEdit(facadeButtMaterialPanel, facadeButtMaterialPanel);
facadeButtMaterialEdit.AutoSize = false;
facadeButtMaterialEdit.Top = 5;
facadeButtMaterialEdit.Left = 145;
facadeButtMaterialEdit.Height = 25;
facadeButtMaterialEdit.Width = 145;
facadeButtMaterialEdit.ButtMaterial = core.facadeButtMaterial;

// ----- Событие изменения "Кромка фасадов" -----
facadeButtMaterialEdit.Properties.OnChange = () => {
	core.facadeButtMaterial = facadeButtMaterialEdit.ButtMaterial;
	core.setFacadeButt(true, 'Материал кромки фасадов изменён');
	core.saveConfig();
};

// ----- Завершение построения -----
// Панель не входит в WIDGETS: relayoutMainForm размещает её отдельно после
// всех видимых полей выбранного раздела.
const actionPanel = UI.components.NewPanel(mainForm, mainForm);
actionPanel.Left = 5;
actionPanel.Height = 30;
actionPanel.Width = 290;
actionPanel.BevelOuter = 0;
actionPanel.ParentFont = true;

// Защита от повторного завершения и двойного освобождения форм.
let formResult = 'editing';
let isExecutionFinishing = false;

// Фиксирует историю, записывает основной config.json и завершает команду.
function finishConstruction() {
	if (formResult !== 'editing') return;

	// Не завершаем работу с устаревшим блоком, если последнее введённое
	// значение не удалось построить из-за некорректной геометрии.
	const currentSignature = core.getGeometrySignature();
	if (!core.block || currentSignature === null || currentSignature !== core.lastGeometrySignature) {
		core.rebuildBlock('Блок изменён');
		if (!core.block || core.getGeometrySignature() !== core.lastGeometrySignature) return;
	}

	formResult = 'built';
	isExecutionFinishing = true;
	historyOperations.RegisterObjectChanging(core.block);
	historyOperations.CommitCurrentChanges('Завершение построения');

	// Только успешное завершение переносит накопленные значения из памяти
	// в основной файл config.json.
	core.saveConfig();
	interface.saveConfig();
	writeConfig();

	// У пазов часть внутренних изменений БАЗИС завершает только при
	// штатном сохранении выполнения; отменять их здесь нельзя.
	execution.FinishExecution();
}

// Удаляет построенный блок и штатно завершает выполнение команды.
function cancelConstruction() {
	if (formResult !== 'editing') return;
	formResult = 'cancelled';
	isExecutionFinishing = true;

	const liveBlock = core.blockUid === null ? null : currentFileData.model.DS.FindObject(core.blockUid);
	if (liveBlock) {
		// Удаление оформляем отдельной именованной операцией, чтобы не
		// появлялась безымянная запись при завершении скрипта.
		historyOperations.RegisterObjectChanging(liveBlock, true);
		objects3d.DeleteObject(liveBlock);
		historyOperations.CommitCurrentChanges('Блок удалён');
		core.facadePanels = [];
		core.mountedFurniture = [];
		core.mountedBackFurniture = [];
		core.shelfMountedFurniture = [];
		core.mountedFacadeFurniture = [];
		core.mountedHalfFacadeFurniture = [];
	}
	core.block = null;
	core.blockUid = null;

	// Удаление уже зафиксировано именованной операцией; завершаем команду
	// штатно, чтобы БАЗИС корректно завершил внутренние операции модели.
	execution.FinishExecution();
}

const buildButton = UI.components.NewButton(actionPanel, actionPanel);
buildButton.AutoSize = false;
buildButton.Top = 5;
buildButton.Left = 0;
buildButton.Height = 25;
buildButton.Width = 143;
buildButton.Caption = 'Построить';
buildButton.Default = true;
buildButton.OnClick = finishConstruction;

const cancelButton = UI.components.NewButton(actionPanel, actionPanel);
cancelButton.AutoSize = false;
cancelButton.Top = 5;
cancelButton.Left = 145;
cancelButton.Height = 25;
cancelButton.Width = 145;
cancelButton.Caption = 'Отменить';
cancelButton.Cancel = true;
cancelButton.OnClick = cancelConstruction;

// ----- Инициализация -----
mainForm.OnShow = () => {
	interface.syncFurnitureSchemeSelectors();
	core.rebuildBlock('Блок построен');
	interface.relayoutMainForm();
	core.saveConfig();
};

// Блок удаляется только кнопкой «Отменить». При закрытии формы крестиком
// или внешней отмене команды БАЗИС оставляет последний построенный блок.

interface.updateReducedSection();
interface.updateSectionSizeFields(core.calculateSectionSizes(core.x));
for (let i = 0; i <= core.sectionCount; i++) core.calculateShelfPositions(i, core.getShelfHeight());
interface.updateShelfFields();
interface.updateFacadeFields();
interface.updateFacadeEditableLayoutOptions();
interface.updateFacadeJointFields();
interface.isInitializing = false;
mainForm.Show();
