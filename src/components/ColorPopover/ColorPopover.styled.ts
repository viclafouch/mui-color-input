import { styled } from "@mui/material/styles";

const Styled = {
  Container: styled("div")(() => {
    return {
      width: "250px",
      maxWidth: "250px",
      padding: "12px 12px 16px",
      backgroundColor: "white",
      border: "2px solid black",
      borderRadius: "6px",
    };
  }),
};

export { Styled };
