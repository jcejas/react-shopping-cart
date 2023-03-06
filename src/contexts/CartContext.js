import React, { useState } from "react";

const CartContext = React.createContext({});

const CartProvider = ({children}) => {
    //Cart Items
    const [cart, setCart] = useState({});

    //Cart Total
    const [cartTotal, setCartTotal] = useState(0);

    //Cart Display
    const [displayCart, setDisplayCart] = useState(false);

    const addProduct = (product) => {
        let newCart = cart;

        if (typeof newCart[product.id] != 'undefined') {
            newCart[product.id].quantity++;
        } else {
            newCart[product.id] = product;
            newCart[product.id].quantity = 1;
        }

        setCart(newCart);
        setCartTotal(cartTotal + product.price);

        console.log("Carrito: \n", newCart);
    }

    const clearCart = () => setCart({})

    const removeProduct = (id) => {
        console.log("delete product: ", id);
        let newCart = cart;

        setCartTotal(cartTotal - (newCart[id].price * newCart[id].quantity));

        delete newCart[id];
        setCart(newCart);
    }

    return(
        <CartContext.Provider value={{
            cart,
            addProduct,
            clearCart,
            removeProduct,
            cartTotal,
            displayCart,
            setDisplayCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export {
    CartContext,
    CartProvider
}