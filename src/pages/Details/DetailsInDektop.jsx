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

const DetailsInDektop = ({
  isAbout,
  setIsAbout,
  data,
  currentEmployee,
  companyProfile,
}) => {
  return (
    <Stack
      flexDirection={"row"}
      gap={{ xs: 1.625, mdS: 2.625 }}
      justifyContent={"center"}
    >
      <Box sx={desktopImageBox}>
        <Box
          component={"img"}
          src={currentEmployee?.profile_image?.image_url || DetailImage}
          onError={(e) => {
            e.target.src = DetailImage;
          }}
          alt="Profile"
        />
      </Box>

      <Stack>
        <Box marginBottom={"37px"}>
          <Title data={data} currentEmployee={currentEmployee} />
        </Box>

        <Box marginBottom={"63px"}>
          <SocialIcons currentEmployee={currentEmployee} />
        </Box>

        <Box marginBottom={"30px"}>
          <SwitchButtons isAbout={isAbout} setIsAbout={setIsAbout} />
        </Box>

        <Box marginBottom={"19px"}>
          {isAbout ? (
            <AboutMe data={data} currentEmployee={currentEmployee} />
          ) : (
            <AboutCompany data={data} currentEmployee={currentEmployee} />
          )}
        </Box>

        <Box marginBottom={"37px"}>
          {isAbout ? (
            <ContactDetails currentEmployee={currentEmployee} />
          ) : (
            <OurSolutions />
          )}
        </Box>

        <Footer
          isAbout={isAbout}
          currentEmployee={currentEmployee}
          companyProfile={companyProfile}
        />
      </Stack>
    </Stack>
  );
};

export default DetailsInDektop;
