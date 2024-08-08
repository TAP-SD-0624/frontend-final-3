import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/variables.css";
import { initializeI18n } from "./i18n/locales.js";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/customTheme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

initializeI18n();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
