import { call, getContext, put, takeLatest } from 'redux-saga/effects';
import { fetchProductDetails, FetchProductDetails, fetchProductInProgress } from "../../redux/product/productDetailsSlice";
import { SagaContextItem } from '../../store/ReduxSagaContext';

export function* fetchProductDetailsSaga(action: FetchProductDetails): any {
  console.log('++here');
  yield put(fetchProductInProgress());
  const apiProduct = yield getContext(SagaContextItem.apiProduct);

  const response: any = yield call(apiProduct.getProduct, action.payload);

  console.log('++', response);
  

}

export default function* fetchProductDetailsWatcher() {
  yield takeLatest(fetchProductDetails.type, fetchProductDetailsSaga);
}