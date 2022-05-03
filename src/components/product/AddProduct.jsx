import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const AddProduct = () => {
  return (
    <Box sx={{ width: '60vw', margin: '10vh auto' }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Price"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Picture"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Type"
        variant="outlined"
      />
      <Button variant="outlined" fullWidth size="large">
        CREATE PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
