import { ThemeProvider, makeStyles } from "@mui/styles";


export const viewProductModalStyle = makeStyles((theme) => ({

  modal: {
    paddingBottom: '5px !important',
    overflowY: 'hidden',

    "& .css-1h478x1-MuiGrid-root": {
      display: "flex",
    },

    "& .css-nqk07s-MuiGrid-root::-webkit-scrollbar": {
      width: '7px',
    },

    "& .css-nqk07s-MuiGrid-root::-webkit-scrollbar-track": {
      boxShadow: 'inset 0px 0px 20px #b3c1c8',
      height: '10px',
    },

    "& .css-nqk07s-MuiGrid-root::-webkit-scrollbar-thumb": {
      backgroundColor: '#219ebc',
    },

    "& .css-x8sx2p-MuiGrid-root": {
      paddingRight: 0,
    },

    "& .css-1osj8n2-MuiGrid-root": {
      paddingRight: "10px",
    },

    "& .css-nqk07s-MuiGrid-root": {
      paddingLeft: "10px",
    },

    "& .css-mhc70k-MuiGrid-root>.MuiGrid-item": {
      paddingLeft: "25px",
    },

    "& .css-mhc70k-MuiGrid-root>.MuiGrid-item": {
      alignItems: 'end',
    },
    "& .css-e784if-MuiTypography-root": {
      display: 'flex',
    },
  },
  outlineViewProductModal: {
    borderRadius: '5px !important',
    outline: 'none !important',
    // maxWidth: '120vw',
    height: '90vh',
    overflowY: 'hidden',
    alignContent: 'center',
    justifyContent: 'center',
   
    // position: 'fixed',
    '&:focus-visible': {
      border: 'none !important',
      outline: 'none !important',
    },
    '&:visited': {
      border: 'none !important',
      outline: 'none !important',
    },
    '&:focus': {
      border: 'none !important',
      outline: 'none !important',
    },
    '&:active': {
      border: 'none !important',
      outline: 'none !important',
    },
    '&:target': {
      border: 'none !important',
      outline: 'none !important',
    },
  },
  carousel: {
    width: ' 100px !important',
    height: '150px !important',
  },


  carouselSection: {
    paddingBottom: '100px !important',
    width: '120px !important',
    height: '150px !important',
  },

  carouselImage: {
    maxWidth: '125px !important',
    maxHeight: '150px !important',
    position: 'relative !important',
    right: '60px !important',

  },

  closeButtonSection: {
    display: 'flex',
    justifyContent: 'end',
  },
  color: {
    alignItems: 'center !important',

  },
  display: {
    alignItems: 'baseline',
    justifyContent: 'right',
  },
  dimension: {
    alignItems: 'baseline',
    justifyContent: 'start !important',
  },
  battery: {
    alignItems: 'baseline !important',
    justifyContent: 'right !important',
  },
  memory: {
    alignItems: 'baseline !important',
    justifyContent: 'right !important',
  },
  storage: {
    alignItems: 'baseline !important',
    justifyContent: 'right !important',
  },
  scrollableSections: {
    paddingTop: '30px',
    overflowY: 'auto',
    overflowX: 'hidden',
  },

  unScrollableSections: {
    borderBottom: '1px solid #e6e2e2',
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
    paddingBottom: '10px !important',
  },

  unScrollableSections2: {
    paddingTop: '10px !important',
    borderTop: '1px solid #e6e2e2',
    minHeight: '30px',
    maxHeight: '100px',
  },

  paraInModal: {
    display: 'inline !important',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '15px',
    letterSpacing: '0px',
    color: '#4e6e7e',
  },

  paraHeadingInModal: {
    marginTop: '20px !important',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: '0px',
    color: '#023047',
  },
  priceInNumber: {
    marginTop: '0px !important',
    marginBottom: '5px !important',
    fontWeight: '500 !important',
    fontSize: '16px !important',
    lineHeight: '22px !important',
    fontFamily: 'Montserrat !important',
    color: '#023047 !important',
  },

  buyNowButtonSection: {
    display: 'flex',
    justifyContent: 'end',
    paddingBottom: '7px',
  },
  buyNowButton: {
    textAlign: 'center !important',
    whiteSpace: 'nowrap',
    textTransform: 'capitalize !important',
    height: '35px',
    alignItems: 'center !important',
    fontWeight: '600 !important',
    fontSize: '12px !important',
    fontFamily: 'Montserrat !important',
    backgroundColor: '#219ebc !important',
    color: '#ffffff !important',
    borderRadius: '4px !important'
  },
  paraHeading: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '0px',
    color: '#023047',
    paddingLeft: '10px',
  },
  colorFlex: {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  priceAndRating:{
    paddingLeft: '25px !important',
  }



}));