import React, { FC } from 'react'
import { Stack, IconButton, Badge, Tooltip } from '@mui/material'
import AccountMenu from './AccountMenu'
import CetagoriesSmScreens from './CetagoriesSmScreens'
import CetegoriesSmMenu from './CetegoriesSmMenu'
import Settings from './Settings'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import useLogic from './useLogic'
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom'
import useCartContext from '@src/hooks/useCartContext'

interface NavIconsProps {
    onCartOpen: () => void;
}

const NavIcons: FC<NavIconsProps> = ({ onCartOpen }) => {
    const navigate = useNavigate();

    const { handleCLickOnProfile, handleLogout, handleClick, open, isLGUp, isLoggedIn, anchorEl,
        anchorElCetagories, handleClickOnCart, handleClose, handleCLickLogin, toggleTheme, handleClickCetagories, handleCloseCetagories, navItems, openCetagories } = useLogic();

    const { getCart } = useCartContext();
    const cart = getCart();
    const length = cart.length;
    console.log(length)

    return (
        <Stack
            direction="row"
            gap="20px"
            justifyContent="space-between"
            alignItems="center"
        >
            {!isLoggedIn &&
                <Tooltip title="Login">
                    <IconButton onClick={handleCLickLogin} sx={{ width: "24px", height: "24px" }}>
                        <LoginIcon
                            sx={{
                                color: "var(--icon)",
                            }}
                        />
                    </IconButton>
                </Tooltip>
            }
            <IconButton sx={{ width: "24px", height: "24px" }}>
                <FavoriteBorderIcon
                    sx={{
                        color: "var(--icon)",
                    }}
                />
            </IconButton>

            <Settings onClick={handleClick} open={open} />
            <AccountMenu
                anchorEl={anchorEl}
                handleCLickOnProfile={handleCLickOnProfile}
                handleClose={handleClose}
                handleLogout={handleLogout}
                isLoggedIn={isLoggedIn}
                open={open}
                toggleTheme={toggleTheme}
                handleClickOnCart={handleClickOnCart}
            />

            {isLoggedIn &&
                <IconButton
                    sx={{ width: "24px", height: "24px" }}
                    onClick={onCartOpen}
                >
                    <Badge
                        badgeContent={length}
                        // variant="dot"
                        color="warning"
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        sx={{
                            "& .MuiBadge-badge": {
                                transform: "translate(60%, -50%)",
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
            }

            {!isLGUp && (
                <>
                    <CetagoriesSmScreens onClick={handleClickCetagories} openCetagories={openCetagories} />
                    <CetegoriesSmMenu anchorElCetagories={anchorElCetagories} navItems={navItems} onClick={handleCloseCetagories} openCetagories={openCetagories} />
                </>
            )}
        </Stack>
    )
}

export default NavIcons
