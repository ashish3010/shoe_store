import { css } from "@emotion/react";
import { dFlex } from "../../../styles/flexbox";

export const popularBrandsWrapper = css`
  ${dFlex}
  gap:16px;
  overflow-x:scroll;
  img {
    width: 15rem;
    height: 15rem;
    objectFit: contain;
    border-radius:16px;
  }
`;
