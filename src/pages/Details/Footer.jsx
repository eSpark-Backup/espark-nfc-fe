import { Box, Button, Divider, Stack, Typography } from "@mui/material";

import { PARTNERS, VIEW } from "../../constants/Details";

import { Logo } from "../../assets/images/pngs";

import {
  footerButton,
  footerContainer,
  footerLogo,
  partnersBorder,
  partnersContainer,
  partnersItem,
} from "./styles";

const Footer = ({ isAbout }) => {
  return (
    <Box sx={footerContainer}>
      {!isAbout && (
        <Button variant="contained" sx={footerButton}>
          {VIEW}
        </Button>
      )}

      <Box component={"img"} src={Logo} alt="Logo" sx={footerLogo} />

      <Stack sx={partnersContainer}>
        {PARTNERS.map((el, i) => (
          <>
            <Typography key={i} variant="caption" sx={partnersItem}>
              {el}
            </Typography>

            {i !== 3 && <Divider sx={partnersBorder} />}
          </>
        ))}
      </Stack>
    </Box>
  );
};

export default Footer;
