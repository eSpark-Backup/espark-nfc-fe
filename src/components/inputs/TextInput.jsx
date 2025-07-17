import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";

import { Box, TextField, InputLabel, InputAdornment } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import { FORGET } from "../../constants/Login";

import { container, link, linkContainer } from "./styles";

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
}) => {

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Box
          sx={{
            ...inputStyles.container,
            ...container,
            marginTop: name === "password" ? "24px" : 0,
          }}
        >
          <Box sx={linkContainer}>
            <InputLabel>{label}</InputLabel>
            {name === "password" && (
              <Link to={"/"} style={link}>
                {FORGET}?
              </Link>
            )}
          </Box>

          <TextField
            {...field}
            type={type}
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
                    <RemoveRedEyeOutlinedIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
      )}
    />
  );
};

export default TextInput;
