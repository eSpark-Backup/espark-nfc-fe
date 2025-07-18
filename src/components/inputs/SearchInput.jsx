import {
  InputAdornment,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Search } from "../../assets/images/svgs";

import { searchInput } from "./styles";

const SearchInput = ({ onSearch }) => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TextField
      placeholder="Search..."
      size="small"
      fullWidth={isSmDown}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <img src={Search} alt="Search" />
          </InputAdornment>
        ),
      }}
      sx={searchInput}
      onChange={(e) => onSearch?.(e.target.value)}
    />
  );
};

export default SearchInput;
