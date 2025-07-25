import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import Login from "./pages/auth/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Department from "./pages/Department/Department";
import Employee from "./pages/Employee/Employee";
import Details from "./pages/Details/Details";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/department" element={<Department />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employee-detail" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
