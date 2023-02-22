import { styled } from "@mui/material/styles";

const Styled = {
  Container: styled("div")(() => {
    return {
      border: "2px solid black",
      borderRadius: "6px",
      width: "100%",
      maxWidth: "213px",
      height: "46px",
      backgroundColor: "white",
      padding: "0 16px",
      overflow: "hidden",
      display: "flex",
      position: "relative",
    };
  }),

  Input: styled("input")(() => {
    return {
      width: "100%",
      height: "46px",
      color: "black",
      fontSize: "16px",
      lineHeight: "18px",
      fontWeight: "bold",
      backgroundColor: "unset",
      border: "none",
      resize: "none",
      outline: "none",
      // padding: '0 16px',
    };
  }),
};

export { Styled };
