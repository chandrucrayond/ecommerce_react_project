import { ThemeProvider, makeStyles } from "@mui/styles";


export const viewProductModalStyle = makeStyles((theme) => ({

  modal: {
    paddingBottom: '5px !important',

  },
  outlineViewProductModal: {
    borderRadius: '5px !important',
    outline: 'none !important',
    // maxWidth: '120vw',
    height: '90vh',
    overflow: 'hidden',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'fixed',
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
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: 'auto',
    justifyContent: 'center',
    // right: '50px',
    width: ' 100% !important',
    height: '150px !important',
    paddingBottom: '20px',

  },


  carouselSection: {
    // display: 'flex !important',
    // display: 'flex !important',
    // justifyContent: 'center !important',
    width: '120px !important',
    height: '150px !important',
  },

  carouselImage: {
    // display: 'flex !important',
    // justifyContent: 'center !important',
    width: '125px !important',
    height: '150px !important',
    position: 'relative !important',
    right: '60px !important',

  },

  closeButtonSection: {
    display: 'flex',
    justifyContent: 'end',
  },
  color: {
    alignItems: 'baseline',
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
    // minHeight: '150px',
    // maxHeight: '200px',
  },
  unScrollableSections: {
    borderBottom: '1px solid #e6e2e2',

  },

  unScrollableSections2: {
    paddingTop: '10px !important',
    paddingBottom: '20px !important',
    borderTop: '1px solid #e6e2e2',
    minHeight: '30px',
    maxHeight: '100px',
  },

  paraInModal: {
    display: 'inline !important',
  },

  paraHeadingInModal: {
    // display: 'inline !important',
    marginTop: '20px !important',
  },
  priceInNumber: {
    marginTop: '0px !important',
  },

  buyNowButtonSection: {
    display: 'flex',
    justifyContent: 'end',
  },
  buyNowButton: {
    backgroundColor: '#219ebc !important',
    paddingTop: '8px !important',
    paddingBottom: '8px !important',
    textAlign: 'center !important',
    whiteSpace: 'nowrap',
    // width: '50px !important',
    // height: '40px !important',
    color: '#FFFFFF !important',
    width: '97px',
    height: '42px',
    alignItems: 'center',
  },

}));