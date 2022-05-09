import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ProductList from '../components/product/ProductList';
import Sidebar from '../components/product/Sidebar';

const ProductsPage = () => {
  return <Box>
      <Grid container spacing={3}>
          <ProductList/>
          <Sidebar />
      </Grid>
    </Box>
};

export default ProductsPage;
