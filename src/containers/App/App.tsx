import { Route, Routes } from 'react-router';
import routes from '../../routes/routes';
import Landing from '../Landing/Landing';

function App() {
  return (
    <Routes>
      {Object.keys(routes).map((route) => 
        <Route
          element={routes[route].component} 
          key={routes[route].path} 
          path={routes[route].path} />
      )}
    </Routes>
  );
}

export default App;
