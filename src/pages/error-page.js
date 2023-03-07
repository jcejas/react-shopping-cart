import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Header} from '../components/Header/Header.js'
import {Footer} from '../components/Footer/Footer.js'

const ErrorPage = () => {
  return (
    <React.Fragment>
      <Header/>
      <Container maxWidth="sm" component="main" sx={{ pt: 25, pb: 15 }}>
        <Typography
          component="h1"
          variant="h1"
          align="center"
          color="text.primary"
          fontFamily = 'sans-serif'
        >
          P&aacute;gina no encontrada
        </Typography>
      </Container>
      {/* Footer */}
      <Footer/>
      {/* End footer */}
    </React.Fragment>
  );
}

export {ErrorPage};