import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
   
    <BrowserRouter>
           <Routes>
        

            {/* Public routes */}
            <Route element={ <Login />} path="/" exact/>
  
            <Route element={<ResetPassword />} path="/resetpassword" exact/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
