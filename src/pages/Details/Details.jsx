import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Box, useMediaQuery, useTheme } from "@mui/material";

import DetailsInDektop from "./DetailsInDektop";
import DetailsInMobile from "./DetailsInMobile";

import { mainContainer } from "./styles";

const Details = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(600));

  const { state } = useLocation();

  const [isAbout, setIsAbout] = useState(true);
  return (
    <Box sx={mainContainer}>
      {isMobile ? (
        <DetailsInMobile
          isAbout={isAbout}
          setIsAbout={setIsAbout}
          data={state}
        />
      ) : (
        <DetailsInDektop
          isAbout={isAbout}
          setIsAbout={setIsAbout}
          data={state}
        />
      )}
    </Box>
  );
};

export default Details;
