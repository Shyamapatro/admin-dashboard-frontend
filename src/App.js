import React from "react";
import DashBoard from "./components/Dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#5c6bc0',
    },
  },
});
function App() {

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <DashBoard />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
