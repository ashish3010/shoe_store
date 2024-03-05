import { css } from "@emotion/react";
import { orangeSubText } from "../../styles/colors";
import { primaryButton, secondaryButton, w100 } from "../../styles/common";

export const inputContainer = css`
  width:fit-content;
  label{
    color: ${orangeSubText} !important;
  }
  .Mui-focused{
    color: ${orangeSubText} !important;
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
  ${secondaryButton}
  ${w100}
`;

export const btnStyle = css`
  gap:16px;
  ${primaryButton}
`