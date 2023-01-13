import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetNewPassword from "./pages/SetNewPassword";
import NotFound from './pages/NotFound'


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
