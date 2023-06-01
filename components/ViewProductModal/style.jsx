import { ThemeProvider, makeStyles } from "@mui/styles";


export const viewProductModalStyle = makeStyles((theme) => ({

  modal: {
    paddingBottom: '5px !important',
    
  },
  outlineViewProductModal: {
    borderRadius: '5px !important',
    outline: 'none !important',   
    maxWidth: '120vw',
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
  vpmodalTitle: {
    display: 'inline',
  },
  carouselImage: {
    width: '100px',
    height: '120px',
    display: 'block',
    margin: 'auto',
    paddingBottom: '20px',
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
    // maxWidth: '150vw',
    // maxHeight: '50vh',
    minHeight: '200px',
    maxHeight: '250px',
  },
  unScrollableSections: {
 
  },

  unScrollableSections2: {
    paddingTop: '10px !important',
    paddingBottom: '10px !important',
  },
}));