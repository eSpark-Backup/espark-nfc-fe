import { useEffect, useState } from "react";

import { Avatar, Box, Typography } from "@mui/material";

import GenericTable from "../../components/GenericTable";

import { ROWS } from "../../constants/Department";

const Department = () => {
  const columns = [
    {
      id: "department",
      label: "Department",
      render: (row) => (
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar
            src={row.image || "/default-avatar.png"}
            alt={row.name}
            sx={{ width: 23, height: 23 }}
          />
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 400,
                lineHeight: "20px",
                color:'text.primary'
              }}
            >
              {row.name}
            </Typography>

            <Typography
              sx={{
                fontSize: "12px",
                color:'text.secondary'
              }}
            >
              {row.email}
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      id: "noOfEmployee",
      label: "No of employees",
    },
    {
      id: "createdAt",
      label: "Created Time",
      render: (row) =>
        new Date(row.createdAt).toLocaleString("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
    },
  ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(ROWS);
      setLoading(false);
    }, 0);
  }, []);

  return (
    <GenericTable
      columns={columns}
      rows={data}
      totalRows={data.length}
      loading={loading}
      onAddClick={() => console.log("Add clicked")}
      onSortClick={() => console.log("Sort clicked")}
      onSearch={(text) => console.log("Search:", text)}
    />
  );
};

export default Department;
