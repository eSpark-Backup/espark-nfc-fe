import { Box, Grid } from "@mui/material";

import InfoCard from "../../components/InfoCard";

import { DASHBOARDITEMS } from "../../constants/Dashboard";
import SlidePopover from "../../components/dialogs/SlidePopover";

const Dashboard = () => {
  return (
    <Box width="100%" padding={{ xs: "20px 18px", lg: "20px 24px" }}>
      <Grid container spacing={{ xs: 2, lg: 3 }}>
        {DASHBOARDITEMS.map((item, index) => (
          <Grid size={{ xs: 12, mdLarge: 6 }} key={index}>
            <InfoCard {...item} />
          </Grid>
        ))}

        <SlidePopover />
      </Grid>
    </Box>
  );
};

export default Dashboard;
