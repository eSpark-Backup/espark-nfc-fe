import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import dayjs from "dayjs";

import { toast } from "sonner";

import GenericTable from "../../components/GenericTable";
import SlidePopover from "../../components/dialogs/SlidePopover";
import FormDialog from "../../components/dialogs/FormDialog";
import SmallDialog from "../../components/dialogs/SmallDialog";
import { departmentTableColumns } from "./tableColumns";

import { departmentFormSchema } from "../../validations/schema";

import {
  useAddDepartmentMutation,
  useDeleteDepartmentMutation,
  useGetDepartmentQuery,
  useUpdateDepartmentMutation,
} from "../../store/slices/department/departmentApiSlice";

import { setDepartments } from "../../store/slices/department/departmentSlice";

import {
  handleCreateDepartmentMutation,
  handleDeleteDepartmentMutation,
  handleUpdateDepartmentMutation,
} from "../../services/department";

import { ADD, DEPARTMENTFIELDSCONFIG, EDIT } from "../../constants/Department";

const Department = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [localSearch, setLocalSearch] = useState(""); 

  const {
    data: allDepartments,
    isError,
    error,
    isLoading,
    isSuccess,
    isFetching,
  } = useGetDepartmentQuery(
    {
      page,
      limit: rowsPerPage,
      sort_order: sortOrder,
      search: searchText,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const [addDepartment, { isLoading: addIsLoading }] =
    useAddDepartmentMutation();

  const [updateDepartment, { isLoading: updateIsLoading }] =
    useUpdateDepartmentMutation();

  const [deleteDepartment, { isLoading: deleteIsLoading }] =
    useDeleteDepartmentMutation();

  const dispatch = useDispatch();
  const { departments, loadingDepartments } = useSelector(
    (state) => state.department
  );

  useEffect(() => {
    if (isSuccess) {
      dispatch(setDepartments(allDepartments?.departments || []));
    }
  }, [isSuccess, isLoading, allDepartments]);

  useEffect(() => {
    if (isError && error && error?.data?.error !== "Invalid or expired token") {
      toast.error(error?.data?.error);
    }
  }, [isError, error]);

  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [rowDetails, setRowDetails] = useState(null);
  const [errora, setError] = useState(null);
  const [preview, setPreview] = useState(null);
  const [resetForm, setResetForm] = useState(null);

  useEffect(() => {
    if (departments) {
      setData(departments || []);
    }
  }, [departments]);

  const handleSortClick = () => {
    setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
    setPage(1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchText(localSearch);
      setPage(1);
    }, 500);

    return () => clearTimeout(timeout);
  }, [localSearch]);

  const handleSearch = (text) => {
    setLocalSearch(text);
  };

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
    const defaultVal = {
      image: rowDetails?.image?.image_url || "",
      name: rowDetails?.name || "",
      email: rowDetails?.email || "",
      created_at: rowDetails?.created_at ? dayjs(rowDetails.created_at) : null,
      employee_count: rowDetails?.employee_count || 0,
    };

    resetForm(defaultVal);

    setEdit(true);
    setOpen(true);
  };

  const handleDelete = async () => {
    const res = await handleDeleteDepartmentMutation(
      rowDetails.id,
      deleteDepartment,
      setError,
      handleCloseFormDialog
    );

    if (res && res.success) {
      const updatedDepartments = departments?.filter(
        (item) => item.id !== rowDetails.id
      );

      dispatch(setDepartments(updatedDepartments || []));
    }
  };

  const handleSubmit = async (data, methods) => {
    if (edit) {
      const res = await handleUpdateDepartmentMutation(
        data,
        rowDetails.id,
        updateDepartment,
        setError,
        methods,
        handleCloseFormDialog,
        dispatch
      );

      if (res && res.success) {
        const updatedDepartments = departments?.map((item) => {
          if (item.id === rowDetails.id) {
            return {
              ...res.department,
              created_at: data.created_at
                ? dayjs(data.created_at).toISOString()
                : null,
            };
          }
          return item;
        });

        dispatch(setDepartments(updatedDepartments));
      }
    } else {
      const res = await handleCreateDepartmentMutation(
        data,
        addDepartment,
        setError,
        methods,
        handleCloseFormDialog,
        dispatch
      );

      if (res && res.success) {
        dispatch(
          setDepartments([
            {
              ...res.department,
              created_at: data.created_at
                ? dayjs(data.created_at).toISOString()
                : null,
            },
            ...departments,
          ])
        );
      }
    }
  };

  const handleCloseFormDialog = () => {
    setOpen(false);
    setDeleteDialog(false);

    setTimeout(() => {
      setEdit(false);
      setRowDetails(null);
      setPreview(null);
      handleReset();
    }, 100);
  };

  const handleReset = () => {
    const emptyForm = DEPARTMENTFIELDSCONFIG.reduce((acc, field) => {
      acc[field.name] = field.type === "date" ? null : "";
      return acc;
    }, {});

    if (resetForm) resetForm(emptyForm);
  };

  const totalRows = allDepartments?.pagination?.total_count || 0;
  const totalPages = allDepartments?.pagination?.total_pages || 1;

  return (
    <>
      <GenericTable
        columns={departmentTableColumns}
        rows={data}
        totalRows={totalRows}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalPages={totalPages}
        loading={loadingDepartments || isLoading || isFetching}
        clickHandler={{
          onAddClick: handleClickAdd,
          onSortClick: handleSortClick,
          onSearch: handleSearch,
          onActionClick: (e, row) => handleClick(e, row),
        }}
        message={departments?.length === 0 ? allDepartments?.message : false}
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
        isLoading={addIsLoading || updateIsLoading}
        preview={preview}
        setPreview={setPreview}
        exposeReset={(resetFn) => setResetForm(() => resetFn)}
      />

      <SmallDialog
        open={deleteDialog}
        setOpen={setDeleteDialog}
        itemTitle={rowDetails?.name}
        handleDelete={handleDelete}
        isLoading={deleteIsLoading}
        itemTitle={rowDetails?.name}
      />
    </>
  );
};

export default Department;
