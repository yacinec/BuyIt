import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const NotAuthRoutes = () => {
  const isAuthenticated = useSelector((state: any) => state.auth.accessToken);
  if (isAuthenticated) {
    return <Navigate replace to='/' />;
  }

  return <Outlet />;
};
export default NotAuthRoutes;
