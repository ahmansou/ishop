
import { ReactNode } from 'react';
import Landing from '../containers/Landing/Landing';


interface RouteDefinition {
  path: string;
  component: ReactNode;
}

export interface Routes {
  [propName: string]: RouteDefinition;
}
const routes: Routes = {
  root: {
    component: <Landing />,
    path: '/',
  },
}

export default routes;
