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
TEL:${employee.phone_number}
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
    details: currentEmployee[item.key] || "NA",
  }));

  return (
    <Stack gap={1.375}>
      {displayDetails.map((el, i) => (
        <React.Fragment key={i}>
          <Stack sx={contactListContainer}>
            <Box sx={contactListIcon(el)}>
              <Box component="img" src={el.icon} alt="icon" />
            </Box>

            {el.key === "phone_number" ? (
              <Stack
                direction="row"
                alignItems="center"
                gap={1.5}
                sx={{
                  "@media(max-width: 375px)": {
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 0.8,
                  },
                }}
              >
                <Typography sx={listItem}>{el.details}</Typography>
                <Button
                  variant="containedSecondary"
                  size="small"
                  onClick={() => handleSaveContact(currentEmployee)}
                  sx={{
                    padding: "6px 12px",
                    fontSize: "12px",
                    display: "block",
                  }}
                >
                  Save Contact
                </Button>
              </Stack>
            ) : el.key === "website" ? (
              <Link to={`${el.details}`}>
                <Typography sx={listItem}>{el.details}</Typography>
              </Link>
            ) : (
              <Typography sx={{ ...listItem, width: "calc(100% - 40px)" }}>
                {el.details}
              </Typography>
            )}
          </Stack>

          {/* ✅ Render static number right after the first phone_number */}
          {el.key === "phone_number" && (
            <Stack sx={contactListContainer}>
              <Box
                sx={contactListIcon({
                  icon: CONTACTDETAILS.find((d) => d.key === "phone_number")
                    .icon,
                })}
              >
                <Box
                  component="img"
                  src={
                    CONTACTDETAILS.find((d) => d.key === "phone_number").icon
                  }
                  alt="icon"
                />
              </Box>
              <Typography sx={listItem}>+92 300 1234567</Typography>
            </Stack>
          )}
        </React.Fragment>
      ))}
    </Stack>
  );
};


export default ContactDetails;
