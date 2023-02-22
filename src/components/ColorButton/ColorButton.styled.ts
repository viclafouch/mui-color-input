import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const Styled = {
  Button: styled(Button)(() => {
    return {
      backgroundSize: "8px 8px",
      backgroundPosition: "0 0, 4px 0, 4px -4px, 0px 4px",
      transition: "none",
      boxShadow: "none",
      border: "2px solid black",
      borderRadius: "6px",
      width: "36px",
      aspectRatio: "1 / 1",
      height: "36px",
      minWidth: 0,
    };
  }),
};

export { Styled };
