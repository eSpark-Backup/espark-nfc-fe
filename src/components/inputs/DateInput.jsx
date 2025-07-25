import { Controller } from "react-hook-form";

import { InputLabel, Stack } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { dateInput } from "./styles";

const DateInput = ({
  control,
  name,
  label,
  value,
  onChange,
  error,
  helperText,
  inputStyles = {},
  gap = 1,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Stack gap={gap}>
          <InputLabel sx={inputStyles.label}>{label}</InputLabel>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              {...field}
              value={value || null}
              onChange={(val) => onChange(val)}
              slotProps={{
                textField: {
                  sx: dateInput(error),
                },
              }}
            />
          </LocalizationProvider>
        </Stack>
      )}
    />
  );
};

export default DateInput;
