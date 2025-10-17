import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { CONTACTDETAILS } from "../../../constants/Details";
import { contactListContainer, contactListIcon, listItem } from "../styles";
import { Link } from "react-router-dom";

const generateVCard = (employee) => {
  return `
BEGIN:VCARD
VERSION:3.0
FN:${employee.name}
TEL;TYPE=MAIN:${employee.phone_number}
${
  employee.second_phone_number
    ? `TEL;TYPE=OTHER:${employee.second_phone_number}`
    : ""
}
EMAIL:${employee.email}
END:VCARD
  `.trim();
};

const handleSaveContact = (employee) => {
  const vcard = generateVCard(employee);
  const blob = new Blob([vcard], { type: "text/vcard" });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${employee.name}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const ContactDetails = ({ currentEmployee }) => {
  const displayDetails = CONTACTDETAILS.map((item) => ({
    icon: item.icon,
    key: item.key,
    details: currentEmployee[item.key] || "",
  }));

  return (
    <Stack gap={1.375}>
      {displayDetails.map((el, i) => (
        <React.Fragment key={i}>
          <Stack sx={contactListContainer}>
            {/* Icon */}
            <Box sx={contactListIcon(el)}>
              <Box component="img" src={el.icon} alt="icon" />
            </Box>

            {/* Content Wrapper */}
            <Stack
              sx={{
                width: "calc(100% - 40px)",
                "@media(max-width: 375px)": {
                  width: "100%",
                },
              }}
            >
              {el.key === "phone_number" ? (
                <Stack
                  direction="column"
                  alignItems="flex-start"
                  gap={0.8}
                  sx={{
                    "@media(max-width: 375px)": {
                      gap: 0.6,
                    },
                  }}
                >
                  <Stack direction="row" alignItems="center" gap={1.5}>
                    <Typography sx={listItem}>{el.details}</Typography>
                    <Button
                      variant="containedSecondary"
                      size="small"
                      onClick={() => handleSaveContact(currentEmployee)}
                      sx={{
                        padding: "6px 9px",
                        fontSize: "8px",
                        display: "block",
                      }}
                    >
                      Save Contact
                    </Button>
                  </Stack>

                  {currentEmployee.second_phone_number && (
                    <Typography sx={listItem}>
                      {currentEmployee.second_phone_number}
                    </Typography>
                  )}
                </Stack>
              ) : el.key === "website" ? (
                <Link to={`${el.details}`} style={{ width: "fit-content" }}>
                  <Typography sx={listItem}>{el.details}</Typography>
                </Link>
              ) : el.key === "landline" ? (
                <Typography sx={listItem}>
                  {el.details || "+97148928880"}
                </Typography>
              ) : (
                <Typography sx={listItem}>{el.details}</Typography>
              )}
            </Stack>
          </Stack>
        </React.Fragment>
      ))}
    </Stack>
  );
};

export default ContactDetails;
