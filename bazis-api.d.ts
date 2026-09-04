// Auto-generated from доки/BAZIS-Script_functions.md — DO NOT EDIT BY HAND.
// Regenerate with scripts/parse-bazis.js if the source doc changes.

/** Селектор материала кромки (Наследует: SelectorEdit) */

declare class ButtMaterialEdit {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Ширина компонента */
    Width: number;
    /** Стиль комонента */
    Style: TcxEditStyle;
    /** Базовый класс для селектора */
    Properties: EditProperties;
    /** Выбранный материал кромки */
    ButtMaterial: ButtMaterialData;
    /** Событие срабатывает после смены материала */
    OnButtMaterialChanged: TNotifyEvent;

}

/** Свойства компонента-селектора (Наследует: TcxButtonEditProperties) */

declare class EditProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Регистр символов */
    CharCase: editCharCase;
    /** Режим отображения текста */
    EchoMode: cxEditEchoMode;
    /** Список строк, используемый при автодополнении в текстовом поле */
    LookupItems: TStrings;
    /** Максимальная длина содержимого текста */
    MaxLength: number;
    /** Символ замены для режима отображения пароля */
    PasswordChar: string;
    /** Отображение кнопки "Показать пароль" */
    ShowPasswordRevealButton: boolean;

}

/** Селектор фурнитуры (Наследует: SelectorEdit) */

declare class FurnitureEdit {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Ширина компонента */
    Width: number;
    /** Стиль комонента */
    Style: TcxEditStyle;
    /** Базовый класс для селектора */
    Properties: EditProperties;
    /** Выбранная фурнитура */
    Furniture: TFurnitureInfo;
    /** Срабатывает после смены фурнитуры */
    OnFurnitureChanged: TNotifyEvent;

}

/** Селектор материала (Наследует: SelectorEdit) */

declare class MaterialEdit {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Ширина компонента */
    Width: number;
    /** Стиль комонента */
    Style: TcxEditStyle;
    /** Базовый класс для селектора */
    Properties: EditProperties;
    /** Выбранный материал */
    Material: FurnMaterialData;
    /** Событие срабатывает после смены материала */
    OnMaterialChanged: TNotifyEvent;

}

/** Базовый класс для селектора (Наследует: TcxButtonEdit) */

declare class SelectorEdit {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Ширина компонента */
    Width: number;
    /** Стиль комонента */
    Style: TcxEditStyle;
    /** Базовый класс для селектора */
    Properties: EditProperties;

}

/** Двумерная дуга (Наследует: T2DElement) */

declare class T2DArc {

    /** Тип */
    ElType: element2DType;
    /** Получить точку на элементе, ближайшую к заданной */
    ClosestPoint(P: T2DPoint): T2DPoint;
    /** Получить расстояние до заданной */
    DistanceToPoint(P: T2DPoint): number;
    /** Получить минимальную и максимальную точку */
    Gabarits(Min: ReferenceObject<T2DPoint>, Max: ReferenceObject<T2DPoint>): boolean;
    /** Изменить направление элемента */
    InvertDirection(): void;
    /** Проверка, является ли элемент дугой */
    IsArc(): boolean;
    /** Проверка, является ли элемент окружностью */
    IsCircle(): boolean;
    /** Проверка, является ли элемент линией */
    IsLine(): boolean;
    /** Проверка, является ли элемент списком элементов */
    IsList(): boolean;
    /** Сдвиг на заданное расстояние */
    Move(Dir: T2DPoint): void;
    /** Получить вектор, перпендикулярный вектору направления элемента в точке, соответствующей параметрическому значению длины элемента. Функция возвращает True, если вектор был вычислен и False, если произвести вычисление не удалось */
    NormalOn(Param: number, N: ReferenceObject<T2DPoint>): boolean;
    /** Общая длина. */
    ObjLength(): number;
    /** Получить точку по параметрическому значению длины элемента. Функция возвращает True, если точка была вычислена и False, если произвести вычисление не удалось */
    PointOn(Param: number, P: ReferenceObject<T2DPoint>): boolean;
    /** Получить размер прямоугольника, описывающего элемент */
    Size(): T2DPoint;
    /** Получить вектор направления элемента в точке, соответствующей параметрическому значению длины элемента. Функция возвращает True, если вектор был вычислен и False, если произвести вычисление не удалось */
    TangentOn(Param: number, N: ReferenceObject<T2DPoint>): boolean;
    /** Направление True - Против часовой стрелки False - По часовой стрелке. */
    ArcDir: boolean;
    /** Точка сентра дуги */
    Center: T2DPoint;
    /** Точка начала дуги */
    Pos1: T2DPoint;
    /** Точка конца дуги */
    Pos2: T2DPoint;
    /** Построить дугу по трём точкам. Возвращает True, если построение удалось */
    From3Points(P1: T2DPoint, P2: T2DPoint, P3: T2DPoint): boolean;
    /** Обратить направление дуги. Остальные параметры не изменятся. */
    InvertDir(): void;
    /** Перепендикуляр к касательной дуги в начальной точке. (нормализованный вектор из центра дуги к начальной точке). */
    Pos1Dir(): T2DPoint;
    /** Перепендикуляр к касательной дуги в конечной точке. (нормализованный вектор из центра дуги к конечной точке). */
    Pos2Dir(): T2DPoint;

}

/** Двумерная окружность (Наследует: T2DElement) */

declare class T2DCircle {

    /** Тип */
    ElType: element2DType;
    /** Получить точку на элементе, ближайшую к заданной */
    ClosestPoint(P: T2DPoint): T2DPoint;
    /** Получить расстояние до заданной */
    DistanceToPoint(P: T2DPoint): number;
    /** Получить минимальную и максимальную точку */
    Gabarits(Min: ReferenceObject<T2DPoint>, Max: ReferenceObject<T2DPoint>): boolean;
    /** Изменить направление элемента */
    InvertDirection(): void;
    /** Проверка, является ли элемент дугой */
    IsArc(): boolean;
    /** Проверка, является ли элемент окружностью */
    IsCircle(): boolean;
    /** Проверка, является ли элемент линией */
    IsLine(): boolean;
    /** Проверка, является ли элемент списком элементов */
    IsList(): boolean;
    /** Сдвиг на заданное расстояние */
    Move(Dir: T2DPoint): void;
    /** Получить вектор, перпендикулярный вектору направления элемента в точке, соответствующей параметрическому значению длины элемента. Функция возвращает True, если вектор был вычислен и False, если произвести вычисление не удалось */
    NormalOn(Param: number, N: ReferenceObject<T2DPoint>): boolean;
    /** Общая длина. */
    ObjLength(): number;
    /** Получить точку по параметрическому значению длины элемента. Функция возвращает True, если точка была вычислена и False, если произвести вычисление не удалось */
    PointOn(Param: number, P: ReferenceObject<T2DPoint>): boolean;
    /** Получить размер прямоугольника, описывающего элемент */
    Size(): T2DPoint;
    /** Получить вектор направления элемента в точке, соответствующей параметрическому значению длины элемента. Функция возвращает True, если вектор был вычислен и False, если произвести вычисление не удалось */
    TangentOn(Param: number, N: ReferenceObject<T2DPoint>): boolean;
    /** Центр */
    Center: T2DPoint;
    /** Радиус */
    CirRadius: number;

}

/** Базовый класс двумерного элемента контура */

declare class T2DElement {

    /** Тип */
    ElType: element2DType;
    /** Получить точку на элементе, ближайшую к заданной */
    ClosestPoint(P: T2DPoint): T2DPoint;
    /** Получить расстояние до заданной */
    DistanceToPoint(P: T2DPoint): number;
    /** Получить минимальную и максимальную точку */
    Gabarits(Min: ReferenceObject<T2DPoint>, Max: ReferenceObject<T2DPoint>): boolean;
    /** Изменить направление элемента */
    InvertDirection(): void;
    /** Проверка, является ли элемент дугой */
    IsArc(): boolean;
    /** Проверка, является ли элемент окружностью */
    IsCircle(): boolean;
    /** Проверка, является ли элемент линией */
    IsLine(): boolean;
    /** Проверка, является ли элемент списком элементов */
    IsList(): boolean;
    /** Сдвиг на заданное расстояние */
    Move(Dir: T2DPoint): void;
    /** Получить вектор, перпендикулярный вектору направления элемента в точке, соответствующей параметрическому значению длины элемента. Функция возвращает True, если вектор был вычислен и False, если произвести вычисление не удалось */
    NormalOn(Param: number, N: ReferenceObject<T2DPoint>): boolean;
    /** Общая длина. */
    ObjLength(): number;
    /** Получить точку по параметрическому значению длины элемента. Функция возвращает True, если точка была вычислена и False, если произвести вычисление не удалось */
    PointOn(Param: number, P: ReferenceObject<T2DPoint>): boolean;
    /** Получить размер прямоугольника, описывающего элемент */
    Size(): T2DPoint;
    /** Получить вектор направления элемента в точке, соответствующей параметрическому значению длины элемента. Функция возвращает True, если вектор был вычислен и False, если произвести вычисление не удалось */
    TangentOn(Param: number, N: ReferenceObject<T2DPoint>): boolean;

}

/** Список двумерных элементов (Наследует: T2DElement) */

declare class T2DElemList {

    /** Тип */
    ElType: element2DType;
    /** Получить точку на элементе, ближайшую к заданной */
    ClosestPoint(P: T2DPoint): T2DPoint;
    /** Получить расстояние до заданной */
    DistanceToPoint(P: T2DPoint): number;
    /** Получить минимальную и максимальную точку */
    Gabarits(Min: ReferenceObject<T2DPoint>, Max: ReferenceObject<T2DPoint>): boolean;
    /** Изменить направление элемента */
    InvertDirection(): void;
    /** Проверка, является ли элемент дугой */
    IsArc(): boolean;
    /** Проверка, является ли элемент окружностью */
    IsCircle(): boolean;
    /** Проверка, является ли элемент линией */
    IsLine(): boolean;
    /** Проверка, является ли элемент списком элементов */
    IsList(): boolean;
    /** Сдвиг на заданное расстояние */
    Move(Dir: T2DPoint): void;
    /** Получить вектор, перпендикулярный вектору направления элемента в точке, соответствующей параметрическому значению длины элемента. Функция возвращает True, если вектор был вычислен и False, если произвести вычисление не удалось */
    NormalOn(Param: number, N: ReferenceObject<T2DPoint>): boolean;
    /** Общая длина. */
    ObjLength(): number;
    /** Получить точку по параметрическому значению длины элемента. Функция возвращает True, если точка была вычислена и False, если произвести вычисление не удалось */
    PointOn(Param: number, P: ReferenceObject<T2DPoint>): boolean;
    /** Получить размер прямоугольника, описывающего элемент */
    Size(): T2DPoint;
    /** Получить вектор направления элемента в точке, соответствующей параметрическому значению длины элемента. Функция возвращает True, если вектор был вычислен и False, если произвести вычисление не удалось */
    TangentOn(Param: number, N: ReferenceObject<T2DPoint>): boolean;
    /** Количество элементов */
    Count: number;
    /** Элемент по индексу */
    Objects: IndexedProperty<number, T2DElement>;
    /** Добавить элемент */
    Add(Obj: T2DElement): number;
    /** Добавить дугу. */
    AddArc(p1: T2DPoint, p2: T2DPoint, Center: T2DPoint, Dir: boolean): T2DArc;
    /** Добавить дугу по трём точкам. */
    AddArc3(p1: T2DPoint, p2: T2DPoint, p3: T2DPoint): T2DArc;
    /** Добавить окружность. */
    AddCircle(xc: number, yc: number, Rad: number): T2DCircle;
    /** Добавить окружность. */
    AddCircle(pc: T2DPoint, Rad: number): T2DCircle;
    /** Добавить копию элемента */
    AddCopy(Obj: T2DElement): number;
    /** Добавить линию. */
    AddLine(x1: number, y1: number, x2: number, y2: number): T2DLine;
    /** Добавить линию. */
    AddLine(p1: T2DPoint, p2: T2DPoint): T2DLine;
    /** Добавить элементы из списка */
    AddList(List: T2DElemList, Copy: boolean): void;
    /** Добавить прямоугольник */
    AddRectangle(Min: T2DPoint, Max: T2DPoint): void;
    /** Добавить прямоугольник в точку (0, 0) */
    AddRectangle(Width: number, Height: number): void;
    /** Добавить прямоугольник */
    AddRectangle(x1: number, y1: number, x2: number, y2: number): void;
    /** Добавить скруглённый прямоугольник */
    AddRoundRect(x1: number, y1: number, x2: number, y2: number, Rad: number): void;
    /** Очистить список элементов */
    Clear(): void;
    /** Удалить элемент по индексу */
    Delete(Index: number): void;
    /** Удалить элемент */
    Delete(Obj: T2DElement): void;
    /** Поменять местами элементы списка */
    Exchange(Index1: number, Index2: number): void;
    /** Найти ближайший элемент к заданной точке. Возвращает True, если элемент был найден */
    FindNearestObject(Pos: T2DPoint, Distance: ReferenceObject<number>, Obj: ReferenceObject<T2DElement>): boolean;
    /** Получить индекс элемента */
    IndexOf(Obj: T2DElement): number;
    /** Примитивная проверка замкнутости контура. Проверка на совпадение начальной точки первого и конечной точки второго элементов. */
    IsClosedContour(): boolean;
    /** Проверка на прямоугольность контура. */
    IsContourRectangle(): boolean;
    /** Проверка на направленность контура против часовой стрелки */
    IsCounterClockWise(): boolean;
    /** Проверка нахождения точки внутри списка элементов. Для списка элементов, не являющегося замкнутым контуром результат неопределённый. */
    IsPointInside(P: T2DPoint): boolean;
    /** Проверка нахождения точки внутри списка элементов. Для списка элементов, не являющегося замкнутым контуром результат неопределённый. */
    IsPointInside(x: number, y: number): boolean;
    /** Построить линию из конца последнего элемента списка к указанным координатам. Если список пустой первая точка линии {0, 0} */
    LineTo(x: number, y: number): T2DLine;
    /** Упорядочить контуры в списке. Возвращает false, если включен флаг Closet и есть незамкнутый контур */
    OrderContours(Closet: boolean): boolean;

}

/** Двумерная линия (Наследует: T2DElement) */

declare class T2DLine {

    /** Тип */
    ElType: element2DType;
    /** Получить точку на элементе, ближайшую к заданной */
    ClosestPoint(P: T2DPoint): T2DPoint;
    /** Получить расстояние до заданной */
    DistanceToPoint(P: T2DPoint): number;
    /** Получить минимальную и максимальную точку */
    Gabarits(Min: ReferenceObject<T2DPoint>, Max: ReferenceObject<T2DPoint>): boolean;
    /** Изменить направление элемента */
    InvertDirection(): void;
    /** Проверка, является ли элемент дугой */
    IsArc(): boolean;
    /** Проверка, является ли элемент окружностью */
    IsCircle(): boolean;
    /** Проверка, является ли элемент линией */
    IsLine(): boolean;
    /** Проверка, является ли элемент списком элементов */
    IsList(): boolean;
    /** Сдвиг на заданное расстояние */
    Move(Dir: T2DPoint): void;
    /** Получить вектор, перпендикулярный вектору направления элемента в точке, соответствующей параметрическому значению длины элемента. Функция возвращает True, если вектор был вычислен и False, если произвести вычисление не удалось */
    NormalOn(Param: number, N: ReferenceObject<T2DPoint>): boolean;
    /** Общая длина. */
    ObjLength(): number;
    /** Получить точку по параметрическому значению длины элемента. Функция возвращает True, если точка была вычислена и False, если произвести вычисление не удалось */
    PointOn(Param: number, P: ReferenceObject<T2DPoint>): boolean;
    /** Получить размер прямоугольника, описывающего элемент */
    Size(): T2DPoint;
    /** Получить вектор направления элемента в точке, соответствующей параметрическому значению длины элемента. Функция возвращает True, если вектор был вычислен и False, если произвести вычисление не удалось */
    TangentOn(Param: number, N: ReferenceObject<T2DPoint>): boolean;
    /** Точка начала */
    Pos1: T2DPoint;
    /** Точка конца */
    Pos2: T2DPoint;
    /** Получить центр линии */
    LineCenter(): T2DPoint;
    /** Получить вектор от точки начала до точки конца */
    LineDir(): T2DPoint;
    /** Получить нормализованный вектор направления линии */
    NormDir(): T2DPoint;

}

/** Тело вращения. Контур тела должен быть расположен в положительных коордиантах по оси X. Вращение контура происходит по оси Y относительно начала ЛСК. (Наследует: TSolidBody) */

declare class T2DRotationBody {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Материал объекта. */
    Material: TMaterial;
    /** Наименование материала (с артикулом) */
    MaterialName: string;
    /** Поверхность по индексу */
    TriLists: IndexedProperty<number, TTriangleList>;
    /** Количество поверхностей */
    TriListsCount: number;
    /** Удалить все поверхности объекта */
    ClearTriLists(): void;
    /** Получить общее количество треугольников объекта */
    TriCount(): number;
    /** Ширина материала. Значение больше 0 соответствует погонному материалу. Значене 0 соответствует площадному материалу. */
    MaterialWidth: number;
    /** Контур. */
    Contour2D: T2DElemList;

}

/** Тело выдавливания контура на плоскости по двумерной траектории. (Наследует: TSolidBody) */

declare class T2DTrajectoryBody {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Материал объекта. */
    Material: TMaterial;
    /** Наименование материала (с артикулом) */
    MaterialName: string;
    /** Поверхность по индексу */
    TriLists: IndexedProperty<number, TTriangleList>;
    /** Количество поверхностей */
    TriListsCount: number;
    /** Удалить все поверхности объекта */
    ClearTriLists(): void;
    /** Получить общее количество треугольников объекта */
    TriCount(): number;
    /** Ширина материала. Значение больше 0 соответствует погонному материалу. Значене 0 соответствует площадному материалу. */
    MaterialWidth: number;
    /** Контур. */
    Contour2D: T2DElemList;
    /** Траектория. */
    Trajectory2D: T2DElemList;

}

/** Ребро объекта */

declare class T3DEdge {

    /** Количество вершин в ребре */
    Count: number;
    /** Координаты вершины в ГСК по индексу */
    GVertices: IndexedProperty<number, TVector3d>;
    /** Длина ребра */
    Length: number;
    /** 3D объект, которому принадлежит ребро */
    Owner: TObject3D;
    /** Направление ребра из начальной точки */
    Dir(): TVector3d;

}

/** Структурный объект. Содержит в себе список объектов (Наследует: TObject3D) */

declare class T3DObjectList {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Количество вложенных объектов */
    Count: number;
    /** Вложенный объект по индексу */
    Objects: IndexedProperty<number, TObject3D>;
    /** Удалить все вложенные объекты */
    Clear(): void;
    /** Удалить все выделенные вложенные объекты (рекурсивно). */
    DeleteSelection(): void;
    /** Получить индекс вложенного объекта. Если объект не является вложенным, возвращает -1 */
    IndexOf(Obj: TObject3D): number;
    /** Изменить порядок списка в обратную сторону */
    Reverse(): void;
    /** Восстановить видимость всех вложенных объектов (рекурсивно) */
    SetVisibleAllObjects(): void;
    /** Снять подсветку со всех вложенных объектов (рекурсивно) */
    UnHighlightAll(): void;
    /** Снять выделение со всех вложенных объектов (рекурсивно) */
    UnSelectAll(): void;

}

/** Треугольник сетки поверхности */

declare class T3DTriangle {

    /** Нормаль плоскости, на которой лежит треугольник */
    Normal: TVector3d;
    /** Нормаль вершины 1 */
    Normal1: TVector3d;
    /** Нормаль вершины 2 */
    Normal2: TVector3d;
    /** Нормаль вершины 3 */
    Normal3: TVector3d;
    /** Координаты текстуры вершины 1 */
    TexCoord1: TVector2f;
    /** Координаты текстуры вершины 2 */
    TexCoord2: TVector2f;
    /** Координаты текстуры вершины 3 */
    TexCoord3: TVector2f;
    /** Вершина 1 */
    Vertex1: TVector3d;
    /** Вершина 2 */
    Vertex2: TVector3d;
    /** Вершина 3 */
    Vertex3: TVector3d;

}

/** Анимированный структурный объект. (Наследует: T3DObjectList) */

declare class TAnimBlock3D {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Количество вложенных объектов */
    Count: number;
    /** Вложенный объект по индексу */
    Objects: IndexedProperty<number, TObject3D>;
    /** Удалить все вложенные объекты */
    Clear(): void;
    /** Удалить все выделенные вложенные объекты (рекурсивно). */
    DeleteSelection(): void;
    /** Получить индекс вложенного объекта. Если объект не является вложенным, возвращает -1 */
    IndexOf(Obj: TObject3D): number;
    /** Изменить порядок списка в обратную сторону */
    Reverse(): void;
    /** Восстановить видимость всех вложенных объектов (рекурсивно) */
    SetVisibleAllObjects(): void;
    /** Снять подсветку со всех вложенных объектов (рекурсивно) */
    UnHighlightAll(): void;
    /** Снять выделение со всех вложенных объектов (рекурсивно) */
    UnSelectAll(): void;
    /** Анимация структурного объекта. Если у структурного объекта не было анимации, она будет создана при чтении свойства. */
    Animation: TFurnAnimation;
    /** Тип структурного объекта (строковое значение) */
    FurnType: string;
    /** Тип для Салона. При назначении определённого типа назначится анимация по умолчанию. */
    SalonType: salonType;
    /** Проверить наличие анимации структурного объекта */
    HasAnimation(): boolean;

}

