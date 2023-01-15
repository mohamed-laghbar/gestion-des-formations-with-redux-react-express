import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserHome = () => {
    const navigate = useNavigate()
    function a (){
        navigate('/admin')
    }
    return (
        <div>
            <h1>User Home</h1>
            <button onClick={a} >go to admin</button>
        </div>
    );
}

export default UserHome;
