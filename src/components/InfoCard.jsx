import { useNavigate } from "react-router-dom";

import { Box, Card, Typography } from "@mui/material";

import {
  cardContainer,
  leftBoxContainer,
  leftBoxIconContainer,
  leftBoxSubtitle,
  rightBoxContainer,
  rightBoxCount,
} from "./styles";

const InfoCard = ({
  icon,
  heading1,
  heading2,
  value,
  path,
  bg = "rgba(38, 132, 252, 0.15)",
  valueBg = "rgba(38, 132, 252, 0.08)",
}) => {
  const navigate = useNavigate();

  return (
    <Card elevation={2} sx={cardContainer} onClick={() => navigate(path)}>
      {/* Left Column */}
      <Box sx={leftBoxContainer}>
        <Box
          sx={{
            backgroundColor: bg,
            ...leftBoxIconContainer,
          }}
          className="center"
        >
          <img src={icon} />
        </Box>

        <Typography variant="h4">{heading1}</Typography>
        {/*  <Typography variant="subtitle2" sx={leftBoxSubtitle}>
          {heading2}
        </Typography> */}
      </Box>

      {/* Right Column */}
      <Box
        sx={{
          backgroundColor: valueBg,
          ...rightBoxContainer,
        }}
      >
        <Typography variant="h1" sx={rightBoxCount}>
          {value}
        </Typography>
      </Box>
    </Card>
  );
};

export default InfoCard;
