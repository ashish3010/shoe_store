/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react'
import { black } from '../../../styles/colors'
import Text from '../../common/text'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import { dFlex } from '../../../styles/flexbox';
import { css } from '@emotion/react';
import { cursorPointer } from '../../../styles/common';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()

  return (
    <div style={{ height: 150, backgroundColor: black, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 100px' }}>
      <Text css={cursorPointer} color='white' onClick={() => navigate('/about-us')}>About us</Text>
      <Text css={cursorPointer} color='white' onClick={() => navigate('/help')}>Need help</Text>
      <Text css={cursorPointer} color='white' onClick={() => navigate('/feedback')}>Rate us</Text>
      <div css={[dFlex, css`gap:16px;`]}>
        <Link to="https://www.facebook.com" target="_blank"><FacebookIcon css={cursorPointer} sx={{ color: 'white' }} /></Link>
        <Link to="https://www.facebook.com" target="_blank"><InstagramIcon css={cursorPointer} sx={{ color: 'white' }} /></Link>
        <Link to="https://www.facebook.com" target="_blank"><LinkedInIcon css={cursorPointer} sx={{ color: 'white' }} /></Link>
        <Link to="https://github.com/ashish3010" target="_blank"><GitHubIcon css={cursorPointer} sx={{ color: 'white' }} /></Link>
        <Link to="https://www.facebook.com" target="_blank"><XIcon sx={{ color: 'white' }} /></Link>
      </div>
      <Text css={css`user-select:none;`} color='white'>Copyright	&copy; 2024, Shoe Plex. All rights reserved</Text>
    </div>
  )
}

export default Footer
