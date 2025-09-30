import { Avatar, Box, Grid } from "@mui/material";

import Title from "./Title";
import SocialIcons from "./SocialIcons";
import SwitchButtons from "./SwitchButtons";
import AboutMe from "./AboutSection/AboutMe";
import AboutCompany from "./AboutSection/AboutCompany";
import ContactDetails from "./AboutSection/ContactDetails";
import OurSolutions from "./AboutSection/OurSolutions";
import Footer from "./Footer";

import { Banner } from "../../assets/images/svgs";

import {
  mobileBottomContainer,
  mobileButtonsContainer,
  mobileIconsContainer,
  mobileImageBox,
  mobileTitleContainer,
  mobileTopContainer,
} from "./styles";
import { useState } from "react";

const DetailsInMobile = ({
  isAbout,
  setIsAbout,
  data,
  currentEmployee,
  companyProfile,
  isMobile,
}) => {
  const [imageError, setImageError] = useState(false);
  return (
    <>
      <Box
        component="img"
        src={`${Banner}`}
        alt="banner"
        sx={{
          width: "100%",
          objectFit: "contain",
        }}
      />
      <Box padding={"26px 20px"}>
        <Box sx={mobileTopContainer}>
          <Grid
            container
            alignItems={"center"}
            sx={{
              "@media (max-width:374px)": {
                flexDirection: "column-reverse",
                gap: 1.5,
              },
            }}
          >
            <Grid
              item
              sx={{
                width: {
                  xs: "58.33%",
                },
                "@media (max-width: 374px)": {
                  width: "100%",
                },
              }}
            >
              <Box sx={mobileTitleContainer}>
                <Title data={data} currentEmployee={currentEmployee} />
              </Box>
            </Grid>

            <Grid size={5}>
              {!currentEmployee?.profile_image?.image_url || imageError ? (
                <Avatar
                  src={currentEmployee?.name}
                  alt={currentEmployee?.name}
                  sx={{ width: 60, height: 60, mx: "auto" }}
                />
              ) : (
                <Box sx={mobileImageBox}>
                  <Box
                    component="img"
                    src={currentEmployee?.profile_image?.image_url}
                    alt="Profile"
                    onError={() => setImageError(true)}
                  />
                </Box>
              )}
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
              <ContactDetails
                currentEmployee={{
                  ...currentEmployee,
                  website: companyProfile?.website_link,
                }}
              />
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
      </Box>
    </>
  );
};

export default DetailsInMobile;
