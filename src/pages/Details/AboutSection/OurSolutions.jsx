import { Box, Grid, Typography } from "@mui/material";
import { OURSOLUTION, OURSOLUTIONS } from "../../../constants/Details";
import { gridContainer, listItem, sectionHeading } from "../styles";

const OurSolutions = ({ isMobile }) => {
  return (
    <>
      <Typography
        variant="h6"
        sx={sectionHeading}
        marginBottom={{ xs: "20px", smLarge: "25px" }}
      >
        {OURSOLUTION}
      </Typography>

      <Grid container spacing={{ xs: 2, lg: 2.2 }} sx={gridContainer}>
        {OURSOLUTIONS.map((el, i) => (
          <Grid size={{ xs: 12, smLarge: 6 }} key={i}>
            <Box
              display="flex"
              alignItems="center"
              gap={{ xs: 1.625, lg: 2.625 }}
            >
              {isMobile ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#e9e9ea",
                    borderRadius: "100%",
                    p: 1.3,
                    width: "54px",
                    height: "54px",
                    transform: "translate3d(0,0,0)",
                    WebkitTransform: "translate3d(0,0,0)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={el.icon}
                    alt={el.details}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      transform: "translateZ(0)",
                      WebkitTransform: "translateZ(0)",
                      imageRendering: "-webkit-optimize-contrast",
                    }}
                  />
                </Box>
              ) : (
                <Box
                  component="img"
                  src={el.icon}
                  alt={el.details}
                  sx={{
                    transform: "translateZ(0)",
                    WebkitTransform: "translateZ(0)",
                    imageRendering: "-webkit-optimize-contrast",
                  }}
                />
              )}
              <Typography sx={listItem}>{el.details}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default OurSolutions;
