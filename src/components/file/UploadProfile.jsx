import { useRef } from "react";
import { Controller } from "react-hook-form";
import {
  Avatar,
  Box,
  InputLabel,
  Stack,
  Typography,
  Button,
  Slider,
} from "@mui/material";
import Cropper from "react-easy-crop";

import uploadIcon from "../../assets/images/svgs/upload.svg";
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
import { useCallback } from "react";
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
  edit,
  fieldName,
  onCropRequest,
  croppingState,
  onCropComplete,
  performCrop,
  cancelCrop,
  setCrop,
  setZoom,
}) => {
  const inputRef = useRef();

  const zoomRef = useRef(croppingState?.zoom || 1);
  const frameRef = useRef(null);

  const handleZoomChange = useCallback(
    (_, newValue) => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);

      zoomRef.current = parseFloat(newValue.toFixed(2));

      frameRef.current = requestAnimationFrame(() => {
        setZoom(zoomRef.current);
      });
    },
    [setZoom]
  );

  const handleClick = () => {
    inputRef.current.click();
  };

  const validateFile = (file, fieldName) => {
    const maxSize = 2 * 1024 * 1024;
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];

    if (!allowedTypes.includes(file.type)) {
      throw new Error(
        `${fieldName}: Invalid file type. Allowed: JPEG, PNG, WebP`
      );
    }

    if (file.size > maxSize) {
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(1);
      throw new Error(
        `${fieldName}: File too large. Current: ${sizeInMB}MB, Maximum: 2MB`
      );
    }

    return true;
  };

  const handleFileChange = async (e, onChange) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        validateFile(file, fieldName || name);

        if (fieldName === "banner_image") {
          try {
            await validateBannerForMobile(file);
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl);
            onChange(file);
            toast.success("Banner image validated successfully!");
          } catch (validationError) {
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl);
            onCropRequest(file, fieldName, onChange);
          }
        } else {
          const previewUrl = URL.createObjectURL(file);
          setPreview(previewUrl);
          onChange(file);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
    e.target.value = "";
  };

  const isThisFieldCropping =
    croppingState?.isCropping && croppingState?.fieldName === fieldName;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value: fieldValue } }) => (
        <Stack sx={{ order: 2, gap: 1 }}>
          <InputLabel sx={inputStyles?.label}>{label}</InputLabel>

          <Box sx={profileContainer(preview || fieldValue, error)}>
            {isThisFieldCropping ? (
              <Box sx={{ width: "100%", p: 2 }}>
                <Typography variant="h6" gutterBottom align="center">
                  Crop{" "}
                  {fieldName === "banner_image"
                    ? "Banner Image"
                    : "Profile Image"}
                </Typography>

                <Box
                  sx={{
                    position: "relative",
                    height: fieldName === "banner_image" ? 200 : 300,
                    width: "100%",
                    bgcolor: "grey.100",
                    mb: 2,
                    borderRadius: 1,
                  }}
                >
                  <Cropper
                    image={croppingState.image}
                    crop={croppingState.crop}
                    zoom={croppingState.zoom}
                    aspect={croppingState.cropConfig.aspect}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                  />
                </Box>

                <Box sx={{ mb: 2, px: 1 }}>
                  <Typography variant="body2" sx={{ mb: 1 }} align="center">
                    Zoom: {Math.round(croppingState.zoom * 100)}%
                  </Typography>
                  <Slider
                    value={croppingState.zoom}
                    onChange={handleZoomChange}
                    min={0.5}
                    max={4}
                    step={0.01}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(v) => `${Math.round(v * 100)}%`}
                    sx={{
                      color: "primary.main",
                      transition: "none",
                      "& .MuiSlider-thumb": {
                        width: 20,
                        height: 20,
                        transition:
                          "transform 0.05s cubic-bezier(0.22, 1, 0.36, 1)",
                      },
                      "& .MuiSlider-rail, & .MuiSlider-track": {
                        transition: "none",
                      },
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Button variant="outlined" size="medium" onClick={cancelCrop}>
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    size="medium"
                    onClick={performCrop}
                  >
                    Apply
                  </Button>
                </Box>
              </Box>
            ) : (
              <>
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, onChange)}
                />

                <Box sx={profileUploadContainer} onClick={handleClick}>
                  {preview || fieldValue ? (
                    <Avatar
                      src={
                        typeof fieldValue === "string" ? fieldValue : preview
                      }
                      alt="Uploaded Preview"
                      sx={profileAvatar}
                    />
                  ) : (
                    <Box sx={headingBox}>
                      <Box sx={headingBoxIcon}>
                        <img
                          src={uploadIcon}
                          alt="Upload"
                          width={40}
                          height={40}
                        />
                      </Box>
                      <Typography sx={heading}>{FORM.upload}</Typography>
                    </Box>
                  )}
                </Box>
              </>
            )}
          </Box>

          {error && <Typography sx={errorText}>{helperText}</Typography>}
        </Stack>
      )}
    />
  );
};

export default UploadProfile;