/** Информация о сверлении отверстий в тело. */

declare class TBodyDrillInfo {

    /** Тело. */
    Body: TObject3D;
    /** Список просверленных отверстий. */
    Holes: TDrillHoleList;

}

/** Информация о сверлении тел (Наследует: TObjectList<TBodyDrillInfo>) */

declare class TBodyDrillInfoList {

    /** Количество элементов */
    Count: number;
    /** Элемент по индексу */
    Items: IndexedProperty<number, TBodyDrillInfo>;
    /** Найти информацию о сверлении тела */
    FindBodyInfo(Body: TObject3D): TBodyDrillInfo;

}

/** Базовый класс компонента-кнопки (Наследует: TWinControl) */

declare class TButtonControl {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Перенос слов заголовка */
    WordWrap: boolean;

}

/** Камера */

declare class TCamera3D {

    /** Угол поворота камеры по оси X (в градусах) */
    AngleX: number;
    /** Угол поворота камеры по оси Y (в градусах) */
    AngleY: number;
    /** Смещение модели по оси X (в пикселях) */
    MoveX: number;
    /** Смещение модели по оси Y (в пикселях) */
    MoveY: number;
    /** Направление "вправо" относительно взгляда камеры */
    RightDirection: TVector3d;
    /** Коэффициэнт масштаба */
    Scale: number;
    /** Направление "вверх" относительно взгляда камеры */
    UpDirection: TVector3d;
    /** Направление взгляда камеры */
    ViewDirection: TVector3d;
    /** Положение камеры */
    ViewPosition: TVector3d;
    /** Задать анимированный поворот до заданных углов */
    AnimateTo(NewAngleX: number, NewAngleY: number): void;
    /** Перевести точку из 3D-сцены в координаты экрана */
    ToScreen(Pos: TVector3d): T2DPoint;

}

/** Базовый класс компонента */

declare class TComponent {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;

}

/** Объект - контур на плоскости. Контур располагается на плоскости XY ЛСК объекта. (Наследует: TPlane3DObject) */

declare class TContour3D {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Контур. */
    Contour: T2DElemList;

}

/** Базовый класс визуального компонента (Наследует: TComponent) */

declare class TControl {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;

}

/** Расширенный класс компонента-кнопки (Наследует: TButtonControl) */

declare class TCustomButton {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Перенос слов заголовка */
    WordWrap: boolean;
    /** Состояние "кнопка отмены" */
    Cancel: boolean;
    /** Состояние "по умолчанию" */
    Default: boolean;

}

/** Базовый класс компонента-таблицы с возможностью манипулировать клетками (Наследует: TCustomGrid) */

declare class TCustomDrawGrid {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Номер выделенного столбца */
    Col: number;
    /** Количество столбцов в таблице */
    ColCount: number;
    /** Выравнивание текста в столбцах */
    DefaultColAlignment: alignment;
    /** Ширина столбцов */
    DefaultColWidth: number;
    /** Высота рядов */
    DefaultRowHeight: number;
    /** Стиль отображения таблицы */
    DrawingStyle: gridDrawingStyle;
    /** Редактирование выделенной клетки */
    EditorMode: boolean;
    /** Количество зафиксированных столбцов */
    FixedCols: number;
    /** Количество зафиксированных рядов */
    FixedRows: number;
    /** Параметры шрифта */
    Font: TFont;
    /** Ширина разделительной линии в таблице */
    GridLineWidth: number;
    /** Индекс самого левого отображаемого столбца */
    LeftCol: number;
    /** Параметры таблицы */
    Options: TGridOptions;
    /** Номер выделенного ряда */
    Row: number;
    /** Количество рядов */
    RowCount: number;
    /** Настройки отображения полос прокрутки */
    ScrollBars: scrollStyle;
    /** Индекс самого верхнего отображаемого ряда */
    TopRow: number;
    /** Количество отображаемых столбцов */
    VisibleColCount: number;
    /** Количество отображаемых рядов */
    VisibleRowCount: number;
    /** Возвращает координаты и измерения указанной клетки в виде TRect */
    CellRect(ACol: number, ARow: number): TRect;
    /** Возвращает ряд и столбец находящиеся на указанных координатах X и Y */
    MouseToCell(X: number, Y: number, ACol: ReferenceObject<number>, ARow: ReferenceObject<number>): void;

}

/** Базовый класс формы (Наследует: TWinControl) */

declare class TCustomForm {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Стиль формы */
    FormStyle: formStyle;
    /** Событие активации формы */
    OnActivate: TNotifyEvent;
    /** Событие закрытия формы */
    OnClose: TCloseEvent;
    /** Событие запроса на закрытие формы */
    OnCloseQuery: TCloseQueryEvent;
    /** Событие деактивации формы */
    OnDeactivate: TNotifyEvent;
    /** Событие отображения формы */
    OnShow: TNotifyEvent;
    /** Отобразить форму */
    Show(): void;

}

/** Базовый класс компонента-таблицы (Наследует: TWinControl) */

declare class TCustomGrid {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Номер выделенного столбца */
    Col: number;
    /** Количество столбцов в таблице */
    ColCount: number;
    /** Выравнивание текста в столбцах */
    DefaultColAlignment: alignment;
    /** Ширина столбцов */
    DefaultColWidth: number;
    /** Высота рядов */
    DefaultRowHeight: number;
    /** Стиль отображения таблицы */
    DrawingStyle: gridDrawingStyle;
    /** Редактирование выделенной клетки */
    EditorMode: boolean;
    /** Количество зафиксированных столбцов */
    FixedCols: number;
    /** Количество зафиксированных рядов */
    FixedRows: number;
    /** Параметры шрифта */
    Font: TFont;
    /** Ширина разделительной линии в таблице */
    GridLineWidth: number;
    /** Индекс самого левого отображаемого столбца */
    LeftCol: number;
    /** Параметры таблицы */
    Options: TGridOptions;
    /** Номер выделенного ряда */
    Row: number;
    /** Количество рядов */
    RowCount: number;
    /** Настройки отображения полос прокрутки */
    ScrollBars: scrollStyle;
    /** Индекс самого верхнего отображаемого ряда */
    TopRow: number;
    /** Количество отображаемых столбцов */
    VisibleColCount: number;
    /** Количество отображаемых рядов */
    VisibleRowCount: number;

}

/** Многофункциональный вырез (Наследует: TSolidBody) */

declare class TCustomGroove {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Материал объекта. */
    Material: TMaterial;
    /** Наименование материала (с артикулом) */
    MaterialName: string;
    /** Поверхность по индексу */
    TriLists: IndexedProperty<number, TTriangleList>;
    /** Количество поверхностей */
    TriListsCount: number;
    /** Удалить все поверхности объекта */
    ClearTriLists(): void;
    /** Получить общее количество треугольников объекта */
    TriCount(): number;
    /** Ширина материала. Значение больше 0 соответствует погонному материалу. Значене 0 соответствует площадному материалу. */
    MaterialWidth: number;
    /** Параметры многофункционального выреза. */
    GrooveParams: TCustomGrooveParams2D;
    /** Создавать пазы внутри объекта-владельца */
    MakeGroovingInsideOwner: boolean;
    /** Получить контур сечения выреза. Метод возвращает контур, заданный в параметрах выреза */
    GetGrooveContour(): T2DElemList;
    /** Получить траекторию выреза. Метод возвращает траекторию, заданную в параметрах выреза */
    GetGrooveTrajectory(): T2DElemList;

}

/** Параметры многофункционального выреза */

declare class TCustomGrooveParams2D {

    /** Контур выреза */
    Contour: T2DElemList;
    /** Наименование паза */
    GrooveName: string;
    /** Обозначение паза */
    GrooveSign: string;
    /** Наименование выемки */
    PocketName: string;
    /** Обозначение выемки */
    PocketSign: string;
    /** Траектория выреза */
    Trajectory: T2DElemList;

}

/** Базовый класс панели - контейнера для компонентов (Наследует: TWinControl) */

declare class TCustomPanel {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Отображение текстового заголовка внутри панели */
    ShowCaption: boolean;

}

/** Параметры паза */

declare class TCutParams {

    /** Угол (Fi) */
    Angle: number;
    /** Тип параметров паза */
    CutType: cutParamType;
    /** Глубина (G) */
    Depth: number;
    /** Путь к файлу фрагмента сечения */
    Fragment: string;
    /** Наименование */
    Name: string;
    /** Смещение (dx) */
    Offset: number;
    /** Смещение (B) */
    Offset2: number;
    /** Радиус (R) */
    Radius: number;
    /** Обозначение */
    Sign: string;
    /** Параметрическое обозначение */
    SignFormula: string;
    /** Ширина (H) */
    Width: number;

}

/** Компонент-кнопка (Наследует: TcxCustomButton) */

declare class TcxButton {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Перенос слов заголовка */
    WordWrap: boolean;
    /** Состояние "кнопка отмены" */
    Cancel: boolean;
    /** Состояние "по умолчанию" */
    Default: boolean;
    /** Параметры цвета */
    Colors: TcxButtonColors;
    /** Описание кнопки. Используется для кнопки в стиле командной кнопки Windows */
    Description: string;
    /** Тип кнопки */
    Kind: cxButtonKind;
    /** Настройки изображения */
    OptionsImage: TcxButtonImageOptions;
    /** Цикличное повторение нажатия при удержании кнопки */
    RepeatClick: boolean;

}

/** Параметры цветов компонента */

declare class TcxButtonColors {

    /** Назначенные на данный момент цвета */
    AssignedColors: TcxButtonAssignedColors;
    /** Цвет кнопки с состоянием "по умолчанию" */
    Default: number;
    /** Цвет текста кнопки с состоянием "по умолчанию" */
    DefaultText: number;
    /** Цвет кнопки с состоянем "отключена" */
    Disabled: number;
    /** Цвет такста кнопки с состоянем "отключена" */
    DisabledText: number;
    /** Цвет кнопки под курсором */
    Hot: number;
    /** Цвет текста кнопки под курсором */
    HotText: number;
    /** Обычный цвет кнопки */
    Normal: number;
    /** Обычный цвет текста кнопки */
    NormalText: number;
    /** Цвет нажатой кнопки */
    Pressed: number;
    /** Цвет текста нажатой кнопки */
    PressedText: number;

}

/** Компонент с текстовым полем и кнопкой (Наследует: TcxCustomTextEdit) */

declare class TcxButtonEdit {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Ширина компонента */
    Width: number;
    /** Свойства компонента */
    Properties: TcxButtonEditProperties;
    /** Стиль комонента */
    Style: TcxEditStyle;

}

/** Свойства компонента с текстовым полем и кнопкой (Наследует: TcxCustomTextEditProperties) */

declare class TcxButtonEditProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Регистр символов */
    CharCase: editCharCase;
    /** Режим отображения текста */
    EchoMode: cxEditEchoMode;
    /** Список строк, используемый при автодополнении в текстовом поле */
    LookupItems: TStrings;
    /** Максимальная длина содержимого текста */
    MaxLength: number;
    /** Символ замены для режима отображения пароля */
    PasswordChar: string;
    /** Отображение кнопки "Показать пароль" */
    ShowPasswordRevealButton: boolean;

}

/** Класс настроек изображения */

declare class TcxButtonImageOptions {

    /** Описывает свойства глифа */
    Glyph: TdxSmartGlyph;
    /** Указывает на расположение изображения относительно заголовка кнопки */
    Layout: buttonLayout;
    /** Расстояние между бложайшим краем кнопки и изображением */
    Margin: number;
    /** Расстояние между изображением и заголовком компонента */
    Spacing: number;

}

/** Компонент с заголовком */

declare class TcxCaptionItem {

    /** Заголовок */
    Caption: string;

}

/** Компонент с полем-галочкой (Наследует: TcxCustomCheckBox) */

declare class TcxCheckBox {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Стиль компонента */
    Style: TcxEditStyle;
    /** Ширина компонента */
    Width: number;
    /** Отмечен */
    Checked: boolean;
    /** Состояние компонента */
    State: cxCheckBoxState;
    /** Свойства компонента */
    Properties: TcxCheckBoxProperties;

}

/** Свойства компонента с полем-галочкой (Наследует: TcxCustomCheckBoxProperties) */

declare class TcxCheckBoxProperties {

    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Выравнивание поля с галочкой */
    Alignment: alignment;
    /** Разрешить компоненту состояние "закрашен" */
    AllowGrayed: boolean;

}

/** Компонент выбора цвета (Наследует: TcxCustomColorComboBox) */

declare class TcxColorComboBox {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Стиль компонента */
    Style: TcxEditStyle;
    /** Ширина компонента */
    Width: number;
    /** Индекс выбранного значения */
    ItemIndex: number;
    /** Текущий цвет */
    ColorValue: number;
    /** Свойства компонента */
    Properties: TcxColorComboBoxProperties;

}

/** Свойства компонента выбора цвета (Наследует: TcxCustomColorComboBoxProperties) */

declare class TcxColorComboBoxProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Регистр символов */
    CharCase: editCharCase;
    /** Режим отображения текста */
    EchoMode: cxEditEchoMode;
    /** Список строк, используемый при автодополнении в текстовом поле */
    LookupItems: TStrings;
    /** Максимальная длина содержимого текста */
    MaxLength: number;
    /** Символ замены для режима отображения пароля */
    PasswordChar: string;
    /** Отображение кнопки "Показать пароль" */
    ShowPasswordRevealButton: boolean;
    /** Событие закрытия выпадающего списка. */
    OnCloseUp: TNotifyEvent;
    /** Событие перед открытием выпадающего списка. */
    OnInitPopup: TNotifyEvent;
    /** Событие открытия выпадающего списка. */
    OnPopup: TNotifyEvent;
    /** Стиль выпадающего списка */
    DropDownListStyle: cxEditDropDownListStyle;
    /** Количество строк при раскрытии списка */
    DropDownRows: number;
    /** Изменение размеров выпадающего списка пользователем. */
    DropDownSizeable: boolean;
    /** Список значений */
    Items: TStrings;
    /** Автоматическая сортировка значений */
    Sorted: boolean;
    /** Позволять пользователю открыть диалоговое окно с расширенной палитрой */
    AllowSelectColor: boolean;
    /** Выравнивание окна с образцом цвета */
    ColorBoxAlign: cxColorBoxAlign;
    /** Цвет границы окна с образцом цвета */
    ColorBoxFrameColor: number;
    /** Ширина окна с образцом цвета */
    ColorBoxWidth: number;
    /** Стиль списка с цветами */
    ColorComboStyle: cxColorComboStyle;
    /** Показывать расширенную палитру целиком */
    ColorDialogShowFull: boolean;
    /** Тип расширенной палитры */
    ColorDialogType: cxColorDialogType;
    /** Формат отображаемого значения цвета */
    ColorValueFormat: cxColorValueFormat;
    /** Цвет по умолчанию */
    DefaultColor: number;
    /** Отображаемый текст для цвета по умолчанию */
    DefaultDescription: string;
    /** Соглашение о наименованиях */
    NamingConvention: cxColorNamingConvention;
    /** Событие запроса цвета по умолчанию */
    OnGetDefaultColor: TcxGetDefaultColorEvent;
    /** Отображать в текстовом поле названия цветов */
    ShowDescriptions: boolean;

}

/** Компонент с полем и выпадающим списком значений (Наследует: TcxCustomComboBox) */

declare class TcxComboBox {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Стиль компонента */
    Style: TcxEditStyle;
    /** Ширина компонента */
    Width: number;
    /** Индекс выбранного значения */
    ItemIndex: number;
    /** Свойства компонента */
    Properties: TcxComboBoxProperties;

}

/** Свойства компонента с полем и выпадающим списком значений (Наследует: TcxCustomComboBoxProperties) */

declare class TcxComboBoxProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Регистр символов */
    CharCase: editCharCase;
    /** Режим отображения текста */
    EchoMode: cxEditEchoMode;
    /** Список строк, используемый при автодополнении в текстовом поле */
    LookupItems: TStrings;
    /** Максимальная длина содержимого текста */
    MaxLength: number;
    /** Символ замены для режима отображения пароля */
    PasswordChar: string;
    /** Отображение кнопки "Показать пароль" */
    ShowPasswordRevealButton: boolean;
    /** Событие закрытия выпадающего списка. */
    OnCloseUp: TNotifyEvent;
    /** Событие перед открытием выпадающего списка. */
    OnInitPopup: TNotifyEvent;
    /** Событие открытия выпадающего списка. */
    OnPopup: TNotifyEvent;
    /** Стиль выпадающего списка */
    DropDownListStyle: cxEditDropDownListStyle;
    /** Количество строк при раскрытии списка */
    DropDownRows: number;
    /** Изменение размеров выпадающего списка пользователем. */
    DropDownSizeable: boolean;
    /** Список значений */
    Items: TStrings;
    /** Автоматическая сортировка значений */
    Sorted: boolean;

}

/** Базовый класс для компонентов-контейнеров (Наследует: TcxControl) */

declare class TcxContainer {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Стиль контейнера */
    Style: TcxContainerStyle;

}

/** Стиль компонента */

declare class TcxContainerStyle {

    /** Цвет границы */
    BorderColor: number;
    /** Стиль границы */
    BorderStyle: cxContainerBorderStyle;
    /** Цвет компонента */
    Color: number;
    /** Отображаемые границы */
    Edges: TcxBorders;
    /** Настройки шрифта */
    Font: TFont;
    /** Тень под компонентом */
    Shadow: boolean;
    /** Цвет текста */
    TextColor: number;
    /** Стиль текста */
    TextStyle: TFontStyles;
    /** Прозрачность границы */
    TransparentBorder: boolean;

}

/** Базовый класс компонента DevExpress (Наследует: TWinControl) */

declare class TcxControl {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;

}

/** Базовый класс компонента-кнопки (Наследует: TCustomButton) */

declare class TcxCustomButton {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Перенос слов заголовка */
    WordWrap: boolean;
    /** Состояние "кнопка отмены" */
    Cancel: boolean;
    /** Состояние "по умолчанию" */
    Default: boolean;
    /** Параметры цвета */
    Colors: TcxButtonColors;
    /** Описание кнопки. Используется для кнопки в стиле командной кнопки Windows */
    Description: string;
    /** Тип кнопки */
    Kind: cxButtonKind;
    /** Настройки изображения */
    OptionsImage: TcxButtonImageOptions;
    /** Цикличное повторение нажатия при удержании кнопки */
    RepeatClick: boolean;

}

/** Базовый класс компонента с набором кнопок (Наследует: TcxCustomEditProperties) */

declare class TcxCustomButtonGroupProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Количество колонок внутри группы */
    Columns: number;
    /** Сокращать заголовки кнопок многоточием */
    ShowEndEllipsis: boolean;
    /** Перенос слов */
    WordWrap: boolean;

}

/** Базовый класс компонента с полем-галочкой (Наследует: TcxCustomEdit) */

declare class TcxCustomCheckBox {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Стиль компонента */
    Style: TcxEditStyle;
    /** Ширина компонента */
    Width: number;
    /** Отмечен */
    Checked: boolean;
    /** Состояние компонента */
    State: cxCheckBoxState;

}

/** Базовый класс свойств компонента с полем-галочкой (Наследует: TcxCustomEditProperties) */

declare class TcxCustomCheckBoxProperties {

    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Выравнивание поля с галочкой */
    Alignment: alignment;
    /** Разрешить компоненту состояние "закрашен" */
    AllowGrayed: boolean;

}

/** Базовый класс компонента выбора цвета (Наследует: TcxCustomComboBox) */

declare class TcxCustomColorComboBox {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Стиль компонента */
    Style: TcxEditStyle;
    /** Ширина компонента */
    Width: number;
    /** Индекс выбранного значения */
    ItemIndex: number;
    /** Текущий цвет */
    ColorValue: number;

}

/** Базовый класс свойств компонента выбора цвета (Наследует: TcxCustomComboBoxProperties) */

declare class TcxCustomColorComboBoxProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Регистр символов */
    CharCase: editCharCase;
    /** Режим отображения текста */
    EchoMode: cxEditEchoMode;
    /** Список строк, используемый при автодополнении в текстовом поле */
    LookupItems: TStrings;
    /** Максимальная длина содержимого текста */
    MaxLength: number;
    /** Символ замены для режима отображения пароля */
    PasswordChar: string;
    /** Отображение кнопки "Показать пароль" */
    ShowPasswordRevealButton: boolean;
    /** Событие закрытия выпадающего списка. */
    OnCloseUp: TNotifyEvent;
    /** Событие перед открытием выпадающего списка. */
    OnInitPopup: TNotifyEvent;
    /** Событие открытия выпадающего списка. */
    OnPopup: TNotifyEvent;
    /** Стиль выпадающего списка */
    DropDownListStyle: cxEditDropDownListStyle;
    /** Количество строк при раскрытии списка */
    DropDownRows: number;
    /** Изменение размеров выпадающего списка пользователем. */
    DropDownSizeable: boolean;
    /** Список значений */
    Items: TStrings;
    /** Автоматическая сортировка значений */
    Sorted: boolean;
    /** Позволять пользователю открыть диалоговое окно с расширенной палитрой */
    AllowSelectColor: boolean;
    /** Выравнивание окна с образцом цвета */
    ColorBoxAlign: cxColorBoxAlign;
    /** Цвет границы окна с образцом цвета */
    ColorBoxFrameColor: number;
    /** Ширина окна с образцом цвета */
    ColorBoxWidth: number;
    /** Стиль списка с цветами */
    ColorComboStyle: cxColorComboStyle;
    /** Показывать расширенную палитру целиком */
    ColorDialogShowFull: boolean;
    /** Тип расширенной палитры */
    ColorDialogType: cxColorDialogType;
    /** Формат отображаемого значения цвета */
    ColorValueFormat: cxColorValueFormat;
    /** Цвет по умолчанию */
    DefaultColor: number;
    /** Отображаемый текст для цвета по умолчанию */
    DefaultDescription: string;
    /** Соглашение о наименованиях */
    NamingConvention: cxColorNamingConvention;
    /** Событие запроса цвета по умолчанию */
    OnGetDefaultColor: TcxGetDefaultColorEvent;
    /** Отображать в текстовом поле названия цветов */
    ShowDescriptions: boolean;

}

