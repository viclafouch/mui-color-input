import React from "react";

import { Styled } from "./ColorInput.styled";

type ColorInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const ColorInput = (props: ColorInputProps) => {
  const { className, ...rest } = props;

  return (
    <Styled.Container>
      <Styled.Input className={className || ""} {...rest} />
    </Styled.Container>
  );
};

export default ColorInput;
