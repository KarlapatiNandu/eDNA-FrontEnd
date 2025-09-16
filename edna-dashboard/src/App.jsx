import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import DashboardLayout from "./components/DashBoardLayout";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <DashboardLayout />
      </div>
    </ThemeProvider>
  );
}

export default App;
