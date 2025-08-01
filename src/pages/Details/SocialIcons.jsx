import { Box, Stack } from "@mui/material";

import { SOCIALICONS } from "../../constants/Details";

const SocialIcons = ({ currentEmployee }) => {
  const filteredIcons = SOCIALICONS.filter(
    (item) => currentEmployee?.social_links[item.key]
  ).map((item) => ({
    ...item,
    link: currentEmployee?.social_links[item.key],
  }));

  return (
    <Stack flexDirection={"row"} gap={2.625} alignItems={"baseline"}>
      {filteredIcons?.map((el, index) => (
        <Box
          key={index}
          component="a"
          href={el.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "inline-block" }}
        >
          <Box component="img" src={el.icon} alt={el.name} />
        </Box>
      ))}
    </Stack>
  );
};

export default SocialIcons;
