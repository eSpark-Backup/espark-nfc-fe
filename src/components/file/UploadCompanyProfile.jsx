import { useRef, useState } from "react";
import { Controller } from "react-hook-form";

import { Avatar, Box, Typography } from "@mui/material";

import { Upload } from "../../assets/images/svgs";

import {
  avatar,
  companyProfileContainer,
  profileUploadContainer,
  heading,
  headingBox,
  headingBoxIcon,
} from "./styles";

const UploadCompanyProfile = ({
  control,
  name,
  error,
  helperText,
  setValue,
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
        <Box>
          <Box sx={companyProfileContainer(preview)}>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => handleFileChange(e, onChange)}
            />

            <Box sx={profileUploadContainer} onClick={handleClick}>
              {preview ? (
                <Avatar src={preview} sx={avatar} />
              ) : (
                <Box sx={headingBox}>
                  <Box
                    component={"img"}
                    sx={headingBoxIcon}
                    src={Upload}
                    alt="Upload"
                  />

                  <Typography variant="body2" sx={heading}>
                    Upload File
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
        </Box>
      )}
    />
  );
};

export default UploadCompanyProfile;
