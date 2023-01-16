import { useLocation, Navigate, Outlet } from "react-router-dom";


const RequireAuthUser = () => {
    const location = useLocation();

    const role = localStorage.getItem('role');
    const token = localStorage.getItem('token');

    return (
        role === 'user'
            ? <Outlet />
                : token 
                    ? <Navigate to='/unauthorized' state={{from: location}} replace/>
                        :<Navigate to='/login' state={{from: location}} replace/>
    );
}




export default RequireAuthUser;