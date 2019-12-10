import React from "react";
import { Route, Switch } from "react-router-dom";
import routesConf from "./baseRouteConf";

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

export default Routes;
