const companyProfileContainer = (preview) => ({
  width: "143px",
  height: "143px",
  border: `5px ${preview ? "solid" : "dashed"} rgba(0, 0, 0, 0.13)`,
  borderRadius: "50%",
  boxShadow: "inset 0px 0px 0px 11.2896px #FFFFFF",
  margin: "auto",
  padding: 0.5,
});

const profileUploadContainer = {
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  cursor: "pointer",
  position: "relative",
};

const avatar = { width: "100%", height: "100%" };

const headingBox = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#999",
  fontSize: 14,
};

const headingBoxIcon = { position: "absolute", opacity: 0.1, width: "50px" };

const heading = { position: "relative", zIndex: 1, color: "#A2A6B0" };

const profileContainer = (preview) => ({
  width: "100%",
  height: "98px",
  border: `1px ${preview ? "solid" : "dashed"} #C6C8CD`,
  borderRadius: 1,
});

const profileAvatar = {
  width: "100%",
  height: "100%",
  borderRadius: 0,
  padding: 0.5,

  "& img": {
    borderRadius: 1,
  },
};


export {
  companyProfileContainer,
  profileUploadContainer,
  avatar,
  headingBox,
  headingBoxIcon,
  heading,
  profileContainer,
  profileAvatar,
};
