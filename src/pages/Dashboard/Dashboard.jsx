import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Box, Grid } from "@mui/material";

import InfoCard from "../../components/InfoCard";

import { DASHBOARDITEMS } from "../../constants/Dashboard";

const Dashboard = () => {
  const { departments, loadingDepartments } = useSelector(
    (state) => state.department
  );
  const { employees, loadingEmployees } = useSelector(
    (state) => state.employee
  );

  const [loading, setLoading] = useState(
    loadingDepartments || loadingEmployees
  );
  const [items, setItems] = useState(DASHBOARDITEMS);

  useEffect(() => {
    setLoading(loadingDepartments || loadingEmployees);
  }, [loadingDepartments, loadingEmployees]);

  useEffect(() => {
    if (!loading) {
      const updateItems = DASHBOARDITEMS.map((item, i) => {
        let value = 0;

        if (i === 0) {
          value = Array.isArray(departments) ? departments.length : 0;
        } else {
          value = Array.isArray(employees) ? employees.length : 0;
        }

        return { ...item, value };
      });

      setItems(updateItems);
    }
  }, [departments, employees, loading]);

  return (
    <Box width="100%" padding={{ xs: "20px 18px", lg: "20px 24px" }}>
      <Grid container spacing={{ xs: 2, lg: 3 }}>
        {items?.map((item, index) => (
          <Grid size={{ xs: 12, mdLarge: 6 }} key={index}>
            <InfoCard {...item} loading={loading} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
