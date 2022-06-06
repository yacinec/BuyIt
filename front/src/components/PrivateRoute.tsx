import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  component: any;
  redirection: string;
  requiredAuth: boolean;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: RouteComponent,
  redirection,
  requiredAuth,
}) => {
  const isAuthenticated = useSelector((state: any) => state.auth.accessToken);
  if (
    (requiredAuth && !isAuthenticated) ||
    (!requiredAuth && isAuthenticated)
  ) {
    return <Navigate replace to={redirection} />;
  }

  return <RouteComponent />;
};
