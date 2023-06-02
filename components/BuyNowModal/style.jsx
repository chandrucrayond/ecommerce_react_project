import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
export const buyNowStyle = makeStyles({

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        outline: 'none',
        position: 'relative',
        maxWidth: '800px',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2),
    },
    modalTitle: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
    },
    
});