import React, { useState } from "react";

const CartContext = React.createContext({});

const CartProvider = ({children}) => {
    //Cart Items
    const [cart, setCart] = useState(() => {
        //Save in LocalStorage
        let cartStorage = localStorage.getItem('cart');
        
        if (cartStorage === null)
            return {}
        
        return JSON.parse(cartStorage)
    });

    //Cart Total
    const [cartTotal, setCartTotal] = useState(() => {
        //Save in LocalStorage
        let cartTotalStorage = localStorage.getItem('cartTotal');
        
        if (cartTotalStorage === null)
            return 0;
        
        return parseInt(cartTotalStorage);
    });

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

        let total = cartTotal + product.price;
        setCart(newCart);
        setCartTotal(total);

        //Set LocalStorage
        localStorage.setItem('cart', JSON.stringify(newCart));
        localStorage.setItem('cartTotal', total)
    }

    const clearCart = () => {
        setCart({});
        setCartTotal(0);
        localStorage.removeItem('cart');
        localStorage.removeItem('cartTotal');
    }

    const removeProduct = (id) => {
        let newCart = cart;
        let total = cartTotal - (newCart[id].price * newCart[id].quantity);

        delete newCart[id];
        setCart(newCart);
        setCartTotal(total);

        //Set LocalStorage
        localStorage.setItem('cart', JSON.stringify(newCart));
        localStorage.setItem('cartTotal', total)
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