import { ProductDetailsState } from "../redux/product/productDetailsSlice";

export interface ProductState {
  productDetails: ProductDetailsState;
}

interface RootState {
  product: ProductState,
}

export type RootStateType = RootState;