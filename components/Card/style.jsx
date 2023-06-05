import { makeStyles } from '@mui/styles';

export const productCardStyles = makeStyles({
  fullCarde: {
    borderRadius: '5px !important',
    minWidth: '270px',
    width: '90%',
    height: '300px ',
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
  },
  image: {
    width: '100px !important',
    height: '120px !important',
    padding: '45px 80px !important',
  },
  imageContainer: {
    backgroundColor: 'antiquewhite',
    borderRadius: '4px !important',
  },
  buyNowButton: {
    positon: 'relative !important',
    top: '15px !important',
    // paddingTop: '8px !important',
    // paddingBottom: '8px !important',
    justifyContent: 'center !important',
    textAlign: 'center !important',
    whiteSpace: 'nowrap',
    width: '70%',
    // height: '40px !important',
    alignSelf: 'end',
    textTransform: 'none !important',
    backgroundColor: '#219ebc !important',
    color: '#ffffff !important',
    borderRadius: '4px !important',
    fontFamily: 'Montserrat !important',
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    fontSize: '13px !important',
    lineHeight: '18px !important',
    letterSpacing: '0px !important',
    paddingTop: '10px !important',
    paddingBottom: '10px !important',
    boxShadow: 'none !important',
  },
  viewProductButton: {
    color: '#219ebc !important',
    backgroundColor: 'transparent !important',
    textDecoration: 'underline !important',
    fontFamily: 'Montserrat !important',
    fontStyle: 'normal !important',
    fontWeight: '500 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    color: '#219ebc !important',
  },
  productTitle: {
    fontFamily: 'Montserrat !important',
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    fontSize: '16px !important',
    lineHeight: '22px !important',
    color: '#023047 !important',
    marginBottom: '20px !important'
  },

  productPrice: {
    fontFamily: 'Montserrat !important',
    fontStyle: 'normal !important',
    fontWeight: '500 !important',
    fontSize: '16px !important',
    lineHeight: '22px !important',
    color: '#023047 !important',
    marginBottom: '20px !important'
  },
  productFeature: {
    fontFamily: 'Montserrat !important',
    fontStyle: 'normal !important',
    fontWeight: 'normal !important',
    fontSize: '11px !important',
    lineHeight: '15px !important',
    letterSpacing: '0px !important',
    color: '#b3c1c8 !important'
  },


});
