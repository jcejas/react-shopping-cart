import React, { useContext, useEffect } from "react";
import Box from '@mui/material/Box';
import ItemCart from './ItemCart/ItemCart'
import { CartContext } from "../../../contexts/CartContext";

export const CartComponent = ({display}) => {
  const {cart, cartLength} = useContext(CartContext);

  useEffect(() => {
  }, [cartLength]);

  return (
    <Box
      sx={{
          display: 'flex',
          width: '100%',
          position: 'fixed',
          justifyContent: 'end'
      }}
    >
      <Box
        className="cart-box"
        sx={{ display: `${display ? '' : 'none'}` }}
      >
        {
          Object.keys(cart).map(key => {
            return <ItemCart key={key} {...cart[key]}/>
          })
        }
      </Box>
    </Box>
  );
}