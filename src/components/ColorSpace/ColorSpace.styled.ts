import { styled } from "@mui/material/styles";
import { BG_IMAGE_SPACE } from "@shared/constants/styles";

const Styled = {
  Space: styled("div")(() => {
    return {
      width: "100%",
      height: "140px",
      boxSizing: "border-box",
      outline: 0,
      position: "relative",
      border: "2px solid black",
      borderRadius: "4px",
      backgroundImage: BG_IMAGE_SPACE,
    };
  }),
  Thumb: styled("div")(() => {
    return {
      position: "absolute",
      zIndex: 100,
      backgroundColor: "#ffffff",
      border: "2px solid black",
      boxShadow: "none",
      borderRadius: "50%",
      height: "10px",
      width: "10px",
      marginLeft: "-5px /*! @noflip */",
      marginBottom: "-5px /*! @noflip */",
      outline: 0,
      boxSizing: "border-box",
      willChange: "left, bottom",
      transition: "box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      "&:hover": {
        boxShadow: `0px 0px 0px 4px rgba(255 255 255 / 0.16)`,
      },
      "&.MuiColorInput-Thumb-active": {
        boxShadow: `0px 0px 0px 8px rgba(255 255 255 / 0.16)`,
      },
      "@media (hover: none)": {
        boxShadow: "none",
      },
    };
  }),
};

export { Styled };
