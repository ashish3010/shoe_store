/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSingleData } from '../../utils/firebaseFunctions';
import { useNavigate } from 'react-router-dom/dist';
import { optionItems, userDetailsStyle, wrapper } from './style';
import Text from '../common/text';
import { alignItemsCenter, dFlex, flexDirectionCol } from '../../styles/flexbox';
import Space from '../common/space';
import { black, orangeSubText } from '../../styles/colors';
import { Button, CircularProgress } from '@mui/material';
import { secondaryButton } from '../../styles/common';
import Divider from '../common/divider';
import { options } from './utils';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import UpdateAccountDetailsModal from './update-account-details';

const UserDetails = () => {
  const [userDataFromDB, setUserDataFromDB] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const userData = useSelector(state => state.userReducer)
  const { displayName, email, phoneNumber, photoURL } = userDataFromDB || {}
  const navigate = useNavigate()

  useEffect(() => {
    if (userData) {
      setIsLoading(true)
      getSingleData('user', userData?.email || userData?.phoneNumber, setUserDataFromDB)
      setIsLoading(false)
    } else {
      navigate('/home')
    }
  }, [])

  if (!userData) {
    return null
  }

  const onOptionsClick = (value) => {
    navigate(`/${value}`)
  }

  if (isLoading) {
    return <CircularProgress />
  }


  return (
    <div css={wrapper}>
      <div style={{ width: '70%' }}>
        <div css={userDetailsStyle}>
          <div css={[dFlex, alignItemsCenter, css`gap:16px;`]}>
            <img alt='avatar' src={photoURL || "/assets/avatar.png"} />
            <div css={[dFlex, flexDirectionCol]}>
              <Text
                fontSize={22}
                bold={600}
                color={black}
              >
                {displayName || email || phoneNumber}
              </Text>
              {((displayName && email) || (phoneNumber && email)) && (
                <>
                  <Space value='12px' />
                  <Text fontSize={16} color={orangeSubText}>{email}</Text>
                </>
              )}
            </div>
          </div>
          <div>
            <Button onClick={() => setOpenModal(true)} variant="contained" css={secondaryButton}>Edit details</Button>
          </div>
        </div>
        <Divider color={orangeSubText} padPosition='horizontal' padding='24px' />
        {options.map(({ label, value, icon }, index, { length }) => (
          <div style={{ display: 'block' }}>
            <Button onClick={() => onOptionsClick(value)} size='large' css={optionItems} startIcon={icon} endIcon={<ChevronRightIcon />}>{label}</Button>
            {index !== length - 1 && <Space value='8px' />}
          </div>
        ))}
      </div>
      <UpdateAccountDetailsModal openModal={openModal} setOpenModal={setOpenModal} userDetails={userDataFromDB} />
    </div>
  )
}

export default UserDetails
