import { Box, Typography } from "@mui/material";

import { COMPANY } from "../../../constants/Details";

import { sectionDetails, sectionDetailsBox, sectionHeading } from "../styles";

const AboutCompany = ({ data }) => {
  return (
    <>
      <Typography variant="h6" sx={sectionHeading}>
        {COMPANY}
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

export default AboutCompany;
