import React from "react";
import Box from "@mui/material/Box";
import AlphaSlider from "@components/AlphaSlider/AlphaSlider";
import ColorSpace from "@components/ColorSpace/ColorSpace";
import HueSlider from "@components/HueSlider/HueSlider";
import ColorInput from "@components/ColorInput/ColorInput";
import { HSV, Numberify, TinyColor } from "@ctrl/tinycolor";
import { buildValueFromTinyColor } from "@shared/helpers/format";
import { clamp, matchIsNumber } from "@shared/helpers/number";

import type {
  MuiColorInputFormat,
  MuiColorInputProps,
} from "../../index.types";

type ColorPopoverBodyProps = {
  currentColor: TinyColor;
  format: MuiColorInputFormat;
  isAlphaHidden: MuiColorInputProps["isAlphaHidden"];
  onChange: (value: string) => void;
  isInputHidden?: boolean;
  inputValue?: TinyColor;
  onInputChange?: (value: any) => void;
};

const ColorPopoverBody = (props: ColorPopoverBodyProps) => {
  const {
    currentColor,
    format,
    onChange,
    isAlphaHidden,
    isInputHidden,
    inputValue,
    onInputChange,
  } = props;
  const [currentHsv, setCurrentHsv] = React.useState<Numberify<HSV>>(
    currentColor.toHsv()
  );

  const handleChangeHue = (event: Event, hue: number | number[]) => {
    if (!matchIsNumber(hue)) {
      return;
    }
    const newHue = clamp((360 * hue) / 100, 0, 359);
    setCurrentHsv((prevState) => {
      return {
        ...prevState,
        h: newHue,
      };
    });
    const tinyColor = new TinyColor({
      ...currentHsv,
      a: currentColor.toHsv().a,
      h: newHue,
    });
    onChange?.(buildValueFromTinyColor(tinyColor, format));
  };

  const handleChangeAlpha = (event: Event, alphaValue: number | number[]) => {
    if (!matchIsNumber(alphaValue)) {
      return;
    }
    const tinyColor = currentColor.clone().setAlpha(alphaValue);
    onChange?.(buildValueFromTinyColor(tinyColor, format));
  };

  const handleChangeSpace = ({ s, v }: Pick<Numberify<HSV>, "s" | "v">) => {
    const tinyColor = new TinyColor({
      h: currentHsv.h,
      a: currentColor.toHsv().a,
      s,
      v,
    });
    setCurrentHsv((prevState) => {
      return {
        ...prevState,
        s,
        v,
      };
    });
    onChange?.(buildValueFromTinyColor(tinyColor, format));
  };

  return (
    <Box className="MuiColorInput-PopoverBody">
      <ColorSpace
        currentHue={currentHsv.h}
        hsv={currentHsv}
        onChange={handleChangeSpace}
      />
      <Box mt="10px" px="3px">
        <HueSlider
          min={0}
          max={100}
          step={1}
          onChange={handleChangeHue}
          aria-label="hue"
          value={(currentHsv.h * 100) / 360}
        />
      </Box>
      {!isAlphaHidden ? (
        <Box mt="8px" px="3px">
          <AlphaSlider
            min={0}
            max={1}
            step={0.01}
            aria-label="alpha"
            rgbColor={currentColor.toRgb()}
            onChange={handleChangeAlpha}
            value={currentColor.getAlpha()}
          />
        </Box>
      ) : null}

      {!isInputHidden ? (
        <Box
          mt="16px"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"stretch"}
          overflow={"hidden"}
        >
          <ColorInput
            type="text"
            spellCheck="false"
            autoComplete="off"
            value={(
              inputValue?.toHexString() || currentColor.toHexString()
            ).toUpperCase()}
            onChange={onInputChange}
          />
        </Box>
      ) : null}
    </Box>
  );
};

export default ColorPopoverBody;
