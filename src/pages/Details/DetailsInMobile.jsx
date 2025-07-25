import { Box, Stack } from "@mui/material";

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
  mobileButtonsContainer,
  mobileDetailsContainer,
  mobileIconsContainer,
  mobileImageBox,
  mobileTitleContainer,
} from "./styles";

const DetailsInMobile = ({ isAbout, setIsAbout, data }) => {
  return (
    <>
      <Stack sx={mobileDetailsContainer}>
        <Box sx={mobileTitleContainer}>
          <Title data={data} />
        </Box>

        <Box sx={mobileImageBox}>
          <Box
            component={"img"}
            src={data?.profile || DetailImage}
            alt="Profile"
          />
        </Box>
      </Stack>

      <Box sx={mobileIconsContainer}>
        <SocialIcons />
      </Box>

      <Box sx={mobileButtonsContainer}>
        <SwitchButtons isAbout={isAbout} setIsAbout={setIsAbout} />
      </Box>

      <Box marginBottom={"19px"}>
        {isAbout ? <AboutMe data={data} /> : <AboutCompany data={data} />}
      </Box>

      <Box marginBottom={"37px"}>
        {isAbout ? <ContactDetails /> : <OurSolutions />}
      </Box>

      <Footer isAbout={isAbout} />
    </>
  );
};

export default DetailsInMobile;
