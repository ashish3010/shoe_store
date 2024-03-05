import { css } from "@emotion/react";

export const wrapper = css`
  display:flex;
  gap:32px;
  flex-wrap:wrap;
  height:75vh;
  overflow-y:scroll;
  img {
    width: 15rem;
    height: 15rem;
    objectFit: contain;
    border-radius:16px;
  }
`