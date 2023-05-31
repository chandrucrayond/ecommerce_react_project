import { makeStyles } from '@mui/styles';

export const productCardStyles = makeStyles({
  fullCarde: {
    borderRadius: '5px !important',
    width: '270px !important',
    height: '300px !important',
    margin: '0 auto !important',
    textAlign: 'center !important',
    boxSizing: 'border-box !important',
    position: 'relative !important',
    zIndex: '2 !important',
    marginBottom: '30px !important',
    cursor: 'pointer !important',
    transition: 'all 0.3s ease',
  },
  hovered: {
    transform: 'scale(1.05)',
    boxShadow: '0 0 0px rgba(0, 0, 0, 0.3)',
    // other styles
  },
  image: {
    width: '100px !important',
    height: 'auto !important',
    padding: '45px 80px !important',   
  },
  imageContainer:{
    backgroundColor: 'antiquewhite',
    borderRadius: '4px !important',
  },
  buyNowButton:{
    positon: 'relative !important',
    top: '10px !important',
    backgroundColor: '#219ebc !important',
    paddingTop: '8px !important',
    paddingBottom: '8px !important',

  },
  viewProductButton:{
    color: '#219ebc',
    backgroundColor: 'transparent !important',
    textDecoration: 'underline',
  }
});
