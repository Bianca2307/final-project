import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@mui/material';
import {AddShoppingCart} from '@mui/icons-material';
 


const Product = ({product}) => {
  
  return(
    <Card  style={{ maxWidth:'100%'}}>
       <CardMedia style ={ {height:0, paddingTop:"56.25%"}} image={product.image.url} title={product.name} />
       <CardContent>
         <div style={{display:'flex', justifyContent:'space-between'}}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" >
            {product.price.formatted_with_code}
          </Typography>
         </div>
         <Typography variant="body2" color="textSecondary">
           {product.description}

         </Typography>
       </CardContent>
       <CardActions disableSpacing style={{display: 'flex',justifyContent: 'flex-end'}}>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
       </CardActions>



    </Card>
  )
}

export default Product;