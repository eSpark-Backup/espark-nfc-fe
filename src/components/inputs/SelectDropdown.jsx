import { Controller } from "react-hook-form";

import { InputLabel, MenuItem, Select, Stack } from "@mui/material";

import { DEPARTMENTNAMES } from "../../constants/Form";

import { inputPlaceholder, menuItem, selectInputRoot } from "./styles";

const SelectDropdown = ({
  control,
  name,
  label,
  value,
  error,
  helperText,
  placeholder,
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

          <Select
            {...field}
            value={value}
            displayEmpty
            renderValue={(selected) =>
              selected ? (
                selected
              ) : (
                <span style={inputPlaceholder}>{placeholder}</span>
              )
            }
            slotProps={{
              root: {
                sx: selectInputRoot(error),
              },
            }}
          >
            {DEPARTMENTNAMES.map((opt) => (
              <MenuItem key={opt.value} value={opt.value} sx={menuItem}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </Stack>
      )}
    />
  );
};

export default SelectDropdown;
