import { useRouteError,Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme } from '@mui/system';
import {ErrorOutline} from '@mui/icons-material';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box id="error-page" sx={{ height: '100%',
      // display: 'flex',
      // flexDirection: 'column',
      // alignItems: 'center',
      position : 'relative',
      top : '20vh',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <h1>Oops!</h1>
      <h2>You have visited an unauthorized page  of Google Inc.</h2>
      
      <ErrorOutline sx={{fontSize:"80px", color:"red"}}/> 

      {/* <Icon>error_outline</Icon> */}
      <h2>Please visit homepage</h2>
      {/* <h3>
        <i>{error.statusText || error.message}</i>
      </h3> */}
    </Box>
  );
}