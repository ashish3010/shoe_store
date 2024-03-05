/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import {
  AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Search, SearchIconWrapper, StyledInputBase, headerContainer } from './style';
import { useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Divider from '../divider';
import { primaryButton } from '../../../styles/common';
import { pages, settings } from './utils';
import { black } from '../../../styles/colors';
import SearchIcon from '@mui/icons-material/Search';
import { logout } from '../../../redux/action/user-details-action';

const Header = () => {
  const userData = useSelector(state => state.userReducer)
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { photoURL } = userData || {}



  const handleOpenUserMenu = () => {
    if (userData) {
      setAnchorElUser(true);
    } else {
      navigate('/login')
    }
  };

  const handleMenuItemsClick = (value = '') => {
    if (!value) {
      setAnchorElUser(false);
      return
    }
    if (value === 'logout') {
      dispatch(logout())
      navigate('/login')
      setAnchorElUser(false);
      return
    }
    navigate(`/${value}`)
    setAnchorElUser(false);
  }

  return (
    <div css={headerContainer}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img className='logo' alt='shoe-plex-logo' src="/assets/logo.png" onClick={() => navigate('/home')} />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {window.location.pathname !== '/login' && pages.map(({ lable, value }) => (
                <Button
                  key={value}
                  onClick={() => navigate(`/${value}`)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {lable}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0, gap: 2, alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>
              {window.location.pathname !== '/login' && (
                <>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                  <ShoppingCartOutlinedIcon sx={{ color: black }} />
                  {userData
                    ? <img className='avatar' alt='avatar' src={photoURL || "/assets/avatar.png"} onClick={handleOpenUserMenu} />
                    : <Button onClick={handleOpenUserMenu} variant="contained" css={primaryButton}>Sign in</Button>}
                </>
              )}
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={anchorElUser}
                onClose={handleMenuItemsClick}
              >
                {settings.map(({ label, value }, index, { length }) => (
                  <>
                    {index === length - 1 && <Divider color='#e8d9d1' />}
                    <MenuItem key={label} onClick={() => handleMenuItemsClick(value)}>
                      <Typography textAlign="center">{label}</Typography>
                    </MenuItem>
                  </>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Header;