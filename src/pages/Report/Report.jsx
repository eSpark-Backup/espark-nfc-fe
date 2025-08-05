import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { fetchReports } from "../../api/reports";

const Report = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReports = async () => {
      try {
        const reports = await fetchReports();
        setTeamMembers(reports);
      } catch (error) {
        console.error("🚨 Error fetching employee reports:", error);
      } finally {
        setLoading(false);
      }
    };

    loadReports();
  }, []);

  if (loading)
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  if (teamMembers.length === 0)
    return <Typography sx={{ m: 3 }}>No reports available.</Typography>;

  return (
    <Grid
      container
      spacing={3}
      sx={{ p: 3, justifyContent: { xs: "center", md: "flex-start" } }}
    >
      {teamMembers.map((member) => (
        <Grid item xs={12} sm={6} md={3} key={member.id}>
          <Card
            sx={{
              textAlign: "center",
              borderRadius: "11px",
              p: 2,
              boxShadow: "none",
              width: "238px",
              height: "208px",
              border: "1px solid #CCC8C8",
              bgcolor: "#F6F8FA",
            }}
          >
            <Avatar
              src={member.profile_image?.image_url || "/default-avatar.png"}
              alt={member.name}
              sx={{
                width: "95px",
                height: "92px",
                mx: "auto",
                border: "2px solid #eee",
              }}
            />
            <CardContent sx={{ padding: "0" }}>
              <Typography fontWeight="500" fontSize="25px">
                {member.name}
              </Typography>
              <Typography fontSize="15px" fontWeight="400" color="#606061">
                {member.designation}
              </Typography>
              <Typography fontSize="15px" fontWeight="400" color="#606061">
                Num of Views:
                <Typography
                  component="span"
                  color="#2684FC"
                  fontWeight="600"
                  pl="5px"
                >
                  {member.view_count}
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Report;
