import { combineReducers } from "@reduxjs/toolkit";
import { AnyAction, Reducer } from "redux";
import { ProductState, RootStateType } from "../constants/types";
import productDetailsReducer, { productDetailsInitialState } from "./product/productDetailsSlice";

export const reduxInitialState: RootStateType = {
  product: {
    productDetails: productDetailsInitialState
  }
}

export function createReducer(): Reducer<RootStateType> {
  const reducer = combineReducers<RootStateType>({
    product: combineReducers<ProductState>({
      productDetails: productDetailsReducer
    })
  });
  return (state: RootStateType | undefined, action: AnyAction): RootStateType => {
    return reducer(state, action)
  }
}