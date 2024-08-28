import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { Box, Breadcrumbs, Container, Stack, Typography } from "@mui/material";
import CartModal from "@components/cardModal/CardModal";
import { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Layout = ({ breadcrumbs }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  const isAboutPage = location.pathname === '/about';
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signUp';


  return (
    <Stack
      sx={{
        minHeight: "100vh",
      }}
    >
      <Navbar onCartOpen={() => setOpen(true)} />
      <Box flex={1}>
        {/* Render Breadcrumbs if passed */}
        {breadcrumbs && (
          <Container>
            <Stack gap="8px">
              <Breadcrumbs
                separator={
                  <NavigateNextIcon
                    sx={{
                      width: "24px",
                      height: "24px",
                      color: "var(--high-emphasis)",
                    }}
                    fontSize="small"
                  />
                }
                aria-label="breadcrumb"
              >
                {!isHomePage && !isAboutPage && !isLoginPage && !isSignupPage && breadcrumbs.map(({ breadcrumb }, index) => (
                  <Typography sx={{
                    color: "var(--primary)",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                  }} key={index}>{breadcrumb}</Typography>
                ))}
              </Breadcrumbs>
            </Stack>
          </Container>
        )}
        <Outlet />
      </Box>
      <Footer />
      <CartModal open={open} onClose={() => setOpen(false)} />
    </Stack>
  );
};

export default Layout;
