import React from "react";
import Popover, { PopoverProps } from "@mui/material/Popover";

import { Styled } from "./ColorPopover.styled";

type ColorPopoverProps = PopoverProps & {
  children: React.ReactNode;
};

const ColorPopover = (props: ColorPopoverProps) => {
  const { children, className, ...rest } = props;

  return (
    <Popover
      className={`MuiColorInput-Popover ${className || ""}`}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      {...rest}
    >
      <Styled.Container>{children}</Styled.Container>
    </Popover>
  );
};

export default ColorPopover;
