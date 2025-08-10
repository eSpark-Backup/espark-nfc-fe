import { Controller, FormProvider } from "react-hook-form";

import { Button, Stack } from "@mui/material";

import TextInput from "./inputs/TextInput";
import UploadCompanyProfile from "./file/UploadCompanyProfile";
import UploadProfile from "./file/UploadProfile";
import DateInput from "./inputs/DateInput";
import SelectDropdown from "./inputs/SelectDropdown";
import TextareaInput from "./inputs/TextareaInput";

import { useCustomForm } from "../hooks/useCustomForm";

import { submitButton } from "./styles";
import { useEffect } from "react";

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
  isLoading,
  login,
  edit,
  preview,
  setPreview,
  exposeReset,
  setSelectedDepartmentId,
  admin,
}) => {
  const methods = useCustomForm(schema, defaultValues);
  const { control, handleSubmit, setValue, reset } = methods;

  useEffect(() => {
    if (exposeReset) exposeReset(reset);
  }, [exposeReset, reset]);


  return (
    <FormProvider {...methods}>
      <form
        style={styles}
        onSubmit={
          login ? handleSubmit((data) => onSubmit(data, methods)) : null
        }
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
                              edit={edit}
                            />
                          ) : (
                            <UploadProfile
                              {...commonProps}
                              setValue={setValue}
                              edit={edit}
                              preview={preview}
                              setPreview={setPreview}
                            />
                          )}
                        </>
                      );

                    case "dropdown":
                      return (
                        <SelectDropdown
                          {...commonProps}
                          setSelectedDepartmentId={setSelectedDepartmentId}
                        />
                      );

                    case "date":
                      return <DateInput {...commonProps} setValue={setValue} />;

                    case "textarea":
                      return (
                        <TextareaInput
                          {...commonProps}
                          setValue={setValue}
                          profile={profile}
                          edit={edit}
                        />
                      );

                    default:
                      return (
                        <TextInput
                          type={field.type}
                          {...commonProps}
                          gap={gap}
                          profile={profile}
                          edit={edit}
                          admin={admin}
                          login={login}
                        />
                      );
                  }
                }}
              />
            ))}
          </Stack>

          <Button
            variant="containedPrimary"
            type={login ? "submit" : "button"}
            disableRipple
            sx={submitButton}
            disabled={isLoading}
            onClick={
              !login ? handleSubmit((data) => onSubmit(data, methods)) : null
            }
          >
            {submitText}
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default GenericForm;
