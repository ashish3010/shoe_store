/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import Text from '../../common/text'
import Space from '../../common/space'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { primaryButton } from '../../../styles/common';


const HomeBanner = () => {
  const navigate = useNavigate()

  return (
    <div style={{ position: 'relative', zIndex: 0 }}>
      <img style={{ width: '100%' }} src='https://firebasestorage.googleapis.com/v0/b/chat-app-75308.appspot.com/o/assets%2Fhome-banner.png?alt=media&token=55655514-a971-453c-a93d-ae9c57b04677' />
      <div style={{ position: 'absolute', bottom: 40, left: 40 }}>
        <Text fontSize={48} bold={700} color='white'>The New Classics</Text>
        <Space value='24px' />
        <Text fontSize={16} color='white'>Elavate you everyday with latest shoes</Text>
        <Space value='32px' />
        <Button
          variant="contained"
          css={primaryButton}
          onClick={() => navigate('/popular-shoes')}
        >Shop</Button>
      </div>
    </div>
  )
}

export default HomeBanner
