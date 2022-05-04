import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContexProvider';

const ProductDetails = () => {
    const {getProductDetails, productDetails} = useProducts();

    const {id} = useParams();

    useEffect(() => {
      getProductDetails(id)
    }, []);

    console.log(productDetails);
    

    return (
        <Paper sx={{m: 3}} elevation={3}>
            <Grid container spacing={2}>
                <Grid item xs={6}><img src={productDetails.picture} style={{maxWidth: '100%'}}></img></Grid>
                <Grid item xs={6}>
                    <Typography variant='h3'>{productDetails.name}</Typography>
                    {/* <Typography variant='h3'>{productDetails.type}</Typography> */}
                    {/* <Typography variant='h3'>{productDetails.price}</Typography> */}
                    <Typography variant='h6'>{productDetails.description}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ProductDetails;