import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    Allcart : cartReducer,
    user : userReducer
  },
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());