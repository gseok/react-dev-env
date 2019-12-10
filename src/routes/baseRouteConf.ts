import newsRouteConf from './newsRouteConf';
import Home from '../pages/home/Home';

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/news",
    routes: newsRouteConf
  }
];

export default routes;
