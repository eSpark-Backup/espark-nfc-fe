import { useRef, useState } from "react";
import { Controller } from "react-hook-form";

import { Avatar, Box, InputLabel, Stack, Typography } from "@mui/material";

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

const UploadProfile = ({
  control,
  name,
  label,
  error,
  helperText,
  setValue,
  inputStyles,
}) => {
  const inputRef = useRef();
  const [preview, setPreview] = useState();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e, onChange) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      onChange(file);
    } else {
      onChange(null);
      setValue(name, null, { shouldValidate: true });
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <Stack
          sx={{
            order: 2,
            gap: 1,
          }}
        >
          <InputLabel sx={inputStyles.label}>{label}</InputLabel>

          <Box sx={profileContainer(preview)}>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => handleFileChange(e, onChange)}
            />

            <Box sx={profileUploadContainer} onClick={handleClick}>
              {preview ? (
                <Avatar src={preview} sx={profileAvatar} />
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
                    sx={{
                      ...heading,
                      textTransform: "capitalize",
                    }}
                  >
                    {FORM.upload}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>

          {!!error && (
            <Typography color="error" fontSize={12} mt={1}>
              {helperText}
            </Typography>
          )}
        </Stack>
      )}
    />
  );
};

export default UploadProfile;
