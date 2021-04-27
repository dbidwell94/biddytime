import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface IPrivateRouteProps extends RouteProps {
  fallback: string;
}

export default function PrivateRoute(props: IPrivateRouteProps) {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const { fallback, ...routeProps } = props;

  if (!isLoggedIn) {
    return <Redirect to={fallback} />;
  }
  return <Route {...routeProps} />;
}
