import { Avatar, Box, Stack, Typography } from "@mui/material";

import Title from "./Title";
import SocialIcons from "./SocialIcons";
import SwitchButtons from "./SwitchButtons";
import AboutMe from "./AboutSection/AboutMe";
import ContactDetails from "./AboutSection/ContactDetails";
import AboutCompany from "./AboutSection/AboutCompany";
import OurSolutions from "./AboutSection/OurSolutions";
import Footer from "./Footer";

import { desktopImageBox } from "./styles";
import { useState } from "react";
import { Blur_qr } from "../../assets/images/pngs";

const DetailsInDektop = ({
  isAbout,
  setIsAbout,
  data,
  currentEmployee,
  companyProfile,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Stack
      flexDirection={"row"}
      gap={{ xs: 2.625 }}
      maxWidth={"1024px"}
      mx={"auto"}
      justifyContent={"center"}
      padding={{ xs: "30px 28px", lg: "35px 34px" }}
      display={{ xs: "none", sm: "flex" }}
    >
      <Stack>
        {!currentEmployee?.profile_image?.image_url || imageError ? (
          <Avatar
            src={currentEmployee?.name}
            alt={currentEmployee?.name}
            sx={{ width: 60, height: 60 }}
          />
        ) : (
          <Box sx={desktopImageBox}>
            <Box
              component="img"
              src={currentEmployee?.profile_image?.image_url}
              alt="Profile"
              onError={() => setImageError(true)}
            />
          </Box>
        )}
        {
          <Stack
            width={"fit-content"}
            alignItems="center"
            spacing={2}
            sx={{
              mx: "auto",
              height: "80%",
              display: { xs: "none", md: "flex" },
              "@media(max-width: 300px)": {
                gap: 1,
                alignItems: "flex-start",
                flexDirection: "column",
              },
            }}
          >
            <Box component="ul" sx={{ p: 0, py: 5, m: 0, listStyle: "none" }}>
              {/* QR CODE */}
              <Box
                sx={{
                  width: { xs: 120, md: 135 },
                  height: { xs: 120, md: 135 },
                  mx: "auto",
                }}
                src={currentEmployee?.qr_url || Blur_qr}
                component="img"
                alt="QR Code"
              />
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 500,

                  filter: currentEmployee?.qr_url ? "none" : "blur(2px)",
                  opacity: currentEmployee?.qr_url ? "100%" : 0.3,
                }}
              >
                Scan me
              </Typography>
            </Box>
          </Stack>
        }
      </Stack>
      <Stack
        justifyContent={"space-between"}
        p={1}
        spacing={{ xs: 4, md: 5 }}
        sx={{
          width: { sm: "calc(100% - 300px)" },
          height: "100%",
        }}
      >
        <Title data={data} currentEmployee={currentEmployee} />
        <SocialIcons currentEmployee={currentEmployee} />
        <Stack pt={1.5}>
          <SwitchButtons isAbout={isAbout} setIsAbout={setIsAbout} />
        </Stack>
        <Stack spacing={3}>
          {isAbout ? (
            <AboutMe data={data} currentEmployee={currentEmployee} />
          ) : (
            <AboutCompany data={data} currentEmployee={currentEmployee} />
          )}
          {isAbout ? (
            <ContactDetails
              currentEmployee={{
                ...currentEmployee,
                website: companyProfile?.website_link,
              }}
            />
          ) : (
            <OurSolutions />
          )}
        </Stack>
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
