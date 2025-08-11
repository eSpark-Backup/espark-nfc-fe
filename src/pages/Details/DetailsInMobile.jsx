import { Box, Grid, Stack } from "@mui/material";

import Title from "./Title";
import SocialIcons from "./SocialIcons";
import SwitchButtons from "./SwitchButtons";
import AboutMe from "./AboutSection/AboutMe";
import AboutCompany from "./AboutSection/AboutCompany";
import ContactDetails from "./AboutSection/ContactDetails";
import OurSolutions from "./AboutSection/OurSolutions";
import Footer from "./Footer";

import { DetailImage } from "../../assets/images/pngs";

import {
  mobileBottomContainer,
  mobileButtonsContainer,
  mobileDetailsContainer,
  mobileIconsContainer,
  mobileImageBox,
  mobileTitleContainer,
  mobileTopContainer,
} from "./styles";

const DetailsInMobile = ({
  isAbout,
  setIsAbout,
  data,
  currentEmployee,
  companyProfile,
  isMobile,
}) => {
  return (
    <>
      <Box sx={mobileTopContainer}>
        <Grid container alignItems={"center"}>
          <Grid size={7}>
            <Box sx={mobileTitleContainer}>
              <Title data={data} currentEmployee={currentEmployee} />
            </Box>
          </Grid>

          <Grid size={5}>
            <Box sx={mobileImageBox}>
              <Box
                component={"img"}
                src={currentEmployee?.profile_image?.image_url || DetailImage}
                alt="Profile"
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={mobileIconsContainer}>
          <SocialIcons currentEmployee={currentEmployee} />
        </Box>
      </Box>

      <Box sx={mobileButtonsContainer}>
        <SwitchButtons isAbout={isAbout} setIsAbout={setIsAbout} />
      </Box>

      <Box sx={mobileBottomContainer}>
        <Box marginBottom={"25px"}>
          {isAbout ? (
            <AboutMe data={data} currentEmployee={currentEmployee} />
          ) : (
            <AboutCompany data={data} currentEmployee={currentEmployee} />
          )}
        </Box>

        <Box marginBottom={isAbout ? "75px" : "5px"}>
          {isAbout ? (
            <ContactDetails currentEmployee={currentEmployee} />
          ) : (
            <OurSolutions isMobile={isMobile} />
          )}
        </Box>

        <Footer
          isAbout={isAbout}
          currentEmployee={currentEmployee}
          companyProfile={companyProfile}
        />
      </Box>
    </>
  );
};

export default DetailsInMobile;
