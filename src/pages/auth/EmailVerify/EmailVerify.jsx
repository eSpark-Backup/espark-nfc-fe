import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Box, Button, Typography } from "@mui/material";

import GenericForm from "../../../components/GenericForm";

import { verifyEmailSchema } from "../../../validations/schema";

import {
  VERIFYEMAIL,
  VERIFYEMAILFIELDSCONFIG,
} from "../../../constants/EmailVerify";

import {
  useVerifyEmailMutation,
  useResendVerificationEmailMutation,
} from "../../../store/slices/auth/authApiSlice";

import { handleVerifyEmailMutation } from "../../../services/auth";

import { backgroundImage, container, form } from "./styles";
import { useDispatch } from "react-redux";

const EmailVerify = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  const [resendEmail, { isLoading: isResending }] =
    useResendVerificationEmailMutation(); 

  const [error, setError] = useState(null);

  const handleFormSubmit = async (data, methods) => {
    const res = await handleVerifyEmailMutation(
      data,
      verifyEmail,
      setError,
      navigate,
      methods,
      dispatch
    );
    if (!res) return;
  };

  const handleResendCode = async () => {
    try {
      const res = await resendEmail().unwrap();
      if (res.success) {
        toast.success(res?.message || "Verification code resent!");
      } else {
        toast.error(res?.message || "Failed to resend code.");
      }
    } catch (err) {
      const message = err?.data?.message || err?.data?.error || "Resend failed";
      toast.error(message);
    }
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
          <Button
            variant="text"
            onClick={handleResendCode}
            disabled={isResending}
            sx={{ mt: 2 }}
          >
            {isResending ? "Resending..." : "Resend Code"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailVerify;
