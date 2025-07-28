import { Controller } from "react-hook-form";

import {
  Box,
  TextField,
  InputLabel,
  InputAdornment,
  Stack,
  IconButton,
} from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import { container, iconButton, linkContainer } from "./styles";
import { useState } from "react";

const TextInput = ({
  control,
  name,
  label,
  value,
  type = "text",
  error,
  helperText,
  placeholder,
  inputStyles = {},
  gap = 1,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Stack
          gap={gap}
          sx={{
            ...inputStyles.container,
            ...container(error),
          }}
        >
          <Box sx={linkContainer}>
            <InputLabel sx={inputStyles.label}>{label}</InputLabel>
          </Box>

          <TextField
            {...field}
            type={
              name === "password" && showPassword
                ? "text"
                : name === "password" && !showPassword
                ? "password"
                : type
            }
            variant="outlined"
            fullWidth
            error={!!error}
            helperText={helperText}
            placeholder={placeholder}
            value={value}
            slotProps={{
              input: name === "password" && {
                endAdornment: (
                  <InputAdornment position="start">
                    {showPassword ? (
                      <IconButton
                        disableRipple
                        sx={iconButton}
                        onClick={() => setShowPassword(false)}
                      >
                        <RemoveRedEyeOutlinedIcon />
                      </IconButton>
                    ) : (
                      <IconButton
                        disableRipple
                        sx={iconButton}
                        onClick={() => setShowPassword(true)}
                      >
                        <VisibilityOffOutlinedIcon />
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              },
            }}
          />
        </Stack>
      )}
    />
  );
};

export default TextInput;
