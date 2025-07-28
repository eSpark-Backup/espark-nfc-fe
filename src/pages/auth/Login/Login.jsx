import { useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import GenericForm from "../../../components/GenericForm";

import { loginFormSchema } from "../../../validations/schema";

import { LOGINFIELDSCONFIG, LOGIN } from "../../../constants/Login";
import { PATHS } from "../../../constants/Paths";

import { backgroundImage, container, form } from "./styles";

const Login = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (data, methods) => {
    navigate(PATHS.dashboard);
    methods.reset();
  };

  return (
    <Box sx={container} className="center">
      <Box sx={backgroundImage} className="center">
        <Box sx={form} className="center">
          <Typography variant="h1">{LOGIN.heading}</Typography>

          <GenericForm
            fieldsConfig={LOGINFIELDSCONFIG}
            schema={loginFormSchema}
            onSubmit={handleFormSubmit}
            submitText={LOGIN.submit}
            gap={1.5}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
