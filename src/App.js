import React from "react";
import { RouterProviderCustom } from "./routes/routes.js";
import { CartProvider } from "./contexts/CartContext.js";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <RouterProviderCustom/>
      </CartProvider>
    </div>
  );
}

export default App;
