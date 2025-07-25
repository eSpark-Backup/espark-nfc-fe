import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import Sidebar from "./Sidebar";
import Header from "./Header";

import {
  layoutChildrenContainer,
  layoutContainer,
  layoutMainContainer,
} from "./styles";

const drawerWidth = 240;

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
        <Header onMenuClick={handleDrawerToggle} />

        <Box component="main" sx={layoutMainContainer}>
          <Outlet />
        </Box>
      </Box>
    </Box>  
  );
};

export default Layout;
