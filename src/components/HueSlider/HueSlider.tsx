import React from "react";
import type { SliderProps } from "@mui/material/Slider";

import { Styled } from "./HueSlider.styled";

type HueSliderProps = SliderProps;

const HueSlider = (props: HueSliderProps) => {
  const { className, ...rest } = props;

  return (
    <Styled.Slider
      className={`MuiColorInput-HueSlider ${className || ""}`}
      {...rest}
    />
  );
};

export default HueSlider;
