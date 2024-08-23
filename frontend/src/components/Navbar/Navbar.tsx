import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ReorderIcon from "@mui/icons-material/Reorder";
import {
  Container,
  Stack,
  Tooltip,
  MenuItem,
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  Badge,
} from "@mui/material";
import { NAVBAR_HEIGHT } from "../../constants/index";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Logout } from "@mui/icons-material";
import useTheme from "../../lib/hooks/useTheme";
import LanguageIcon from "@mui/icons-material/Language";
import { Theme, useMediaQuery } from "@mui/material";
import { Search, StyledInputBase } from "@components/Search";
import { useNavigate } from "react-router-dom";
import useAccountContext from "@src/hooks/useAccountContext";
import logout from "@src/api/logout";

interface NavbarProps {
  onCartOpen: () => void;
}

const Navbar = ({ onCartOpen }: NavbarProps) => {
  const navItems = ["Handbags", "Watches", "Skincare", "Jewellery", "Apparels"];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElCetagories, setAnchorElCetagories] =
    useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const openCetagories = Boolean(anchorElCetagories);

  const { onLogout } = useAccountContext();

  const handleClick = (event: {
    currentTarget: React.SetStateAction<HTMLElement | null>;
  }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseCetagories = () => {
    setAnchorElCetagories(null);
  };

  const handleClickCetagories = (event: {
    currentTarget: React.SetStateAction<HTMLElement | null>;
  }) => {
    setAnchorElCetagories(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    onLogout();
    handleClose();
  }

  const navigate = useNavigate();
  const handleCLickOnProfile = () => {
    navigate("/user-profile");
    handleClose();
  }

  const [theme, toggleTheme] = useTheme();
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const isLGUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const isEmptyToken = (token: string | null): boolean => {
    return !token || token === "";
  }
  const accessToken = localStorage.getItem("access-token");
  const isLoggedIn = !isEmptyToken(accessToken);

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
            <Typography
              variant="h3"
              noWrap
              component="a"
              href="#"
              sx={{
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
            {isLGUp && (
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
              <Search width={362}>
                <SearchIcon
                  sx={{ height: "24px", width: "24px", color: "var(--dark)" }}
                />
                <StyledInputBase
                  placeholder="Search for products and brands....."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            )}
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
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <PermIdentityIcon
                    sx={{
                      color: "var(--icon)",
                    }}
                  />
                </IconButton>
              </Tooltip>
              {/* } */}

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                {isLoggedIn &&
                  <MenuItem onClick={handleCLickOnProfile}>
                    <Avatar /> Profile
                  </MenuItem>
                }
                <MenuItem onClick={toggleTheme}>
                  <ListItemIcon>
                    <DarkModeIcon fontSize="small" />
                  </ListItemIcon>
                  Switch Theme
                </MenuItem>
                <MenuItem>
                  <ListItemIcon onClick={toggleTheme}>
                    <LanguageIcon fontSize="small" />
                  </ListItemIcon>
                  Switch Language{" "}
                </MenuItem>

                <Divider />
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
              <IconButton
                sx={{ width: "24px", height: "24px" }}
                onClick={onCartOpen}
              >
                <Badge
                  variant="dot"
                  color="warning"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  sx={{
                    "& .MuiBadge-badge": {
                      transform: "translate(20%, 50%)",
                    },
                  }}
                >
                  <WorkOutlineIcon
                    sx={{
                      color: "var(--icon)",
                    }}
                  />{" "}
                </Badge>
              </IconButton>
              {!isLGUp && (
                <>
                  <Tooltip title="Cetagories">
                    <IconButton
                      onClick={handleClickCetagories}
                      size="small"
                      aria-controls={
                        openCetagories ? "cetagories-menu" : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={openCetagories ? "true" : undefined}
                      sx={{
                        width: "24px",
                        height: "24px",
                      }}
                    >
                      <ReorderIcon
                        sx={{
                          color: "var(--icon)",
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    anchorEl={anchorElCetagories}
                    id="cetagories-menu"
                    open={openCetagories}
                    onClose={handleCloseCetagories}
                    sx={{
                      gap: "10px",
                    }}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    {navItems.map((item, index) => (
                      <MenuItem key={index}>
                        <Typography
                          noWrap
                          component="a"
                          href="#"
                          sx={{
                            color: "var(--high-emphasis)",
                            fontFamily: "Inter",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          {item}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )}
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
