import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

type ColorTextFieldProps = TextFieldProps;

const ColorTextField = React.forwardRef(
  (props: ColorTextFieldProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { className, ...rest } = props;

    return (
      <TextField
        className={`MuiColorInput-TextField ${className || ""}`}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default ColorTextField;
