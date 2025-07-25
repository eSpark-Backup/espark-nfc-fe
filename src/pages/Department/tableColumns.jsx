import { Avatar, Box, Typography } from "@mui/material";

import { avatar, email, name } from "./styles";

export const departmentTableColumns = [
  {
    id: "department",
    label: "Department",
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
    id: "no_of_empolyee",
    label: "No of employees",
  },
  {
    id: "creation_time",
    label: "Created Time",
    render: (row) =>
      new Date(row.creation_time).toLocaleString("en-US", {
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
