import { Alert, Snackbar } from '@mui/material'
import React, { useEffect, useState } from 'react'

const useSnackbar = () => {
  const snackbar = ({ open = true, title, type = 'error' }) => {
    return (
      <Snackbar open={open} autoHideDuration={3000}>
        <Alert
          // onClose={() => setOpenSnackbar(false)}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    )
  }

  return { snackbar }
}

export default useSnackbar
