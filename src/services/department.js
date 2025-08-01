import { toast } from "sonner";

const handleCreateDepartmentMutation = async (
  body,
  addDepartment,
  setError,
  methods,
  handleCloseFormDialog
) => {
  try {
    const res = await addDepartment(body).unwrap();

    if (res.success) {
      toast.success(res?.message || "Department created successfuy");

      handleCloseFormDialog();

      methods.reset();

      return res;
    }

    return null;
  } catch (error) {
    let errors = error?.data;

    if (typeof errors?.errors === "object") {
      setError(errors?.errors);
    } else {
      toast.error(
        errors?.message ||
          errors?.error ||
          errors ||
          "Department creation failed",
        {
          id: "global-error",
        }
      );
    }

    return null;
  }
};

const handleUpdateDepartmentMutation = async (
  body,
  departmentId,
  updateDepartment,
  setError,
  methods,
  handleCloseFormDialog
) => {
  try {
    const res = await updateDepartment({ body, id: departmentId }).unwrap();

    if (res.success) {
      toast.success(res?.message || "Department updated successfuy");

      handleCloseFormDialog();

      methods.reset();
      return res;
    }
  } catch (error) {
    let errors = error?.data;

    if (typeof errors?.errors === "object") {
      setError(errors?.errors);
    } else {
      toast.error(
        errors?.message ||
          errors?.error ||
          errors ||
          "Department updation failed",
        {
          id: "global-error",
        }
      );
    }

    return null;
  }
};

const handleDeleteDepartmentMutation = async (
  departmentId,
  deleteDepartment,
  setError,
  handleCloseFormDialog
) => {
  try {
    const res = await deleteDepartment({ id: departmentId }).unwrap();

    if (res.success) {
      toast.success(res?.message || "Department deleted successfully");

      handleCloseFormDialog();

      return res;
    }
  } catch (error) {
    let errors = error?.data;

    if (typeof errors?.errors === "object") {
      setError(errors?.errors);
    } else {
      toast.error(
        errors?.message ||
          errors?.error ||
          errors ||
          "Department deletion failed",
        {
          id: "global-error",
        }
      );
    }

    return null;
  }
};

export {
  handleCreateDepartmentMutation,
  handleUpdateDepartmentMutation,
  handleDeleteDepartmentMutation,
};
