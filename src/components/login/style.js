import { css } from "@emotion/react";
import { black, primaryBtn, secondaryBtn } from "../../styles/colors";
import { w100 } from "../../styles/common";

export const inputContainer = css`
  width:fit-content;
  label{
    color: #966b4f !important;
  }
  .Mui-focused{
    color: #966b4f !important;
  }
  fieldset {
    border-color:#e8d9d1 !important;
  }
  .MuiInputBase-root{
    border-radius:16px !important;
    width: 400px;
  }
`

export const googleBtn = css`
  background-color: ${secondaryBtn} !important;
  color:${black};
  ${w100}
`

export const btnStyle = css`
  background-color: ${primaryBtn} !important;
`