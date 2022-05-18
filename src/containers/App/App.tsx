import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, productsSelector } from '../../redux/product/productsSlice';

const { getProducts, getProductsLoading } = productsSelector;

function App() {

  const loading = useSelector(getProductsLoading);
  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  console.log('++', products);

  useEffect(() => {
    // dispatch(fetchProducts());
  }, []);

  return (
    <div className="App">
      <>{loading ? 'yes' : 'no'}</>
      {/* <button onClick={() => } >setLoading</button> */}
    </div>
  );
}

export default App;
