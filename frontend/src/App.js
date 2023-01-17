import Login from "./pages/auth/Login";
import ResetPassword from "./pages/auth/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetNewPassword from "./pages/auth/SetNewPassword";
import NotFound from "./pages/auth/NotFound";
import RequireAuthAdmin from "./privateRoutes/RequireAuthAdmin";
import RequireAuthUser from "./privateRoutes/RequireAuthUser";
import AdminHome from "./pages/admin/AdminHome";
import UserHome from "./pages/user/UserHome";
import Unauthorized from "./pages/auth/Unauthorized";
import Organisme from "./pages/admin/Organisme";
import Formations from "./pages/admin/Formations";
import Employees from "./pages/admin/Employees";
import AddOrganisme from "./pages/admin/AddOrganisme";
import P from "./pages/admin/p";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<Login />} path="/login" exact />
        <Route element={<Login />} path="/" exact />
        <Route
          element={<SetNewPassword />}
          path="/setnewpassword/:token"
          exact
        />
        <Route element={<ResetPassword />} path="/resetpassword" exact />
        <Route element={<Unauthorized />} path="/unauthorized" exact />

        {/* { Admin Routes } */}
        <Route element={<RequireAuthAdmin />}>
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/organismes" element={<Organisme />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/addorgasnisme" element={<AddOrganisme />} />
        <Route path="/private" element={<P />} />
        </Route>

        {/* User Routes */}
        <Route element={<RequireAuthUser />}>
          <Route path="/user" element={<UserHome />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
