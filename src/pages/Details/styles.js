const mainContainer = {
  padding: { xs: "30px 28px", lg: "35px 34px" },

  "@media (max-width:374px)": {
    padding: "25px 22px",
  },
};

const desktopImageBox = {
  width: { xs: "224px", mdS: "244px", mdLarge: "294px" },
  height: "222px",

  "& img": {
    maxWidth: { xs: "224px", mdS: "244px", mdLarge: "294px" },
  },
};

const title = {
  letterSpacing: "-0.015em",
  color: "#000000",
  fontSize: { xs: "21px", smLarge: "25px" },

  "@media (max-width:374px)": {
    fontSize: "19px",
  },
};

const department = {
  letterSpacing: "-0.015em",
  color: "#606061",
  fontSize: { xs: "13px", smLarge: "15px" },
};

const switchButtonsContainer = {
  flexDirection: "row",
  backgroundColor: "action.disabledBackground",
  borderRadius: 1.5,
  width: {
    xs: "309px",
    smLarge: "371px",
  },
};

const switchButtons = {
  fontSize: {
    xs: "14px",
    smLarge: "17px",
  },
  lineHeight: {
    xs: "24px",
    smLarge: "29px",
  },
  fontWeight: 500,
  borderRadius: 1.5,
};

const aboutButton = (isAbout) => ({
  backgroundColor: isAbout ? "#3B5B82" : "transparent",
  color: isAbout ? "#ffffff" : "action.disabled",
  padding: {
    xs: "6px 30px",
    smLarge: !isAbout ? "8px 39px" : "8px 36px",
  },

  "@media (max-width:374px)": {
    padding: "6px 14px",
  },
});

const companyButton = (isAbout) => ({
  backgroundColor: !isAbout ? "#3B5B82" : "transparent",
  color: !isAbout ? "#ffffff" : "action.disabled",
  padding: {
    xs: !isAbout ? "6px 10px 6px 21px" : "6px 16px 6px 18px",
    smLarge: !isAbout ? "8px 19px 8px 21px" : "8px 12px 8px 26px",
  },

  "@media (max-width:374px)": {
    padding: "6px 15px",
  },
});

const sectionHeading = {
  color: "#000000",
  marginBottom: "15px",
  letterSpacing: "-0.015em",
};

const sectionDetailsBox = {
  width: { xs: "100%", lg: "500px" },
};

const sectionDetails = {
  fontSize: "12px",
  lineHeight: "14px",
  letterSpacing: "-0.015em",
};

const contactListContainer = {
  flexDirection: "row",
  alignItems: "center",
  gap: "21px",
};

const contactListIcon = {
  width: "21px",

  "& img": { margin: "auto" },
};

const listItem = {
  color: "#48494A",
  fontSize: "12.8px",
  letterSpacing: "-0.015em",
  fontWeight: 600,
  lineHeight: "20px",
  maxWidth: "170px",
};

const gridContainer = {
  width: { xs: "100%" },

  "@media (min-width:1000px)": {
    width: "400px",
  },
};

const mobileDetailsContainer = {
  flexDirection: "row",
  marginBottom: "25px",
  justifyContent: "center",
  alignItems: "center",
};

const mobileTitleContainer = {
  textAlign: "center",
  marginRight: "29px",

  "@media (max-width:374px)": {
    marginRight: "19px",
  },
};

const mobileImageBox = {
  width: "143px",
  height: "143px",
  borderRadius: "50%",

  "@media (max-width:374px)": {
    width: "133px",
  },

  "& img": {
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
};

const mobileIconsContainer = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "17px",
};

const mobileButtonsContainer = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "30px",
};

const footerContainer = { marginLeft: "9px", maxWidth: "450px" };

const footerButton = {
  padding: "10px 22px",
  fontSize: "12px",
  display: "block",
  margin: { xs: "0px auto", sm: "0px 0px 0px auto" },
};

const footerLogo = { margin: { xs: "auto", sm: "0px" } };

const partnersContainer = {
  marginLeft: "10px",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: { xs: "center", sm: "normal" },
  gap: 1,
};

const partnersItem = {
  lineHeight: "24px",
  letterSpacing: "-0.015em",
  color: "#48494A",
  textTransform: "uppercase",
};

const partnersBorder = {
  width: "1px",
  height: 12,
  backgroundColor: "#48494A",
  border: "none",
};

export {
  mainContainer,
  desktopImageBox,
  title,
  department,
  switchButtonsContainer,
  switchButtons,
  aboutButton,
  companyButton,
  sectionHeading,
  sectionDetailsBox,
  sectionDetails,
  contactListContainer,
  contactListIcon,
  listItem,
  gridContainer,
  mobileDetailsContainer,
  mobileTitleContainer,
  mobileImageBox,
  mobileIconsContainer,
  mobileButtonsContainer,
  footerContainer,
  footerButton,
  footerLogo,
  partnersContainer,
  partnersItem,
  partnersBorder,
};
