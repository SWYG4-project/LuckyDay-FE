import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const globalStyle = css`
  ${emotionReset};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #323232;
  }

  html {
    font-size: 62.5%; /* 1 rem = 10px */
    /* NOTE: 임의로 설정 추후 기본 폰트 확인 필요 */
    font-family: "omyu", "sans-serif";
  }
  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;

    &[disabled] {
      cursor: not-allowed;
    }
  }
  input,
  button,
  textarea {
    font-family: "omyu", sans-serif;
  }
  textarea {
    resize: none;
    outline: 0;
  }
  a {
    text-decoration: none;
  }

  /* TODO: 스크롤 스크린 확인 필요 */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default globalStyle;
