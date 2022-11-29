import { ColorInput, TinyColor, TinyColorOptions } from '@ctrl/tinycolor';
import type { MuiColorInputFormat, MuiColorInputValue } from '../../index.types';
export declare function buildValueFromTinyColor(tinyColor: TinyColor, format: MuiColorInputFormat): string;
export declare function getSafeTinyColor(color?: MuiColorInputValue, fallbackColor?: MuiColorInputValue, options?: Partial<TinyColorOptions>): TinyColor;
export declare function stringifyInputValue(inputValue: ColorInput): string;
