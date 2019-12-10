import NewsHome from '../pages/news/NewsHome';
import NewsSports from '../pages/news/NewsSports';
import NewsEconomy from '../pages/news/NewsEconomy';

const basePath: string = '/news';
const routes = [
  {
    path: '/',
    component: NewsHome
  },
  {
    path: `${basePath}/sports`,
    component: NewsSports
  },
  {
    path: `${basePath}/economy`,
    component: NewsEconomy
  }
];

export default routes;
