import {
  Dashboard,
  DashboardActive,
  Department,
  DepartmentActive,
  Employee,
  EmployeeActive,
} from "../assets/images/svgs";

const NAVITEMS = {
  LINKS: [
    {
      label: "Dashboard",
      icon: Dashboard,
      activeIcon: DashboardActive,
      path: "/dashboard",
    },
    {
      label: "Departments",
      icon: Department,
      activeIcon: DepartmentActive,
      path: "/department",
    },
    {
      label: "Employees",
      icon: Employee,
      activeIcon: EmployeeActive,
      path: "/employee",
    },
  ],
  LOGOUT: "Logout",
};

const HEADER = {
  cooperative: "Cooperatives",
  admin: "Admin",
};

export { NAVITEMS, HEADER };
