import { Stack } from "@mui/material";

import GenericForm from "./GenericForm";

import { FORM } from "../constants/Form";

import { label } from "./styles";

const FormLayout = ({
  fieldsConfig,
  schema,
  onSubmit,
  edit,
  profile,
  defaultValues,
  isLoading,
  text,
  preview,
  setPreview,
  exposeReset,
  setSelectedDepartmentId,
  admin
}) => {
  return (
    <Stack
      sx={{
        gap: 3,
        padding: { xs: 2, sm: 3 },
        paddingTop: "0px !important",
      }}
    >
      <GenericForm
        defaultValues={defaultValues}
        fieldsConfig={fieldsConfig}
        schema={schema}
        onSubmit={onSubmit}
        inputStyles={{ label }}
        profile={profile}
        submitText={profile ? text : edit ? FORM.save : FORM.add}
        isLoading={isLoading}
        edit={edit}
        preview={preview}
        setPreview={setPreview}
        exposeReset={exposeReset}
        setSelectedDepartmentId={setSelectedDepartmentId}
        admin={admin}
      />
    </Stack>
  );
};

export default FormLayout;
