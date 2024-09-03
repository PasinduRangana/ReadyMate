import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./productSlice";




const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});

export default store;