/** Базовый класс компонента с полем и выпадающим списком значений (Наследует: TcxCustomTextEdit) */

declare class TcxCustomComboBox {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Стиль компонента */
    Style: TcxEditStyle;
    /** Ширина компонента */
    Width: number;
    /** Индекс выбранного значения */
    ItemIndex: number;

}

/** Базовый класс свойств компонента с полем и выпадающим списком значений (Наследует: TcxCustomDropDownEditProperties) */

declare class TcxCustomComboBoxProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Регистр символов */
    CharCase: editCharCase;
    /** Режим отображения текста */
    EchoMode: cxEditEchoMode;
    /** Список строк, используемый при автодополнении в текстовом поле */
    LookupItems: TStrings;
    /** Максимальная длина содержимого текста */
    MaxLength: number;
    /** Символ замены для режима отображения пароля */
    PasswordChar: string;
    /** Отображение кнопки "Показать пароль" */
    ShowPasswordRevealButton: boolean;
    /** Событие закрытия выпадающего списка. */
    OnCloseUp: TNotifyEvent;
    /** Событие перед открытием выпадающего списка. */
    OnInitPopup: TNotifyEvent;
    /** Событие открытия выпадающего списка. */
    OnPopup: TNotifyEvent;
    /** Стиль выпадающего списка */
    DropDownListStyle: cxEditDropDownListStyle;
    /** Количество строк при раскрытии списка */
    DropDownRows: number;
    /** Изменение размеров выпадающего списка пользователем. */
    DropDownSizeable: boolean;
    /** Список значений */
    Items: TStrings;
    /** Автоматическая сортировка значений */
    Sorted: boolean;

}

/** Свойства компонента с выпадающим списком значений (Наследует: TcxCustomTextEditProperties) */

declare class TcxCustomDropDownEditProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Регистр символов */
    CharCase: editCharCase;
    /** Режим отображения текста */
    EchoMode: cxEditEchoMode;
    /** Список строк, используемый при автодополнении в текстовом поле */
    LookupItems: TStrings;
    /** Максимальная длина содержимого текста */
    MaxLength: number;
    /** Символ замены для режима отображения пароля */
    PasswordChar: string;
    /** Отображение кнопки "Показать пароль" */
    ShowPasswordRevealButton: boolean;
    /** Событие закрытия выпадающего списка. */
    OnCloseUp: TNotifyEvent;
    /** Событие перед открытием выпадающего списка. */
    OnInitPopup: TNotifyEvent;
    /** Событие открытия выпадающего списка. */
    OnPopup: TNotifyEvent;

}

/** Базовый класс компонента с редактируемым полем (Наследует: TcxControl) */

declare class TcxCustomEdit {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Стиль компонента */
    Style: TcxEditStyle;
    /** Ширина компонента */
    Width: number;

}

/** Свойства компонента с редактируемым полем */

declare class TcxCustomEditProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;

}

/** Базовый класс комопнента-контейнера (Наследует: TcxCustomEdit) */

declare class TcxCustomGroupBox {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Стиль компонента */
    Style: TcxEditStyle;
    /** Ширина компонента */
    Width: number;
    /** Выравнивание заголовка */
    Alignment: cxCaptionAlignment;
    /** Стиль комопнента */
    PanelStyle: TcxPanelStyle;

}

/** Базовый класс для компонента-изображения (Наследует: TcxContainer) */

declare class TcxCustomImage {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Стиль контейнера */
    Style: TcxContainerStyle;
    /** Настройки анимации изображения */
    AnimationOptions: TcxImageAnimationOptions;
    /** Автоматически подстраивать размер компонента под размер изображения */
    AutoSize: boolean;
    /** Свойства компонента */
    Properties: TcxImageProperties;
    /** Настройки масштабирования */
    ZoomingOptions: TcxImageZoomingOptions;

}

/** Базовый класс для свойств компонента-изображения (Наследует: TcxCustomEditProperties) */

declare class TcxCustomImageProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Заголовок, отображаемый когда картинка не загружена */
    Caption: string;
    /** Отображение изображения по центру */
    Center: boolean;
    /** Управляет положением изображения в компоненте */
    FitMode: cxImageFitMode;
    /** Определяет какой вид изображения содержится в компоненте */
    GraphicClassName: string;
    /** Опредляет как будет обрабатываться прозрачность изображения */
    GraphicTransparency: cxImageTransparency;
    /** Содержимое контекстного меню компонента */
    PopupMenuLayout: TcxPopupMenuLayout;
    /** Отображение фокусной рамки */
    ShowFocusRect: boolean;

}

/** Базовый класс компонента-метки (Наследует: TcxCustomEdit) */

declare class TcxCustomLabel {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Ширина компонента */
    Width: number;
    /** Стиль компонента */
    Style: TcxLabelEditStyle;

}

/** Базовый класс свойств компонента-метки (Наследует: TcxCustomEditProperties) */

declare class TcxCustomLabelProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Угол поворота надписи */
    Angle: number;
    /** Перенос слов */
    WordWrap: boolean;

}

/** Базовый класс комонента со списком кнопок-переключателей (Наследует: TcxCustomGroupBox) */

declare class TcxCustomRadioGroup {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Стиль компонента */
    Style: TcxEditStyle;
    /** Ширина компонента */
    Width: number;
    /** Выравнивание заголовка */
    Alignment: cxCaptionAlignment;
    /** Стиль комопнента */
    PanelStyle: TcxPanelStyle;
    /** Индекс выбранного переключателя */
    ItemIndex: number;

}

/** Базовый класс свойств компонента со списком кнопок-переключателей (Наследует: TcxCustomButtonGroupProperties) */

declare class TcxCustomRadioGroupProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Количество колонок внутри группы */
    Columns: number;
    /** Сокращать заголовки кнопок многоточием */
    ShowEndEllipsis: boolean;
    /** Перенос слов */
    WordWrap: boolean;
    /** Список переключателей в группе */
    Items: TcxRadioGroupItems;

}

/** Базовый класс контейнера с возможностью прокрутки (Наследует: TcxControl) */

declare class TcxCustomScrollBox {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое отображение полос прокрутки */
    AutoScroll: boolean;
    /** Стиль границы компонента */
    BorderStyle: cxControlBorderStyle;
    /** Свойства горизонтальной полосы прокрутки */
    HorzScrollBar: TcxScrollBoxScrollBarOptions;
    /** Свойства вертикальной полосы прокрутки */
    VertScrollBar: TcxScrollBoxScrollBarOptions;

}

/** Базовый класс компонента с редактируемым текстовым полем (Наследует: TcxCustomEdit) */

declare class TcxCustomTextEdit {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Стиль компонента */
    Style: TcxEditStyle;
    /** Ширина компонента */
    Width: number;

}

/** Свойства компонента с редактируемым текстовым полем (Наследует: TcxCustomEditProperties) */

declare class TcxCustomTextEditProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Регистр символов */
    CharCase: editCharCase;
    /** Режим отображения текста */
    EchoMode: cxEditEchoMode;
    /** Список строк, используемый при автодополнении в текстовом поле */
    LookupItems: TStrings;
    /** Максимальная длина содержимого текста */
    MaxLength: number;
    /** Символ замены для режима отображения пароля */
    PasswordChar: string;
    /** Отображение кнопки "Показать пароль" */
    ShowPasswordRevealButton: boolean;

}

/** Выравнивание текста в метке */

declare class TcxEditAlignment {

    /** Выравнивание по горизонтали */
    Horz: alignment;
    /** Выравнивание по вертикали */
    Vert: cxEditVerticalAlignment;

}

/** Стиль компонентоа с редактируемым полем (Наследует: TcxContainerStyle) */

declare class TcxEditStyle {

    /** Цвет границы */
    BorderColor: number;
    /** Стиль границы */
    BorderStyle: cxContainerBorderStyle;
    /** Цвет компонента */
    Color: number;
    /** Отображаемые границы */
    Edges: TcxBorders;
    /** Настройки шрифта */
    Font: TFont;
    /** Тень под компонентом */
    Shadow: boolean;
    /** Цвет текста */
    TextColor: number;
    /** Стиль текста */
    TextStyle: TFontStyles;
    /** Прозрачность границы */
    TransparentBorder: boolean;

}

/** Компонент-контейнер, в котором могут находиться другие компоненты (Наследует: TcxCustomGroupBox) */

declare class TcxGroupBox {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Стиль компонента */
    Style: TcxEditStyle;
    /** Ширина компонента */
    Width: number;
    /** Выравнивание заголовка */
    Alignment: cxCaptionAlignment;
    /** Стиль комопнента */
    PanelStyle: TcxPanelStyle;

}

/** Компонент содержащий изображение (Наследует: TcxCustomImage) */

declare class TcxImage {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Стиль контейнера */
    Style: TcxContainerStyle;
    /** Настройки анимации изображения */
    AnimationOptions: TcxImageAnimationOptions;
    /** Автоматически подстраивать размер компонента под размер изображения */
    AutoSize: boolean;
    /** Свойства компонента */
    Properties: TcxImageProperties;
    /** Настройки масштабирования */
    ZoomingOptions: TcxImageZoomingOptions;

}

/** Настройки анимации изображения */

declare class TcxImageAnimationOptions {

    /** Определяет анимируется изображение или нет */
    Animation: dxDefaultBoolean;
    /** Определяет зацикливание анимации */
    AnimationLoop: dxDefaultBoolean;

}

/** Свойства компонента изображения (Наследует: TcxCustomImageProperties) */

declare class TcxImageProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Заголовок, отображаемый когда картинка не загружена */
    Caption: string;
    /** Отображение изображения по центру */
    Center: boolean;
    /** Управляет положением изображения в компоненте */
    FitMode: cxImageFitMode;
    /** Определяет какой вид изображения содержится в компоненте */
    GraphicClassName: string;
    /** Опредляет как будет обрабатываться прозрачность изображения */
    GraphicTransparency: cxImageTransparency;
    /** Содержимое контекстного меню компонента */
    PopupMenuLayout: TcxPopupMenuLayout;
    /** Отображение фокусной рамки */
    ShowFocusRect: boolean;

}

/** Настройки масштабирования изображения */

declare class TcxImageZoomingOptions {

    /** Максимально возможное масштабирование */
    MaxZoom: number;
    /** Минимально возможное масштабирование */
    MinZoom: number;
    /** Отображение ползунка масштабирования при наведении мыши */
    ShowZoomTrackBar: boolean;
    /** Текущий процент масштабирования */
    ZoomPercent: number;

}

/** Компонент-метка (Наследует: TcxCustomLabel) */

declare class TcxLabel {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Ширина компонента */
    Width: number;
    /** Стиль компонента */
    Style: TcxLabelEditStyle;
    /** Свойства компонента */
    Properties: TcxLabelProperties;

}

/** Стиль компонента-метки (Наследует: TcxEditStyle) */

declare class TcxLabelEditStyle {

    /** Цвет границы */
    BorderColor: number;
    /** Стиль границы */
    BorderStyle: cxContainerBorderStyle;
    /** Цвет компонента */
    Color: number;
    /** Отображаемые границы */
    Edges: TcxBorders;
    /** Настройки шрифта */
    Font: TFont;
    /** Тень под компонентом */
    Shadow: boolean;
    /** Цвет текста */
    TextColor: number;
    /** Стиль текста */
    TextStyle: TFontStyles;
    /** Прозрачность границы */
    TransparentBorder: boolean;

}

/** Свойства компонента-метки (Наследует: TcxCustomLabelProperties) */

declare class TcxLabelProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Угол поворота надписи */
    Angle: number;
    /** Перенос слов */
    WordWrap: boolean;

}

/** Компонент-контейнер со списком строк (Наследует: TcxContainer) */

declare class TcxListBox {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Стиль контейнера */
    Style: TcxContainerStyle;
    /** Разрешить множественное выделение последовательных строк из списка */
    ExtendedSelect: boolean;
    /** Список строк внутри контейнера */
    Items: TStrings;
    /** Разрешить множественное выделение */
    MultiSelect: boolean;
    /** Ширина полосы прокрутки */
    ScrollWidth: number;
    /** Сортировать (по алфавиту) */
    Sorted: boolean;

}

/** Стиль контейнера */

declare class TcxPanelStyle {

    /** Стиль активен */
    Active: boolean;
    /** Толщниа границы */
    BorderWidth: number;
    /** Отступ заголовка (в пикселях) */
    CaptionIndent: number;
    /** Перенос слов заголовка */
    WordWrap: boolean;

}

/** Настройки контекстного меню компонента-изображения */

declare class TcxPopupMenuLayout {

    /** Пункты, отображаемые в контекстном меню */
    MenuItems: Set<cxPopupMenuItem>;

}

/** Компонент с кнопкой-переключателем (Наследует: TRadioButton) */

declare class TcxRadioButton {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Перенос слов заголовка */
    WordWrap: boolean;
    /** Выравнивание содержимого */
    Alignment: leftRight;
    /** Переключатель отмечен */
    Checked: boolean;
    /** Автоматическая подстройка размера компонента под размеры содержимого */
    AutoSize: boolean;
    /** Индекс группы. Позволяет объединять несколько переключателей в группу. */
    GroupIndex: number;
    /** Прозрачность фона компонента */
    Transparent: boolean;

}

/** Компонент со списком кнопок-переключателей (Наследует: TcxCustomRadioGroup) */

declare class TcxRadioGroup {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Стиль компонента */
    Style: TcxEditStyle;
    /** Ширина компонента */
    Width: number;
    /** Выравнивание заголовка */
    Alignment: cxCaptionAlignment;
    /** Стиль комопнента */
    PanelStyle: TcxPanelStyle;
    /** Индекс выбранного переключателя */
    ItemIndex: number;
    /** Свойства компонента */
    Properties: TcxRadioGroupProperties;

}

/** Элемент списка кнопок-переключателей (Наследует: TcxCaptionItem) */

declare class TcxRadioGroupItem {

    /** Заголовок */
    Caption: string;

}

/** Список кнопок-переключателей */

declare class TcxRadioGroupItems {

    /** Добавить элемент (кнопку-переключатель) */
    Add: TcxRadioGroupItem;

}

/** Свойства компонента со списком кнопок-переключателей (Наследует: TcxCustomRadioGroupProperties) */

declare class TcxRadioGroupProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Количество колонок внутри группы */
    Columns: number;
    /** Сокращать заголовки кнопок многоточием */
    ShowEndEllipsis: boolean;
    /** Перенос слов */
    WordWrap: boolean;
    /** Список переключателей в группе */
    Items: TcxRadioGroupItems;

}

/** Контейнер с возможностью прокрутки (Наследует: TcxCustomScrollBox) */

declare class TcxScrollBox {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое отображение полос прокрутки */
    AutoScroll: boolean;
    /** Стиль границы компонента */
    BorderStyle: cxControlBorderStyle;
    /** Свойства горизонтальной полосы прокрутки */
    HorzScrollBar: TcxScrollBoxScrollBarOptions;
    /** Свойства вертикальной полосы прокрутки */
    VertScrollBar: TcxScrollBoxScrollBarOptions;

}

/** Параметры полосы прокрутки */

declare class TcxScrollBoxScrollBarOptions {

    /** Указывает сдвиг ползунка прокрутки при нажатии на клавишу прокрутки */
    Increment: number;
    /** Указывает ориентацию полосы прокрутки */
    Kind: scrollBarKind;
    /** Отступ контейнера с полосой прокрутки */
    Margin: number;
    /** Текущая позиция полосы прокрутки */
    Position: number;
    /** Ширина области прокрутки */
    Range: number;
    /** Указывает, двигается ли область прокрутки вместе с полосой */
    Tracking: boolean;
    /** Видимость полосы прокрутки */
    Visible: boolean;

}

/** Компонент с редактируемым текстовым полем (Наследует: TcxCustomTextEdit) */

declare class TcxTextEdit {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Автоматическое изменение размера в зависимости от содержимого */
    AutoSize: boolean;
    /** Внутреннее значение */
    EditValue: number | string;
    /** Высота компонента */
    Height: number;
    /** Событие изменения внутреннего значения */
    OnEditing: TcxEditEditingEvent;
    /** Стиль компонента */
    Style: TcxEditStyle;
    /** Ширина компонента */
    Width: number;
    /** Свойства компонента */
    Properties: TcxTextEditProperties;

}

/** Свойства компонента с редактируемым текстовым полем (Наследует: TcxCustomTextEditProperties) */

declare class TcxTextEditProperties {

    /** Выравнивание текста */
    Alignment: TcxEditAlignment;
    /** Автоматически выделять содержимое при фокусировке компонента */
    AutoSelect: boolean;
    /** Код клавиши для очистки содержимого */
    ClearKey: number;
    /** Код клавиши, вызывающий нажатие на привязанную кнопку компонента (если она существует) */
    ClickKey: number;
    /** Мгновенная передача изменений редактируемого значения в компонент. */
    ImmediatePost: boolean;
    /** Событие изменения значения в поле компонента */
    OnChange: TNotifyEvent;
    /** Событие изменения внутреннего значения компонента */
    OnEditValueChanged: TNotifyEvent;
    /** Только чтение */
    ReadOnly: boolean;
    /** Регистр символов */
    CharCase: editCharCase;
    /** Режим отображения текста */
    EchoMode: cxEditEchoMode;
    /** Список строк, используемый при автодополнении в текстовом поле */
    LookupItems: TStrings;
    /** Максимальная длина содержимого текста */
    MaxLength: number;
    /** Символ замены для режима отображения пароля */
    PasswordChar: string;
    /** Отображение кнопки "Показать пароль" */
    ShowPasswordRevealButton: boolean;

}

/** Класс, содержащий пространство модели и настройки для его построения и отображения */

declare class TDesigner3D {

    /** "Активный корень" пространства. Модель либо активынй слой */
    ActiveRoot: T3DObjectList;
    /** Максимальное время перехода при анимации (в миллисекундах) */
    AnimateTime: number;
    /** Цвет вспомогательных линий */
    AuxLinesColor: number;
    /** Камера */
    Camera: TCamera3D;
    /** Рисовать габаритные рамки */
    DrawLimits: boolean;
    /** Цвет подсвеченных объектов */
    HighlightedColor: number;
    /** Цвет линий */
    LinesColor: number;
    /** Модель */
    Model: TModel3D;
    /** Степень детализации объектов при построении. Диапазон значений: (0.001, 1). 0.001 - Долгое построение, больше деталей. 1 - Быстрое построение, меньше деталей. */
    ModelAccuracy: number;
    /** Флаг перспективы. По умолчанию true */
    Perspective: boolean;
    /** Цвет выделенных объектов */
    SelectionColor: number;
    /** Найти объект по его UID */
    FindObject(ID: number): TObject3D;
    /** Получить объект по его UID */
    GetObjectByID(ID: number): TObject3D;
    /** Получить количество миллиметров в одном пикселе */
    MillimetersInPixel(): number;
    /** Перерисовать окно */
    Repaint(): void;
    /** Обновить координаты текстур (если были изменены) */
    UpdateTextureCoord(): void;
    /** Показать всё */
    ViewAll(Offset: number, Selection: boolean): void;

}

/** Полуфабрикат. (Наследует: TAnimBlock3D) */

declare class TDraftBlock {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Количество вложенных объектов */
    Count: number;
    /** Вложенный объект по индексу */
    Objects: IndexedProperty<number, TObject3D>;
    /** Удалить все вложенные объекты */
    Clear(): void;
    /** Удалить все выделенные вложенные объекты (рекурсивно). */
    DeleteSelection(): void;
    /** Получить индекс вложенного объекта. Если объект не является вложенным, возвращает -1 */
    IndexOf(Obj: TObject3D): number;
    /** Изменить порядок списка в обратную сторону */
    Reverse(): void;
    /** Восстановить видимость всех вложенных объектов (рекурсивно) */
    SetVisibleAllObjects(): void;
    /** Снять подсветку со всех вложенных объектов (рекурсивно) */
    UnHighlightAll(): void;
    /** Снять выделение со всех вложенных объектов (рекурсивно) */
    UnSelectAll(): void;
    /** Анимация структурного объекта. Если у структурного объекта не было анимации, она будет создана при чтении свойства. */
    Animation: TFurnAnimation;
    /** Тип структурного объекта (строковое значение) */
    FurnType: string;
    /** Тип для Салона. При назначении определённого типа назначится анимация по умолчанию. */
    SalonType: salonType;
    /** Проверить наличие анимации структурного объекта */
    HasAnimation(): boolean;
    /** Считать полуфабрикат покупным изделием в операциях. */
    AsAsm: boolean;

}

