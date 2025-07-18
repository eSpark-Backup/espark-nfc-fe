import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import Login from "./pages/auth/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Department from "./pages/Department/Department";
import Employee from "./pages/Employee/Employee";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/department" element={<Department />} />
        <Route path="/employee" element={<Employee />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
