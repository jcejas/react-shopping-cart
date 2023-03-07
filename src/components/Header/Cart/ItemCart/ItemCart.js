import React, { useContext } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../../../contexts/CartContext';

export default function ItemCart({name, price, id, image, quantity}) {

  let {removeProduct} = useContext(CartContext);

  function removeItem(e, id) {
    e.stopPropagation();
    return removeProduct(id);
  }

  return (
    <Card className="item-cart">
      <CardMedia
        component="img"
        sx={{ width: 'auto', height: 100 }}
        image={image}
        alt={name}
      />
      <Box className="item-cart-desc">
        <CardContent>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
            Cantidad: {quantity}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Subtotal: ${price * quantity}
          </Typography>
        </CardContent>
      </Box>
      <IconButton onClick={(e) => removeItem(e, id)} color="error" aria-label="Eliminar">
        <DeleteIcon />
      </IconButton>
    </Card>
  );
}