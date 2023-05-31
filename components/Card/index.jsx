import React from 'react';
import { Grid, Stack } from '@mui/material';
import { productCardStyles } from './style';

const ProductCard = ({ product }) => {
    const classes = productCardStyles();

    console.log('product', product);

    return (
        <div>
            <Grid container spacing={2}>

                <Grid item xs={4} key={product.index}>
                    <div className={classes.fullCarde}>
                        <div className={classes.imageContainer} style={{backgroundColor: product.backgroundColor}}>
                            <img
                                className={classes.image}
                                src={product.image}
                                alt={product.name}
                            />
                        </div>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Stack spacing={-1} className={classes.paraStack}>
                                    <p className="main--para__productTitle" style={{ textAlign: 'left' }}>
                                        {product.name}
                                    </p>
                                    <p className="main--para__productFeature" style={{ textAlign: 'left' }}>
                                        {product.feature}
                                    </p>
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack spacing={-1} className={classes.paraStack}>
                                    <p className="main--para__productPrice" style={{ textAlign: 'right' }}>
                                        {product.price}
                                    </p>
                                    <p className="main--para__productRating" style={{ textAlign: 'right' }}>
                                        {product.rating}
                                    </p>
                                </Stack>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>

            </Grid>
        </div>
    );
};

export default ProductCard;