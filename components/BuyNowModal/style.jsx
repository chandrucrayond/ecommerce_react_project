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
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
  },
  modalContent: {
    outline: 'none',
    position: 'relative',
    width: '90vw',
    maxWidth: '800px',
    // maxHeight: '50vh',

    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    fontStyle: 'normal !important',
    fontWeight: '500 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    color: '#b3c1c8 !important',


    overflow: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: 'rgba(100, 0, 0, 0.5) rgba(100, 0, 0, 0.1)',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#219ebc',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(0, 0, 0, 0.1) !important',
      height: '100px !important',
      maxHeight: '10px !important',
    },
  },
  modalTitle: {
    marginBottom: theme.spacing(2),
    fontStyle: 'normal !important',
    fontWeight: '700 !important',
    fontSize: '18px !important',
    lineHeight: '24px !important',
    fontFamily: 'Montserrat !important',
    letterSpacing: '0px !important',
    color: '#023047 !important',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  productHeading: {
    fontStyle: 'normal !important',
    fontWeight: '700 !important',
    fontSize: '13px !important',
    lineHeight: '19px !important',
    fontFamily: 'Montserrat !important',
    letterSpacing: '0px !important',
    color: '#023047 !important',
  },
  productSerialNo: {
    fontStyle: 'normal !important',
    fontWeight: '400 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    letterSpacing: '0px !important',
    color: '#b3c1c8 !important',
  },
  productSpeciality: {
    fontStyle: 'normal !important',
    fontWeight: '500 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    letterSpacing: '0px !important',
    color: '#b3c1c8 !important',
  },
  productPriceInHeadingSection: {
    fontStyle: 'normal !important',
    fontWeight: '700 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    letterSpacing: '0px !important',
    color: '#023047 !important',
  },
  addAddress: {
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    fontSize: '12p !importantx',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    letterSpacing: '0px !important',
    color: '#b3c1c8 !important',
  },
  saveAddress: {
    fontStyle: 'normal !important',
    fontWeight: 'bold !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    letterSpacing: '0px !important',
    color: '#219ebc !important',
  },
  formHeading: {
    fontStyle: 'normal !important',
    fontWeight: '400 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    letterSpacing: '0px !important',
    color: '#4e6e7e !important',
  },
  formInputs: {
    marginTop: '10px !important',
    background: '#ffffff',
    backgroundPosition: '0% 0%',
    backgroundRepeat: 'no-repeat !important',
    backgroundSize: 'padding-box !important',
    border: '1px solid #e9ecef !important',
    borderRadius: '4px !important',
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    letterSpacing: '0px !important',
    color: '#023047 !important',
  },
  formInputsSection: {
    paddingLeft: '30px !important',
    paddingRight: '30px !important',
  },
  formInputsName: {
    width: '90% !important',
    outline: 'none !important',
    cursor: 'pointer !important',

    padding: '0',
    marginTop: '10px !important',
    // backgroundPosition: '0% 0%',
    // backgroundRepeat: 'no-repeat !important',
    // backgroundSize: 'padding-box !important',
    borderRadius: '4px !important',
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    letterSpacing: '0px !important',
    color: '#023047 !important',
    '&:hover': {
      backgroundColor: '#219ebc1a !important',
      cursor: 'pointer !important',
      borderWidth: '0.5px !important',
    },
    '&:hover fieldset': {
      borderColor: '#219ebc !important',
      borderWidth: '0.5px !important',
    },
    '& input:focus + fieldset': {
      borderColor: '#219ebc !important',
      borderWidth: '0.5px !important',
      boxShadow: 'none !important',
      backgroundColor: '#219ebc1a !important',
    },
    '& input:focus': {
      caretColor: '#219ebc !important',
    },
  },
  formInputsMobile: {
    outline: 'none !important',
    cursor: 'pointer !important',
    padding: '0',
    marginTop: '10px !important',
    borderRadius: '4px !important',
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    letterSpacing: '0px !important',
    color: '#023047 !important',
    '&:hover': {
      backgroundColor: '#219ebc1a !important',
      cursor: 'pointer !important',
      borderWidth: '0.5px !important',
    },
    '&:hover fieldset': {
      borderColor: '#219ebc !important',
      borderWidth: '0.5px !important',
    },
    '& input:focus + fieldset': {
      borderColor: '#219ebc !important',
      borderWidth: '0.5px !important',
      boxShadow: 'none !important',
      backgroundColor: '#219ebc1a !important',
    },
    '& input:focus': {
      caretColor: '#219ebc !important',

    },
  },
  formSelectCountry: {
    fontStyle: 'normal !important',
    fontWeight: '500 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    letterSpacing: '0px !important',
    color: '#4e6e7e !important',
  },
  formSelectCity: {
    fontStyle: 'normal !important',
    fontWeight: '500 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    letterSpacing: '0px !important',
    outline: 'none !important',
    cursor: 'pointer !important',
    padding: '0',
    marginTop: '10px !important',
    borderRadius: '4px !important',
    color: '#023047 !important',
    '&:hover': {
      backgroundColor: '#219ebc1a !important',
      cursor: 'pointer !important',
      borderWidth: '0.5px !important',
    },
    '&:hover fieldset': {
      borderColor: '#219ebc !important',
      borderWidth: '0.5px !important',
    },
    '& input:focus + fieldset': {
      borderColor: '#219ebc !important',
      borderWidth: '0.5px !important',
      boxShadow: 'none !important',
      backgroundColor: '#219ebc1a !important',
    },
    '& input:focus-within + fieldset': {
      borderColor: '#219ebc !important',
      borderWidth: '0.5px !important',
      boxShadow: 'none !important',
      backgroundColor: '#219ebc1a !important',
    },
    '& input:active + fieldset': {
      borderColor: '#219ebc !important',
      borderWidth: '0.5px !important',
      boxShadow: 'none !important',
      backgroundColor: '#219ebc1a !important',
    },
    '& input:target + fieldset': {
      borderColor: '#219ebc !important',
      borderWidth: '0.5px !important',
      boxShadow: 'none !important',
      backgroundColor: '#219ebc1a !important',
    },
    '& input:focus-visible + fieldset': {
      borderColor: '#219ebc !important',
      borderWidth: '0.5px !important',
      boxShadow: 'none !important',
      backgroundColor: '#219ebc1a !important',
    },
    '& .selected + fieldset': {
      borderColor: '#219ebc !important',
      borderWidth: '0.5px !important',
      boxShadow: 'none !important',
      backgroundColor: '#219ebc1a !important',
    },

  },

  summaryHeading: {
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    textTransform: 'uppercase !important',
    color: '#b3c1c8 !important',
  },
  summarySubHeading: {
    fontStyle: 'normal !important',
    fontWeight: '500 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    color: '#b3c1c8 !important',
  },
  summarySubPara: {
    fontStyle: 'normal !important',
    fontWeight: '500 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    color: ' #023047 !important',
  },
  summaryTotalHeading: {
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    color: '#023047 !important',
  },
  summaryTotalPara: {
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    color: '#023047 !important',
  },
  summaryPayAmount: {
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    fontSize: '14px !important',
    lineHeight: '18px !important',
    fontFamily: 'Montserrat !important',
    color: '#ffffff !important',
    background: '#219ebc !important',
    backgroundPosition: '0% 0% !important',
    backgroundRepeat: 'no-repeat !important',
    backgroundSize: 'padding-box !important',
    borderRadius: '4px !important',
    paddingTop: '8px !important',
    paddingBottom: '8px !important',
    boxShadow: 'none !important',
  },
  editButton: {
    fontFamily: 'Montserrat !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontWeight: 'bold !important',
    letterSpacing: '0px !important',
    color: '#FB8500 !important',
  },
  list: {
    "& li": {
    },
    "& li:hover": {
      background: 'deepPurple[100] !important'
    },
    "& li.Mui-selected": {
      backgroundColor: '#219ebc1a !important'
    },
    "& li.Mui-selected:hover": {
      background: 'deepPurple[500] !important'
    }
  },
  select: {

    "&:focus": {
      border: 'none !important',
    },
    "&:active": {
      border: 'none !important',
    },
    "&:target": {
      border: 'none !important',
    },
    "&:focus-visible": {
      border: 'none !important',
    },
  },


});