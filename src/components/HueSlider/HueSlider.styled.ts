import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const Styled = {
  Slider: styled(Slider)(() => {
    return {
      height: "6px",

      "& .MuiSlider-rail": {
        opacity: 1,
        border: "2px solid black",
        borderRadius: "6px",
        background:
          "linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%) /*! @noflip */",
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
