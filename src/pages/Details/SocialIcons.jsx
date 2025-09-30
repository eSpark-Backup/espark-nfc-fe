import { Box, Stack } from "@mui/material";
import { SOCIALICONS } from "../../constants/Details";
import * as icons from "simple-icons";

const SocialIcons = ({ currentEmployee }) => {
  const filteredIcons = SOCIALICONS.filter(
    (item) => currentEmployee?.social_links?.[item.key]
  ).map((item) => {
    let icon;

    switch (item.key) {
      case "facebook":
        icon = icons.siFacebook;
        break;
      case "youtube":
        icon = icons.siYoutube;
        break;
      case "twitter":
        icon = icons.siX;
        break;
      case "instagram":
        icon = icons.siInstagram;
        break;
      default:
        icon = null;
    }

    return {
      ...item,
      link: currentEmployee?.social_links?.[item.key],
      svg: icon?.svg,
      hex: icon?.hex,
    };
  });

  if (!filteredIcons.length) return null;
  return (
    <Stack flexDirection="row" gap={2} alignItems="center">
      {filteredIcons.map((el, index) => (
        <Box
          key={index}
          component="a"
          href={el.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: "fit-content",
            height:
              el.key === "youtube" ? 29.5 : el.key === "twitter" ? 20.2 : 23,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            objectFit: "contain",
          }}
          dangerouslySetInnerHTML={{
            __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#${
              el.hex || el.color
            }" width="" height="">${el.svg}</svg>`,
          }}
        />
      ))}
    </Stack>
  );
};

export default SocialIcons;
