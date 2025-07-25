import { Avatar, Box, Typography } from "@mui/material";

import { avatar, email, name } from "./styles";

export const employeeTableColumns = [
  {
    id: "employeeNames",
    label: "Name of Employess",
    render: (row) => (
      <Box display="flex" alignItems="center" gap={1}>
        <Avatar
          src={row.image || "/default-avatar.png"}
          alt={row.name}
          sx={avatar}
        />
        <Box>
          <Typography variant="subtitle2" sx={name}>
            {row.name}
          </Typography>

          <Typography sx={email}>{row.email}</Typography>
        </Box>
      </Box>
    ),
  },
  {
    id: "department",
    label: "Department",
  },
  {
    id: "phone_number",
    label: "Phone Number",
  },
  {
    id: "age",
    label: "Age",
  },
  {
    id: "joining_date",
    label: "Joining Date",
  },
];
