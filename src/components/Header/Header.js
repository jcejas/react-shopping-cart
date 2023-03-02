import React from "react";
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartComponent } from "./Cart/Cart";

const Header = () => {
  const [display, setDisplay] = React.useState(false);
  const toggleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }} className="custom-header">
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Grow React
          </Typography>
          <nav>
            <Link
              variant="button"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Inicio
            </Link>
            <Link
              variant="button"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Productos
            </Link>
            <Link
              variant="button"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Categorias
            </Link>
          </nav>
          <IconButton onClick={toggleDisplay} color="success" aria-label="Carrito de compras">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <CartComponent display={display}/>
    </>
  );
}

export {Header}