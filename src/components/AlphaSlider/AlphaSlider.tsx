import React from "react";
import type { SliderProps } from "@mui/material/Slider";
import type { RGB } from "@ctrl/tinycolor";

import { Styled } from "./AlphaSlider.styled";

type AlphaSliderProps = SliderProps & {
  rgbColor: RGB;
};

const AlphaSlider = (props: AlphaSliderProps) => {
  const { rgbColor, style, className, ...rest } = props;

  const sliderStyle = {
    "--rgb-r": rgbColor.r,
    "--rgb-g": rgbColor.g,
    "--rgb-b": rgbColor.b,
    ...style,
  } as React.CSSProperties;

  return (
    <Styled.Slider
      className={`MuiColorInput-AlphaSlider ${className || ""}`}
      style={sliderStyle}
      {...rest}
    />
  );
};

export default AlphaSlider;
