import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  productsSelector,
} from "../../redux/product/productsSlice";
import ProductCard from "./ProductCard/ProductCard";

import styles from "./ProductList.module.scss";

const { getProducts, getProductsLoading } = productsSelector;

const ProductList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getProductsLoading);
  const products = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.products_wrapper}>
      {loading ? (
        <p>loading</p>
      ) : (
        <div className={styles.product_list}>
          {products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
