import { useEffect, useState } from "react";

import { Avatar, Box, Typography } from "@mui/material";

import GenericTable from "../../components/GenericTable";

import { ROWS } from "../../constants/Employee";

const Employee = () => {
  const columns = [
    {
      id: "employeeNames",
      label: "Name of Employess",
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
                color: "text.primary",
              }}
            >
              {row.name}
            </Typography>

            <Typography
              sx={{
                fontSize: "12px",
                color: "text.secondary",
              }}
            >
              {row.email}
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      id: "department",
      label: "Department",
    },
    {
      id: "contact",
      label: "Phone Number",
    },
    {
      id: "age",
      label: "Age",
    },
    {
      id: "joiningDate",
      label: "Joining Date",
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
      employee
    />
  );
};

export default Employee;
