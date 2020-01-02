import React from "react";
import loadable from '@loadable/component';
import { Route, Switch } from "react-router-dom";
import routesConf from "./baseRouteConf";

/*
type RouteWithSubRoutesProps = {
  path: string;
  exact?: boolean;
  component?: any;
  routes?: any;
};

const createRoutes = (routes: RouteWithSubRoutesProps[], depth: number = 0): any => {
  return (
    <>
      {routes.map((route, index) => {
        const key: string = `${index}_${route.path}_${depth}`;

        if (Array.isArray(route.routes) && route.routes.length > 0) {
          return (
            <React.Fragment key={key}>
              {createRoutes(route.routes, depth + 1)}
            </React.Fragment>
          )
        }

        return (
          <Route
            exact={!!route.exact}
            key={key}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </>
  );
}

const Routes = () => {
  return (
    <Switch>
      {createRoutes(routesConf as RouteWithSubRoutesProps[])}
    </Switch>
  );
}
*/

// import Home from '../pages/home/Home';
// import News from '../pages/news/NewsHome';

const Home = loadable(() => import(/* webpackChunkName: "Home" */ '../pages/home/Home'));
const News = loadable(() => import(/* webpackChunkName: "News" */ '../pages/news/NewsHome'));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/news" render={() => <News />} />
    </Switch>
  );
}

export default Routes;
