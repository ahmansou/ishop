import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStateType } from "../../constants/types";
import { ProductDetails } from "../../types/ProductDetails";

export interface ProductsState {
  loading: boolean;
  data?: ProductDetails[];
};
export const productsInitialState: ProductsState = {
  loading: false,
};

export const fetchProducts = createAction('products/FETCH_PRODUCTS');
export type FetchProducts = ReturnType<typeof fetchProducts>;

export const productsSlice = createSlice({
  name: 'products', 
  initialState: productsInitialState,
  reducers: {
    fetchProductsInProgress: (state) => {
      state.loading = true;
    },
    fetchProducsSuccess: (state, { payload }: PayloadAction<ProductDetails[]>)=> {
      state.loading = false;
      state.data = payload;
    }
  }
})

export const {
  fetchProductsInProgress,
  fetchProducsSuccess,
} = productsSlice.actions;

export const productsSelector = {
  getProductsLoading: (state: RootStateType) => state.product.products.loading,
  getProducts: (state: RootStateType) => state.product.products.data,
};

export default productsSlice.reducer;