/** Параметры просверленного отверстия. (Наследует: THole) */

declare class TDrilledHole {

    /** Контур. */
    Contour: T2DElemList;
    /** Глубина. */
    Depth: number;
    /** Диаметр. */
    Diameter: number;
    /** Направление. */
    Direction: TVector3d;
    /** Тип сверления */
    DrillMode: holeDrillMode;
    /** Положение. */
    Position: TVector3d;
    /** Радиус. */
    Radius: number;
    /** Тело, в которое сверлится отверстие. */
    Body: TObject3D;
    /** Фурнитура, которой принадлежит отверстие. */
    Fastener: TFastener;
    /** Параметры оригинального отверстия */
    OldHole: THole;

}

/** Список просверленных отверстий. (Наследует: TObjectList<TDrilledHole>) */

declare class TDrillHoleList {

    /** Количество элементов */
    Count: number;
    /** Элемент по индексу */
    Items: IndexedProperty<number, TDrilledHole>;

}

/** Описывает свойства глифов */

declare class TdxSmartGlyph {

    /** Плотность пикселей источника */
    SourceDPI: number;
    /** Высота источника в пикселях */
    SourceHeight: number;
    /** Ширина источника в пикселях */
    SourceWidth: number;

}

/** Тело выдавливания. (Наследует: TSolidBody) */

declare class TExtrusionBody {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Материал объекта. */
    Material: TMaterial;
    /** Наименование материала (с артикулом) */
    MaterialName: string;
    /** Поверхность по индексу */
    TriLists: IndexedProperty<number, TTriangleList>;
    /** Количество поверхностей */
    TriListsCount: number;
    /** Удалить все поверхности объекта */
    ClearTriLists(): void;
    /** Получить общее количество треугольников объекта */
    TriCount(): number;
    /** Ширина материала. Значение больше 0 соответствует погонному материалу. Значене 0 соответствует площадному материалу. */
    MaterialWidth: number;
    /** Контур. */
    Contour: T2DElemList;
    /** Глубина выдавливания. */
    Thickness: number;

}

/** Объект - фурнитура. (Наследует: TTriMesh) */

declare class TFastener {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Материал объекта. */
    Material: TMaterial;
    /** Наименование материала (с артикулом) */
    MaterialName: string;
    /** Поверхность по индексу */
    TriLists: IndexedProperty<number, TTriangleList>;
    /** Количество поверхностей */
    TriListsCount: number;
    /** Удалить все поверхности объекта */
    ClearTriLists(): void;
    /** Получить общее количество треугольников объекта */
    TriCount(): number;
    /** Тип установки. */
    DatumMode: datumMode;
    /** Список отверстий. */
    Holes: THoleList;
    /** Сгененрировать новый ID фурнитуры */
    GenerateNewId(): void;
    /** Пересчитать габаритные размеры фурнитуры */
    ReCalcGabarits(): void;

}

/** Информация о сверлении фурнитуры. */

declare class TFastenerDrillInfo {

    /** Фурнитура. */
    Fastener: TFastener;
    /** Список просверленных отверстий. */
    Holes: TDrillHoleList;

}

/** Шрифт */

declare class TFont {

    /** Цвет шрифта */
    Color: number;
    /** Имя шрифта */
    Name: string;
    /** Размер шрифта */
    Size: number;
    /** Стили шрифта */
    Style: TFontStyles;

}

/** Форма (Наследует: TCustomForm) */

declare class TForm {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Стиль формы */
    FormStyle: formStyle;
    /** Событие активации формы */
    OnActivate: TNotifyEvent;
    /** Событие закрытия формы */
    OnClose: TCloseEvent;
    /** Событие запроса на закрытие формы */
    OnCloseQuery: TCloseQueryEvent;
    /** Событие деактивации формы */
    OnDeactivate: TNotifyEvent;
    /** Событие отображения формы */
    OnShow: TNotifyEvent;
    /** Отобразить форму */
    Show(): void;

}

/** Анимация */

declare class TFurnAnimation {

    /** Конечная точка оси анимации. При повороте нормализованный вектор оси анимации задаёт ось поворота При сдвиге вектор оси анимации задаёт смещение объекта */
    AxisEnd: TVector3d;
    /** Начальная точка оси анимации */
    AxisStart: TVector3d;
    /** Угол поворота */
    DoorAngle: number;
    /** Сдвиг при анимации поворота */
    DoorShift: number;
    /** Длительность анимации (в секундах) */
    Duration: number;

}

/** Объект - артикул модели. (Наследует: TObject3D) */

declare class TFurnArticle {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Анимация. Если анимации не было до чтения свойства, то при чтении свойства анимация будет создана */
    Animation: TFurnAnimation;
    /** Точность пострения (гладкость дуг при установке фурнитуры в модель). */
    BuildAccuracy: number;
    /** Артикул модели. */
    Code: string;
    /** Тип установки (для фрагмента или фруниутры). */
    DatumMode: datumMode;
    /** Тип файла */
    FileType: fileType;
    /** Тип фрагмента */
    FurnType: string;
    /** Наименование заказа. */
    OrderName: string;
    /** Тип блока (для модуля БАЗИС-Салон) */
    SalonBlockType: salonType;
    /** Краткое обозначение - префикс перед полным обозначением объекта при иерархической расстановке позиций. */
    ShortSign: string;
    /** Получить булево значение, задана ли анимация */
    HasAnimation(): boolean;
    /** Полное наименование модели (с артикулом). */
    NameWithCode(): string;

}

/** Покупное изделие (Наследует: TAnimBlock3D) */

declare class TFurnAsm {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Количество вложенных объектов */
    Count: number;
    /** Вложенный объект по индексу */
    Objects: IndexedProperty<number, TObject3D>;
    /** Удалить все вложенные объекты */
    Clear(): void;
    /** Удалить все выделенные вложенные объекты (рекурсивно). */
    DeleteSelection(): void;
    /** Получить индекс вложенного объекта. Если объект не является вложенным, возвращает -1 */
    IndexOf(Obj: TObject3D): number;
    /** Изменить порядок списка в обратную сторону */
    Reverse(): void;
    /** Восстановить видимость всех вложенных объектов (рекурсивно) */
    SetVisibleAllObjects(): void;
    /** Снять подсветку со всех вложенных объектов (рекурсивно) */
    UnHighlightAll(): void;
    /** Снять выделение со всех вложенных объектов (рекурсивно) */
    UnSelectAll(): void;
    /** Анимация структурного объекта. Если у структурного объекта не было анимации, она будет создана при чтении свойства. */
    Animation: TFurnAnimation;
    /** Тип структурного объекта (строковое значение) */
    FurnType: string;
    /** Тип для Салона. При назначении определённого типа назначится анимация по умолчанию. */
    SalonType: salonType;
    /** Проверить наличие анимации структурного объекта */
    HasAnimation(): boolean;

}

/** Блок. (Наследует: TAnimBlock3D) */

declare class TFurnBlock {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Количество вложенных объектов */
    Count: number;
    /** Вложенный объект по индексу */
    Objects: IndexedProperty<number, TObject3D>;
    /** Удалить все вложенные объекты */
    Clear(): void;
    /** Удалить все выделенные вложенные объекты (рекурсивно). */
    DeleteSelection(): void;
    /** Получить индекс вложенного объекта. Если объект не является вложенным, возвращает -1 */
    IndexOf(Obj: TObject3D): number;
    /** Изменить порядок списка в обратную сторону */
    Reverse(): void;
    /** Восстановить видимость всех вложенных объектов (рекурсивно) */
    SetVisibleAllObjects(): void;
    /** Снять подсветку со всех вложенных объектов (рекурсивно) */
    UnHighlightAll(): void;
    /** Снять выделение со всех вложенных объектов (рекурсивно) */
    UnSelectAll(): void;
    /** Анимация структурного объекта. Если у структурного объекта не было анимации, она будет создана при чтении свойства. */
    Animation: TFurnAnimation;
    /** Тип структурного объекта (строковое значение) */
    FurnType: string;
    /** Тип для Салона. При назначении определённого типа назначится анимация по умолчанию. */
    SalonType: salonType;
    /** Проверить наличие анимации структурного объекта */
    HasAnimation(): boolean;
    /** Тип установки. */
    DatumMode: datumMode;

}

/** Облицовка кромки. */

declare class TFurnButt {

    /** Припуск. */
    Allowance: number;
    /** Подрезать панель на толщину кромки. */
    ClipPanel: boolean;
    /** Номер отреза. -1 = одиночный отрез. */
    CutIndex: number;
    /** Индекс элемента контура, на который наносится кромка. */
    ElemIndex: number;
    /** Наименование материала. */
    Material: string;
    /** Свес. */
    Overhung: number;
    /** Обозначение. */
    Sign: string;
    /** Толщина. */
    Thickness: number;
    /** Ширина. */
    Width: number;

}

/** Список кромок. */

declare class TFurnButtList {

    /** Кромка по индексу. */
    Butts: IndexedProperty<number, TFurnButt>;
    /** Количество. */
    Count: number;
    /** Добавить новую кромку */
    Add(): TFurnButt;
    /** Очистить список */
    Clear(): void;
    /** Удалить кромку по индексу */
    Delete(Index: number): void;
    /** Найти первую кромку, имеющую указанный индекс элемента контура */
    FindButt(ElemIndex: number): TFurnButt;
    /** Получить индекс кромки */
    IndexOf(Butt: TFurnButt): number;
    /** Получить новый номер отреза */
    NewCutIndex(): number;
    /** Удалить кромку из списка */
    Remove(Butt: TFurnButt): void;

}

/** Паз панели. */

declare class TFurnCut {

    /** Контур сечения. */
    Contour: T2DElemList;
    /** Тип паза */
    CutType: cutType;
    /** Флаг - паз размещён на лицевой стороне панели */
    FrontSide: boolean;
    /** Наименование. */
    Name: string;
    /** Панель */
    Panel: TFurnPanel;
    /** Параметры паза. */
    Params: TCutParams;
    /** Обозначение. */
    Sign: string;
    /** Глубина выемки. Отрицательное значение - выемка с обратной стороны панели */
    Thickness: number;
    /** Траектория паза. */
    Trajectory: T2DElemList;
    /** Создать параметры паза */
    CreateParams(): void;
    /** Удалить параметры паза */
    DeleteParams(): void;

}

/** Список пазов. */

declare class TFurnCutList {

    /** Количество. */
    Count: number;
    /** Паз по индексу. */
    Cuts: IndexedProperty<number, TFurnCut>;
    /** Добавить новый паз */
    Add(): TFurnCut;
    /** Очистить список */
    Clear(): void;
    /** Удалить паз по индексу */
    Delete(Index: number): void;

}

/** Информация о фурнитуре */

declare class TFurnitureInfo {

    /** Путь к файлу фурнитуры */
    FileName: string;
    /** Параметры фурнитуры */
    Params: TParamFastener;
    /** Получить способ базирования фурнитуры */
    FindDatumMode(): datumMode;

}

/** Панель. (Наследует: TSolidBody) */

declare class TFurnPanel {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Материал объекта. */
    Material: TMaterial;
    /** Наименование материала (с артикулом) */
    MaterialName: string;
    /** Поверхность по индексу */
    TriLists: IndexedProperty<number, TTriangleList>;
    /** Количество поверхностей */
    TriListsCount: number;
    /** Удалить все поверхности объекта */
    ClearTriLists(): void;
    /** Получить общее количество треугольников объекта */
    TriCount(): number;
    /** Ширина материала. Значение больше 0 соответствует погонному материалу. Значене 0 соответствует площадному материалу. */
    MaterialWidth: number;
    /** Флаг - гнутая панель. */
    Bent: boolean;
    /** Траектория гнутой панели. */
    BentContour: T2DElemList;
    /** Направление выдавливания панели. */
    BentDirection: faceType;
    /** Список облицовок кромки. */
    Butts: TFurnButtList;
    /** Контур. */
    Contour: T2DElemList;
    /** Список пазов. */
    Cuts: TFurnCutList;
    /** Лицевая сторона. */
    FrontFace: faceType;
    /** Максимальная координата по локальной оси Z. Значение обновляется после перестроения панели. */
    HighZ: number;
    /** Толщина между слоями гнутой панели */
    InterlayerThickness: number;
    /** Минимальная координата по локальной оси Z. Значение обновляется после перестроения панели. */
    LowZ: number;
    /** Средняя координата по локальной оси Z. Значение обновляется после перестроения панели. */
    MiddleZ: number;
    /** Список облицовок пласти. */
    Plastics: TFurnPlasticList;
    /** Ориентация текстуры. */
    TextureOrientation: textureOrientation;
    /** Толщина. */
    Thickness: number;
    /** Общее значение толщины по оси Z. Значение обновляется после перестроения панели. */
    ZThickness: number;

}

/** Облицовка пласти. */

declare class TFurnPlastic {

    /** Наименование материала. */
    Material: string;
    /** Ширина материала. Значение больше 0 соответствует погонному материалу. Значене 0 соответствует площадному материалу. */
    MaterialWidth: number;
    /** Сторона нанесения. */
    Side: faceType;
    /** Ориентация текстуры. */
    TextureOrientation: textureOrientation;
    /** Толщина. */
    Thickness: number;

}

/** Список облицовок пласти. */

declare class TFurnPlasticList {

    /** Количество. */
    Count: number;
    /** Облицовка по индексу. */
    Plastics: IndexedProperty<number, TFurnPlastic>;
    /** Добавить новую облицовку пласти */
    Add(): TFurnPlastic;
    /** Очистить список */
    Clear(): void;
    /** Удалить облицовку пласти по индексу */
    Delete(Index: number): void;
    /** Найти последний пластик, нанесённый на указанную сторону */
    FindLastPlastic(Side: faceType): TFurnPlastic;
    /** Удалить облицовку пласти */
    Remove(Plastic: TFurnPlastic): void;

}

/** Параметры отверстия */

declare class THole {

    /** Контур. */
    Contour: T2DElemList;
    /** Глубина. */
    Depth: number;
    /** Диаметр. */
    Diameter: number;
    /** Направление. */
    Direction: TVector3d;
    /** Тип сверления */
    DrillMode: holeDrillMode;
    /** Положение. */
    Position: TVector3d;
    /** Радиус. */
    Radius: number;

}

/** Объект, реализующий алгоритмы сверления отверстий в тела. */

declare class THoleDrilling {

    /** Информация о сверлении тел */
    Bodies: TBodyDrillInfoList;
    /** Информация о сверлении фурнитуры */
    Fasteners: TObjectList<TFastenerDrillInfo>;
    /** Добавить тела (рекурсивно). */
    AddBodies(Root: T3DObjectList): void;
    /** Добавить объекты фурнитуры и тела из структурного объекта (рекурсивно). */
    AddBodiesAndFasteners(Root: T3DObjectList): void;
    /** Добавить тело. */
    AddBody(Body: TObject3D): void;
    /** Добавить объект фурнитуры. */
    AddFastener(Fastener: TFastener): void;
    /** Добавить объекты фурнитуры (рекурсивно). */
    AddFasteners(Root: T3DObjectList): void;
    /** Выполнить расчёт сверления отверстий. */
    DrillHoles(): void;

}

/** Список отверстий. (Наследует: TObjectList<THole>) */

declare class THoleList {

    /** Количество элементов */
    Count: number;
    /** Элемент по индексу */
    Items: IndexedProperty<number, THole>;
    /** Создать новое отверстие */
    NewHole(): THole;

}

/** Компонент кнопка, содержащий изображение. Позволяет задать изображение как путь к файлу (Наследует: TcxButton) */

declare class TImageButton {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Перенос слов заголовка */
    WordWrap: boolean;
    /** Состояние "кнопка отмены" */
    Cancel: boolean;
    /** Состояние "по умолчанию" */
    Default: boolean;
    /** Параметры цвета */
    Colors: TcxButtonColors;
    /** Описание кнопки. Используется для кнопки в стиле командной кнопки Windows */
    Description: string;
    /** Тип кнопки */
    Kind: cxButtonKind;
    /** Настройки изображения */
    OptionsImage: TcxButtonImageOptions;
    /** Цикличное повторение нажатия при удержании кнопки */
    RepeatClick: boolean;
    /** Путь к изображению */
    PicturePath: string;

}

/** Компонент, содержащий изображение. Позволяет задать изображение как путь к файлу (Наследует: TcxImage) */

declare class TImageContainer {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Прозначность компонента при использовании режима рендера GDI */
    Transparent: boolean;
    /** Стиль контейнера */
    Style: TcxContainerStyle;
    /** Настройки анимации изображения */
    AnimationOptions: TcxImageAnimationOptions;
    /** Автоматически подстраивать размер компонента под размер изображения */
    AutoSize: boolean;
    /** Свойства компонента */
    Properties: TcxImageProperties;
    /** Настройки масштабирования */
    ZoomingOptions: TcxImageZoomingOptions;
    /** Путь к изображению */
    PicturePath: string;

}

/** Импортированный (нередактируемый) полигональный объект (Наследует: TTriMesh) */

declare class TImportedMesh {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Материал объекта. */
    Material: TMaterial;
    /** Наименование материала (с артикулом) */
    MaterialName: string;
    /** Поверхность по индексу */
    TriLists: IndexedProperty<number, TTriangleList>;
    /** Количество поверхностей */
    TriListsCount: number;
    /** Удалить все поверхности объекта */
    ClearTriLists(): void;
    /** Получить общее количество треугольников объекта */
    TriCount(): number;

}

/** Объект-слой (Наследует: T3DObjectList) */

declare class TLayer3D {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Количество вложенных объектов */
    Count: number;
    /** Вложенный объект по индексу */
    Objects: IndexedProperty<number, TObject3D>;
    /** Удалить все вложенные объекты */
    Clear(): void;
    /** Удалить все выделенные вложенные объекты (рекурсивно). */
    DeleteSelection(): void;
    /** Получить индекс вложенного объекта. Если объект не является вложенным, возвращает -1 */
    IndexOf(Obj: TObject3D): number;
    /** Изменить порядок списка в обратную сторону */
    Reverse(): void;
    /** Восстановить видимость всех вложенных объектов (рекурсивно) */
    SetVisibleAllObjects(): void;
    /** Снять подсветку со всех вложенных объектов (рекурсивно) */
    UnHighlightAll(): void;
    /** Снять выделение со всех вложенных объектов (рекурсивно) */
    UnSelectAll(): void;
    /** Флаг - является ли слой активным */
    Active: boolean;
    /** Флаг - можно ли выделить объекты внутри слоя */
    Selectable: boolean;

}

/** Объект - отрезок. Координаты отрезка задаются в ЛСК объекта. (Наследует: TPlane3DObject) */

declare class TLine3D {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Точка начала. */
    Pos1: TVector3d;
    /** Точка конца. */
    Pos2: TVector3d;

}

/** Список значений определённого типа */

declare class TList<T> {

    /** Количество элементов */
    Count: number;
    /** Элемент по индексу */
    Items: IndexedProperty<number, T>;

}

/** Отступы при выравнивании компонента */

declare class TMargins {

    /** Снизу */
    Bottom: number;
    /** Слева */
    Left: number;
    /** Справа */
    Right: number;
    /** Сверху */
    Top: number;

}

/** Материал объекта */

declare class TMaterial {

    /** Цвет материала */
    DiffuseColor: number;
    /** Имя материала */
    MaterialName: string;
    /** Путь к текстуре */
    Path: string;
    /** Получить абсолютный путь к текстуре */
    PathAbsolute(): string;

}

/** Модель (Наследует: T3DObjectList) */

declare class TModel3D {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Количество вложенных объектов */
    Count: number;
    /** Вложенный объект по индексу */
    Objects: IndexedProperty<number, TObject3D>;
    /** Удалить все вложенные объекты */
    Clear(): void;
    /** Удалить все выделенные вложенные объекты (рекурсивно). */
    DeleteSelection(): void;
    /** Получить индекс вложенного объекта. Если объект не является вложенным, возвращает -1 */
    IndexOf(Obj: TObject3D): number;
    /** Изменить порядок списка в обратную сторону */
    Reverse(): void;
    /** Восстановить видимость всех вложенных объектов (рекурсивно) */
    SetVisibleAllObjects(): void;
    /** Количество подсвеченных объектов */
    HighlightCount: number;
    /** Подсвеченный объект модели (если количество подсвеченных объектов = 1) */
    HighlightedObj: TObject3D;
    /** Подсвеченный объект по индексу */
    Highlights: IndexedProperty<number, TObject3D>;
    /** Выделенный объект модели (если количество выделенных объектов = 1) */
    Selected: TObject3D;
    /** Выделенный объект модели (если количество выделенных объектов = 1) */
    SelectedObj: TObject3D;
    /** Количество выделенных объектов модели */
    SelectionCount: number;
    /** Выделенный объект по индексу */
    Selections: IndexedProperty<number, TObject3D>;
    /** Сбросить подсветку всех объектов */
    UnHighlightAll(): void;
    /** Сбросить выделение и подсветку всех объектов. */
    UnPickAll(): void;
    /** Сбросить выделение всех объектов. Можно задать объект, выделение которого не будет сбрасываться. */
    UnSelectAll(ExceptObj: TObject3D): void;

}

