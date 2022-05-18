import createSagaMiddleware from "redux-saga";
import { ReduxSagaContext } from "./ReduxSagaContext";
import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/product/productDetailsSlice';
import { getApiProduct } from "../api/apiProduct";
import {applyMiddleware} from 'redux';
import allSagas from '../sagas';

const sagaMiddleware = createSagaMiddleware(
  {
    context: {
      apiProduct: getApiProduct()
    } as ReduxSagaContext
  } 
)


export const store = configureStore({
  reducer: {
    productDetails: productReducer,
  },
  middleware: [sagaMiddleware]
})

allSagas.map((saga) => sagaMiddleware.run(saga));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch