import createSagaMiddleware from "redux-saga";
import { ReduxSagaContext } from "./ReduxSagaContext";
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/product/productDetailsSlice';
import productsReducer from '../redux/product/productsSlice';
import { getApiProduct } from "../api/apiProduct";
import allSagas from '../sagas';
import { ProductState } from "../constants/types";

const sagaMiddleware = createSagaMiddleware(
  {
    context: {
      apiProduct: getApiProduct()
    } as ReduxSagaContext
  } 
)


export const store = configureStore({
  reducer: {
    product: combineReducers<ProductState>({
      productDetails: productReducer,
      products: productsReducer,
    })
  },
  middleware: [sagaMiddleware]
})

allSagas.map((saga) => sagaMiddleware.run(saga));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch