import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Alert, Snackbar } from "@mui/material";

import GenericTable from "../../components/GenericTable";
import SlidePopover from "../../components/dialogs/SlidePopover";
import FormDialog from "../../components/dialogs/FormDialog";
import SmallDialog from "../../components/dialogs/SmallDialog";
import { employeeTableColumns } from "./tableColumns";

import {
  ADD,
  EDIT,
  EMPOLYEEFIELDSCONFIG,
  ROWS,
} from "../../constants/Employee";

import { employeeFormSchema } from "../../validations/schema";

const Employee = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [rowDetails, setRowDetails] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setData(ROWS);
  }, []);

  const handleClick = async (e, row, index) => {
    if (index === 0) {
      await copyToClipboard(row.id);
      //  setCopied(true);
    } else if (index === 1) {
      navigate("/employee-detail", { state: row });
    } else {
      setRowDetails(row);

      setAnchorEl(e.currentTarget);
      setVisible(true);
    }
  };

  const handleClickAdd = (row) => {
    setOpen(true);
  };

  const handleClickDelete = () => {
    setDeleteDialog(true);
  };

  const handleClickEdit = () => {
    setEdit(true);
    setOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleCloseFormDialog = () => {
    setOpen(false);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <>
      <GenericTable
        columns={employeeTableColumns}
        rows={data}
        totalRows={data.length}
        loading={loading}
        clickHandler={{
          onAddClick: handleClickAdd,
          onSortClick: () => console.log("Sort clicked"),
          onSearch: (text) => console.log("Search:", text),
          onActionClick: (e, row, index) => handleClick(e, row, index),
        }}
        employee
      />

      <SlidePopover
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        visible={visible}
        setVisible={setVisible}
        handleDelete={handleClickDelete}
        handleEdit={handleClickEdit}
      />

      <FormDialog
        open={open}
        setOpen={setOpen}
        ADD={ADD}
        EDIT={EDIT}
        fieldsConfig={EMPOLYEEFIELDSCONFIG}
        schema={employeeFormSchema}
        onSubmit={handleSubmit}
        edit={edit}
        rowDetails={rowDetails}
        handleClose={handleCloseFormDialog}
      />

      <SmallDialog open={deleteDialog} setOpen={setDeleteDialog} />

      <Snackbar
        open={copied}
        autoHideDuration={2000}
        onClose={() => setCopied(false)}
        message="Copied to clipboard"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setCopied(false)}
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Employee;
