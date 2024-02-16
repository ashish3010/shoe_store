/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react'
import {
  getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber
} from "firebase/auth";
import { app } from '../../utils/firebaseConfig';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userDetails } from '../../redux/action';
import { Text, Space, Divider } from '../common/styledComponents'
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { btnStyle, googleBtn, inputContainer } from './style';
import { alignItemsCenter, dFlex, flexDirectionCol, justifyContenSpaceBet, justifyContentCenter } from '../../styles/flexbox';
import { black } from '../../styles/colors';
import { textAlignCenter } from '../../styles/common';
import { Preview, Visibility, VisibilityOff } from '@mui/icons-material';


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [signUpSelected, setSignUpSelected] = useState(false)
  const [isSignUpWithNumber, setSignUpWithNumber] = useState(false)
  const [userData, setUserData] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate()

  const googleLogin = async () => {
    try {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch(userDetails(providerData))
      navigate('/home');
    } catch (error) {
      console.log(error)
    }
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <div style={{ padding: '0px 16px 0 48px' }}>
        <Text bold fontSize={18} color={black}>LuxeLaces</Text>
      </div>
      <Divider color='#E5E8EB' />
      <Space value='48px' />
      <div css={[dFlex, justifyContentCenter, alignItemsCenter, flexDirectionCol]}>
        <div style={{ width: 400 }}>
          <div css={inputContainer}>
            <TextField onChange={onInputChange} name='email' value={userData?.email} type='email' id="outlined-basic" label="Email" variant="outlined" />
            <Space value='24px' />
            <TextField
              onChange={onInputChange} name='password' value={userData?.password}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>,
              }} id="outlined-basic" label="Password" variant="outlined" />
          </div>
          <Space value='24px' />
          <div css={[dFlex, justifyContenSpaceBet]}>
            <Text onClick={() => setSignUpWithNumber(!isSignUpWithNumber)} bold fontSize={14} color='#966b4f'>{`Continue with ${isSignUpWithNumber ? 'email' : 'number'}`}</Text>
            <Button css={btnStyle} variant="contained">{signUpSelected ? 'Sign up' : 'Sign in'}</Button>
          </div>
          <Divider padding='16px' padPosition='horizontal' color='#e8d9d1' />
          <Button
            onClick={googleLogin}
            startIcon={<GoogleIcon />}
            css={googleBtn}
            variant="contained">
            Continue with Google
          </Button>
          <Space value='24px' />
          <Text
            className='text-align-center'
            bold
            fontSize={14}
            onClick={() => setSignUpSelected(!signUpSelected)}
            color='#966b4f'>{signUpSelected ? "Already have an account! Sign in" : "Don't have an account? Sign up"}</Text>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
