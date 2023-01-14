import Login from "./pages/auth/Login";
import ResetPassword from "./pages/auth/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetNewPassword from "./pages/auth/SetNewPassword";
import NotFound from './pages/auth/NotFound'


function App() {
  return (
   
    <BrowserRouter>
           <Routes>
        

            {/* Public routes */}
            <Route element={ <Login />} path="/" exact/>
            <Route element={ <SetNewPassword />} path="/setnewpassword/:token" exact/>

            <Route element={<ResetPassword />} path="/resetpassword" exact/>
            <Route path="*" element={<NotFound />} />

          </Routes>
    </BrowserRouter>
  );
}

export default App;
