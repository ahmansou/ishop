import axios, { AxiosInstance } from "axios";

export interface ApiProduct {
  client: AxiosInstance;
  getProduct: (sku: string) => Promise<any>;
}

export function getApiProduct(): ApiProduct {
  const productClient: AxiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
  });
  
  return {
    client: productClient,

    getProduct: async function (sku: string) {
      const response = await productClient.get(`/products/${sku}`);
      return response.data;
    },

  };
}