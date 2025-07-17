import { Box, Typography } from "@mui/material";

import GenericForm from "../../../components/GenericForm";

import { loginFormSchema } from "../../../validations/schema";

import { FIELDCONFIG, HEADING, SUBMIT } from "../../../constants/Login";

import { backgroundImage, container, form } from "./styles";

const Login = () => {
  const handleFormSubmit = (data, methods) => {
    console.log("Final Submitted:", data);

    methods.reset();
  };

  return (
    <Box sx={container} className="center">
      <Box sx={backgroundImage} className="center">
        <Box sx={form} className="center">
          <Typography variant="h1">{HEADING}</Typography>

          <GenericForm
            fieldConfig={FIELDCONFIG}
            schema={loginFormSchema}
            onSubmit={handleFormSubmit}
            submitText={SUBMIT}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
