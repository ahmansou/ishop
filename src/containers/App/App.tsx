import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../../redux/product/productDetailsSlice';
import { RootState } from '../../store';

function App() {

  const loading = useSelector((state: RootState) => state.productDetails.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductDetails('1'));
  }, []);

  return (
    <div className="App">
      <>{loading ? 'yes' : 'no'}</>
      {/* <button onClick={() => } >setLoading</button> */}
    </div>
  );
}

export default App;
