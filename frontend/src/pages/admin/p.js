import axios from "axios";
import React,{useEffect} from "react";

const P = () => {
    useEffect(() => {
        axios.get("/http://localhost:1337/api/auth/private", {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          });
    
    }, []);

  return <div>private</div>;
};

export default P;
