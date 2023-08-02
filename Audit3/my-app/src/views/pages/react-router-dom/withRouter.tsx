import { Component } from "react";
import {
  NavigateFunction,
  Params,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

interface Router {
  location: Location;
  navigate: NavigateFunction;
  params: Readonly<Params<string>>;
}

export interface PropsWithRouter {
  router: Router;
}

export function withRouter<T extends PropsWithRouter>(
  Component: React.FC<T>
): React.FC<Omit<T, "router">> {
  function ComponentWithRouterProps(props: T) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProps as React.FC<Omit<T, "router">>;
}
