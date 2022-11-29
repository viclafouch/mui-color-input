import type { PopoverProps as MuiPopoverProps } from '@mui/material/Popover';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import { ColorButtonProps, CustomColorbutton } from './components/ColorButton/ColorButton';
import type { ColorFormats, ColorInput as MuiColorInputValue } from '@ctrl/tinycolor';
export declare type MuiColorInputFormat = Extract<'hex' | 'rgb' | 'hex8' | 'hsl' | 'hsv', ColorFormats>;
export type { MuiColorInputValue, ColorButtonProps };
declare type PopoverProps = Omit<MuiPopoverProps, 'anchorEl' | 'open' | 'children'>;
declare type TextFieldProps = Omit<MuiTextFieldProps, 'onChange' | 'select' | 'type' | 'multiline' | 'defaultValue'>;
export declare type MuiColorInputColors = {
    hex: string;
    hsl: string;
    hsv: string;
    rgb: string;
    hex8: string;
};
export interface MuiColorInputProps extends TextFieldProps {
    value: MuiColorInputValue;
    fallbackValue?: MuiColorInputValue;
    format?: MuiColorInputFormat;
    disablePopover?: boolean;
    isAlphaHidden?: boolean;
    onChange?: (value: string, colors: MuiColorInputColors) => void;
    AdornmentProps?: {
        position: 'start' | 'end';
        CustomAdornment?: CustomColorbutton;
    };
    PopoverProps?: PopoverProps;
}
