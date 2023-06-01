import React, { useState } from 'react';
import { Grid, Stack, Button } from '@mui/material';
import { productCardStyles } from './style';
import ViewProductModal from '../ViewProductModal/index';

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

    return (
        <div>
            <Grid container spacing={2}>

                <Grid item xs={4} key={product.index}>
                    <div
                        className={`${classes.fullCarde} ${isHovered ? classes.hovered : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className={classes.imageContainer} style={{ backgroundColor: product.backgroundColor }}>
                            <img
                                className={classes.image}
                                src={product.image}
                                alt={product.name}
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
                            <Grid item xs={6}>


                                {isHovered ? (
                                    <Stack spacing={-1} className={classes.paraStack} >
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => console.log('Buy Now')}
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
                                            <p className="main--para__productRating" style={{ textAlign: 'right' }}>
                                                {product.rating}
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


// import React from 'react';
// import { Grid, Stack } from '@mui/material';
// import { productCardStyles } from './style';

// const ProductCard = ({ product }) => {
//     const classes = productCardStyles();

//     console.log('product', product);

//     return (
//         <div>
//             <Grid container spacing={2}>

//                 <Grid item xs={4} key={product.index}>
//                     <div className={classes.fullCarde}>
//                         <div className={classes.imageContainer} style={{backgroundColor: product.backgroundColor}}>
//                             <img
//                                 className={classes.image}
//                                 src={product.image}
//                                 alt={product.name}
//                             />
//                         </div>
//                         <Grid container spacing={2}>
//                             <Grid item xs={6}>
//                                 <Stack spacing={-1} className={classes.paraStack}>
//                                     <p className="main--para__productTitle" style={{ textAlign: 'left' }}>
//                                         {product.name}
//                                     </p>
//                                     <p className="main--para__productFeature" style={{ textAlign: 'left' }}>
//                                         {product.feature}
//                                     </p>
//                                 </Stack>
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <Stack spacing={-1} className={classes.paraStack}>
//                                     <p className="main--para__productPrice" style={{ textAlign: 'right' }}>
//                                         {product.price}
//                                     </p>
//                                     <p className="main--para__productRating" style={{ textAlign: 'right' }}>
//                                         {product.rating}
//                                     </p>
//                                 </Stack>
//                             </Grid>
//                         </Grid>
//                     </div>
//                 </Grid>

//             </Grid>
//         </div>
//     );
// };

// export default ProductCard;