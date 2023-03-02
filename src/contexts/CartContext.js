import React, { useState } from "react";

const CartContext = React.createContext({});

const CartProvider = ({children}) => {
    const [cart, setCart] = useState({});

    const [cartLength, setCartLength] = useState(0);

    const addProduct = (product) => {
        let newCart = cart;

        if (typeof newCart[product.id] != 'undefined') {
            newCart[product.id].quantity++;
        } else {
            newCart[product.id] = product;
            newCart[product.id].quantity = 1;
        }

        setCart(newCart);

        setCartLength(cartLength + 1);
        console.log("Carrito: \n", newCart);
    }

    const clearCart = () => setCart({})

    const removeProduct = (id) => {
        console.log("delete product: ", id);
        let newCart = cart;
        delete newCart[id];

        setCart(newCart);
        setCartLength(cartLength - 1);
    }

    return(
        <CartContext.Provider value={{
            cart,
            addProduct,
            clearCart,
            removeProduct,
            cartLength
        }}>
            {children}
        </CartContext.Provider>
    )
}

export {
    CartContext,
    CartProvider
}