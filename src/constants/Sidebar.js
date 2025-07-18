import {
  Dashboard,
  DashboardActive,
  Department,
  DepartmentActive,
  Employee,
  EmployeeActive,
} from "../assets/images/svgs";

export const NAVITEMS = {
  LINKS: [
    {
      label: "Dashboard",
      icon: Dashboard,
      activeIcon: DashboardActive,
      path: "/dashboard",
    },
    {
      label: "Department",
      icon: Department,
      activeIcon: DepartmentActive,
      path: "/department",
    },
    {
      label: "Employee",
      icon: Employee,
      activeIcon: EmployeeActive,
      path: "/employee",
    },
  ],
  LOGOUT: "Logout",
};

export const HEADER = {
  cooperative: "Cooperatives",
  admin: "Admin",
};