import React from "react";
import Sidebar from "../../components/SideBar";
import Table from "../../components/EmployeesTable";
const AdminHome = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Table  />
      

    </div>
  );
};

export default AdminHome;
