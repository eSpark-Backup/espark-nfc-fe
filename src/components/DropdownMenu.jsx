import { useState } from "react";

import { Box, Menu, Typography } from "@mui/material";

import FormLayout from "./FormLayout";

import {
  ADD,
  COMPANYFIELDSCONFIG,
  EDITBTN,
  EDITHEADING,
} from "../constants/CompanyProfile";

import { companyProfileFormSchema } from "../validations/schema";

import { menuPaper } from "./styles";
import { formDialogHeading } from "./dialogs/styles";

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
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      slotProps={{
        paper: {
          sx: menuPaper,
        },
        list: {
          sx: {
            padding: 0,
          },
        },
      }}
    >
      <Typography
        variant="h5"
        textAlign={"center"}
        marginBottom={3}
        marginTop={3}
        sx={formDialogHeading}
      >
        {ADD}
      </Typography>

      <FormLayout
        title={ADD}
        editTitle={EDITHEADING}
        editBtn={EDITBTN}
        fieldsConfig={COMPANYFIELDSCONFIG}
        schema={companyProfileFormSchema}
        onSubmit={handleSubmit}
        profile
      />
    </Menu>
  );
};

export default DropdownMenuForm;
