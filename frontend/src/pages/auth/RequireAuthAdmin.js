import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Cookie from "js-cookie";


const RequireAuthAdmin = () => {
    const { auth } = useAuth();
    const location = useLocation();
const role = localStorage.getItem('role');
const token = localStorage.getItem('token');
    

    return (
        role === 'admin'
            ? <Outlet />
                 :<Navigate to='/login' state={{from: location}} replace/>
    );
}

export default RequireAuthAdmin;