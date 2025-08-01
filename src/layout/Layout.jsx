import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

import { Box } from "@mui/material";

import Sidebar from "./Sidebar";
import Header from "./Header";

import { useGetDepartmentQuery } from "../store/slices/department/departmentApiSlice";
import { useGetEmployeeQuery } from "../store/slices/employee/employeeApiSlice";
import { useGetCompanyQuery } from "../store/slices/companyProfile/companyProfileApiSlice";

import {
  setDepartments,
  setLoadingDepartments,
} from "../store/slices/department/departmentSlice";
import {
  setEmployees,
  setLoadingEmployees,
} from "../store/slices/employee/employeeSlice";
import {
  setCompanyProfile,
  setLoadingCompanyProfile,
} from "../store/slices/companyProfile/companyProfileSlice";

import { getToken } from "../utils/tokenManager";

import {
  layoutChildrenContainer,
  layoutContainer,
  layoutMainContainer,
} from "./styles";
import { PATHS } from "../constants/Paths";

const drawerWidth = 240;

const Layout = () => {
  const { pathname } = useLocation();

  const {
    data: departments,
    isSuccess: isDepartmentSuccess,
    isLoading: isDepartmentLoading,
    refetch: refetchDepartment,
  } = useGetDepartmentQuery(
    { page: 1, limit: 10 },
    {
      skip: !getToken() || pathname.startsWith(PATHS.department),
    }
  );

  const {
    data: employees,
    isSuccess: isEmployeeSuccess,
    isLoading: isEmployeeLoading,
    refetch: refetchEmployee,
  } = useGetEmployeeQuery( { page: 1, limit: 10 }, {
    skip: !getToken() || pathname.startsWith(PATHS.employee),
  });

  const {
    data: company,
    isSuccess: isCompanySuccess,
    isLoading: isCompanyLoading,
  } = useGetCompanyQuery(null, { skip: !getToken() });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingDepartments(isDepartmentLoading));
    dispatch(setLoadingEmployees(isEmployeeLoading));
    dispatch(setLoadingCompanyProfile(isCompanyLoading));

    if (isDepartmentSuccess) {
      dispatch(setDepartments(departments?.departments || []));
    }

    if (isEmployeeSuccess) {
      dispatch(setEmployees(employees?.employees || []));
    }
    if (isCompanySuccess) {
      dispatch(setCompanyProfile(company?.company_profile || null));
    }
  }, [
    isDepartmentSuccess,
    isEmployeeSuccess,
    isCompanySuccess,
    isDepartmentLoading,
    isEmployeeLoading,
    isCompanyLoading,
    departments,
    employees,
    company,
  ]);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const callAfterCompanyCreation = () => {
    refetchDepartment();
    refetchEmployee();
  };

  return (
    <Box sx={layoutContainer}>
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box
        sx={{
          ...layoutChildrenContainer,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Header
          onMenuClick={handleDrawerToggle}
          refetch={callAfterCompanyCreation}
        />

        <Box component="main" sx={layoutMainContainer}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
