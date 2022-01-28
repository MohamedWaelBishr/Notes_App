import "./styles.css";
import CustomDrawer from "./components/CustomDrawer";
import * as React from "react";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
      <CustomDrawer toggleMode = {colorMode.toggleColorMode}/>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState(localStorage.getItem("Mode") || 'light');
 
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        localStorage.setItem("Mode", mode === "light" ? "dark" : "light");
      },
    }),
    [mode],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
