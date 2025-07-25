import { Button, Stack } from "@mui/material";

import GenericForm from "./GenericForm";

import { FORM } from "../constants/Form";

import { formLayoutButton, label } from "./styles";

const FormLayout = ({
  title,
  editTitle,
  detail,
  fieldsConfig,
  schema,
  onSubmit,
  edit,
  profile,
  editBtn,
  rowDetails,
}) => {
  return (
    <Stack
      sx={{
        gap: 3,
        padding: { xs: 2, sm: 3 },
        paddingTop: '0px !important',
      }}
    >
      <GenericForm
        defaultValues={rowDetails}
        fieldsConfig={fieldsConfig}
        schema={schema}
        onSubmit={onSubmit}
        inputStyles={{ label }}
        profile={profile}
      />

      <Button type="submit" variant="contained" fullWidth sx={formLayoutButton}>
        {edit ? FORM.save : profile ? editBtn : FORM.add}
      </Button>
    </Stack>
  );
};

export default FormLayout;
