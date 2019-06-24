export interface NgOption {
    [name: string]: any;
    index?: number;
    htmlId?: string;
    selected?: boolean;
    disabled?: boolean;
    marked?: boolean;
    label?: string;
    value?: string | Object;
    parent?: NgOption;
    children?: NgOption[];
}

export enum KeyCode {
    Tab = 9,
    Enter = 13,
    Esc = 27,
    Space = 32,
    ArrowUp = 38,
    ArrowDown = 40,
    Backspace = 8,
    Dot = 190

}

export interface NgSelectConfig {
    openOnEnter?: boolean;
    placeholder?: string;
    notFoundText?: string;
    typeToSearchText?: string;
    addTagText?: string;
    loadingText?: string;
    clearAllText?: string;
}
