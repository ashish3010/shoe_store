import { css } from "@emotion/react";
import { black, primaryBtn, secondaryBtn } from "./colors";

export const w100 = css`
  width:100%;
`;

export const objectFitContain = css`
  object-fit:contain;
`

export const textAlignCenter = css`
  text-align: center;
`;

export const primaryButton = css`
  background-color: ${primaryBtn} !important; 
  color:white !important;
`
export const secondaryButton = css`
  background-color: ${secondaryBtn} !important;
  color:${black};
` ;

export const cursorPointer = css`
  cursor:pointer;
`