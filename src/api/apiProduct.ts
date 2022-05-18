import axios, { AxiosInstance } from "axios";
import { Endpoints } from "../constants/endpoints";

export interface ApiProduct {
  client: AxiosInstance;
  getProduct: (sku: string) => Promise<any>;
  getProducts: () => Promise<any>;
}

export function getApiProduct(): ApiProduct {
  const productClient: AxiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
  });
  
  return {
    client: productClient,

    getProducts: async function () {
      const response = await productClient.get(Endpoints.products);
      return response.data;
    },
    getProduct: async function (sku: string) {
      const response = await productClient.get(`${Endpoints.products}/${sku}`);
      return response.data;
    },

  };
}