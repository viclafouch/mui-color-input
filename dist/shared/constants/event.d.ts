export declare const KEYBOARD_KEY: Record<string, KeyboardEvent['key']>;
declare type ArrowColorSpace = {
    [key in typeof KEYBOARD_KEY[keyof typeof KEYBOARD_KEY]]: {
        type: 'hsvS' | 'hsvV';
        value: 1 | -1;
    };
};
export declare const ARROW_COLOR_SPACE: ArrowColorSpace;
export {};
