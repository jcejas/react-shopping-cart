import React, { useContext } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CartContext } from "../../contexts/CartContext.js";

//import ProductImageTest from '../../images/product_test.jpeg' //If the images are in the /src folder
import {products} from '../../dataBase.js'

const Products = () => {

  let {addProduct} = useContext(CartContext);

  let addProductClick = (product) => {
    addProduct(product);
  }

  return (
    <Grid container spacing={4}>
        {products.map((value, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className="product-card">
              <CardMedia
                component='img'
                image={value.image}
                alt={value.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant='h5' component='h2' textAlign={'center'}>
                  <b>{value.name}</b>
                </Typography>
                <Typography>
                  Precio: $ {value.price}
                </Typography>
                <Typography>
                  Cantidad Disponible: {value.amount}
                </Typography>
              </CardContent>
              <CardActions 
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <button className="button-add-item" onClick={()=> addProductClick(value)}>
                  <span>Añadir a Carrito</span>
                </button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
  );
}

export {Products}