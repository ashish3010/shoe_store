/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from '@emotion/react';
import { Box, Button, CircularProgress, Fade, Modal, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { modalStyle } from './style';
import Space from '../../common/space';
import { alignItemsCenter, dFlex } from '../../../styles/flexbox';
import Text from '../../common/text';
import { primaryButton, secondaryButton, w100 } from '../../../styles/common';
import { saveItem } from '../../../utils/firebaseFunctions';

const UpdateAccountDetailsModal = ({ openModal = false, setOpenModal, userDetails }) => {
  const [updatedUserDetails, setUpdatedUserDetails] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { displayName, email, phoneNumber } = updatedUserDetails || {}

  useEffect(() => {
    setUpdatedUserDetails(userDetails)
  }, [openModal])

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserDetails(prev => ({ ...prev, [name]: value }))
  }

  console.log(userDetails, 'db')
  console.log(updatedUserDetails, 'local')

  const buttonDisabled = JSON.stringify(userDetails) === JSON.stringify(updatedUserDetails)

  const handleClose = () => {
    setOpenModal(false)
    setUpdatedUserDetails(null)
  }

  const onUpdateClick = async () => {
    setIsLoading(true)
    try {
      await saveItem(updatedUserDetails, 'user', email || phoneNumber)
      setIsLoading(false)
      setOpenModal(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }


  return (
    <Modal
      open={openModal}
      onClose={handleClose}
    >
      <Fade in={openModal}>
        <Box css={modalStyle}>
          <div css={[dFlex, alignItemsCenter, css`gap:16px`]}>
            <Text>Update Picture: </Text>
            <input className='imageInput' type='file' />
          </div>
          <Space value='16px' />
          <div className='grid'>
            <TextField onChange={onInputChange} name='email' disabled={userDetails?.email} value={email} label="Email" variant="standard" />
            <TextField
              onChange={onInputChange}
              name='phoneNumber' disabled={userDetails?.phoneNumber}
              inputProps={{ maxLength: 10 }}
              value={phoneNumber} label="Mobile Number" variant="standard" />
            <TextField onChange={onInputChange} name='displayName' value={displayName} label="Name" variant="standard" />
          </div>
          <div css={[w100, dFlex, css`justify-content:flex-end`]}>
            <Button
              onClick={onUpdateClick}
              endIcon={isLoading && <CircularProgress size={20} color="inherit" />}
              disabled={buttonDisabled}
              css={buttonDisabled ? secondaryButton : primaryButton}
            >Update details</Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}

export default UpdateAccountDetailsModal
