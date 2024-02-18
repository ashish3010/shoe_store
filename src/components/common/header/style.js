import { css } from "@emotion/react";
import { black, orangeSubText, secondaryBtn } from "../../../styles/colors";
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const headerContainer = css`
  .logo{
    margin-top: -5px;
    height:68px;
    width:150px;
    object-fit:contain;
    cursor:pointer;
  }
  .avatar{
    width:48px;
    height:48px;
    object-fit:contain;
    border-radius:50%;
    cursor:pointer;
  }
  button {
    color: ${black};
  }
`;

export const Search = styled('div')(() => ({
  position: 'relative',
  borderRadius: 16,
  backgroundColor: secondaryBtn,
  height: 36,
  color: orangeSubText
}));

export const SearchIconWrapper = styled('div')(() => ({
  paddingLeft: 16,
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));