/** Габаритная рамка. (Наследует: TTriMesh) */

declare class TModelLimits {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Материал объекта. */
    Material: TMaterial;
    /** Наименование материала (с артикулом) */
    MaterialName: string;
    /** Поверхность по индексу */
    TriLists: IndexedProperty<number, TTriangleList>;
    /** Количество поверхностей */
    TriListsCount: number;
    /** Удалить все поверхности объекта */
    ClearTriLists(): void;
    /** Получить общее количество треугольников объекта */
    TriCount(): number;
    /** Глубина. */
    Depth: number;
    /** Размер сетки. */
    GridSize: number;
    /** Высота. */
    Height: number;
    /** Габаритные размеры */
    LimitSize: TVector3d;
    /** Ширина. */
    Width: number;

}

/** Базовый класс для трёхмерных объектов */

declare class TObject3D {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;

}

/** Список объектов (Наследует: TList<T>) */

declare class TObjectList<T> {

    /** Количество элементов */
    Count: number;
    /** Элемент по индексу */
    Items: IndexedProperty<number, T>;

}

/** Компонент-панель (Наследует: TCustomPanel) */

declare class TPanel {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Отображение текстового заголовка внутри панели */
    ShowCaption: boolean;

}

/** Параметры построения фурнитуры */

declare class TParamFastener {

    /** Тип базирования фурнитуры */
    DatumMode: datumMode;
    /** Тип параметрической фурнитуры */
    FastType: paramFastType;
    /** Наименование */
    Name: string;

}

/** Трёхмерный объект с двумерной геометрией (Наследует: TObject3D) */

declare class TPlane3DObject {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;

}

/** Точка на плоскости */

declare class TPoint {

    /** Координата X */
    X: number;
    /** Координата Y */
    Y: number;

}

/** Пирамида (Наследует: TSolidBody) */

declare class TPyramid3D {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Материал объекта. */
    Material: TMaterial;
    /** Наименование материала (с артикулом) */
    MaterialName: string;
    /** Поверхность по индексу */
    TriLists: IndexedProperty<number, TTriangleList>;
    /** Количество поверхностей */
    TriListsCount: number;
    /** Удалить все поверхности объекта */
    ClearTriLists(): void;
    /** Получить общее количество треугольников объекта */
    TriCount(): number;
    /** Ширина материала. Значение больше 0 соответствует погонному материалу. Значене 0 соответствует площадному материалу. */
    MaterialWidth: number;
    /** Глубина */
    Depth: number;
    /** Высота */
    Height: number;
    /** Ширина */
    Width: number;

}

/** Компонент с кнопкой-переключателем (Наследует: TButtonControl) */

declare class TRadioButton {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Перенос слов заголовка */
    WordWrap: boolean;
    /** Выравнивание содержимого */
    Alignment: leftRight;
    /** Переключатель отмечен */
    Checked: boolean;

}

/** Объект для проверки пересечения объектов лучом */

declare class TRayInfo {

    /** Направление луча */
    Direction: TVector3d;
    /** Максимальное расстояние для обнаружения пересечения. После проверки пересечения возвращает расстояние до пересечения. либо заданное максимальное расстояние (если пересечение не было обнаружено). */
    Distance: number;
    /** Объект, исключённый из проверки пересечения */
    ExcludedObject: TObject3D;
    /** Флаг - искать первое пересечение (по структуре объектов) Если флаг выставлен, при нахождении первого пересечения проверка будет осатновлена. Иначе будет проверена вся доступная структура объектов для поиска минимального расстояния до пересечения */
    FindFirstIntersection: boolean;
    /** Точка пересечения. */
    InterPos: TVector3d;
    /** Флаг - проверять поверхности, если луч проходит через их "заднюю" сторону */
    IntersectBackFaces: boolean;
    /** Флаг - пересечение обнаружено */
    Intersected: boolean;
    /** Флаг - проверять пересечения со скрытыми объектами */
    IntersectHiddenObjects: boolean;
    /** Объект, с которым было обнаружено пересечение */
    Object3D: TObject3D;
    /** Положение луча */
    Position: TVector3d;
    /** Восстановить предыдущую запомненную ориентацию луча. */
    Pop(): void;
    /** Запомнить текущую ориентацию луча и добавить ориентацию объекта к лучу Основное использование - перевод луча из СК владельца данного объекта в СК самого объекта */
    Push(TransformObj: TObject3D): void;
    /** Обнулить данные о пересечении */
    Start(): void;
    /** Преобразовать ориентацию луча */
    Transform(Matrix: TMatrix4): void;

}

/** Прямоугольник */

declare class TRect {

    /** Высота */
    Height: number;
    /** Расположение на плоскости */
    Location: TPoint;
    /** Размер */
    Size: TSize;
    /** Ширина */
    Width: number;

}

/** Размер */

declare class TSize {

    /** Высота */
    Height: number;
    /** Ширина */
    Width: number;

}

/** Объект - размер. Элементы размера лежат на плоскости XY ЛСК объекта, где ось X идёт вдоль длины размера, а ось Y вдоль высоты размера. (Наследует: TPlane3DObject) */

declare class TSize3D {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Высота размерной линии. */
    Length: number;
    /** Длина размерной линии. Назначение длины назначает и значение размера. */
    Size: number;
    /** Размер текста. */
    TextSize: number;
    /** Значение размера. */
    Value: number;

}

/** Ограничения размеров компонента */

declare class TSizeConstraints {

    /** Максимальная высота */
    MaxHeight: number;
    /** Максимальная ширина */
    MaxWidth: number;
    /** Минимальная высота */
    MinHeight: number;
    /** Минимальная ширина */
    MinWidth: number;

}

/** Твёрдое тело. (Наследует: TTriMesh) */

declare class TSolidBody {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Материал объекта. */
    Material: TMaterial;
    /** Наименование материала (с артикулом) */
    MaterialName: string;
    /** Поверхность по индексу */
    TriLists: IndexedProperty<number, TTriangleList>;
    /** Количество поверхностей */
    TriListsCount: number;
    /** Удалить все поверхности объекта */
    ClearTriLists(): void;
    /** Получить общее количество треугольников объекта */
    TriCount(): number;
    /** Ширина материала. Значение больше 0 соответствует погонному материалу. Значене 0 соответствует площадному материалу. */
    MaterialWidth: number;

}

/** Сфера. (Наследует: TSolidBody) */

declare class TSphere3D {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Материал объекта. */
    Material: TMaterial;
    /** Наименование материала (с артикулом) */
    MaterialName: string;
    /** Поверхность по индексу */
    TriLists: IndexedProperty<number, TTriangleList>;
    /** Количество поверхностей */
    TriListsCount: number;
    /** Удалить все поверхности объекта */
    ClearTriLists(): void;
    /** Получить общее количество треугольников объекта */
    TriCount(): number;
    /** Ширина материала. Значение больше 0 соответствует погонному материалу. Значене 0 соответствует площадному материалу. */
    MaterialWidth: number;
    /** Радиус. */
    Radius: number;

}

/** Компонент-таблица со строками (Наследует: TCustomDrawGrid) */

declare class TStringGrid {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;
    /** Номер выделенного столбца */
    Col: number;
    /** Количество столбцов в таблице */
    ColCount: number;
    /** Выравнивание текста в столбцах */
    DefaultColAlignment: alignment;
    /** Ширина столбцов */
    DefaultColWidth: number;
    /** Высота рядов */
    DefaultRowHeight: number;
    /** Стиль отображения таблицы */
    DrawingStyle: gridDrawingStyle;
    /** Редактирование выделенной клетки */
    EditorMode: boolean;
    /** Количество зафиксированных столбцов */
    FixedCols: number;
    /** Количество зафиксированных рядов */
    FixedRows: number;
    /** Параметры шрифта */
    Font: TFont;
    /** Ширина разделительной линии в таблице */
    GridLineWidth: number;
    /** Индекс самого левого отображаемого столбца */
    LeftCol: number;
    /** Параметры таблицы */
    Options: TGridOptions;
    /** Номер выделенного ряда */
    Row: number;
    /** Количество рядов */
    RowCount: number;
    /** Настройки отображения полос прокрутки */
    ScrollBars: scrollStyle;
    /** Индекс самого верхнего отображаемого ряда */
    TopRow: number;
    /** Количество отображаемых столбцов */
    VisibleColCount: number;
    /** Количество отображаемых рядов */
    VisibleRowCount: number;
    /** Возвращает координаты и измерения указанной клетки в виде TRect */
    CellRect(ACol: number, ARow: number): TRect;
    /** Возвращает ряд и столбец находящиеся на указанных координатах X и Y */
    MouseToCell(X: number, Y: number, ACol: ReferenceObject<number>, ARow: ReferenceObject<number>): void;
    /** Возвращает содержимое столбца указанного в качестве индекса в виде объекта TStrings */
    Cols: TStrings[];
    /** Возвращает содержимое ряда указанного в качестве индекса в виде объекта TStrings */
    Rows: TStrings[];

}

/** Абстрактный класс списка строк */

declare class TStrings {

    /** Добавить строку в список. Метод возвращает индекс добавленной строки в списке */
    Add(s: string): number;
    /** Получить содержимое объекта в виде массива строк */
    ToStringArray(): string[];

}

/** Список треугольников поверхности */

declare class TTriangleList {

    /** Количество треугольников */
    Count: number;
    /** Материал поверхности */
    Material: TMaterial;
    /** Полигональный объект-владелец */
    Owner: TTriMesh;
    /** Треугольник по индексу */
    Triangles: IndexedProperty<number, T3DTriangle>;

}

/** Полигональный объект (Наследует: TObject3D) */

declare class TTriMesh {

