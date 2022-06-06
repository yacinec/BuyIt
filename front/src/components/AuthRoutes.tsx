import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = () => {
  const isAuthenticated = useSelector((state: any) => state.auth.accessToken);
  if (!isAuthenticated) {
    return <Navigate replace to='/signin' />;
  }

  return <Outlet />;
};
export default AuthRoutes;
