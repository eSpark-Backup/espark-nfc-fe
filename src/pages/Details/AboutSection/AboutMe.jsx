import { Box, Typography } from "@mui/material";

import { ABOUT } from "../../../constants/Details";

import { sectionDetails, sectionDetailsBox, sectionHeading } from "../styles";

const AboutMe = ({ data }) => {
  return (
    <>
      <Typography variant="h6" sx={sectionHeading}>
        {ABOUT}
      </Typography>

      <Box sx={sectionDetailsBox}>
        <Typography variant="body2" color="secondary.dark" sx={sectionDetails}>
          {data?.details ||
            `Lorem ipsum is a dummy or placeholder text commonly used in graphic
          design, publishing, and web development.Lorem ipsum is a dummy or
          placeholder text commonly used in graphic design, publishing, and web
          development.`}
        </Typography>
      </Box>
    </>
  );
};

export default AboutMe;