    /** Позиция объекта */
    ArtPos: string;
    /** Цвет линий объекта. clNone - использовать цвет линий объекта-владельца */
    Color: number;
    /** Обозначение объекта */
    Designation: string;
    /** Объект, владеющий информацией о пространстве */
    DS: TDesigner3D;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ГСК объекта */
    GabMin: TVector3d;
    /** Центр габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GCenter: TVector3d;
    /** Максимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMax: TVector3d;
    /** Минимальная точка габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GMin: TVector3d;
    /** Размер габаритного параллелепипеда, описывающего объект относительно ЛСК объекта */
    GSize: TVector3d;
    /** Флаг - непосредственная подсветка объекта */
    Highlighted: boolean;
    /** Флаг - является ли объект сборочной единицей */
    IsAssemblyUnit: boolean;
    /** Является ли объект структурным */
    List: boolean;
    /** Матрица трансформации из ЛСК объекта в ЛСК объекта-владельца */
    LocalMatrix: TMatrix4;
    /** Флаг - создавать сборочный чертёж */
    MakeAssemblyDrawing: boolean;
    /** Флаг - создавать схему сборки */
    MakeExplodedView: boolean;
    /** Модель, частью которой является объект */
    Model: TModel3D;
    /** Имя объекта */
    Name: string;
    /** Заметки */
    Notes: string;
    /** Структурный объект (владелец), внутри которого находится данный объект */
    Owner: T3DObjectList;
    /** Индекс объекта внутри структурного объекта */
    OwnerIndex: number;
    /** Флаг - является ли объект выбранным Результат при чтении - наличие флага Selected или Highlighted При записи: True - Задаёт флаг Selected False - сбрасывает флаги Selected и Highlighted */
    Picked: boolean;
    /** Положение объекта. Значение относительно ЛСК объекта-владельца */
    Position: TVector3d;
    /** Положение объекта по оси X. Значение относительно ЛСК объекта-владельца */
    PositionX: number;
    /** Положение объекта по оси Y. Значение относительно ЛСК объекта-владельца */
    PositionY: number;
    /** Положение объекта по оси Z. Значение относительно ЛСК объекта-владельца */
    PositionZ: number;
    /** Флаг - непосредственное выделение объекта */
    Selected: boolean;
    /** Ориентация объекта. Содержит вектор положения и кватернион поворота */
    Transformation: TTransformation;
    /** Уникальный идентификатор (UID) объекта */
    UID: number;
    /** Флаг - использовать в ЧПУ */
    UseInCNC: boolean;
    /** Флаг - использовать в Раскрое */
    UseInCutting: boolean;
    /** Флаг - использовать в документации */
    UseInDocs: boolean;
    /** Флаг - использовать в Смете */
    UseInEstimate: boolean;
    /** Флаг - учитывать в анализе модели */
    UseInInspection: boolean;
    /** Количество пользовательских свойств */
    UserPropCount: number;
    /** Пользовательское свойство по имени (текст) либо индексу (число). Для удаления свойства, назначить ему Unassigned или undefined */
    UserProperty: IndexedProperty<number, number | string>;
    /** Имя пользовательского свойства с указанным индексом */
    UserPropertyName: IndexedProperty<number, string>;
    /** Варианты значения пользовательского свойства. */
    UserPropertyVariants: IndexedProperty<number, string>;
    /** Флаг - непосредственная видимость объекта */
    Visible: boolean;
    /** Получить объект, приведённый к типу структурного объекта */
    AsList(): T3DObjectList;
    /** Получить объект, приведённый к типу полигонального объекта */
    AsMesh(): TTriMesh;
    /** Принять ориентацию объекта */
    AssignTransform(Src: TObject3D): void;
    /** Перестроить объект. Для параметрических объектов удалется вся геометрия и строится новая исходя из параметров объекта. */
    Build(): void;
    /** Создать копию объекта в том же пространстве, что и объект */
    Clone(): TObject3D;
    /** Создать копию объекта в заданном пространстве */
    Clone(Dest: TDesigner3D): TObject3D;
    /** Создать копию объекта во временной области модели текущего пространства */
    CloneTemp(): TObject3D;
    /** Найти ближайшего общего владельца с другим объектом */
    FindCommonOwner(Obj: TObject3D): T3DObjectList;
    /** Получить матрицу трансформации из ЛСК объекта в ГСК */
    GlobalMatrix(): TMatrix4;
    /** Перевести точку из ГСК в ЛСК объекта */
    GlobalToObject(V: TVector3d): TVector3d;
    /** Проверить, есть ли пользовательское свойство с указанным именем */
    HasUserProperty(Name: string): boolean;
    /** Получить булево значение, является ли объект подсвеченным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются подсвеченными. */
    IsHighlighted(): boolean;
    /** Получить булево значение, является ли объект полигональным */
    IsMesh(): boolean;
    /** Проверка, находится ли объект внутри указанного объекта (является ли указанный объект владельцем объекта). */
    IsOwner(Obj: TObject3D): boolean;
    /** Получить булево значение, является ли объект выделенным. Возвращает True, если объект или один из его владельцев, вплоть до модели или её временной области, являются выделенными. */
    IsSelected(): boolean;
    /** Получить булево значение, является ли объект видимым. Возвращает True, если объект и все его владельцы, вплоть до модели или её временной области, являются видимыми. */
    IsVisible(): boolean;
    /** Перевести вектор из ГСК в ЛСК объекта-владельца */
    NGlobalToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта */
    NGlobalToObject(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК */
    NObjectToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ЛСК объекта-владельца */
    NObjectToLocal(N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК другого объекта в ЛСК объекта */
    NObjectToObject(SrcObj: TObject3D, N: TVector3d): TVector3d;
    /** Перевести вектор из ЛСК объекта в ГСК Эквивалентно методу NObjectToGlobal */
    NToGlobal(N: TVector3d): TVector3d;
    /** Перевести вектор из ГСК в ЛСК объекта Эквивалентно методу NGlobalToObject */
    NToObject(N: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ГСК */
    ObjectToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК объекта в ЛСК объекта-владельца */
    ObjectToLocal(V: TVector3d): TVector3d;
    /** Перевести точку из ЛСК другого объекта в ЛСК объекта */
    ObjectToObject(SrcObj: TObject3D, V: TVector3d): TVector3d;
    /** Задать поворот объекта. */
    Orient(ZDir: TVector3d, YDir: TVector3d): void;
    /** Задать поворот объекта. */
    OrientGCS(ZDir: TVector3d, YDir: TVector3d): void;
    /** Проверка пересечения лучом. Положение и направление луча должны быть в ЛСК объекта. */
    RayIntersect(Ray: TRayInfo): void;
    /** Изменить ориентацию (положение и поворот) объекта относительно нового владельца. Функция полезна при смене владельца объекта для сохранения фактического положения объекта относительно ГСК */
    ReTransform(OldOwner: T3DObjectList, NewOwner: T3DObjectList): void;
    /** Повернуть объект вокруг оси */
    Rotate(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг произвольной точки */
    Rotate(Center: TVector3d, Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateGCS(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси */
    RotateInCurSys(Axis: TVector3d, Angle: number): void;
    /** Повернуть объект вокруг оси X в ЛСК объекта-владельца */
    RotateX(Angle: number): void;
    /** Повернуть объект вокруг оси Y в ЛСК объекта-владельца */
    RotateY(Angle: number): void;
    /** Повернуть объект вокруг оси Z в ЛСК объекта-владельца */
    RotateZ(Angle: number): void;
    /** Установить ориентацию по умолчанию (нулевое смещение и нулевой поворот) */
    SetDefaultTransform(): void;
    /** Перевести точку из ЛСК объекта в ГСК Эквивалентно методу ObjectToGlobal */
    ToGlobal(V: TVector3d): TVector3d;
    /** Перевести точку из ГСК в ЛСК объекта Эквивалентно методу GlobalToObject */
    ToObject(V: TVector3d): TVector3d;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта-владельца. */
    Translate(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ГСК. */
    TranslateGCS(V: TVector3d): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateInCurSys(x: number, y: number, z: number): void;
    /** Переместить объект на заданный вектор в ЛСК объекта. */
    TranslateLCS(V: TVector3d): void;
    /** Материал объекта. */
    Material: TMaterial;
    /** Наименование материала (с артикулом) */
    MaterialName: string;
    /** Поверхность по индексу */
    TriLists: IndexedProperty<number, TTriangleList>;
    /** Количество поверхностей */
    TriListsCount: number;
    /** Удалить все поверхности объекта */
    ClearTriLists(): void;
    /** Получить общее количество треугольников объекта */
    TriCount(): number;

}

/** Базовый класс для всех оконных компонентов (Наследует: TControl) */

declare class TWinControl {

    /** Имя компонента */
    Name: string;
    /** Метка компонента */
    Tag: number;
    /** Выравнивание относительно родителя */
    Align: align;
    /** Выравнивать с отступами */
    AlignWithMargins: boolean;
    /** Привязка к грани родителя */
    Anchors: TAnchors;
    /** Заголовок компонента */
    Caption: string;
    /** Ограничения размеров компонента */
    Constraints: TSizeConstraints;
    /** Доступность компонента для пользовательского взаимодействия */
    Enabled: boolean;
    /** Высота компонента */
    Height: number;
    /** Подсказка, всплывающая при наведении курсора */
    Hint: string;
    /** Положение компонента по оси X */
    Left: number;
    /** Отступы при выравнивании */
    Margins: TMargins;
    /** Событие клика по компоненту */
    OnClick: TNotifyEvent;
    /** Событие двойного клика по компоненту */
    OnDblClick: TNotifyEvent;
    /** Событие перед уничтожением компонента */
    OnDestroy: TNotifyEvent;
    /** Событие нажатия кнопки мыши */
    OnMouseDown: TMouseEvent;
    /** Событие наведения курсора мыши на компонент */
    OnMouseEnter: TNotifyEvent;
    /** Событие покидания курсором мыши области компонента */
    OnMouseLeave: TNotifyEvent;
    /** Событие движения мыши */
    OnMouseMove: TMouseMoveEvent;
    /** Событие отжатия кнопки мыши */
    OnMouseUp: TMouseEvent;
    /** Родительский компонент */
    Parent: TWinControl;
    /** Показывать подсказку */
    ShowHint: boolean;
    /** Текстовое содержимое компонента */
    Text: string;
    /** Положение компонента по оси Y */
    Top: number;
    /** Видимость компонента */
    Visible: boolean;
    /** Ширина компонента */
    Width: number;
    /** Грани компонента со скосом */
    BevelEdges: TBevelEdges;
    /** Тип скоса у внутренних граней */
    BevelInner: bevelCut;
    /** Тип скоса у внешних граней */
    BevelOuter: bevelCut;
    /** Двойная буферизация. Может уменьшить мерцание при изменении размеров и перетаскивании компонента */
    DoubleBuffered: boolean;
    /** Событие установки фокуса на компонент */
    OnEnter: TNotifyEvent;
    /** Событие снятия фокуса с компонента */
    OnExit: TNotifyEvent;
    /** Событие нажатия клавиши */
    OnKeyDown: TKeyEvent;
    /** Событие ввода символа */
    OnKeyPress: TKeyPressEvent;
    /** Событие отжатия клавиши */
    OnKeyUp: TKeyEvent;

}

/** Объект-обёртка, содержащий значение. Используется для передачи значений по ссылке при использовании методов */

declare class ReferenceObject<T> {

    /** Значение */
    value: T;

}

/** Данные привязки курсора относительно текущего положения мыши на экране */

declare class AnchorInfo {

    /** Ребро привязки */
    edge: T3DEdge;
    /** Объект привязки */
    obj: TObject3D | undefined;
    /** Координаты точки в пространстве модели */
    position: TVector3d;

}

/** Данные об ошибке расстановки */

declare class ArrangeError {

    /** Первый (основной) объект */
    firstObject: TObject3D;
    /** Сообщение */
    message: string;
    /** Второй объект */
    secondObject: TObject3D;

}

/** Настройки расстановки позиций */

declare class ArrangeOptions {

    /** Алгоритм расстановки позиций */
    arrangeAlgorithm: ArrangePositionsAlgorithm;
    /** Расставлять позиции покупных изделий */
    arrangeAssemblies: boolean;
    /** Расставлять позиции фурнитуры */
    arrangeFasteners: boolean;
    /** Расставлять сначала панели, потом покупные изделия */
    arrangeObjectsFirst: boolean;
    /** Кол-во символов в обозначении СЕ */
    assemblyUnitDigitsCount: number;
    /** Сравнивать объекты из других СЕ */
    compareFromAnotherAssemblyUnit: boolean;
    /** Сравнивать дополнительные материалы */
    compareMaterialAttendance: boolean;
    /** Сравнивать порядок облицовки кромки панелей */
    comparePanelButtOrder: boolean;
    /** Сравнивать облицовку кромки панелей */
    comparePanelButts: boolean;
    /** Сравнивать пазы панелей */
    comparePanelCuts: boolean;
    /** Сравнивать лицевую сторону панелей */
    comparePanelFaceType: boolean;
    /** Сравнивать отверстия панелей */
    comparePanelHoles: boolean;
    /** Сравнивать наименования панелей */
    comparePanelNames: boolean;
    /** Сравнивать облицовку пласти панелей */
    comparePanelPlastics: boolean;
    /** Сравнивать направление текстуры панелей */
    comparePanelTexture: boolean;
    /** Сравнинвать толщину панелей */
    comparePanelThickness: boolean;
    /** Сравнивать направление сквозных отверстий панелей */
    compareThroughHolesDir: boolean;
    /** Сравнивать пользовательские свойства */
    compareUserProperties: boolean;
    /** Точность сравнения числовых параметров */
    comparisonAccuracyType: ArrangeAccuarcy;
    /** Сравнивать пазы панелей */
    continueNumeration: boolean;
    /** Алгоритм расстановки обозначений */
    designationArrangeAlgorithm: ArrangeDesignationsAlgorithm;
    /** Кол-во символов в обозначении объекта */
    objectDigitsCount: number;
    /** Промежуток между номерами позиций групп */
    posGap: number;
    /** Иерархическая расстановка позиций */
    recursivePositions: boolean;
    /** Заменять пробелы */
    replaceSpace: boolean;
    /** Заменять спецсимволы */
    replaceSpec: boolean;
    /** Разделитель обозначений */
    separator: string;
    /** Строка, заменяющая пробелы */
    spaceRepStr: string;
    /** Строка, заменяющая спецсимволы */
    specRepStr: string;
    /** Стартовая позиция */
    startPos: number;
    /** Загрузить из формата JSON */
    LoadFromJSON(filename: string): void;
    /** Загрузить из файла настроек приложения */
    LoadFromSettings(): void;
    /** Сохранить в формате JSON */
    SaveToJSON(filename: string): void;

}

/** Параметры расстановки позиций */

declare class ArrangeParameters {

    /** Режим расстановки позиций */
    arrangeMode: ArrangeMode;
    /** Префикс обозначения */
    designationPrefix: string;
    /** Структурный объект, в котором будут расставляться позиции. По умолчанию - модель */
    list: T3DObjectList;
    /** Настройки расстановки позиций */
    options: ArrangeOptions;
    selectedOnly: any;

}

/** Параметры материала кромки */

declare class ButtMaterialData {

    /** Припуск */
    allowance: number;
    /** Наименование торцевого паза для канта */
    cutName: string;
    /** Флаг - подрезать панель на толщину кромки */
    doClipPanel: boolean;
    /** Путь к файлу фрагмента сечения канта */
    edging: string;
    /** Флаг - Лента */
    isTape: boolean;
    /** Наименование */
    name: string;
    /** Свес */
    overhung: number;
    /** Обозначение */
    sign: string;
    /** Толщина */
    thickness: number;
    /** Ширина */
    width: number;

}

/** Параметры вызова диалогового окна */

declare class DialogParams {

    /** Расширение либо список расширений, предлагаемые пользователю */
    extensions: string | string[];
    /** Директория, предлагаемая при открытии окна */
    initialDir: string | undefined;
    /** Заголовок окна */
    title: string | undefined;

}

/** Параметры эласчичности */

declare class ElasticParameters {

    /** Плоскости эластичности */
    planes: ElasticPlane[];
    /** Максимальный размер эластичного объекта */
    sizeMax: TVector3d;
    /** Минимальный размер эластичного объекта */
    sizeMin: TVector3d;
    /** Шаг изменения размера эластичного объекта */
    sizeStep: TVector3d;

}

/** Описание эластичной плоскости */

declare class ElasticPlane {

    /** Ось эластичной плоскости */
    axis: ElasticAxis;
    /** Положение эластичной плоскости (значение на оси) */
    position: number;
    /** Вес эластичной плоскости */
    weight: number;

}

/** Параметры материала */

declare class FurnMaterialData {

    /** Наименование */
    name: string;
    /** Толщина */
    thickness: number;
    /** Ширина */
    width: number;

}

/** Параметры применения многофункционального выреза */

declare class GroovingOptions {

    /** Удалять вырез после применения. Значение по умолчанию - true */
    deleteCustomGrooveObjects: boolean;
    /** Удалять панель, если она внутри выреза (применения выреза делает панель пустой). Значение по умолчанию - true */
    deletePanelIfItIsCoveredByGroove: boolean;
    /** Делать вычитание контура вместо сквозной выемки. Значение по умолчанию - false */
    makeContourSubtractionInsteadOfThroughPocket: boolean;
    /** Применять только к видимым панелям. Значение по умолчанию - true */
    visiblePanelsOnly: boolean;

}

/** Параметры установки фурнитуры */

declare class MountParams {

    /** Базовая плоскость для установки схемы крепежа */
    basePlane: basePlaneMount;
    /** Базовая точка для установки схемы крепежа */
    basePoint: TVector3d;
    /** Размер параметрической секции */
    boxSize: TVector3d;
    /** Объект-владелец устанавливаемого объекта фурнитуры */
    furnOwner: T3DObjectList;
    /** Панель 1 */
    panel1: TFurnPanel;
    /** Панель 2 (для установки фурнитуры на две панели) */
    panel2: TFurnPanel;
    /** Положение фурнитуры (не учитывается для схем крепежа) */
    position: TVector3d;
    /** Угол поворота (для установки фурнитуры на одну панель) */
    rotationAngle: number;

}

/** Дополнительный материал объекта */

declare class ObjectAdditionalMaterial {

    /** Артикул */
    art: string;
    /** Количество */
    count: number;
    /** Единицы измерения */
    measure: string;
    /** Наименование */
    name: string;

}

/** Расстановщик позиций */

declare class ObjectArranger {

    /** Список ошибок */
    errors: ArrangeError[];
    /** Параметры расстановки позиций */
    parameters: ArrangeParameters;
    /** Расставить позиции */
    ArrangeObjects(): boolean;

}

/** Данные трёхмерной модели относительно точки на экране */

declare class PointInfo {

    /** Объект, на который указывает точка на экране */
    obj: TObject3D | undefined;
    /** Координаты точки в пространстве модели */
    position: TVector3d;

}

/** Точка на плоскости */

declare class T2DPoint {

    /** Координата X */
    x: number;
    /** Координата Y */
    y: number;

}

/** Кватернион поворота в трёхмерном пространстве */

declare class TQuaternion {

    /** Вектор кватерниона */
    ImagPart: TVector3d;
    /** Скаляр кватерниона */
    RealPart: number;

}

/** Запись трансформации - вектора положения и кватерниона поворота */

declare class TTransformation {

    /** Вектор положения */
    Position: TVector3d;
    /** Кватернион поворота */
    Rotation: TQuaternion;

}

/** Точка (радиус-вектор) в двумерном пространстве */

declare class TVector2f {

    /** Координата по оси X */
    x: number;
    /** Координата по оси Y */
    y: number;

}

/** Точка (радиус-вектор) в трёхмерном пространстве */

declare class TVector3d {

    /** Координата по оси X */
    x: number;
    /** Координата по оси Y */
    y: number;
    /** Координата по оси Z */
    z: number;

}

type ArrangeAccuarcy = "hundredth" | "tenth" | "thousandth";

type ArrangeDesignationsAlgorithm = "simple" | "strict";

type ArrangeMode = "allObjects" | "check" | "clear" | "newObjects";

type ArrangePositionsAlgorithm = "byMaterial" | "byOrder";

type ElasticAxis = "x" | "y" | "z";

type basePlaneMount = "down" | "inside" | "invisible" | "outside" | "up" | "visible";

type datumMode = "box" | "face" | "faceButt" | "faceEdge" | "faceFace" | "joint" | "parallelFaces";

type holeDrillMode = "auto" | "blind" | "through";

type paramFastType = "blindHole" | "corner" | "doubleMiniFix" | "handleCab" | "handleKnob" | "hinge" | "hinge180" | "miniFix" | "pin" | "scheme" | "screw" | "shelfPin" | "throughHole";

type booleanFunction2D = "intersection" | "subtraction" | "union";

type element2DType = "arc" | "circle" | "line" | "list";

type equidistantMode = "corner" | "rounding";

type fileType = "fragmentBlock" | "fragmentObjects" | "furniture" | "model";

type salonType = "box" | "doorFlap" | "doorLeft" | "doorLift" | "doorRight" | "doorSlideLeft" | "doorSlideRight" | "facade" | "handle" | "none" | "support";

type PanelOrientation = "front" | "horizont" | "vertical";

type ObjectTypeValue = "contour" | "draftBlock" | "extrusion" | "fastener" | "furnAsm" | "furnBlock" | "importedMesh" | "layer" | "limits" | "panel" | "rotationBody" | "size" | "structObject" | "trajectoryBody";

type cutParamType = "pocket" | "type1" | "type2" | "type3" | "type4" | "type5" | "type6" | "type7" | "type8" | "type9";

type cutType = "extrusion" | "freeForm";

type faceType = "back" | "default" | "front";

type textureOrientation = "custom" | "horizontal" | "none" | "vertical";

type align = "bottom" | "client" | "custom" | "left" | "none" | "right" | "top";

type alignment = "center" | "left" | "right";

type anchorKind = "bottom" | "left" | "right" | "top";

type bevelCut = "lowered" | "none" | "raised" | "space";

type bevelEdge = "bottom" | "left" | "right" | "top";

type buttonLayout = "glyphBottom" | "glyphLeft" | "glyphRight" | "glyphTop";

type closeAction = "free" | "hide" | "minimize" | "none";

type cxBorder = "bottom" | "left" | "right" | "top";

type cxButtonAssignedColor = "default" | "defaultText" | "disabled" | "disabledText" | "hot" | "hotText" | "normal" | "normalText" | "pressed" | "pressedText";

type cxButtonKind = "commandLink" | "dropDown" | "dropDownButton" | "officeDropDown" | "standard";

type cxCaptionAlignment = "bottomCenter" | "bottomLeft" | "bottomRight" | "center" | "leftBottom" | "leftCenter" | "leftTop" | "rightBottom" | "rightCenter" | "rightTop" | "topCenter" | "topLeft" | "topRight";

type cxCheckBoxState = "checked" | "grayed" | "unchecked";

type cxColorBoxAlign = "left" | "right";

type cxColorComboStyle = "edit" | "list";

type cxColorDialogType = "advanced" | "custom" | "default";

type cxColorNamingConvention = "delphi" | "html4delp" | "none" | "x11";

type cxColorValueFormat = "hex" | "integer" | "rgb";

type cxContainerBorderStyle = "border3D" | "flat" | "none" | "office11" | "single" | "thick" | "ultraFlat";

type cxControlBorderStyle = "default" | "none";

type cxEditBorderStyle = "border3D" | "flat" | "none" | "office11" | "single" | "thick" | "ultraFlat";

type cxEditDropDownListStyle = "editFixedList" | "editList" | "fixedList";

type cxEditEchoMode = "normal" | "password";

type cxEditVerticalAlignment = "bottom" | "center" | "top";

type cxImageFitMode = "fill" | "fit" | "normal" | "proportionalStretch" | "stretch";

type cxImageTransparency = "default" | "opaque" | "transparent";

type cxPopupMenuItem = "copy" | "custom" | "cut" | "delete" | "edit" | "load" | "paste" | "save" | "webCam";

type cxSpinEditButtonsPosition = "horzLeftRight" | "horzRight" | "vert";

type cxSpinEditValueType = "float" | "int";

type dxDefaultBoolean = "default" | "false" | "true";

type editCharCase = "lowerCase" | "normal" | "upperCase";

type fontStyle = "bold" | "italic" | "strikeOut" | "underline";

type formBorderStyle = "dialog" | "none" | "single" | "sizeable" | "sizeToolWindow" | "toolWindow";

type formPosition = "default" | "defaultPosOnly" | "defaultSizeOnly" | "designed" | "desktopCenter" | "mainFormCenter" | "ownerFormCenter" | "screenCenter";

type formStyle = "MDIChild" | "MDIForm" | "normal" | "stayOnTop";

type gridDrawingStyle = "classic" | "gradient" | "themed";

type gridOption = "alwaysShowEditor" | "colMoving" | "colSizing" | "drawFocusSelected" | "editing" | "fixedColClick" | "fixedColDefAlign" | "fixedHorzLine" | "fixedHotTrack" | "fixedRowClick" | "fixedRowDefAlign" | "fixedVertLine" | "horzLine" | "rangeSelect" | "rowMoving" | "rowSelect" | "rowSizing" | "tabs" | "thumbTracking" | "vertLine";

type keys = "a" | "b" | "c" | "control" | "d" | "delete" | "down" | "e" | "end" | "escape" | "f" | "g" | "h" | "home" | "i" | "insert" | "j" | "k" | "key0" | "key1" | "key2" | "key3" | "key4" | "key5" | "key6" | "key7" | "key8" | "key9" | "l" | "left" | "lineFeed" | "m" | "n" | "num0" | "num1" | "num2" | "num3" | "num4" | "num5" | "num6" | "num7" | "num8" | "num9" | "o" | "p" | "q" | "r" | "return" | "right" | "s" | "shift" | "space" | "t" | "tab" | "u" | "up" | "v" | "w" | "x" | "y" | "z";

type leftRight = "left" | "right";

type mouseButton = "left" | "middle" | "right";

type scrollBarKind = "horizontal" | "vertical";

type scrollStyle = "both" | "horizontal" | "none" | "vertical";

type shiftState = "alt" | "ctrl" | "shift";

type DialogMessageButton = "abort" | "all" | "cancel" | "close" | "ignore" | "no" | "noToAll" | "ok" | "retry" | "yes" | "yesToAll";

type DialogMessageResult = "abort" | "all" | "cancel" | "close" | "ignore" | "no" | "noToAll" | "ok" | "retry" | "yes" | "yesToAll";

type DialogMessageType = "confirmation" | "error" | "info" | "warning";

/** Направление по оси -X */

declare const Axis_X: TVector3d;

/** Направление по оси -Y */

declare const Axis_Y: TVector3d;

/** Направление по оси -Z */

declare const Axis_Z: TVector3d;

/** Направление по оси X */

declare const AxisX: TVector3d;

/** Направление по оси Y */

declare const AxisY: TVector3d;

/** Направление по оси Z */

declare const AxisZ: TVector3d;

/** Версия API */

declare const scriptApiVersion: number;

/** Модуль версии API скриптов */
declare namespace apiVersion {
    /** Вывести сообщение ошибке и выбросить ошибку, если настоящая версия API меньше указанной */
    function AwareAndThrowIfApiVersionIsLowestThan(requiredVersion: number): void;
    /** Получить настоящее значение версии API. Функция возвращает значение текущей версии API. */
    function GetRealScriptApiVersion(): number;
    /** Получить текущее значение версии API. Функция возвращает значение текущей версии API, либо заданное пользователем значение версии API */
    function GetScriptApiVersion(): number;
    /** Установить новое значение версии API. Функция используется для добавления функционала, отсутствующего в текущей версии API */
    function SetScriptApiVersion(newVersion: number): void;
}

/** Модуль расстановки позиций и обозначений */
declare namespace arrangePositions {
    /** Создать расстановщик позиций */
    function NewArranger(): ObjectArranger;
    /** Точность расстановки позиций */
    const ArrangeAccuarcy: {
        readonly hundredth: "hundredth";
        readonly tenth: "tenth";
        readonly thousandth: "thousandth";
    };
    /** Алгоритм расстановки обозначений */
    const ArrangeDesignationsAlgorithm: {
        readonly simple: "simple";
        readonly strict: "strict";
    };
    /** Режим расстановки позиций и обозначений */
    const ArrangeMode: {
        readonly allObjects: "allObjects";
        readonly check: "check";
        readonly clear: "clear";
        readonly newObjects: "newObjects";
    };
    /** Алгоритм расстановки позиций */
    const ArrangePositionsAlgorithm: {
        readonly byMaterial: "byMaterial";
        readonly byOrder: "byOrder";
    };
}

/** Модуль с функциями пакетной обработки элементов модели */
declare namespace batchProcessing {
    /** Вызвать функцию для каждой облицовки кромки панели. */
    function ForEachButtInPanel(panel: TFurnPanel, func: (butt: TFurnButt)=>void): void;
    /** Вызвать функцию для каждого паза панели. */
    function ForEachCutInPanel(panel: TFurnPanel, func: (cut: TFurnCut)=>void): void;
    /** Вызвать функцию для каждого элемента из списка двумерных элементов (двумерного контура) */
    function ForEachElementInList(list: T2DElemList, func: (elem: T2DElement)=>void): void;
    /** Вызвать функцию для каждого отверстия фурнитуры */
    function ForEachHoleInFurniture(furn: TFastener, func: (hole: THole)=>void): void;
    /** Вызвать функцию для объектов внутри структурного объекта. При рекурсивной обработке структурного объекта сначал обрабатываются вложенные объекты, потом сам структурный объект. */
    function ForEachObjectInList(list: T3DObjectList, func: (obj: TObject3D)=>void, recursive?: boolean, objTypes?: Set<ObjectTypeValue>): void;
    /** Вызвать функцию для каждой облицовки пласти панели. */
    function ForEachPlasticInPanel(panel: TFurnPanel, func: (plastic: TFurnPlastic)=>void): void;
}

/** Данные текущего открытого файла */
declare namespace currentFileData {
    /** Параметры модели */
    const article: TFurnArticle;
    /** Имя редактируемого файла модели */
    const filename: string;
    /** Модель */
    const model: TModel3D;
}

/** Модуль для работы с эластичностью объектов */
declare namespace elasticTransformation {
    /** Получить размер объекта. Возвращает значение GSize либо размер габаритной рамки эластичного структурного объекта */
    function GetObjectLocalSize(obj: TObject3D): TVector3d;
    /** Получить минимальную точку в ЛСК объекта. Возвращает значение GMin либо минимальные координаты габаритной рамки эластичного структурного объекта */
    function GetObjectMinLocalPoint(obj: TObject3D): TVector3d;
    /** Загрузить параметры эластичности из структурного объекта */
    function LoadElasticParameters(list: T3DObjectList, createIfNotExist?: boolean): ElasticParameters | undefined;
    /** Проверить, является ли объект эластичным блоком */
    function ObjectIsElasticBlock(obj: TObject3D): boolean;
    /** Изменить размер структурного объекта. */
    function ResizeObject(obj: T3DObjectList, newSize: TVector3d): void;
    /** Сохранить параметры эластичности в структурный объект */
    function SaveElasticParameters(list: T3DObjectList, elasticParameters: ElasticParameters): void;
    /** Ось эластичной плоскости */
    const ElasticAxis: {
        readonly x: "x";
        readonly y: "y";
        readonly z: "z";
    };
}

/** Управление выполнением скрипта и/или приложения */
declare namespace execution {
    /** Прервать выполнение скрипта и отменить несохранённые изменения */
    function CancelExecution(): void;
    /** Продолжить выполнение скрипта после выполнения основного тела скрипта */
    function ContinueExecution(): void;
    /** Прервать выполнение скрипта и сохранить несохранённые изменения */
    function FinishExecution(): void;
    /** Свернуть окно приложения */
    function MinimizeApp(): void;
    /** Завершить работу приложения */
    function QuitApp(): void;
    /** Восстановить окно приложения */
    function RestoreApp(): void;
}

/** Модуль операций с фурнитурой */
declare namespace fastenerOperations {
    /** Фильтр, включающий все типы базирования фурнитуры */
    const DATUM_MODE_FILTER_ALL: Set<datumMode>;
    /** Фильтр, включающий все типы параметров фурнитуры */
    const PARAM_FASTENER_FILTER_ALL: Set<paramFastType>;
    /** Запустить окно выбора фурнитуры. Функция вернёт true, если пользователь выбрал фурнитуру. */
    function ChooseFurniture(filename: ReferenceObject<string>, params: ReferenceObject<TParamFastener>, paramFilter: Set<paramFastType>, datumFilter: Set<datumMode>): boolean;
    /** Запустить окно выбора фурнитуры. Функция вернёт true, если пользователь выбрал фурнитуру. */
    function ChooseFurnitureInfo(furnInfo: TFurnitureInfo, paramFilter: Set<paramFastType>, datumFilter: Set<datumMode>): boolean;
    /** Создать объект с информацией о фурнитуре */
    function CreateFurnitureInfo(filename?: string): TFurnitureInfo;
    /** Найти объекты фурнтуры, которые сверлятся во все заданные объекты. */
    function FindConnectedFasteners(obj1: TObject3D, obj2?: TObject3D): TObject3D[];
    /** Установить фурнитуру на панели */
    function MountFurniture(info: TFurnitureInfo, params: MountParams): TObject3D | undefined;
    /** Создать объект для сверления отверстий */
    function NewHoleDrilling(): THoleDrilling;
    /** Базовая пласть установки схемы крепежа */
    const basePlaneMount: {
        readonly down: "down";
        readonly inside: "inside";
        readonly invisible: "invisible";
        readonly outside: "outside";
        readonly up: "up";
        readonly visible: "visible";
    };
    /** Тип базирования фурнитуры */
    const datumMode: {
        readonly box: "box";
        readonly face: "face";
        readonly faceButt: "faceButt";
        readonly faceEdge: "faceEdge";
        readonly faceFace: "faceFace";
        readonly joint: "joint";
        readonly parallelFaces: "parallelFaces";
    };
    /** Тип сверления отверстия */
    const holeDrillMode: {
        readonly auto: "auto";
        readonly blind: "blind";
        readonly through: "through";
    };
    /** Тип параметров фурнитуры */
    const paramFastType: {
        readonly blindHole: "blindHole";
        readonly corner: "corner";
        readonly doubleMiniFix: "doubleMiniFix";
        readonly handleCab: "handleCab";
        readonly handleKnob: "handleKnob";
        readonly hinge: "hinge";
        readonly hinge180: "hinge180";
        readonly miniFix: "miniFix";
        readonly pin: "pin";
        readonly scheme: "scheme";
        readonly screw: "screw";
        readonly shelfPin: "shelfPin";
        readonly throughHole: "throughHole";
    };
}

/** Модуль для работы с двумерной геометрией */
declare namespace geometry2d {
    /** Выполнить булеву операцию с двумя контурами */
    function BooleanOperation2D(contour1: T2DElemList, contour2: T2DElemList, boolFunction: booleanFunction2D, result: T2DElemList): boolean;
    /** Сравнить два элемента конутра */
    function CompareElements(elem1: T2DElement, elem2: T2DElement): boolean;
    /** Получить площадь контура */
    function ContourArea(contour: T2DElemList): number;
    /** Найти расстояние между двумя элементами контура */
    function ElementDistance(elem1: T2DElement, elem2: T2DElement): number;
    /** Получить точки пересечения двух двумерных элементов контура */
    function GetIntersectionPoints(elem1: T2DElement, elem2: T2DElement): T2DPoint[];
    /** Добавить эквидистанту контура в другой контур. Контур должен быть упорядочен. От направления контура зависит направление эквидистанты. Если контур упорядочен против часовой стрелки, то положительное значение отступа приведёт к построению внешней эквидистанты, а отрицательное - к внутренней. Если контур упорядочен по часовой стрелке - наоборот. */
    function MakeEquidistant(source: T2DElemList, destination: T2DElemList, offset: number, mode: equidistantMode): void;
    /** Добавить эквидистанту контура в другой контур с учётом вложенности контуров. Напраление эквидистанты не зависит от направления контура. Положительное значение отступа приведёт к построению внутренней эквидистанты, а отрицательное - к внешней. */
    function MakeEquidistantRecursive(source: T2DElemList, destination: T2DElemList, offset: number, mode: equidistantMode): void;
    /** Создать двумерный контур */
    function NewContour(size?: T2DPoint): T2DElemList;
    /** Создать временный двумерный контур, который будет удалён после завершения скрипта */
    function NewTempContour(size?: T2DPoint): T2DElemList;
    /** Сложить два вектора */
    function VectorAdd(v1: T2DPoint, v2: T2DPoint): T2DPoint;
    /** Скалярное произведение векторов */
    function VectorDot(v1: T2DPoint, v2: T2DPoint): number;
    /** Проверить равность векторов (с точностью 0.001) */
    function VectorEqual(v1: T2DPoint, v2: T2DPoint): boolean;
    /** Инвертировать вектор (изменить его направление на противоположное) */
    function VectorInvert(v: T2DPoint): T2DPoint;
    /** Получить длину вектора */
    function VectorLength(v: T2DPoint): number;
    /** Создать двумерную точку */
    function VectorMake(x: number, y: number): T2DPoint;
    /** Умножить вектор на число */
    function VectorMul(v: T2DPoint, a: number): T2DPoint;
    /** Нормализовать вектор. Функция возвращает сонаправленный вектор единичной длины для ненулевого вектора В противном случае, функция возвращает копию исходного вектора. */
    function VectorNormalize(v: T2DPoint): T2DPoint;
    /** Повернуть вектор на заданный угол вокруг точки */
    function VectorRotate(v: T2DPoint, angle: number, center?: T2DPoint): T2DPoint;
    /** Проверить коллинеарность векторов */
    function VectorsAreColinear(v1: T2DPoint, v2: T2DPoint): boolean;
    /** Вычесть вектор из вектора */
    function VectorSub(v1: T2DPoint, v2: T2DPoint): T2DPoint;
    /** Тип булевой операции с двумерными контурами */
    const booleanFunction2D: {
        readonly intersection: "intersection";
        readonly subtraction: "subtraction";
        readonly union: "union";
    };
    /** Тип 2D элемента */
    const element2DType: {
        readonly arc: "arc";
        readonly circle: "circle";
        readonly line: "line";
        readonly list: "list";
    };
    /** Алгоритм построения эквидистанты */
    const equidistantMode: {
        readonly corner: "corner";
        readonly rounding: "rounding";
    };
}

/** Модуль для работы с трёхмерной геометрией */
declare namespace geometry3d {
    /** Проверить равность чисел (с точностью 0.001) */
    function ValueEqual(a: number, b: number): boolean;
    /** Сложить два вектора */
    function VectorAdd(v1: TVector3d, v2: TVector3d): TVector3d;
    /** Векторное произведение векторов */
    function VectorCross(v1: TVector3d, v2: TVector3d): TVector3d;
    /** Скалярное произведение векторов */
    function VectorDot(v1: TVector3d, v2: TVector3d): number;
    /** Проверить равность векторов (с точностью 0.001) */
    function VectorEqual(v1: TVector3d, v2: TVector3d): boolean;
    /** Инвертировать вектор (изменить его направление на противоположное) */
    function VectorInvert(v: TVector3d): TVector3d;
    /** Проверить, является ли вектор пустым (нулевым) */
    function VectorIsEmpty(v: TVector3d): boolean;
    /** Получить длину вектора */
    function VectorLength(v: TVector3d): number;
    /** Создать вектор */
    function VectorMake(x: number, y: number, z: number): TVector3d;
    /** Умножить вектор на число */
    function VectorMul(v: TVector3d, a: number): TVector3d;
    /** Нормализовать вектор. Функция возвращает сонаправленный вектор единичной длины для ненулевого вектора В противном случае, функция возвращает копию исходного вектора. */
    function VectorNormalize(v: TVector3d): TVector3d;
    /** Проверить коллинеарность векторов */
    function VectorsAreColinear(v1: TVector3d, v2: TVector3d): boolean;
    /** Вычесть вектор из вектора */
    function VectorSub(v1: TVector3d, v2: TVector3d): TVector3d;
}

/** Модуль для работы с историей построения */
declare namespace historyOperations {
    /** Очистить историю построения модели. Данное действие отменит все несохранённые изменения в модели */
    function ClearHistory(): void;
    /** Сохранить зарегистрированные изменения как отдельную операцию в истории */
    function CommitCurrentChanges(name: string): void;
    /** Зарегистрировать изменение объекта в текущей операции истории */
    function RegisterObjectChanging(obj: TObject3D, recursive: boolean): void;
    /** Отменить зарегистрированные изменения. */
    function RevertCurrentChanges(): void;
}

/** Модуль для интерактивного взаимодействия с пользователем */
declare namespace interaction {
    /** Модуль с функциями назначения обработчиков событий */
    namespace events {
        /** Задать обработчик нажатия клавиши */
        function SetKeyDownHandler(handler: TKeyEvent): void;
        /** Задать обработчик отжатия клавиши */
        function SetKeyUpHandler(handler: TKeyEvent): void;
        /** Задать обработчик нажатия клавиши мыши */
        function SetMouseDownHandler(handler: TMouseEvent): void;
        /** Задать обработчик движения мыши */
        function SetMouseMoveHandler(handler: TMouseMoveEvent): void;
        /** Задать обработчик отжатия клавиши мыши */
        function SetMouseUpHandler(handler: TMouseEvent): void;
    }
    /** Модуль с функциями запроса элементов из окна модели */
    namespace getRequest {
        /** Интерактивный запрос выбора ребра, параллельного указанному вектору. Выполнение скрипта приостанавливается, пока пользователь не выберет объект. Если вектор для проверки не указан, параллельность выбираемого ребра не проверяется. */
        function GetEdge(hint: string, axis?: TVector3d): T3DEdge;
        /** Интерактивный запрос объекта модели. Выполнение скрипта приостанавливается, пока пользователь не выберет объект. Если типы проверки не указаны, тип выбираемого объекта не проверяется. */
        function GetObject(hint: string, types?: ObjectTypeValue | Set<ObjectTypeValue> | ObjectTypeValue[]): TObject3D;
        /** Интерактивный запрос точки. Выполнение скрипта приостанавливается, пока пользователь не выберет точку */
        function GetVector(hint: string): TVector3d;
    }
    /** Данные окна */
    namespace windowData {
        /** Получить данные о текущей привязке курсора мыши */
        function GetAnchorInfo(): AnchorInfo | undefined;
        /** Получить текущее положение курсора в пространстве модели */
        function GetPoint3D(): TVector3d;
        /** Получить данные трёхмерной модели относительно точки на экране */
        function GetPointInfo(x: number, y: number): PointInfo | undefined;
        /** Задать текст подсказки */
        function SetHint(value: string): void;
        /** Задать привязку точек */
        function SetPointAnchoring(value: boolean): void;
    }
}

/** Модуль для работы с параметрами материалов */
declare namespace materialData {
    /** Открыть окно выбора материала кромки из базы. Если пользователем будет выбран материал, этот материал станет активным */
    function ChooseActiveButtMaterial(): ButtMaterialData | undefined;
    /** Открыть окно выбора материала из базы. Если пользователем будет выбран материал, этот материал станет активным */
    function ChooseActiveFurnMaterial(): FurnMaterialData | undefined;
    /** Открыть окно выбора материала кромки из базы. Если пользователем будет выбран материал, этот материал будет возвращён в качестве результата функции */
    function ChooseButtMaterial(): ButtMaterialData | undefined;
    /** Открыть окно выбора материала из базы. Если пользователем будет выбран материал, этот материал будет возвращён в качестве результата функции */
    function ChooseFurnMaterial(): FurnMaterialData | undefined;
    /** Создать объект с параметрами материала кромки */
    function CreateButtMaterialData(name: string, thickness: number, width?: number, isTape?: boolean, sign?: string, overhung?: number, clipPanel?: boolean, allowance?: number): ButtMaterialData;
    /** Создать объект с параметрами материала */
    function CreateMaterialData(materialName: string, materialThickness: number, materialWidth?: number): FurnMaterialData;
    /** Извлечь артикул материала из полного имени материала */
    function ExtractMaterialCode(fullMaterialName: string): string;
    /** Извлечь наименование материала из полного имени материала */
    function ExtractMaterialName(fullMaterialName: string): string;
    /** Форматировать полное имя материала в виде "<Наименование> (Артикул <Артикул>)" */
    function FormatMaterialName(fullMaterialName: string): string;
    /** Получить активный материал кромки */
    function GetActiveButtMaterial(): ButtMaterialData;
    /** Получить активный материал */
    function GetActiveMaterial(): FurnMaterialData;
    /** Установить параметры активного материала кромки. */
    function SetupActiveButtMaterial(name: string, thickness: number, width?: number, isTape?: boolean, sign?: string, overhung?: number, clipPanel?: boolean, allowance?: number): ButtMaterialData;
    /** Установить параметры активного материала */
    function SetupActiveMaterial(materialName: string, materialThickness: number, materialWidth?: number): FurnMaterialData;
    /** Задать новые параметры материала объекту */
    function SetupObjectMaterial(obj: TObject3D, materialData: FurnMaterialData, changeThickness?: boolean): void;
}

/** Модуль с операциями ввода/вывода модели */
declare namespace modelIOOperations {
    /** Экспортировать объект в полигональный 3D формат */
    function ExportModelMeshFormat(obj: TObject3D, filename: string, textureFolderName: string): void;
    /** Импортировать объекты из полигонального 3D формата. */
    function ImportModelMeshFormat(filename: string, owner?: T3DObjectList, scale?: number): TFurnAsm;
    /** Загрузить фурнитуру или фрагмент из файла */
    function LoadFastenerOrFragment(filename: string, owner?: T3DObjectList): TObject3D | undefined;
    /** Загрузить содержимое модели из файла в текущую модель. */
    function LoadFileIntoCurrentModel(filename: string, owner?: T3DObjectList): boolean;
    /** Загрузить модель из файла */
    function LoadModelFromFile(filename: string): boolean;
    /** Создать новый фрагмент в текущем окне. Все несохранённые изменения будут утеряны */
    function NewFragment(): void;
    /** Создать новую фурнитуру в текущем окне. Все несохранённые изменения будут утеряны */
    function NewFurniture(): void;
    /** Создать новую модель в текущем окне. Все несохранённые изменения будут утеряны */
    function NewModel(): void;
    /** Сохранить модель в файл */
    function SaveModelToFile(filename: string): void;
    /** Тип файла */
    const fileType: {
        readonly fragmentBlock: "fragmentBlock";
        readonly fragmentObjects: "fragmentObjects";
        readonly furniture: "furniture";
        readonly model: "model";
    };
}

/** Модуль для работы с данными объектов */
declare namespace objectData {
    /** Добавить список дополнительных материалов объекта. При совпадении наименования и артикула у нового и текущего дополнительных материалов у текущего дополнительного материала будет изменено количество */
    function AddObjectAdditionalMaterials(obj: TObject3D, materials: ObjectAdditionalMaterial[]): void;
    /** Добавить список пользовательских свойств объекта в виде коллекции "ключ-значение", где ключ - имя свойства, а значение - значение свойства. Ранее заданные пользовательские свойства объекта будут заменены при совпадении имён */
    function AddObjectUserProperties(obj: TObject3D, properties: Map<string, string | number>): void;
    /** Получить список дополнительных материалов объекта */
    function GetObjectAdditionalMaterials(obj: TObject3D): ObjectAdditionalMaterial[];
    /** Получить заметки объекта */
    function GetObjectNotes(obj: TObject3D): string;
    /** Получить список пользовательских свойств объекта в виде коллекции "ключ-значение", где ключ - имя свойства, а значение - значение свойства. */
    function GetObjectUserProperties(obj: TObject3D): Map<string, string | number>;
    /** Задать список дополнительных материалов объекта. Текущие дополнительные материалы объекта будут удалены */
    function SetObjectAdditionalMaterials(obj: TObject3D, materials: ObjectAdditionalMaterial[]): void;
    /** Задать заметки объекту */
    function SetObjectNotes(obj: TObject3D, notes: string): void;
    /** Задать список пользовательских свойств объекта в виде коллекции "ключ-значение", где ключ - имя свойства, а значение - значение свойства. Ранее заданные пользовательские свойства объекта будут удалены */
    function SetObjectUserProperties(obj: TObject3D, properties: Map<string, string | number>): void;
    /** Тип элемента для салона */
    const salonType: {
        readonly box: "box";
        readonly doorFlap: "doorFlap";
        readonly doorLeft: "doorLeft";
        readonly doorLift: "doorLift";
        readonly doorRight: "doorRight";
        readonly doorSlideLeft: "doorSlideLeft";
        readonly doorSlideRight: "doorSlideRight";
        readonly facade: "facade";
        readonly handle: "handle";
        readonly none: "none";
        readonly support: "support";
    };
}

/** Модуль для создания/удаления 3D объектов */
declare namespace objects3d {
    /** Создать копию объекта */
    function CloneObject(obj: TObject3D, newOwner?: T3DObjectList): TObject3D;
    /** Удалить 3D объект */
    function DeleteObject(obj: TObject3D): void;
    /** Создать покупное изделие */
    function NewAssembly(name: string, owner?: T3DObjectList): TFurnAsm;
    /** Создать блок */
    function NewBlock(name: string, owner?: T3DObjectList): TFurnBlock;
    /** Создать контур на плскости */
    function NewContour3D(name: string, owner?: T3DObjectList): TContour3D;
    /** Создать многофункциональный вырез */
    function NewCustomGroove(name: string, owner?: T3DObjectList): TCustomGroove;
    /** Создать полуфабрикат */
    function NewDraftBlock(name: string, owner?: T3DObjectList): TDraftBlock;
    /** Создать тело выдавливания с прямоугольным контуром сечения */
    function NewExtrusionBody(width: number, height: number, length: number, owner?: T3DObjectList): TExtrusionBody;
    /** Создать объект фурнитуры */
    function NewFastener(name: string, owner?: T3DObjectList): TFastener;
    /** Создать слой */
    function NewLayer(name: string): TLayer3D;
    /** Создать габаритную рамку */
    function NewLimits(name: string, size: TVector3d, owner?: T3DObjectList): TModelLimits;
    /** Создать объект-линию в трёхмерном пространстве */
    function NewLine3D(name: string, owner?: T3DObjectList, pos1?: TVector3d, pos2?: TVector3d): TLine3D;
    /** Создать новую панель во временной области модели или в заданном структурном объекте */
    function NewPanel(width: number, height: number, orientation?: PanelOrientation, owner?: T3DObjectList): TFurnPanel;
    /** Создать пирамиду */
    function NewPyramid(name: string, owner?: T3DObjectList, width?: number, height?: number, depth?: number): TPyramid3D;
    /** Создать объект-размер. */
    function NewSize3D(name: string, start: TVector3d, end: TVector3d, top: TVector3d, owner?: T3DObjectList): TSize3D;
    /** Создать сферу */
    function NewSphere(name: string, owner?: T3DObjectList, radius?: number): TSphere3D;
    /** Создать пустое тело по траектории. */
    function NewTrajectoryBody(owner?: T3DObjectList): T2DTrajectoryBody;
    /** Перечисляемый тип ориентации панели в пространстве при её создании Ориентация задаётся направлением лицевой пласти панели в сторону одной из осей СК */
    const PanelOrientation: {
        readonly front: "front";
        readonly horizont: "horizont";
        readonly vertical: "vertical";
    };
}

/** Модуль для работы с положением и поворотом объектов */
declare namespace objectTransformation {
    /** Симметрично отобразить объект относительно плоскости. Возвращаемый результат - исходный объект, или его копия если makeCopy == true */
    function ReflectObject(obj: TObject3D, rpPos: TVector3d, rpDir: TVector3d, makeCopy?: boolean): TObject3D;
    /** Повернуть объект вокруг оси */
    function RotateObject(obj: TObject3D, axis: TVector3d, angle: number, isDegAngle?: boolean): void;
    /** Повернуть объект вокруг оси относительно заданной точки в ГСК */
    function RotateObjectAroundPointGCS(obj: TObject3D, point: TVector3d, axis: TVector3d, angle: number, isDegAngle?: boolean): void;
    /** Повернуть объект вокруг оси относительно заданной точки в ЛСК объекта */
    function RotateObjectAroundPointLCS(obj: TObject3D, point: TVector3d, axis: TVector3d, angle: number, isDegAngle?: boolean): void;
}

/** Модуль для проверки типов 3D объектов */
declare namespace objectTypeChecker {
    /** Проверить соответствие объекта одному из типов */
    function ObjectIsAnyTypeOf(obj: TObject3D, types: ObjectTypeValue[] | Set<ObjectTypeValue>): void;
    /** Проверить, является ли объект блоком */
    function ObjectIsBlock(obj: TObject3D): obj is TFurnBlock;
    /** Проверить, является ли объект контуром на плоскости */
    function ObjectIsContour3D(obj: TObject3D): obj is TContour3D;
    /** Проверить является ли объект многофункциональным вырезом */
    function ObjectIsCustomGroove(obj: TObject3D): obj is TCustomGroove;
    /** Проверить, является ли объект полуфабрикатом */
    function ObjectIsDraftBlock(obj: TObject3D): obj is TDraftBlock;
    /** Проверить, является ли объект телом выдавливания */
    function ObjectIsExtrusionBody(obj: TObject3D): obj is TExtrusionBody;
    /** Проверить, является ли объект фурнитурой */
    function ObjectIsFastener(obj: TObject3D): obj is TFastener;
    /** Проверить, является ли объект покупным изделием */
    function ObjectIsFurnAsm(obj: TObject3D): obj is TFurnAsm;
    /** Проверить, является ли объект импортированным полигональным объектом */
    function ObjectIsImportedMesh(obj: TObject3D): obj is TImportedMesh;
    /** Проверить, является ли объект слоем */
    function ObjectIsLayer(obj: TObject3D): obj is TLayer3D;
    /** Проверить, является ли объект габаритной рамкой */
    function ObjectIsLimits(obj: TObject3D): obj is TModelLimits;
    /** Проверить, является ли объект панелью */
    function ObjectIsPanel(obj: TObject3D): obj is TFurnPanel;
    /** Проверить, является ли объект телом вращения */
    function ObjectIsRotationBody(obj: TObject3D): obj is T2DRotationBody;
    /** Проверить, является ли объект объектом-размером */
    function ObjectIsSize3D(obj: TObject3D): obj is TSize3D;
    /** Проверить, является ли объект структурным (имеет вложенные объекты) */
    function ObjectIsStructObject(obj: TObject3D): obj is T3DObjectList;
    /** Проверить, является ли объект телом по траектории */
    function ObjectIsTrajectoryBody(obj: TObject3D): obj is T2DTrajectoryBody;
    /** Тип 3D объекта */
    const ObjectTypeValue: {
        readonly contour: "contour";
        readonly draftBlock: "draftBlock";
        readonly extrusion: "extrusion";
        readonly fastener: "fastener";
        readonly furnAsm: "furnAsm";
        readonly furnBlock: "furnBlock";
        readonly importedMesh: "importedMesh";
        readonly layer: "layer";
        readonly limits: "limits";
        readonly panel: "panel";
        readonly rotationBody: "rotationBody";
        readonly size: "size";
        readonly structObject: "structObject";
        readonly trajectoryBody: "trajectoryBody";
    };
}

/** Модуль для проведения операций с панелями */
declare namespace panelOperations {
    /** Добавить облицовку кромки на панель. */
    function AddButt(panel: TFurnPanel, elemIndex: number, materialData?: ButtMaterialData): TFurnButt;
    /** Добавить паз на панель. */
    function AddCut(panel: TFurnPanel, type: cutType, name: string, sign?: string): TFurnCut;
    /** Добавить облицовку пласти на панель. */
    function AddPlastic(panel: TFurnPanel, frontSide?: boolean, materialData?: FurnMaterialData): TFurnPlastic;
    /** Применить многофункциональные вырезы к объектам модели */
    function ApplyCustomGrooves(grooves: TCustomGroove | TCustomGroove[], options?: GroovingOptions): void;
    /** Тип параметров паза */
    const cutParamType: {
        readonly pocket: "pocket";
        readonly type1: "type1";
        readonly type2: "type2";
        readonly type3: "type3";
        readonly type4: "type4";
        readonly type5: "type5";
        readonly type6: "type6";
        readonly type7: "type7";
        readonly type8: "type8";
        readonly type9: "type9";
    };
    /** Тип паза */
    const cutType: {
        readonly extrusion: "extrusion";
        readonly freeForm: "freeForm";
    };
    /** Тип лицевой стороны */
    const faceType: {
        readonly back: "back";
        readonly default: "default";
        readonly front: "front";
    };
    /** Тип ориентации текстуры */
    const textureOrientation: {
        readonly custom: "custom";
        readonly horizontal: "horizontal";
        readonly none: "none";
        readonly vertical: "vertical";
    };
}

/** Модуль пользовательского визуального интерфейса */
declare namespace UI {
    /** Модуль создания визуальных компонентов */
    namespace components {
        /** Создать селектор для материала кромки */
        function NewButtMaterialEdit(parent: TWinControl, owner: TComponent): ButtMaterialEdit;
        /** Создать кнопку */
        function NewButton(Owner: TComponent, Parent: TWinControl): TcxButton;
        /** Создать текстовое поле ввода с кнопкой */
        function NewButtonEdit(Owner: TComponent, Parent: TWinControl): TcxButtonEdit;
        /** Создать компонент-флажок (checkbox) */
        function NewCheckBox(Owner: TComponent, Parent: TWinControl): TcxCheckBox;
        /** Создать компонент выбора цвета из списка */
        function NewColorComboBox(Owner: TComponent, Parent: TWinControl): TcxColorComboBox;
        /** Создать тесктовое поле ввода с выбором значения из списка */
        function NewComboBox(Owner: TComponent, Parent: TWinControl): TcxComboBox;
        /** Создать форму */
        function NewForm(): TForm;
        /** Создать селектор для фурнитуры */
        function NewFurnitureEdit(parent: TWinControl, owner: TComponent): FurnitureEdit;
        /** Создать компонент-контейнер */
        function NewGroupBox(Owner: TComponent, Parent: TWinControl): TcxGroupBox;
        /** Создаёт компонент отображающий выбранное изображение */
        function NewImage(owner: TComponent, parent: TWinControl): TImageContainer;
        /** Создаёт компонент-кнопку, с возможностью отображения картинки */
        function NewImageButton(parent: TWinControl, owner: TComponent): TImageButton;
        /** Создать компонент-подпись */
        function NewLabel(Owner: TComponent, Parent: TWinControl): TcxLabel;
        /** Создать компонент-список (listbox) */
        function NewListBox(Owner: TComponent, Parent: TWinControl): TcxListBox;
        /** Создать селектор для материала */
        function NewMaterialEdit(parent: TWinControl, owner: TComponent): MaterialEdit;
        /** Создать панель */
        function NewPanel(Owner: TComponent, Parent: TWinControl): TPanel;
        /** Создать компонент-переключатель (radiobutton) */
        function NewRadioButton(Owner: TComponent, Parent: TWinControl): TcxRadioButton;
        /** Создать группу переключателей */
        function NewRadioGroup(Owner: TComponent, Parent: TWinControl): TcxRadioGroup;
        /** Создаёт контейнер с прокруткой */
        function NewScrollBox(Owner: TComponent, Parent: TWinControl): TcxScrollBox;
        /** Создать текстовую таблицу */
        function NewStringGrid(owner: TComponent, parent: TWinControl): TStringGrid;
        /** Создать текстовое поле ввода */
        function NewTextEdit(Owner: TComponent, Parent: TWinControl): TcxTextEdit;
    }
    /** Модуль констант для визуальных компонентов */
    namespace constants {
        /** Значения выравнивания визуальных компонентов */
        const align: {
            readonly bottom: "bottom";
            readonly client: "client";
            readonly custom: "custom";
            readonly left: "left";
            readonly none: "none";
            readonly right: "right";
            readonly top: "top";
        };
        /** Значения горизонтального выравнинвания текста */
        const alignment: {
            readonly center: "center";
            readonly left: "left";
            readonly right: "right";
        };
        /** Грань родительского компонента, к которому осуществляется привязка */
        const anchorKind: {
            readonly bottom: "bottom";
            readonly left: "left";
            readonly right: "right";
            readonly top: "top";
        };
        /** Вид внутреннего скоса */
        const bevelCut: {
            readonly lowered: "lowered";
            readonly none: "none";
            readonly raised: "raised";
            readonly space: "space";
        };
        /** Грань скоса */
        const bevelEdge: {
            readonly bottom: "bottom";
            readonly left: "left";
            readonly right: "right";
            readonly top: "top";
        };
        /** Расположение изображения на кнопке */
        const buttonLayout: {
            readonly glyphBottom: "glyphBottom";
            readonly glyphLeft: "glyphLeft";
            readonly glyphRight: "glyphRight";
            readonly glyphTop: "glyphTop";
        };
        /** Действие при закрытии формы */
        const closeAction: {
            readonly free: "free";
            readonly hide: "hide";
            readonly minimize: "minimize";
            readonly none: "none";
        };
        /** Границы прямоугольного компонента */
        const cxBorder: {
            readonly bottom: "bottom";
            readonly left: "left";
            readonly right: "right";
            readonly top: "top";
        };
        /** Состояние кнопки */
        const cxButtonAssignedColor: {
            readonly default: "default";
            readonly defaultText: "defaultText";
            readonly disabled: "disabled";
            readonly disabledText: "disabledText";
            readonly hot: "hot";
            readonly hotText: "hotText";
            readonly normal: "normal";
            readonly normalText: "normalText";
            readonly pressed: "pressed";
            readonly pressedText: "pressedText";
        };
        /** Вид кнопки */
        const cxButtonKind: {
            readonly commandLink: "commandLink";
            readonly dropDown: "dropDown";
            readonly dropDownButton: "dropDownButton";
            readonly officeDropDown: "officeDropDown";
            readonly standard: "standard";
        };
        /** Выравнивание заголовка */
        const cxCaptionAlignment: {
            readonly bottomCenter: "bottomCenter";
            readonly bottomLeft: "bottomLeft";
            readonly bottomRight: "bottomRight";
            readonly center: "center";
            readonly leftBottom: "leftBottom";
            readonly leftCenter: "leftCenter";
            readonly leftTop: "leftTop";
            readonly rightBottom: "rightBottom";
            readonly rightCenter: "rightCenter";
            readonly rightTop: "rightTop";
            readonly topCenter: "topCenter";
            readonly topLeft: "topLeft";
            readonly topRight: "topRight";
        };
        /** Состояние компонента-чекбокса */
        const cxCheckBoxState: {
            readonly checked: "checked";
            readonly grayed: "grayed";
            readonly unchecked: "unchecked";
        };
        /** Выравнивание окна выбора цвета */
        const cxColorBoxAlign: {
            readonly left: "left";
            readonly right: "right";
        };
        /** Стиль списка цветов */
        const cxColorComboStyle: {
            readonly edit: "edit";
            readonly list: "list";
        };
        /** Тип диалогового окна палитры цветов */
        const cxColorDialogType: {
            readonly advanced: "advanced";
            readonly custom: "custom";
            readonly default: "default";
        };
        /** Тип именования цвета */
        const cxColorNamingConvention: {
            readonly delphi: "delphi";
            readonly html4delp: "html4delp";
            readonly none: "none";
            readonly x11: "x11";
        };
        /** Тип вывода значения цвета */
        const cxColorValueFormat: {
            readonly hex: "hex";
            readonly integer: "integer";
            readonly rgb: "rgb";
        };
        /** Стиль границ компонента типа TcxContainer */
        const cxContainerBorderStyle: {
            readonly border3D: "border3D";
            readonly flat: "flat";
            readonly none: "none";
            readonly office11: "office11";
            readonly single: "single";
            readonly thick: "thick";
            readonly ultraFlat: "ultraFlat";
        };
        /** Стиль границы компонента */
        const cxControlBorderStyle: {
            readonly default: "default";
            readonly none: "none";
        };
        /** Стиль границ компонента типа TcxEdit */
        const cxEditBorderStyle: {
            readonly border3D: "border3D";
            readonly flat: "flat";
            readonly none: "none";
            readonly office11: "office11";
            readonly single: "single";
            readonly thick: "thick";
            readonly ultraFlat: "ultraFlat";
        };
        /** Стиль выпадающего списка */
        const cxEditDropDownListStyle: {
            readonly editFixedList: "editFixedList";
            readonly editList: "editList";
            readonly fixedList: "fixedList";
        };
        /** Режим отображения текста в поле */
        const cxEditEchoMode: {
            readonly normal: "normal";
            readonly password: "password";
        };
        /** Положение надписи по вертикали */
        const cxEditVerticalAlignment: {
            readonly bottom: "bottom";
            readonly center: "center";
            readonly top: "top";
        };
        /** Растяжение изображения относительно компонента */
        const cxImageFitMode: {
            readonly fill: "fill";
            readonly fit: "fit";
            readonly normal: "normal";
            readonly proportionalStretch: "proportionalStretch";
            readonly stretch: "stretch";
        };
        /** Режим прозрачности изображения на компоненте */
        const cxImageTransparency: {
            readonly default: "default";
            readonly opaque: "opaque";
            readonly transparent: "transparent";
        };
        /** Предсавляют собой кнопки, добавляемые в контекстное меню компонента */
        const cxPopupMenuItem: {
            readonly copy: "copy";
            readonly custom: "custom";
            readonly cut: "cut";
            readonly delete: "delete";
            readonly edit: "edit";
            readonly load: "load";
            readonly paste: "paste";
            readonly save: "save";
            readonly webCam: "webCam";
        };
        /** Позиция кнопок в поле компонента */
        const cxSpinEditButtonsPosition: {
            readonly horzLeftRight: "horzLeftRight";
            readonly horzRight: "horzRight";
            readonly vert: "vert";
        };
        /** Тип значения в хранящегося в компоненте */
        const cxSpinEditValueType: {
            readonly float: "float";
            readonly int: "int";
        };
        /** Расширенный вариант типа Boolean с возможностью выбора "По умолчанию" */
        const dxDefaultBoolean: {
            readonly default: "default";
            readonly false: "false";
            readonly true: "true";
        };
        /** Регистр букв в компоненте */
        const editCharCase: {
            readonly lowerCase: "lowerCase";
            readonly normal: "normal";
            readonly upperCase: "upperCase";
        };
        /** Значения стиля шрифта */
        const fontStyle: {
            readonly bold: "bold";
            readonly italic: "italic";
            readonly strikeOut: "strikeOut";
            readonly underline: "underline";
        };
        /** Стиль границ формы */
        const formBorderStyle: {
            readonly dialog: "dialog";
            readonly none: "none";
            readonly single: "single";
            readonly sizeable: "sizeable";
            readonly sizeToolWindow: "sizeToolWindow";
            readonly toolWindow: "toolWindow";
        };
        /** Положение формы */
        const formPosition: {
            readonly default: "default";
            readonly defaultPosOnly: "defaultPosOnly";
            readonly defaultSizeOnly: "defaultSizeOnly";
            readonly designed: "designed";
            readonly desktopCenter: "desktopCenter";
            readonly mainFormCenter: "mainFormCenter";
            readonly ownerFormCenter: "ownerFormCenter";
            readonly screenCenter: "screenCenter";
        };
        /** Стиль формы */
        const formStyle: {
            readonly MDIChild: "MDIChild";
            readonly MDIForm: "MDIForm";
            readonly normal: "normal";
            readonly stayOnTop: "stayOnTop";
        };
        /** Стиль отрисовки таблицы */
        const gridDrawingStyle: {
            readonly classic: "classic";
            readonly gradient: "gradient";
            readonly themed: "themed";
        };
        /** Настройки TStringGrid */
        const gridOption: {
            readonly alwaysShowEditor: "alwaysShowEditor";
            readonly colMoving: "colMoving";
            readonly colSizing: "colSizing";
            readonly drawFocusSelected: "drawFocusSelected";
            readonly editing: "editing";
            readonly fixedColClick: "fixedColClick";
            readonly fixedColDefAlign: "fixedColDefAlign";
            readonly fixedHorzLine: "fixedHorzLine";
            readonly fixedHotTrack: "fixedHotTrack";
            readonly fixedRowClick: "fixedRowClick";
            readonly fixedRowDefAlign: "fixedRowDefAlign";
            readonly fixedVertLine: "fixedVertLine";
            readonly horzLine: "horzLine";
            readonly rangeSelect: "rangeSelect";
            readonly rowMoving: "rowMoving";
            readonly rowSelect: "rowSelect";
            readonly rowSizing: "rowSizing";
            readonly tabs: "tabs";
            readonly thumbTracking: "thumbTracking";
            readonly vertLine: "vertLine";
        };
        /** Коды клавиш */
        const keys: {
            readonly a: "a";
            readonly b: "b";
            readonly c: "c";
            readonly control: "control";
            readonly d: "d";
            readonly delete: "delete";
            readonly down: "down";
            readonly e: "e";
            readonly end: "end";
            readonly escape: "escape";
            readonly f: "f";
            readonly g: "g";
            readonly h: "h";
            readonly home: "home";
            readonly i: "i";
            readonly insert: "insert";
            readonly j: "j";
            readonly k: "k";
            readonly key0: "key0";
            readonly key1: "key1";
            readonly key2: "key2";
            readonly key3: "key3";
            readonly key4: "key4";
            readonly key5: "key5";
            readonly key6: "key6";
            readonly key7: "key7";
            readonly key8: "key8";
            readonly key9: "key9";
            readonly l: "l";
            readonly left: "left";
            readonly lineFeed: "lineFeed";
            readonly m: "m";
            readonly n: "n";
            readonly num0: "num0";
            readonly num1: "num1";
            readonly num2: "num2";
            readonly num3: "num3";
            readonly num4: "num4";
            readonly num5: "num5";
            readonly num6: "num6";
            readonly num7: "num7";
            readonly num8: "num8";
            readonly num9: "num9";
            readonly o: "o";
            readonly p: "p";
            readonly q: "q";
            readonly r: "r";
            readonly return: "return";
            readonly right: "right";
            readonly s: "s";
            readonly shift: "shift";
            readonly space: "space";
            readonly t: "t";
            readonly tab: "tab";
            readonly u: "u";
            readonly up: "up";
            readonly v: "v";
            readonly w: "w";
            readonly x: "x";
            readonly y: "y";
            readonly z: "z";
        };
        /** Выравнивание по горизонтали */
        const leftRight: {
            readonly left: "left";
            readonly right: "right";
        };
        /** Значения клавиши мыши */
        const mouseButton: {
            readonly left: "left";
            readonly middle: "middle";
            readonly right: "right";
        };
        /** Ориентация полосы прокрутки */
        const scrollBarKind: {
            readonly horizontal: "horizontal";
            readonly vertical: "vertical";
        };
        /** Отображаемые полосы прокрутки */
        const scrollStyle: {
            readonly both: "both";
            readonly horizontal: "horizontal";
            readonly none: "none";
            readonly vertical: "vertical";
        };
        /** Клавиша-модификатор */
        const shiftState: {
            readonly alt: "alt";
            readonly ctrl: "ctrl";
            readonly shift: "shift";
        };
    }
    /** Модуль для запуска диалоговых окон */
    namespace dialogs {
        /** Запустить окно с сообщением об ошибке */
        function ErrorBox(message: string): void;
        /** Запустить окно с информационным сообщением */
        function MessageBox(message: string): void;
        /** Запустить диалог выбора директории */
        function RunDirectorySelectDialog(caption: string, defaultPath: string): string;
        /** Запустить окно запроса текстового значения. Результат функции - был ли подтверждён ввод пользователем */
        function RunInputQueryDialog(caption: string, prompt: string, values: string[], inOutValue: ReferenceObject<string>): boolean;
        /** Запустить диалоговое окно с расширенным набором кнопок */
        function RunMessageDialog(message: string, type: DialogMessageType, buttons: Set<DialogMessageButton>): DialogMessageResult;
        /** Запустить окно выбора файла для открытия. Возвращаемый результат - путь к файлу, выбранному пользователем, или пустая строка при отмене пользователем выбора */
        function RunOpenFileDialog(params: DialogParams): string;
        /** Запустить окно выбора файла для сохранения. Возвращаемый результат - путь к файлу, выбранному пользователем, или пустая строка при отмене пользователем выбора */
        function RunSaveFileDialog(params: DialogParams): string;
        /** Запустить диалог выбора "Да/Нет" */
        function RunYesNoDialog(message: string, type?: DialogMessageType): boolean;
        /** Тип кнопки диалога */
        const DialogMessageButton: {
            readonly abort: "abort";
            readonly all: "all";
            readonly cancel: "cancel";
            readonly close: "close";
            readonly ignore: "ignore";
            readonly no: "no";
            readonly noToAll: "noToAll";
            readonly ok: "ok";
            readonly retry: "retry";
            readonly yes: "yes";
            readonly yesToAll: "yesToAll";
        };
        /** Тип результата диалога */
        const DialogMessageResult: {
            readonly abort: "abort";
            readonly all: "all";
            readonly cancel: "cancel";
            readonly close: "close";
            readonly ignore: "ignore";
            readonly no: "no";
            readonly noToAll: "noToAll";
            readonly ok: "ok";
            readonly retry: "retry";
            readonly yes: "yes";
            readonly yesToAll: "yesToAll";
        };
        /** Тип диалога */
        const DialogMessageType: {
            readonly confirmation: "confirmation";
            readonly error: "error";
            readonly info: "info";
            readonly warning: "warning";
        };
    }
}

// Hand-transcribed from the doc's closing prose section (callback signatures & Set<> aliases).
type TCloseEvent = (sender: object, action: ReferenceObject<closeAction>) => void;
type TCloseQueryEvent = (sender: object, canClose: ReferenceObject<boolean>) => void;
type TcxEditEditingEvent = (sender: object, canEdit: ReferenceObject<boolean>) => void;
type TcxGetDefaultColorEvent = (sender: object, acolor: ReferenceObject<number>) => void;
type TKeyEvent = (sender: object, key: ReferenceObject<number>, shift: TShiftState) => void;
type TKeyPressEvent = (sender: object, key: ReferenceObject<string>) => void;
type TMouseEvent = (sender: object, button: mouseButton, shift: TShiftState, x: number, y: number) => void;
type TMouseMoveEvent = (sender: object, shift: TShiftState, x: number, y: number) => void;
type TNotifyEvent = (sender: object) => void;
type TAnchors = Set<anchorKind>;
type TBevelEdges = Set<bevelEdge>;
type TcxBorders = Set<cxBorder>;
type TcxButtonAssignedColors = Set<cxButtonAssignedColor>;
type TFontStyles = Set<fontStyle>;
type TGridOptions = Set<gridOption>;
type TShiftState = Set<shiftState>;
type TMatrix4 = number[];
declare class IndexedProperty<K, V> {
    [index: number]: V;
    [key: string]: V;
}


// Inferred convenience global (not documented in the source .md, but used pervasively in real scripts as a shortcut for currentFileData.model).
declare const Model: TModel3D;

// Types referenced in the docs but not separately documented — declared as `any` so they don't break IntelliSense.
type T = any;

