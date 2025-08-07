import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import DetailsInDektop from "./DetailsInDektop";
import DetailsInMobile from "./DetailsInMobile";

import { useGetEmployeeByIdQuery } from "../../store/slices/employee/employeeApiSlice";

import { mainContainer } from "./styles";

const Details = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(600));

  const { id } = useParams();
  const { state } = useLocation();

  const {
    data: allEmployees,
    isError,
    error,
    isLoading,
    isSuccess,
    isFetching,
  } = useGetEmployeeByIdQuery(
    {
      id,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const [isAbout, setIsAbout] = useState(true);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    if (isSuccess && allEmployees) {
      const currEmp = allEmployees?.employee;
      setCurrentEmployee(currEmp);
    }
  }, [allEmployees, isSuccess]);

  return (
    <Box sx={mainContainer(isMobile)}>
      {isLoading || isFetching ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <CircularProgress
            sx={{
              color: "#3B5B82",
            }}
          />
        </Box>
      ) : isError &&
        error &&
        error?.data?.error !== "Invalid or expired token" ? (
        <Typography color="error">
          {error?.data?.error ||
            "Something went wrong while fetching employee details."}
        </Typography>
      ) : (
        <>
          {isMobile
            ? currentEmployee && (
                <DetailsInMobile
                  isAbout={isAbout}
                  setIsAbout={setIsAbout}
                  data={state}
                  currentEmployee={currentEmployee}
                  isMobile={isMobile}
                />
              )
            : currentEmployee && (
                <DetailsInDektop
                  isAbout={isAbout}
                  setIsAbout={setIsAbout}
                  data={state}
                  currentEmployee={currentEmployee}
                />
              )}
        </>
      )}
    </Box>
  );
};

export default Details;
