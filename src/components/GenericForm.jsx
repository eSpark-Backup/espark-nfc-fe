import { Controller, FormProvider } from "react-hook-form";

import { Button, Stack } from "@mui/material";

import TextInput from "./inputs/TextInput";

import { useCustomForm } from "../hooks/useCustomForm";

import { submitButton } from "./styles";

const styles = {
  width: "100%",
  height: "100%",
};

const GenericForm = ({
  schema,
  fieldConfig,
  onSubmit,
  submitText,
  defaultValues = {},
}) => {
  const methods = useCustomForm(schema, defaultValues);
  const { control, handleSubmit, setValue, watch } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => onSubmit(data, methods))} style={styles}>
        <Stack>
          {fieldConfig.map((field) => (
            <Controller
              key={field.name}
              name={field.name}
              control={control}
              render={({ field: controllerField, fieldState }) => {
                const commonProps = {
                  ...controllerField,
                  label: field.label,
                  fullWidth: true,
                  error: !!fieldState.error,
                  helperText: fieldState.error?.message,
                  placeholder: field.placeholder,
                  value: controllerField.value ?? "",
                };

                return <TextInput type={field.type} {...commonProps} />;
              }}
            />
          ))}

          <Button variant="containedPrimary" type="submit" sx={submitButton}>
            {submitText}
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default GenericForm;
