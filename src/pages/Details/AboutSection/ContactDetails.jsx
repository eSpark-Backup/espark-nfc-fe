import { Box, Stack, Typography } from "@mui/material";

import { CONTACTDETAILS } from "../../../constants/Details";

import { contactListContainer, contactListIcon, listItem } from "../styles";

const ContactDetails = ({ currentEmployee }) => {
  const displayDetails = CONTACTDETAILS.map((item) => ({
    icon: item.icon,
    details: currentEmployee[item.key] || "NA",
  }));
  return (
    <Stack gap={1.375}>
      {displayDetails.map((el, i) => (
        <Stack key={i} sx={contactListContainer}>
          <Box sx={contactListIcon}>
            <Box component={"img"} src={el.icon} />
          </Box>

          <Typography sx={listItem}>{el.details}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default ContactDetails;
