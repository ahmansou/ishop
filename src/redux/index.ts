import { combineReducers } from "@reduxjs/toolkit";
import { AnyAction, Reducer } from "redux";
import { ProductState, RootStateType } from "../constants/types";
import productDetailsReducer, { productDetailsInitialState } from "./product/productDetailsSlice";
import productsReducer, { productsInitialState } from "./product/productsSlice";

export const reduxInitialState: RootStateType = {
  product: {
    productDetails: productDetailsInitialState,
    products: productsInitialState,
  }
}

export function createReducer(): Reducer<RootStateType> {
  const reducer = combineReducers<RootStateType>({
    product: combineReducers<ProductState>({
      productDetails: productDetailsReducer,
      products: productsReducer,
    })
  });
  return (state: RootStateType | undefined, action: AnyAction): RootStateType => {
    return reducer(state, action)
  }
}