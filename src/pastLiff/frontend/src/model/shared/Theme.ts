import { createMuiTheme } from "@material-ui/core/styles";
export default createMuiTheme({
  // ----------------------------------------
  // global override
  // ----------------------------------------
  overrides: {
    // GlobalBackgroundStyle
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#fafafa",
          boxSizing: "border-box",
          padding: "24px 8px",
        },
      },
    },

    // Typography
    MuiTypography: {
      h1: {
        color: "#6e6e6e",
        fontSize: "16px",
        fontWeight: "bold",
      },
      subtitle1: {
        color: "#6e6e6e",
        fontSize: "14px",
        fontWeight: "bold",
      },
      body1: {
        color: "#6e6e6e",
        fontWeight: "bold",
        fontSize: "12px",
      },
      body2: {
        color: "#6e6e6e",
        fontSize: "12px",
      },
      caption: {
        color: "#272727",
      },
    },

    // Button
    MuiButton: {
      root: {
        color: "#ffffff",
        borderRadius: 4,
        fontSize: "12px",
        fontWeight: "bold",
        boxShadow: "0 1px 3px rgba(0, 0, 0, .2)",
        "&:disabled": {
          color: "#ffffff",
          backgroundColor: "#dfdfdf",
          border: "1px solid #dfdfdf",
        },
      },
      label: {
        textTransform: "none",
      },
      sizeLarge: {
        fontSize: "12px",
        height: "48px",
        padding: 0,
      },
      sizeSmall: {
        fontSize: "12px",
        height: "36px",
      },
    },

    // Card
    MuiCard: {
      root: {
        borderRadius: 8,
        height: "auto",
        boxShadow: "0 1px 17px rgba(0, 0, 0, .07)",
        position: "relative",
      },
    },

    // CardContent
    MuiCardContent: {
      root: {
        "&:last-child": {
          paddingBottom: "16px",
        },
      },
    },

    MuiFormLabel: {
      root: {
        color: "#6e6e6e",
        fontSize: "12px",
        fontWeight: "bold",
      },
    },

    MuiInput: {
      underline: {
        "&:after": {
          borderBottomColor: "#00266F",
        },
      },
    },

    // MobileStepper
    MuiMobileStepper: {
      root: {
        background: "none",
        justifyContent: "center",
      },
    },
  },

  // ----------------------------------------
  // typography
  // ----------------------------------------
  typography: {
    // https://material-ui.com/guides/migration-v3/
    //useNextVariants: true
  },

  // ----------------------------------------
  // palette
  // ----------------------------------------
  palette: {
    background: {
      default: "#fafafa",
    },

    // leeap blue
    primary: {
      main: "#00266F",
      light: "#5A8BBE",
    },

    // leeap red
    secondary: {
      main: "#D94848",
    },
  },

  // ----------------------------------------
  // props
  // ----------------------------------------
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiInput: {
      color: "primary",
    },
    MuiCheckbox: {
      color: "primary",
    },
    MuiRadio: {
      color: "primary",
    },
    MuiSwitch: {
      color: "primary",
    },
  },
});
