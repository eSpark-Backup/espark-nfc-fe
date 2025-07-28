import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  useTheme,
} from "@mui/material";

import SmallDialog from "../components/dialogs/SmallDialog";

import { Logo } from "../assets/images/pngs";
import { Logout } from "../assets/images/svgs";

import { NAVITEMS } from "../constants/Sidebar";

import {
  drawerContainer,
  linkItemButton,
  linkItemIcon,
  linkListContainer,
  logoutItemButton,
  logoutItemIcon,
  permanentDrawerPaper,
  temporaryDrawerPaper,
  toolbar,
} from "./styles";
import { PATHS } from "../constants/Paths";

const drawerWidth = 240;
const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const theme = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  const [hoveredLabel, setHoveredLabel] = useState(null);
  const [logoutDialog, setLogoutDialog] = useState(false);

  const renderLinks = () => (
    <List sx={linkListContainer}>
      {NAVITEMS.LINKS.map(({ label, icon, activeIcon, path }) => {
        const isActive = location.pathname.startsWith(path);
        const isHovered = hoveredLabel === label;

        return (
          <ListItemButton
            key={label}
            component={Link}
            to={path}
            onMouseEnter={() => setHoveredLabel(label)}
            onMouseLeave={() => setHoveredLabel(null)}
            disableRipple
            sx={linkItemButton(theme, isActive)}
          >
            <ListItemIcon sx={linkItemIcon}>
              <img
                src={isActive || isHovered ? activeIcon : icon}
                alt={label}
              />
            </ListItemIcon>

            <ListItemText primary={label} />
          </ListItemButton>
        );
      })}
    </List>
  );

  const renderLogout = () => (
    <Box width={"100%"}>
      <List sx={linkListContainer}>
        <ListItemButton
          sx={logoutItemButton(theme)}
          disableRipple
          onClick={() => {
            setLogoutDialog(true);
          }}
        >
          <ListItemIcon sx={logoutItemIcon}>
            <img src={Logout} alt={NAVITEMS.LOGOUT} />
          </ListItemIcon>

          <ListItemText primary={NAVITEMS.LOGOUT} />
        </ListItemButton>
      </List>
    </Box>
  );

  const drawerContent = (
    <Box sx={drawerContainer}>
      <Box>
        <Toolbar sx={toolbar}>
          <Box component={"img"} src={Logo} alt="Logo" />
        </Toolbar>

        {renderLinks()}
      </Box>

      {renderLogout()}
    </Box>
  );

  const handleLogout = () => {
    navigate(PATHS.home);
  };

  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            ...temporaryDrawerPaper,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", md: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            ...permanentDrawerPaper,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <SmallDialog
        open={logoutDialog}
        setOpen={setLogoutDialog}
        logout
        handleLogout={handleLogout}
      />
    </>
  );
};

export default Sidebar;
