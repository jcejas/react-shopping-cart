import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Header} from '../components/Header/Header.js'
import {Footer} from '../components/Footer/Footer.js'
import { CartContext } from '../contexts/CartContext.js';
import {products} from '../dataBase.js'

const ProductDetailsPage = () => {
  let { id } = useParams();
  
  let {addProduct, cart} = useContext(CartContext);

  let addProductClick = (product) => {
    addProduct(product);
  }

  let checkAmmount = (id, amount) => {
    if (!cart[id])
      return amount;
    
    return amount - cart[id].quantity;
  }

  let product = {}
  for (let i in products) {
    if (products[i].id === parseInt(id)) {
      product = products[i];
      break;
    }
  }

  return (
    <React.Fragment>
      <Header/>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          fontFamily = 'sans-serif'
        >
          {product.name}
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth='lg'>
        <Card className='product-selected-card'>
          <CardMedia
            component='img'
            image={product.image}
            alt={product.name}
            className='product-selected-card-image'
          />
          <CardContent sx={{flexDirection : 'column'}}>
            <Typography gutterBottom variant='h5' component='h2' textAlign={'center'}>
              <b>Descripci&oacute;n</b>
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue neque, dapibus non hendrerit quis, suscipit nec ligula. Mauris consectetur felis sem, eu iaculis quam congue ultrices. Integer et libero sit amet nulla posuere ullamcorper et quis tortor. Ut ornare non ipsum id rutrum. Praesent eu iaculis augue. Quisque accumsan elit non justo cursus, in luctus neque tempus. Ut euismod euismod tristique. Phasellus in sapien laoreet, posuere augue sed, porta est. Suspendisse sagittis id est in tristique. In facilisis enim quis nunc ornare, eu mollis ipsum luctus. Fusce porta venenatis tincidunt. Pellentesque sed interdum justo. Nunc tincidunt sapien ut purus gravida, quis fermentum eros vestibulum. Maecenas eget est accumsan, vehicula risus nec, accumsan leo.
            </Typography>

            <Typography variant="h5" sx={{mt: 5, mb: 5}}>
              Precio: $ {product.price}
              <br/>
              Cantidad Disponible: {checkAmmount(product.id, product.amount)}
            </Typography>
            <div className="product-selected-card-button">
              {
                checkAmmount(product.id, product.amount) === 0 ?
                  (<div className="without-stock">Sin Stock</div>) :
                  (
                    <button className="button-add-item" onClick={()=> addProductClick(product)}>
                      <span>Añadir a Carrito</span>
                    </button>
                  )
              }
            </div>
          </CardContent>
        </Card>
      </Container>
      {/* Footer */}
      <Footer/>
      {/* End footer */}
    </React.Fragment>
  );
}

export {ProductDetailsPage};