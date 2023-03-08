import React, { useContext } from "react";
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import ItemCart from './ItemCart/ItemCart'
import { CartContext } from "../../../contexts/CartContext";
import { Box, Button } from "@mui/material";
import Typography from '@mui/material/Typography';

const drawerWidth = 315;

export const CartComponent = () => {
  const {cart, cartTotal, clearCart, displayCart, setDisplayCart} = useContext(CartContext);

  /*
  useEffect(() => {
  }, [cartTotal]);
  */

  const toggleDisplay = () => {
    setDisplayCart(!displayCart);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      anchor="right"
      open={displayCart}
    >
      <Box>
        <IconButton onClick={toggleDisplay}>
          <ChevronRightIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box sx={{overflow: "auto"}}>
        {
          Object.keys(cart).map(key => {
            return <ItemCart key={key} {...cart[key]}/>
          })
        }
      </Box>
      <Divider />
      <Box>
        <Typography component="div" variant="h4" textAlign="center" padding="5px">
            Total: ${cartTotal}
        </Typography>
      </Box>
      <Divider />
        {
          cartTotal > 0 ?
          (
            <Button color="error" onClick={clearCart} variant="contained">
                Limpiar Carrito
            </Button>
          ) : ''
        }
    </Drawer>
  );
}