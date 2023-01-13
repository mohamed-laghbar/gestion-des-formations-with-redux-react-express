import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetNewPassword from "./pages/SetNewPassword";


function App() {
  return (
   
    <BrowserRouter>
           <Routes>
        

            {/* Public routes */}
            <Route element={ <Login />} path="/" exact/>
            <Route element={ <SetNewPassword />} path="/setnewpassword/:token" exact/>

            <Route element={<ResetPassword />} path="/resetpassword" exact/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
