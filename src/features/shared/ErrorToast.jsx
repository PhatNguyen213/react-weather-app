import { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const ErrorToast = ({ error }) => (
  <Snackbar open={!!error} autoHideDuration={6000}>
    <Alert severity="error" color="error" sx={{ width: '100%' }}>
      {error}
    </Alert>
  </Snackbar>
);

export default ErrorToast;
