import { useLocation, Navigate, Outlet } from "react-router-dom";
import jwt from 'jsonwebtoken'

const RequireAuthAdmin = () => {
  const location = useLocation();
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
    if(err){
      throw new Error('token not valid')
    }
  })

  return role === "admin" ? (
    <Outlet />
  ) : token ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuthAdmin;
