import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: "#34C94B",
    },
    background: {
      default: "#121212",
      paper: "#121212",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
});

export default theme;
