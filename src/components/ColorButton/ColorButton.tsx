import React from "react";
import { ButtonProps } from "@mui/material/Button";
import { BG_IMAGE_FALLBACK } from "@shared/constants/styles";

import { Styled } from "./ColorButton.styled";

// Omit<ButtonProps, 'children'>
type ColorButtonProps = ButtonProps & {
  bgColor: string;
  isBgColorValid: boolean;
  disablePopover?: boolean;
};

const ColorButton = (props: ColorButtonProps) => {
  const { bgColor, className, disablePopover, isBgColorValid, ...rest } = props;

  return (
    <Styled.Button
      disableTouchRipple
      style={{
        backgroundColor: isBgColorValid ? bgColor : undefined,
        backgroundImage: isBgColorValid ? undefined : BG_IMAGE_FALLBACK,
        cursor: disablePopover ? "default" : undefined,
      }}
      className={`MuiColorInput-Button ${className || ""}`}
      {...rest}
    />
  );
};

export default ColorButton;
