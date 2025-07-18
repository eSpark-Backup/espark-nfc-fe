const container = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",

  "& input": {
    height: "auto",
    fontSize: "14px",
    lineHeight: "100%",
    padding: "13.5px 16px",
  },
};

const linkContainer = {
  display: "flex",
  justifyContent: "space-between",
};

const link = {
  color: "#1570EF",
  lineHeight: "100%",
};

const searchInput = {
  width: "293px",

  "& input": {
    padding: "8.5px 11px 8.5px 0px",
    fontSize: "13px",
    lineHeight: "20px",
    letterSpacing: "-0.015em",
    color: "#525866",
  },

  "& fieldset": {
    borderColor: "#E2E4E9 !important",
  },
};

export { container, linkContainer, link, searchInput };
