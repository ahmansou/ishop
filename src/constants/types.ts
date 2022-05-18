import { ProductDetailsState } from "../redux/product/productDetailsSlice";
import { ProductsState } from "../redux/product/productsSlice";

export interface ProductState {
  productDetails: ProductDetailsState;
  products: ProductsState;
}

interface RootState {
  product: ProductState,
};

export type RootStateType = RootState;