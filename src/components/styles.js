const submitButton = {
  marginTop: "32px",
  padding: "18px 0px",
  height: "auto",
};

// CARD
const cardContainer = {
  display: "flex",
  gap: 5.5,
  p: { xs: "18px 21px", xl: "18px 29px" },
  borderRadius: 1,
  border: 1,
  borderColor: "divider",
  width: "100%",
  maxWidth: { xs: "100%", xl: "85%" },
  justifyContent: "space-between",
  boxShadow: "none",
  transition: "box-shadow 0.3s ease-in-out",
  backgroundColor: "#ffffff",
  cursor: "pointer",

  ":hover": {
    boxShadow:
      "124px 126px 71px rgba(0, 0, 0, 0.01), 70px 71px 60px rgba(0, 0, 0, 0.02), 31px 32px 44px rgba(0, 0, 0, 0.04), 8px 8px 24px rgba(0, 0, 0, 0.04), 0px 0px 0px rgba(0, 0, 0, 0.04)",
  },
};

const leftBoxContainer = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  placeItems: "baseline",
};

const leftBoxIconContainer = {
  borderRadius: "50%",
  width: { xs: "65px", xl: "75px" },
  height: { xs: "65px", xl: "75px" },
  mb: 1,
};

const leftBoxSubtitle = {
  lineHeight: "100%",
  fontWeight: 400,
  color: "#1C1C1E",
  letterSpacing: "-0.01em",
  marginTop: "2px",
};

const rightBoxContainer = {
  width: "232px",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const rightBoxCount = {
  fontSize: { xs: "75px", lg: "89px" },
  color: "action.selected",
};

// TABLE
const tableBoxContainer = {
  padding: "37px 40px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

const tableStackContainer = {
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: "space-between",
  alignItems: { xs: "stretch", sm: "center" },
  marginBottom: 2,
};

const tableContainer = {
  backgroundColor: "background.default",
  border: "none",
  borderRadius: 0,
  flex: 1,
};

const tableHeaderCell = {
  borderColor: "divider",
  color: "text.secondary",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "16px",
};

const tableBodyCell = {
  borderColor: "divider",
  color: "text.primary",
  whiteSpace: "nowrap",
};

// PAGINATION
const paginationContainer = {
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: "space-between",
  alignItems: { xs: "stretch", sm: "center" },
  marginTop: 4,
  borderBottom: 1,
  borderColor: "divider",
  gap: 2,
};

const pageRowHeading = {
  fontSize: "12px",
  color: "#868C98",
};

const pageRowDropdown = {
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: 500,
  color: "#868C98",

  "& fieldset": {
    borderColor: "#E2E8F0 !important",
  },
};

const pageChangeButton = {
  color: "#868C98",
  gap: 1.625,
  border: 1,
  borderColor: "#E2E8F0",
  borderRadius: "6px",
  background: "#ffffff",
  padding: "5px 11px",
};

const pageChangeHeading = {
  fontSize: "12px",
  fontWeight: 500,
};

const paginationNumber = (page, p) => {
  return {
    fontSize: "12px",
    color: page === p ? "#09090B" : "#868C98",
    minWidth: "31px",
    background: page === p ? "#EEEEF1" : "tranparent",
    borderRadius: "6px",
    border: "none",
    padding: "8px 10px",
    fontWeight: 500,

    ":hover": {
      background: "#EEEEF1",
      color: "#09090B",
    },
  };
};

export {
  submitButton,
  // CARD
  cardContainer,
  leftBoxContainer,
  leftBoxIconContainer,
  leftBoxSubtitle,
  rightBoxContainer,
  rightBoxCount,
  // TABLE
  tableBoxContainer,
  tableStackContainer,
  tableContainer,
  tableHeaderCell,
  tableBodyCell,
  // PAGINATION
  paginationContainer,
  pageRowHeading,
  pageRowDropdown,
  pageChangeButton,
  pageChangeHeading,
  paginationNumber,
};
