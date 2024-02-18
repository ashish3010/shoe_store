import { css } from "@emotion/react";
import { dFlex } from "../../../styles/flexbox";

export const modalStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background-color: white;
  boxShadow: 24px;
  padding:24px;
  border-radius:16px;

  .imageInput {
    font-size:16px;
  }
  .grid{
    display: grid;
    grid-template-columns: auto auto;
    padding: 10px;
    gap:16px;
  }
`;
