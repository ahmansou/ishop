import { createAction, createSlice } from "@reduxjs/toolkit";

export interface ProductDetailsState {
  loading: boolean;
};

export const productDetailsInitialState: ProductDetailsState = {
  loading: false,
}

export const fetchProductDetails = createAction<string>('productDetails/FETCH_PRODUCT_DETAILS');
export type FetchProductDetails = ReturnType<typeof fetchProductDetails>;

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: productDetailsInitialState,
  reducers: {
    fetchProductInProgress: (state) => {
      state.loading = true;
    }
  }
})

export const {
  fetchProductInProgress
} = productDetailsSlice.actions;

export default productDetailsSlice.reducer;