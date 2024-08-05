import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { InputBase, Container, Stack } from "@mui/material";
import { NAVBAR_HEIGHT } from "../../constants/index";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "var(--grey)",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  display: "flex",
  margin: 0,
  width: "362px",
  // height: "44px",
  padding: theme.spacing(1),
  alignItems: "center",
  justifyContent: "flex-start",
  pointerEvents: "none",
  gap: "8px",
  borderRadius: "4px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "var(--low-emphasis)",
  width: "100%",
  // height: "18px",
  "& .MuiInputBase-input": {
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: 500,
    // lineHeight: "18px",
    textAlign: "left",
    transition: theme.transitions.create("width"),
  },
}));

const Navbar = () => {
  const navItems = ["Handbags", "Watches", "Skincare", "Jewellery", "Apparels"];
  // const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <AppBar
      position="fixed"
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
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              noWrap
              component="a"
              href="#"
              sx={{
                display: { xs: "none", md: "flex" },
                color: "var(--logo)",
                width: "108px",
                height: "22px",
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              CORA'L
            </Typography>
            <Stack
              direction="row"
              sx={{
                gap: "20px",
                alignItems: "baseline",
              }}
            >
              {navItems.map((item, index) => (
                <Typography
                  key={index}
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    color: "var(--high-emphasis)",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <Search>
              <SearchIcon
                sx={{ height: "24px", width: "24px", color: "var(--dark)" }}
              />
              <StyledInputBase
                placeholder="Search for products and brands....."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Stack
              direction="row"
              gap="20px"
              justifyContent="space-between"
              alignItems="center"
            >
              <IconButton sx={{ width: "24px", height: "24px" }}>
                <FavoriteBorderIcon
                  sx={{
                    color: "var(--icon)",
                  }}
                />
              </IconButton>
              <IconButton sx={{ width: "24px", height: "24px" }}>
                <PermIdentityIcon
                  sx={{
                    color: "var(--icon)",
                  }}
                />
              </IconButton>
              <IconButton sx={{ width: "24px", height: "24px" }}>
                <WorkOutlineIcon
                  sx={{
                    color: "var(--icon)",
                  }}
                />
              </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
