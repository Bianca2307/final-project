import React from 'react';
import {Grid} from "@mui/material";

import Product from './Product/Product.js'



const Products = ({products}) => {

   return(
    <main> 
    <Grid container justifyContent={'center'}  spacing ={4} marginTop="50px">
       {products.map((product) => (
         <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
           <Product product={product}/>
         </Grid>
       ))}
    </Grid>
  </main>
   );
}

export default Products;