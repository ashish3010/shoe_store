/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react';
import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';

const CustomSnackbar = ({ open, type = 'error', title }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false)

  useEffect(() => {
    setOpenSnackbar(true)
  }, [open])

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
      <Alert
        onClose={() => setOpenSnackbar(false)}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        This is a success Alert inside a Snackbar!
      </Alert>
    </Snackbar>
  )
}

export default CustomSnackbar
