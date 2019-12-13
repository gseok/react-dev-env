import newsRouteConf from './newsRouteConf';
import Home from '../pages/home/Home';
import NewsHome from '../pages/news/NewsHome';

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/news",
    exact: true,
    component: NewsHome,
    routes: newsRouteConf
  },
];

export default routes;
