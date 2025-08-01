import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import GenericForm from "../../../components/GenericForm";

import { verifyEmailSchema } from "../../../validations/schema";

import {
  VERIFYEMAIL,
  VERIFYEMAILFIELDSCONFIG,
} from "../../../constants/EmailVerify";

import { useVerifyEmailMutation } from "../../../store/slices/auth/authApiSlice";

import { handleVerifyEmailMutation } from "../../../services/auth";

import { backgroundImage, container, form } from "./styles";

const EmailVerify = () => {
  const navigate = useNavigate();

  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();

  const [error, setError] = useState(null);

  const handleFormSubmit = async (data, methods) => {
    const res = await handleVerifyEmailMutation(
      data,
      verifyEmail,
      setError,
      navigate,
      methods
    );
    if (!res) return;
  };

  return (
    <Box sx={container} className="center">
      <Box sx={backgroundImage} className="center">
        <Box sx={form} className="center">
          <Typography variant="h1" color="#101828">
            {VERIFYEMAIL.heading}
          </Typography>

          <GenericForm
            fieldsConfig={VERIFYEMAILFIELDSCONFIG}
            schema={verifyEmailSchema}
            onSubmit={handleFormSubmit}
            submitText={VERIFYEMAIL.submit}
            gap={1.5}
            isLoading={isLoading}
            login
          />
        </Box>
      </Box>
    </Box>
  );
};

export default EmailVerify;
