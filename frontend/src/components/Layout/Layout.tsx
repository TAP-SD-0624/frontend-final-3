import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import CartModal from "@components/cardModal/CardModal";
import { useState } from "react";
const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack
      sx={{
        minHeight: "100vh",
      }}
    >
      <Navbar onCartOpen={() => setOpen(true)} />
      <Box flex={1}>
        <Outlet />
      </Box>
      <Footer />
      <CartModal open={open} onClose={() => setOpen(false)} />
    </Stack>
  );
};

export default Layout;
