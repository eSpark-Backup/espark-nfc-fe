import { useState } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  useMediaQuery,
  Button,
  useTheme,
  Stack,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

import DropdownMenuForm from "../components/DropdownMenu";

import { ColoredDownArrow } from "../assets/images/svgs";
import { User } from "../assets/images/pngs";

import { HEADER } from "../constants/Sidebar";

import {
  appBar,
  avatarContainer,
  dropdownContainer,
  formOpenButton,
  headerToolbar,
  typographyOrg,
  typographyRole,
} from "./styles";

const Header = ({ onMenuClick }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1} sx={appBar}>
        <Toolbar sx={headerToolbar}>
          {isMobile && (
            <IconButton edge="start" onClick={onMenuClick}>
              <Menu />
            </IconButton>
          )}

          <Button
            variant="contained"
            onClick={handleOpen}
            sx={formOpenButton(theme)}
          >
            <Box sx={avatarContainer} className="center">
              <img src={User} alt="User" />
            </Box>

            <Stack flexDirection={"column"} mr={"10px"}>
              <Typography sx={typographyOrg}>{HEADER.cooperative}</Typography>

              <Typography sx={typographyRole}>{HEADER.admin}</Typography>
            </Stack>

            <Box sx={dropdownContainer} className="center">
              <img src={ColoredDownArrow} alt="User" />
            </Box>
          </Button>
        </Toolbar>
      </AppBar>

      <DropdownMenuForm anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  );
};

export default Header;
