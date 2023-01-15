import Login from "./pages/auth/Login";
import ResetPassword from "./pages/auth/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetNewPassword from "./pages/auth/SetNewPassword";
import NotFound from "./pages/auth/NotFound";
import RequireAuthAdmin from "./pages/auth/RequireAuthAdmin";
import RequireAuthUser from "./pages/auth/PrivateRoutes";
import AdminHome from "./pages/admin/AdminHome";
import UserHome from "./pages/user/UserHome";
import Unauthorized from "./pages/auth/Unauthorized";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<Login />} path="/login" exact />
        <Route
          element={<SetNewPassword />}
          path="/setnewpassword/:token"
          exact
        />
        <Route element={<ResetPassword />} path="/resetpassword" exact />
        <Route element={<Unauthorized />} path="/unauthorized" exact />

        {/* { Admin Routes } */}
        <Route element={<RequireAuthAdmin  />}>
          <Route path="/admin" element={<AdminHome />} />
        </Route>

        {/* User Routes */}
        <Route element={<RequireAuthUser  />}>
          <Route path="/user" element={<UserHome />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
