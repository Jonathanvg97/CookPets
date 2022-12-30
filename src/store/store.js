import { configureStore } from "@reduxjs/toolkit";
//Esto crea una tienda Redux y también configura automáticamente la extensión Redux DevTools para que pueda inspeccionar la tienda mientras desarrolla

import cartSlice from "./CarBuy/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;