import { css } from "@emotion/react";
import { alignItemsCenter, dFlex, justifyContenSpaceBet, justifyContentCenter } from "../../styles/flexbox";
import { w100 } from "../../styles/common";
import { black, secondaryBtn } from "../../styles/colors";

export const userDetailsStyle = css`
  ${dFlex}
  ${justifyContenSpaceBet}
  ${alignItemsCenter}
  img{
    width:128px;
    height:128px;
    object-fit:contain;
    border-radius:50%;
  }
`;

export const optionItems = css`
  ${w100}
  ${dFlex}
  justify-content:flex-start;
  color:${black} !important;
  padding:16px 24px;
  :hover {
    background-color: ${secondaryBtn} !important;
  }
  .MuiButton-endIcon{
    position:absolute;
    right:24px;
  }
`;

export const wrapper = css`
  width:100vw;
  padding: 0 10rem;
`;