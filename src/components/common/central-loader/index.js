/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from '@emotion/react';
import { CircularProgress } from '@mui/material';
import React from 'react'
import { alignItemsCenter, dFlex, justifyContentCenter } from '../../../styles/flexbox';

const CentralLoader = () => {
  return (
    <div css={[dFlex, justifyContentCenter, alignItemsCenter, css`width:100vw;height:100vh;`]}>
      <CircularProgress />
    </div>
  )
}

export default CentralLoader
