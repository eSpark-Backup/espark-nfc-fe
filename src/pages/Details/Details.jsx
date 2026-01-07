import { useState } from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import DetailsInDektop from "./DetailsInDektop";
import DetailsInMobile from "./DetailsInMobile";

import {
  useGetEmployeeByIdQuery,
  useGetEmployeePublicByIdQuery,
} from "../../store/slices/employee/employeeApiSlice";

import { mainContainer } from "./styles";
import { useGetCompanyQuery } from "../../store/slices/companyProfile/companyProfileApiSlice";

const Details = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(768));

  const { id } = useParams();
  const token = localStorage?.getItem("accessToken");
  const isWalletVisible  = Boolean(token);

  const {
    data: privateEmployeeData,
    isLoading: privateLoading,
    isError: privateError,
    error: privateErr,
    isFetching: privateFetching,
  } = useGetEmployeeByIdQuery(id, {
    skip: !isWalletVisible ,
    refetchOnMountOrArgChange: true,
  });

  const {
    data: publicEmployeeData,
    isLoading: publicLoading,
    isError: publicError,
    error: publicErr,
    isFetching: publicFetching,
  } = useGetEmployeePublicByIdQuery(id, {
    skip: isWalletVisible ,
    refetchOnMountOrArgChange: true,
  });

  const { data: profileData } = useGetCompanyQuery(id);

  const [isAbout, setIsAbout] = useState(true);

  const employeeData = isWalletVisible  ? privateEmployeeData : publicEmployeeData;
  const isLoading = privateLoading || publicLoading;
  const isFetching = privateFetching || publicFetching;
  const isError = privateError || publicError;
  const error = privateErr || publicErr;

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
          <CircularProgress sx={{ color: "#3B5B82" }} />
        </Box>
      ) : isError ? (
        <Typography color="error">
          {error?.data?.error ||
            "Something went wrong while fetching employee details."}
        </Typography>
      ) : (
        <>
          {isMobile
            ? employeeData?.employee && (
                <DetailsInMobile
                  isAbout={isAbout}
                  setIsAbout={setIsAbout}
                  currentEmployee={employeeData?.employee}
                  companyProfile={profileData?.company_profile}
                  isMobile={isMobile}
                />
              )
            : employeeData?.employee && (
                <DetailsInDektop
                  isAbout={isAbout}
                  setIsAbout={setIsAbout}
                  currentEmployee={employeeData?.employee}
                  companyProfile={profileData?.company_profile}
                />
              )}
        </>
      )}
    </Box>
  );
};

export default Details;
