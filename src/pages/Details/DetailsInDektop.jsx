import { Box, Stack } from "@mui/material";

import Title from "./Title";
import SocialIcons from "./SocialIcons";
import SwitchButtons from "./SwitchButtons";
import AboutMe from "./AboutSection/AboutMe";
import ContactDetails from "./AboutSection/ContactDetails";
import AboutCompany from "./AboutSection/AboutCompany";
import OurSolutions from "./AboutSection/OurSolutions";
import Footer from "./Footer";

import { DetailImage } from "../../assets/images/pngs";

import { desktopImageBox } from "./styles";

const DetailsInDektop = ({ isAbout, setIsAbout, data }) => {
  return (
    <Stack flexDirection={"row"} gap={{ xs: 1.625, mdS: 2.625 }}>
      <Box sx={desktopImageBox}>
        <Box
          component={"img"}
          src={data?.profile || DetailImage}
          alt="Profile"
        />
      </Box>

      <Stack>
        <Box marginBottom={"37px"}>
          <Title data={data} />
        </Box>

        <Box marginBottom={"63px"}>
          <SocialIcons />
        </Box>

        <Box marginBottom={"30px"}>
          <SwitchButtons isAbout={isAbout} setIsAbout={setIsAbout} />
        </Box>

        <Box marginBottom={"19px"}>
          {isAbout ? <AboutMe data={data} /> : <AboutCompany data={data} />}
        </Box>

        <Box marginBottom={"37px"}>
          {isAbout ? <ContactDetails /> : <OurSolutions />}
        </Box>

        <Footer isAbout={isAbout} />
      </Stack>
    </Stack>
  );
};

export default DetailsInDektop;
