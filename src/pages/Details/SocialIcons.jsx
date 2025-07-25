import { Box, Stack } from "@mui/material";

import { SOCIALICONS } from "../../constants/Details";

const SocialIcons = () => {
  return (
    <Stack flexDirection={"row"} gap={2.625}>
      {SOCIALICONS.map((el, index) => (
        <Box key={index} component={"img"} src={el.icon} alt={el.name} />
      ))}
    </Stack>
  );
};

export default SocialIcons;
