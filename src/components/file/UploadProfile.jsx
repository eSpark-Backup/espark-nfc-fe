import { useRef } from "react";
import { Controller } from "react-hook-form";
import {
  Avatar,
  Box,
  Button,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";

import { Upload } from "../../assets/images/svgs";
import { FORM } from "../../constants/Form";

import {
  heading,
  headingBox,
  headingBoxIcon,
  profileAvatar,
  profileContainer,
  profileUploadContainer,
} from "./styles";
import { errorText } from "../inputs/styles";

const UploadProfile = ({
  control,
  name,
  value,
  label,
  error,
  helperText,
  inputStyles,
  preview,
  setPreview,
}) => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e, onChange) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      onChange(file);
    }
    e.target.value = "";
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <Stack sx={{ order: 2, gap: 1 }}>
          <InputLabel sx={inputStyles?.label}>{label}</InputLabel>

          <Box sx={profileContainer(preview || value, error)}>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => handleFileChange(e, onChange)}
            />

            <Box sx={profileUploadContainer} onClick={handleClick}>
              {preview || value ? (
                <Avatar src={preview || value} sx={profileAvatar} />
              ) : (
                <Box sx={headingBox}>
                  <Box
                    component={"img"}
                    sx={headingBoxIcon}
                    src={Upload}
                    alt="Upload"
                  />
                  <Typography
                    variant="body2"
                    sx={{ ...heading, textTransform: "capitalize" }}
                  >
                    {FORM.upload}
                  </Typography>
                </Box>
              )}
            </Box>

            {!!error && (
              <Typography color="error" sx={errorText}>
                {helperText}
              </Typography>
            )}
          </Box>
        </Stack>
      )}
    />
  );
};

export default UploadProfile;
