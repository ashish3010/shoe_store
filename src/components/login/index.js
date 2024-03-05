/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react'
import {
  getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber
} from "firebase/auth";
import { app, fireStore } from '../../utils/firebaseConfig';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Text, Space, Divider } from '../common/styledComponents'
import { Button, CircularProgress, IconButton, InputAdornment, TextField } from '@mui/material';
import { btnStyle, googleBtn, inputContainer } from './style';
import { alignItemsCenter, dFlex, flexDirectionCol, justifyContentCenter } from '../../styles/flexbox';
import { orangeSubText, secondaryBtn } from '../../styles/colors';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { saveItem } from '../../utils/firebaseFunctions';
import { doc, getDoc } from 'firebase/firestore';
import { userDetails } from '../../redux/action/user-details-action';


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [signUpSelected, setSignUpSelected] = useState(false)
  const [isSignUpWithNumber, setSignUpWithNumber] = useState(false)
  const [sendOtpLoading, setSendOtpLoading] = useState(false)
  const [signInBtnLoading, setsignInBtnLoading] = useState('')
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [userData, setUserData] = useState({ email: '', password: '', phoneNumber: '', otp: '' })
  const dispatch = useDispatch()
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate()

  const { email, password, phoneNumber, otp } = userData;

  const googleLogin = async () => {
    setsignInBtnLoading('google')
    try {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      const docRef = doc(fireStore, `user/${providerData[0]?.email}`);
      const docSnap = await getDoc(docRef);
      if (!docSnap.data()) {
        saveItem(providerData?.[0], 'user', providerData[0]?.email)
      }
      dispatch(userDetails(providerData?.[0]))
      navigate('/home');
      setsignInBtnLoading('')
    } catch (error) {
      setsignInBtnLoading('')
      console.log(error)
    }
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }))
  }

  const sendOtp = () => {
    setSendOtpLoading(true)
    const recaptchaVerifier = new RecaptchaVerifier(firebaseAuth, 'recaptcha-container', {
      size: 'invisible',
      callback: () => {
        console.log('recaptcha resolved..')
      }
    });
    const number = `+91${phoneNumber}`
    signInWithPhoneNumber(firebaseAuth, number, recaptchaVerifier)
      .then(response => {
        window.confirmationOtp = response;
        setIsOtpSent(true)
        setSendOtpLoading(false)
      })
      .catch(error => {
        console.log(error)
        setSendOtpLoading(false)
      })
  }

  // const onSignInWithNumber = () => {
  //   const confirmationResult = window.confirmationOtp;
  //   confirmationResult.confirm(otp)
  //     .then(user => {
  //       const userData = JSON.parse(JSON.stringify(user))?.user?.providerData?.[0]
  //       saveItem(userData, 'user', user?.user?.phoneNumber)
  //       dispatch(userDetails(userData))
  //       navigate('/home');
  //       setsignInBtnLoading('')
  //     })
  //     .catch(error => {
  //       setsignInBtnLoading('')
  //       console.log(error)
  //     })
  // }

  const onSignIn = () => {
    setsignInBtnLoading('sign_in')
    // if (isSignUpWithNumber) {
    //   onSignInWithNumber()
    //   return
    // }
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(user => {
        const userData = JSON.parse(JSON.stringify(user))?.user?.providerData?.[0]
        dispatch(userDetails(userData))
        navigate('/home');
        setsignInBtnLoading('')
      })
      .catch(error => {
        console.log(error)
        setsignInBtnLoading('')
      })
  }

  const onSignUp = async () => {
    setsignInBtnLoading('sign_in')
    // if (isSignUpWithNumber) {
    //   onSignInWithNumber()
    //   return
    // }
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(async userCredentials => {
        const user = userCredentials;
        const userData = JSON.parse(JSON.stringify(user))?.user?.providerData?.[0]
        const docRef = doc(fireStore, `user/${user?.user?.email}`);
        const docSnap = await getDoc(docRef);
        if (!docSnap.data()) {
          saveItem(userData, 'user', user?.user?.email)
        }
        dispatch(userDetails(userData))
        navigate('/home');
        setsignInBtnLoading('')
      })
      .catch(error => {
        setsignInBtnLoading('')
        console.log(error)
      })
  }

  const signInBtnDisabled = () => {
    if (isSignUpWithNumber && (phoneNumber?.length !== 10 && otp?.length !== 6)) {
      return true
    }
    if (!isSignUpWithNumber && !(email && password)) {
      return true
    }
    return false
  }

  return (
    <div>
      <div id='recaptcha-container' />
      <Space value='24px' />
      <div css={[dFlex, justifyContentCenter, alignItemsCenter, flexDirectionCol]}>
        <div style={{ width: 400 }}>
          <div css={inputContainer}>
            {isSignUpWithNumber ? (
              <>
                {/* <TextField onChange={onInputChange} name='phoneNumber' value={userData?.phoneNumber} type='text' id="outlined-basic" label="Mobile Number" variant="outlined" inputProps={{ maxLength: 10 }} />
                <Space value='24px' />
                {isOtpSent ? (
                  <TextField onChange={onInputChange} inputProps={{ maxLength: 6 }} name='otp' value={userData?.otp} type='text' id="outlined-basic" label="OTP" variant="outlined" />
                ) : (
                  <Button
                    onClick={sendOtp}
                    css={[googleBtn, css`gap:16px`]}
                    endIcon={sendOtpLoading && <CircularProgress size={20} color="inherit" />}
                    variant="contained">
                    Send OTP
                  </Button>
                )} */}
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
          <Space value='24px' />
          <div css={[dFlex, css`justify-content:flex-end;`]}>
            {/* <Text onClick={() => setSignUpWithNumber(!isSignUpWithNumber)} bold={600} fontSize={14} color={orangeSubText}>{`Continue with ${isSignUpWithNumber ? 'email' : 'number'}`}</Text> */}
            <Button
              disabled={signInBtnDisabled()}
              onClick={signUpSelected ? onSignUp : onSignIn}
              endIcon={signInBtnLoading === 'sign_in' && <CircularProgress size={20} color="inherit" />}
              css={signInBtnDisabled() ? css`background-color: ${secondaryBtn} !important;` : btnStyle}
              variant="contained">
              {signUpSelected ? 'Sign up' : 'Sign in'}
            </Button>
          </div>
          <Divider padding='16px' padPosition='horizontal' color='#e8d9d1' />
          <Button
            onClick={googleLogin}
            startIcon={<GoogleIcon />}
            endIcon={signInBtnLoading === 'google' && <CircularProgress size={20} color="inherit" />}
            css={googleBtn}
            variant="contained">
            Continue with Google
          </Button>
          <Space value='24px' />
          <Text
            className='text-align-center'
            bold={600}
            fontSize={14}
            onClick={() => setSignUpSelected(!signUpSelected)}
            color={orangeSubText}>{signUpSelected ? "Already have an account! Sign in" : "Don't have an account? Sign up"}</Text>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
