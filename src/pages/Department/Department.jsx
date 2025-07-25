import { useEffect, useState } from "react";

import GenericTable from "../../components/GenericTable";
import SlidePopover from "../../components/dialogs/SlidePopover";
import FormDialog from "../../components/dialogs/FormDialog";
import SmallDialog from "../../components/dialogs/SmallDialog";
import { departmentTableColumns } from "./tableColumns";

import {
  ADD,
  DEPARTMENTFIELDSCONFIG,
  EDIT,
  ROWS,
} from "../../constants/Department";

import { departmentFormSchema } from "../../validations/schema";

const Department = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [rowDetails, setRowDetails] = useState(null);

  useEffect(() => {
    setData(ROWS);
  }, []);

  const handleClick = (e, row) => {
    setRowDetails(row);

    setAnchorEl(e.currentTarget);
    setVisible(true);
  };

  const handleClickAdd = () => {
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

  return (
    <>
      <GenericTable
        columns={departmentTableColumns}
        rows={data}
        totalRows={data.length}
        loading={loading}
        clickHandler={{
          onAddClick: handleClickAdd,
          onSortClick: () => console.log("Sort clicked"),
          onSearch: (text) => console.log("Search:", text),
          onActionClick: (e, row) => handleClick(e, row),
        }}
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
        fieldsConfig={DEPARTMENTFIELDSCONFIG}
        schema={departmentFormSchema}
        onSubmit={handleSubmit}
        edit={edit}
        rowDetails={rowDetails}
        handleClose={handleCloseFormDialog}
      />

      <SmallDialog open={deleteDialog} setOpen={setDeleteDialog} />
    </>
  );
};

export default Department;
