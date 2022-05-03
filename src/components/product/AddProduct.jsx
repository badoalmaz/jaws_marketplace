import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useProducts } from '../../contexts/ProductContexProvider';

const AddProduct = () => {
  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    picture: '',
    type: '',
  });

  const handleInp = (e) => {
    if (e.target.name === 'price') {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  console.log(product);

  return (
    <Box sx={{ width: '60vw', margin: '10vh auto' }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        onChange={handleInp}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
        name="description"
        onChange={handleInp}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name="price"
        onChange={handleInp}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Picture"
        variant="outlined"
        name="picture"
        onChange={handleInp}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Type"
        variant="outlined"
        name="type"
        onChange={handleInp}
      />
      <Button
        variant="outlined"
        fullWidth
        size="large"
        onClick={() => addProduct(product)}
      >
        CREATE PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
