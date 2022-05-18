import { call, getContext, put, takeLatest } from "redux-saga/effects";
import { fetchProducts, fetchProducsSuccess, fetchProductsInProgress } from "../../redux/product/productsSlice";
import { SagaContextItem } from "../../store/ReduxSagaContext";
import { ProductDetails } from "../../types/ProductDetails";

export function* fetchProductsSaga(): any {
  try {
    yield put(fetchProductsInProgress());
    const apiProduct = yield getContext(SagaContextItem.apiProduct);

    const response: ProductDetails[] = yield call(apiProduct.getProducts);

    yield put(fetchProducsSuccess(response));

  } catch (e) {
    console.log('++', e);
  }


}

export default function* fetchProductsWatcher() {
  yield takeLatest(fetchProducts.type, fetchProductsSaga);
}