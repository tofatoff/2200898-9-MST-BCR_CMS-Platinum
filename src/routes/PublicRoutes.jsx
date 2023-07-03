import { Outlet, Navigate } from "react-router-dom";

const isAuth = () => {
  const admin = localStorage.getItem("adminCredential");

  return admin ? true : false;
};

const PublicRoutes = () => {
  const admin = isAuth();

  if (!localStorage.getItem("adminCredential")) {
    localStorage.clear();
  }

  return admin ? <Navigate to="/dashboard" replace /> : <Outlet />;
};
export default PublicRoutes;
