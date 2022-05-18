import { ApiProduct } from "../api/apiProduct";

export enum SagaContextItem {
  apiProduct = 'apiProduct',
}

export interface ReduxSagaContext {
  apiProduct: ApiProduct;
}