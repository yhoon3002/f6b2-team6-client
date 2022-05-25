// 전역 스타일
import { css } from "@emotion/react";

// interface IPropsIsActive{
//   isActive : boolean
// }

export const globalStyles = css`
  * {
    font-family: "Roboto";
    font-style: normal;

    /* cursor: none; */
  }

  @font-face {
    font-family: "Roboto";
    src: url(/font/Roboto-Regular.ttf);
  }

  @font-face {
    font-family: "Roboto-light";
    src: url(/font/Roboto-Light.ttf);
  }

  @font-face {
    font-family: "Roboto-bold";
    src: url(/font/Roboto-Bold.ttf);
  }

  @font-face {
    font-family: "Orbitron";
    src: url(/font/Orbitron-Regular.ttf);
  }

  @font-face {
    font-family: "Orbitron-bold";
    src: url(/font/Orbitron-Bold.ttf);
  }

  body,
  html {
    background-color: #1b1b1b;
    color: #f1f1f1;
  }

  button {
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  *::-webkit-scrollbar {
    background-color: #c4c4c4;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #b150f2;
    border-radius: 5px;
  }
`;
