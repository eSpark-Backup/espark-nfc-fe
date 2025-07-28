import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import Login from "./pages/auth/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Department from "./pages/Department/Department";
import Employee from "./pages/Employee/Employee";
import Details from "./pages/Details/Details";

import { PATHS } from "./constants/Paths";

const AppRoutes = () => {
  const { home, dashboard, department, employee, employee_detail } = PATHS;
  return (
    <Routes>
      <Route path={home} element={<Login />} />

      <Route element={<Layout />}>
        <Route path={dashboard} element={<Dashboard />} />
        <Route path={department} element={<Department />} />
        <Route path={employee} element={<Employee />} />
        <Route path={employee_detail} element={<Details />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
