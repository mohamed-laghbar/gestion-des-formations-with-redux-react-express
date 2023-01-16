import { useLocation, Navigate, Outlet } from "react-router-dom";


const RequireAuthAdmin = () => {
  const location = useLocation();
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  return role === "admin" ? (
    <Outlet />
  ) : token ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuthAdmin;
