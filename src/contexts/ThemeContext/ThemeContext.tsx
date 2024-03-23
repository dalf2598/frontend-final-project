import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProviderProps } from "./ThemeContext.types";

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
