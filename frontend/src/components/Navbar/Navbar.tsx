import React, { useState } from "react";
import {
  Container,
  Toolbar,
  Box,
  AppBar,
  Theme,
  useMediaQuery
} from "@mui/material";
import { NAVBAR_HEIGHT } from "../../constants/index";
import Categories from "./Categories";
import Logo from "./Logo";
import NavIcons from "./NavIcons";
import Searchbar from "./Searchbar";

interface NavbarProps {
  onCartOpen: () => void;
}

const Navbar = ({ onCartOpen }: NavbarProps) => {
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const isLGUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "var(--bright)",
        height: NAVBAR_HEIGHT,
        boxShadow: "none",
      }}
    >
      <Container>
        <Toolbar
          sx={{
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 !important",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Logo />
            {isLGUp && (
              <Categories />
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            {isMdUp && (
              <Searchbar />
            )}
            <NavIcons onCartOpen={onCartOpen} />
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
