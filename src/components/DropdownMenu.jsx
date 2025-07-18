import { useState } from "react";

import { Menu, Box, TextField, Typography, Button } from "@mui/material";

const DropdownMenuForm = ({ anchorEl, setAnchorEl }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      MenuListProps={{ sx: { p: 2 } }}
    >
      <Box component="form" onSubmit={handleSubmit} sx={{ width: 250 }}>
        <Typography variant="subtitle1" mb={1}>
          Fill Form
        </Typography>
        <TextField
          fullWidth
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          size="small"
          margin="dense"
        />
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          size="small"
          margin="dense"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 1 }}
          size="small"
        >
          Submit
        </Button>
      </Box>
    </Menu>
  );
};

export default DropdownMenuForm;
