import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Header} from '../components/Header/Header.js'
import {Footer} from '../components/Footer/Footer.js'
import {Products} from '../components/Products/Products.js'
import { CartProvider } from '../contexts/CartContext.js';

const IndexPage = () => {
  return (
    <React.Fragment>
      <CartProvider>
        <Header/>
        {/* Hero unit */}
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            fontFamily = 'sans-serif'
          >
            PRODUCTOS
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" component="p">
            Productos de prueba. Challenge Grow de React.
          </Typography>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md">
          <Products/>
        </Container>
        {/* Footer */}
        <Footer/>
        {/* End footer */}
      </CartProvider>
    </React.Fragment>
  );
}

export {IndexPage};