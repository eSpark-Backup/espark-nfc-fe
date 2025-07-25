import { Typography } from "@mui/material";

import { department, title } from "./styles";

const Title = ({ data }) => {
  return (
    <>
      <Typography variant="h2" sx={title}>
        {data?.title || "Jeremy Rose"}
      </Typography>

      <Typography sx={department}>
        {data?.department || "Product Designer"}
      </Typography>
    </>
  );
};

export default Title;
