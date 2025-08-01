import { Typography } from "@mui/material";

import { department, title } from "./styles";

const Title = ({ data, currentEmployee }) => {
  return (
    <>
      <Typography variant="h2" sx={title}>
        {currentEmployee?.name || "N/A"}
      </Typography>

      <Typography sx={department}>
        {currentEmployee?.designation || "N/A"}
      </Typography>
    </>
  );
};

export default Title;
