import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { CONTACTDETAILS } from "../../../constants/Details";
import { contactListContainer, contactListIcon, listItem } from "../styles";
import { Link } from "react-router-dom";
import {
  AppleWallet,
  Blur_qr,
  GoogleWallet,
  SamsungWallet,
} from "../../../assets/images/pngs";
import {
  useDownloadAppleWalletEmployeeQuery,
  useGenerateAppleWalletEmployeeMutation,
  useGenerateGoogleWalletEmployeeMutation,
} from "../../../store/slices/employee/employeeApiSlice";

const imageToBase64 = async (imageUrl) => {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

const generateVCard = async (employee) => {
  const {
    name,
    phone_number,
    second_phone_number,
    email,
    designation,
    website,
    address,
    profile_image,
  } = employee;

  let vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name || ""}
N:${name || ""};;;;
TITLE:${designation || ""}
`;

  if (phone_number) {
    vcard += `TEL;TYPE=CELL:${phone_number}\n`;
  }

  if (second_phone_number) {
    vcard += `TEL;TYPE=WORK:${second_phone_number}\n`;
  }

  if (email) {
    vcard += `EMAIL;TYPE=INTERNET:${email}\n`;
  }

  if (website) {
    vcard += `URL:${website}\n`;
  }

  if (address) {
    vcard += `ADR;TYPE=WORK:;;${address};;;;\n`;
  }

  if (profile_image?.image_url) {
    try {
      const base64Image = await imageToBase64(profile_image?.image_url);
      vcard += `PHOTO;ENCODING=BASE64;TYPE=JPEG:${base64Image}\n`;
    } catch (err) {
      console.error("Error converting image to base64:", err);
    }
  }

  vcard += `END:VCARD`;
  return vcard;
};

const handleSaveContact = async (employee) => {
  const vcard = await generateVCard(employee);
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
  const [downloadSkip, setDownloadSkip] = useState(true);
  const [generateGoogleWalletEmployee, { isLoading: googleWalletLoading }] =
    useGenerateGoogleWalletEmployeeMutation();

  const [generateAppleWalletEmployee, { isLoading: appleWalletLoading }] =
    useGenerateAppleWalletEmployeeMutation();

  const token = localStorage?.getItem("accessToken");
  const isWalletVisible = Boolean(token);

  const { data: appleWalletBlob, isFetching } =
    useDownloadAppleWalletEmployeeQuery(
      { employeeId: currentEmployee?.employee_id },
      { skip: downloadSkip }
    );

  const displayDetails = CONTACTDETAILS?.map((item) => ({
    icon: item.icon,
    key: item.key,
    details: currentEmployee[item.key] || "",
  }));

  const handleGenerateGoogleWallet = async () => {
    try {
      const res = await generateGoogleWalletEmployee(
        currentEmployee?.employee_id
      ).unwrap();

      window.location.href = res.data.save_url;
    } catch (error) {
      console.error("Failed to generate Google Wallet pass", error);
    }
  };

  const handleGenerateAppleWallet = async () => {
    try {
      await generateAppleWalletEmployee(currentEmployee?.employee_id).unwrap();

      setDownloadSkip(false);
    } catch (error) {
      console.error("Failed to generate Apple Wallet pass", error);
    }
  };

  useEffect(() => {
    if (!appleWalletBlob) return;

    const blob = new Blob([appleWalletBlob], {
      type: "application/vnd.apple.pkpass",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "employee.pkpass";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    window.location.href = url;

    // Cleanup
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, [appleWalletBlob]);

  return (
    <Stack
      sx={{
        gap: { xs: 3, sm: 3 },
        "@media(max-width: 374px)": {
          gap: 2.5,
        },
      }}
    >
      {displayDetails.map((el, i) => (
        <React.Fragment key={i}>
          <Stack sx={contactListContainer}>
            <Box sx={contactListIcon(el)}>
              <Box component="img" src={el.icon} alt="icon" />
            </Box>

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
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap={1.5}
                    sx={{
                      "@media(max-width: 319px)": {
                        gap: 1,
                      },
                    }}
                  >
                    <Stack>
                      <Typography
                        sx={{
                          ...listItem,
                          "@media(max-width: 325px)": {
                            fontSize: 9.5,
                          },
                        }}
                      >
                        {el.details}
                      </Typography>
                    </Stack>
                    <Button
                      variant="containedSecondary"
                      size="small"
                      onClick={() => handleSaveContact(currentEmployee)}
                      sx={{
                        maxWidth: "fit-content",
                        padding: "6px 12px",
                        fontSize: { xs: "clamp(8px, 2.1vw, 11px)", sm: "12px" },
                        textWrap: "nowrap",
                        "@media(max-width: 319px)": {
                          fontSize: "clamp(7px, 0.5vw, 11px)",
                          padding: "6px 4px",
                        },
                      }}
                    >
                      Save Contact
                    </Button>
                  </Stack>
                </Stack>
              ) : el.key === "website" ? (
                <Link to={`${el.details}`} style={{ width: "fit-content" }}>
                  <Typography sx={listItem}>{el.details}</Typography>
                </Link>
              ) : el.key === "landline" ? (
                <Typography
                  sx={{
                    ...listItem,
                    "@media(max-width: 325px)": {
                      fontSize: 9.5,
                    },
                  }}
                >
                  {currentEmployee.second_phone_number || "NA"}
                </Typography>
              ) : (
                <Typography sx={listItem}>{el.details}</Typography>
              )}
            </Stack>
          </Stack>
        </React.Fragment>
      ))}

      <Stack
        width={"fit-content"}
        alignItems="center"
        spacing={2}
        sx={{
          display: { xs: "flex", md: "none" },
          height: "80%",
          "@media(max-width: 300px)": {
            gap: 1,
            alignItems: "flex-start",
            flexDirection: "column",
          },
        }}
      >
        <Box
          component="div"
          sx={{
            p: 0,
            pt: 3,
            m: 0,
            display: "flex",
            gap: 1.2,
            alignItems: "center",
          }}
        >
          {isWalletVisible && (
            <Box component="ul" sx={{ p: 0, m: 0 }}>
              <Box
                component="li"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  disableRipple
                  disableFocusRipple
                  disableElevation
                  disableTouchRipple
                  disabled={appleWalletLoading}
                  onClick={handleGenerateAppleWallet}
                  sx={{
                    color: "#48494A",
                    fontSize: { xs: "10px", sm: "12.8px" },
                    letterSpacing: "-0.015em",
                    fontWeight: 600,
                    minWidth: 0,
                    "& .MuiButton-startIcon": {
                      flexShrink: 0,
                      mr: "6px",
                    },

                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  startIcon={
                    appleWalletLoading ? (
                      <CircularProgress
                        size={18}
                        sx={{
                          color: "#3b5b82",
                        }}
                      />
                    ) : (
                      <Box
                        component="img"
                        src={AppleWallet}
                        alt="Apple Wallet"
                        sx={{
                          width: { xs: 18, sm: 20 },
                          height: { xs: 18, sm: 20 },
                          flexShrink: 0,
                        }}
                      />
                    )
                  }
                >
                  <Box
                    component="span"
                    sx={{
                      textAlign: "left",
                      lineHeight: 1.4,
                      flexGrow: 1,
                    }}
                  >
                    Add to Apple Wallet
                  </Box>
                </Button>
              </Box>

              <Box
                component="li"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  disableRipple
                  disableFocusRipple
                  disableElevation
                  disableTouchRipple
                  disabled={googleWalletLoading}
                  onClick={handleGenerateGoogleWallet}
                  sx={{
                    color: "#48494A",
                    fontSize: { xs: "10px", sm: "12.8px" },
                    letterSpacing: "-0.015em",
                    fontWeight: 600,
                    minWidth: 0,
                    "& .MuiButton-startIcon": {
                      flexShrink: 0,
                      mr: "6px",
                    },

                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  startIcon={
                    googleWalletLoading ? (
                      <CircularProgress
                        size={18}
                        sx={{
                          color: "#3b5b82",
                        }}
                      />
                    ) : (
                      <Box
                        component="img"
                        src={SamsungWallet}
                        alt="Apple Wallet"
                        sx={{
                          width: { xs: 18, sm: 20 },
                          height: { xs: 18, sm: 20 },
                          flexShrink: 0,
                        }}
                      />
                    )
                  }
                >
                  <Box
                    component="span"
                    sx={{
                      textAlign: "left",
                      lineHeight: 1.4,
                      flexGrow: 1,
                    }}
                  >
                    Add to Samsung Wallet
                  </Box>
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Stack>
    </Stack>
  );
};

export default ContactDetails;
