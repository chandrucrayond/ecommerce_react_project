import React, { useState } from 'react';
import { Grid, Stack, Button } from '@mui/material';
import RatingComponent from '../RatingComponent/index';
import { productCardStyles } from './style';
import ViewProductModal from '../ViewProductModal/index';
import BuyNowModal from '../BuyNowModal/index';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const ProductCard = ({ product }) => {
    const classes = productCardStyles();
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);     
      setIsHovered(false);
    };

    const [bnopen, setBnopen] = useState(false);

    const handleBnOpen = () => {
        setBnopen(true);
    };
  
    const handleBnClose = () => {
        setBnopen(false);     
      setIsHovered(false);
    };

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
    const isMdScreen = useMediaQuery(() => theme.breakpoints.down('md'));

    return (
        <div>
            <Grid container spacing={2}>

                <Grid item xs={4} key={product.index}>
                    <div
                        className={`${classes.fullCarde} ${isHovered ? classes.hovered : ''} `}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                       
                    >
                        <div className={`${classes.imageContainer}  ${ isMdScreen ? classes.smallScreenImageContainer : '' }`} style={{ backgroundColor: product.backgroundColor }}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className={`${isMdScreen ? classes.responsiveImage : '' } ${classes.image}`}
                            />
                        </div>
                        <ViewProductModal open={open} handleClose={handleClose} productData={product} />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Stack spacing={-1} className={classes.paraStack}>
                                    <p className="main--para__productTitle" style={{ textAlign: 'left' }}>
                                        {product.name}
                                    </p>
                                    {isHovered ? (
                                        <a
                                            variant="contained"
                                            color="primary"
                                            onClick={handleOpen}
                                            style={{ textAlign: 'left' }}
                                            className={classes.viewProductButton}
                                        >
                                            View Product
                                        </a>
                                        
                                    ) : (
                                        <p className="main--para__productFeature" style={{ textAlign: 'left' }}>
                                            {product.feature}
                                        </p>
                                    )}
                                </Stack>
                            </Grid>
                            <BuyNowModal open={bnopen} handleClose={handleBnClose} productData={product} />
                            <Grid item xs={6}>


                                {isHovered ? (
                                    <Stack spacing={-1} className={classes.paraStack} >
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={handleBnOpen}
                                            style={{ textAlign: 'right' }}
                                            className={classes.buyNowButton}
                                        >
                                            Buy Now
                                        </Button>
                                    </Stack>
                                ) : (
                                    <>
                                        <Stack spacing={-1} className={classes.paraStack}>
                                            <p className="main--para__productPrice" style={{ textAlign: 'right' }}>
                                                {product.price}
                                            </p>
                                            <p className="main--para__productRating" style={{ textAlign: 'right',display:'flex',justifyContent: 'end' }}>
                                                <RatingComponent RatingInNo={product.ratingInNo}/>
                                            </p>
                                        </Stack>
                                    </>
                                )}

                            </Grid>
                        </Grid>
                    </div>
                </Grid>

            </Grid>
        </div>
    );
};

export default ProductCard;

