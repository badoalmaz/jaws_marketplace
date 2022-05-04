import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useProducts } from '../../contexts/ProductContexProvider';
import { Navigate, useNavigate, useParams } from 'react-router-dom';


const EditProduct = () => {
    const {getProductDetails, productDetails, saveEditedProduct} = useProducts();

    const navigate = useNavigate()

    const {id} = useParams();

    const [product, setProduct] = useState({
        name:'',
        description: '',
        price: 0,
        picture: '',
        type: '',
    })

    useEffect(() => {
        setProduct(productDetails)
      
      }, [productDetails])

    useEffect(() => {
      getProductDetails(id)
    
    }, [])
    

    const handleInp = (e) => {
        let obj = {
            ...product,
            [e.target.name]: e.target.value
        }
        setProduct(obj)
    }



    return (
        <Box sx={{ width: '60vw', margin: '10vh auto' }}>
      <TextField
        sx = {{my: 1}}
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name='name'
        value={product.name || ''}
        onChange={handleInp}
      />
      <TextField
        sx = {{my: 1}}
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
        name='description'
        value={product.description || ''}
        onChange={handleInp}
      />
      <TextField
        sx = {{my: 1}}
        fullWidth
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name='price'
        value={product.price || ''}
        onChange={handleInp}
      />
      <TextField
        sx = {{my: 1}}
        fullWidth
        id="outlined-basic"
        label="Picture"
        variant="outlined"
        name='picture'
        value={product.picture || ''}
        onChange={handleInp}
      />
      <TextField
        sx = {{my: 1}}
        fullWidth
        id="outlined-basic"
        label="Type"
        variant="outlined"
        name='type'
        value={product.type || ''}
        onChange={handleInp}
      />
      <Button onClick={()=> {
          saveEditedProduct(product)
        navigate(-1)
    }} variant="outlined" fullWidth size="large">
        SAVE PRODUCT
      </Button>
    </Box>
    );
};

export default EditProduct;