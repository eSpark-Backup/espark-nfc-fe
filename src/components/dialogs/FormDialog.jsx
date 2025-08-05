import { forwardRef } from "react";

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";

import FormLayout from "../FormLayout";

import {
  formDialogContent,
  formDialogHeading,
  formDialogPaper,
} from "./styles";

const Transition = forwardRef(function Transition(
  { direction, ...props },
  ref
) {
  return <Slide direction={direction} ref={ref} {...props} timeout={500} />;
});

const FormDialog = ({
  open,
  direction = "down",
  ADD,
  EDIT,
  fieldsConfig,
  schema,
  onSubmit,
  edit,
  rowDetails,
  handleClose,
  isLoading,
  preview,
  setPreview,
  exposeReset,
  setSelectedDepartmentId,
  admin
}) => {
  return (
    <Dialog
      open={open}
      slots={{
        transition: Transition,
      }}
      slotProps={{
        transition: { direction },
        paper: {
          sx: formDialogPaper,
        },
      }}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle
        id="scroll-dialog-title"
        sx={{
          padding: "24px 0px 0px",
          marginBottom: 3,
        }}
      >
        <Box textAlign={"center"}>
          <Typography variant="h5" sx={formDialogHeading}>
            {edit ? EDIT : ADD}
          </Typography>

          {/*
            <Typography
              variant="subtitle2"
              sx={{
                letterSpacing: "-0.015em",
                color: "text.secondary",
                fontWeight: 300,
              }}
            >
              {detail}
            </Typography>
          */}
        </Box>
      </DialogTitle>

      <DialogContent sx={formDialogContent} dividers={scroll === "paper"}>
        <FormLayout
          title={ADD}
          editTitle={EDIT}
          fieldsConfig={fieldsConfig}
          schema={schema}
          onSubmit={onSubmit}
          rowDetails={rowDetails}
          isLoading={isLoading}
          edit={edit}
          preview={preview}
          setPreview={setPreview}
          exposeReset={exposeReset}
          setSelectedDepartmentId={setSelectedDepartmentId}
          admin={admin}
        />
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
