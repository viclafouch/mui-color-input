import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const Styled = {
  Slider: styled(Slider, {
    shouldForwardProp: (prop) => {
      return prop !== "$rgbaFrom" && prop !== "$rgbaTo";
    },
  })(() => {
    return {
      height: "6px",
      "& .MuiSlider-rail": {
        opacity: 1,
        border: "2px solid black",
        borderRadius: "6px",
        // TODO: find better way for perf
        background: `linear-gradient(to right, rgba(var(--rgb-r), var(--rgb-g), var(--rgb-b), 0) 0%, rgba(var(--rgb-r), var(--rgb-g), var(--rgb-b), 1) 100%)`,
      },

      "& .MuiSlider-track": {
        color: "transparent",
        border: "none",
      },

      "& .MuiSlider-thumb": {
        backgroundColor: "#ffffff",
        border: "2px solid black",
        borderRadius: "4px",
        height: "18px",
        width: "8px",
        boxShadow: "none",
      },
    };
  }),
};

export { Styled };
