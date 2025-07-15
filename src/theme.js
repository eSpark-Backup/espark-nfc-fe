import { createTheme } from "@mui/material/styles";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const palette = {
  mode: "light",

  primary: {
    main: "#375DFB",
    dark: "#213795",
    light: "#64b5f6",
    contrastText: "#FFFFFF",
  },

  secondary: {
    main: "#3B5B82",
    light: "#F6F8FA",
    dark: "#2C2B2B",
    contrastText: "#FFFFFF",
  },

  error: {
    main: "#DF1C41",
    contrastText: "#FFFFFF",
  },

  info: {
    main: "#1570EF",
    contrastText: "#FFFFFF",
  },

  success: {
    main: "#4caf50",
    contrastText: "#FFFFFF",
  },

  warning: {
    main: "#ff9800",
    contrastText: "#000000",
  },

  text: {
    primary: "#0A0D14",
    secondary: "#525866",
    disabled: "#A8ABB3",
  },

  background: {
    default: "#FFFFFF",
    paper: "#FAFAFA",
  },

  action: {
    selected: "#2684FC",
    disabled: "#A8ABB3",
    disabledBackground: "#D9D9D9",
  },

  divider: "#E2E4E9",
};

const typography = {
  fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
  h1: {
    fontSize: "3rem",
    lineHeight: 1.2,
    fontWeight: 700,
  },
  h2: {
    fontSize: "2.25rem",
    lineHeight: 1.3,
    fontWeight: 600,
  },
  h3: {
    fontSize: "1.875rem",
    lineHeight: 1.4,
    fontWeight: 600,
  },
  h4: {
    fontSize: "1.5rem",
    lineHeight: 1.5,
    fontWeight: 500,
  },
  h5: {
    fontSize: "1.25rem",
    lineHeight: 1.5,
    fontWeight: 500,
  },
  h6: {
    fontSize: "1.125rem",
    lineHeight: 1.5,
    fontWeight: 500,
  },
  subtitle1: {
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  subtitle2: {
    fontSize: "0.875rem",
    lineHeight: 1.6,
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.6,
  },
  button: {
    fontSize: "0.875rem",
    fontWeight: 600,
    textTransform: "none",
    lineHeight: 1.6,
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: 1.4,
  },
  overline: {
    fontSize: "0.75rem",
    textTransform: "uppercase",
    lineHeight: 1.4,
  },
};

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        textTransform: "none",
        boxShadow: "none",
      },

      containedPrimary: {
        background: "linear-gradient(180deg, #375DFB -74.48%, #213795 137.83%)",
        color: "#FCFCFD",
        "&.Mui-disabled": {
          backgroundColor: "#375DFB8A",
          color: "#FCFCFD",
        },
      },

      containedSecondary: {
        backgroundColor: "#3B5B82",
        color: "#FFFFFF",
      },

      containedError: {
        backgroundColor: "#DF1C41",
        color: "#FFFFFF",
      },

      containedInfo: {
        backgroundColor: "#F6F8FA",
        border: "1px solid #E2E4E9",
        color: "#2684FC",
      },
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: "#344054",
        fontSize: "0.875rem",
      },
    },
  },

  MuiInputBase: {
    styleOverrides: {
      root: {
        color: "#344054",
      },
      input: {
        "&::placeholder": {
          color: "#98A2B3",
          opacity: 1,
        },
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      size: "small",
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },

  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: "16px",
        paddingRight: "16px",
        [`@media (min-width:${breakpoints.values.md}px)`]: {
          paddingLeft: "24px",
          paddingRight: "24px",
        },
      },
    },
  },
};

const shape = {
  borderRadius: 8,
};

const shadows = [
  "none",
  "0px 1px 3px rgba(0,0,0,0.12), 0px 1px 2px rgba(0,0,0,0.24)",
  "0px 3px 6px rgba(0,0,0,0.16), 0px 3px 6px rgba(0,0,0,0.23)",
  "0px 10px 20px rgba(0,0,0,0.19), 0px 6px 6px rgba(0,0,0,0.23)",
  ...Array(22).fill("0px 4px 20px rgba(0,0,0,0.1)"),
];

const theme = createTheme({
  breakpoints,
  palette,
  typography,
  components,
  shape,
  shadows,
});

export default theme;
