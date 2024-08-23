import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/variables.css";
import { initializeI18n } from "./i18n/locales.js";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/customTheme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from "./queryClient";
import AccountProvider from "./providers/AccountContext";
import SnackbarProvider from "./providers/SnackbarContext";

initializeI18n();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider>
            <AccountProvider>
              <Routes>
                <Route path="/*" element={<App />} />
              </Routes>
            </AccountProvider>
          </SnackbarProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
