import { Box, Grid, Typography } from "@mui/material";

import { OURSOLUTION, OURSOLUTIONS } from "../../../constants/Details";

import { gridContainer, listItem, sectionHeading } from "../styles";
const OurSolutions = ({ isMobile }) => {
  return (
    <>
      <Typography
        variant="h6"
        sx={sectionHeading}
        marginBottom={{ xs: "20px", smLarge: "25px" }}
      >
        {OURSOLUTION}
      </Typography>

      <Grid container spacing={{ xs: 2, lg: 2.2 }} sx={gridContainer}>
        {OURSOLUTIONS.map((el, i) => (
          <Grid size={{ xs: 12, smLarge: 6 }} key={i}>
            <Box
              display="flex"
              alignItems="center"
              gap={{ xs: 1.625, lg: 2.625 }}
            >
              <Box
                component="img"
                src={isMobile ? el.iconMobile : el.icon}
                width={{ xs: "40px" }}
              />
              <Typography sx={listItem}>{el.details}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default OurSolutions;
