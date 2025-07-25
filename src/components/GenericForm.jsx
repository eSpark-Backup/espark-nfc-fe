import { Controller, FormProvider } from "react-hook-form";

import { Button, Stack } from "@mui/material";

import TextInput from "./inputs/TextInput";
import UploadCompanyProfile from "./file/UploadCompanyProfile";
import UploadProfile from "./File/UploadProfile";
import DateInput from "./inputs/DateInput";
import SelectDropdown from "./inputs/SelectDropdown";

import { useCustomForm } from "../hooks/useCustomForm";

import { submitButton } from "./styles";

const styles = {
  width: "100%",
  height: "100%",
};

const GenericForm = ({
  schema,
  fieldsConfig,
  onSubmit,
  submitText,
  defaultValues = {},
  gap,
  inputStyles,
  profile,
}) => {
  const methods = useCustomForm(schema, defaultValues);
  const { control, handleSubmit, setValue } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => onSubmit(data, methods))}
        style={styles}
      >
        <Stack gap={4}>
          <Stack gap={1.5}>
            {fieldsConfig.map((field) => (
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
                    inputStyles,
                  };

                  switch (field.type) {
                    case "file":
                      return (
                        <>
                          {profile ? (
                            <UploadCompanyProfile
                              {...commonProps}
                              setValue={setValue}
                            />
                          ) : (
                            <UploadProfile
                              {...commonProps}
                              setValue={setValue}
                            />
                          )}
                        </>
                      );

                    case "dropdown":
                      return <SelectDropdown {...commonProps} />;

                    case "date":
                      return <DateInput {...commonProps} />;

                    default:
                      return (
                        <TextInput
                          type={field.type}
                          {...commonProps}
                          gap={gap}
                        />
                      );
                  }
                }}
              />
            ))}
          </Stack>

          {submitText && (
            <Button variant="containedPrimary" type="submit" disableRipple sx={submitButton}>
              {submitText}
            </Button>
          )}
        </Stack>
      </form>
    </FormProvider>
  );
};

export default GenericForm;
