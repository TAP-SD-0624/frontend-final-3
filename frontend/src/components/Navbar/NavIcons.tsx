import React, { FC} from 'react'
import { Stack, IconButton, Badge } from '@mui/material'
import AccountMenu from './AccountMenu'
import CetagoriesSmScreens from './CetagoriesSmScreens'
import CetegoriesSmMenu from './CetegoriesSmMenu'
import Settings from './Settings'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import useLogic from './useLogic'

interface NavIconsProps {
    onCartOpen: () => void;
}

const NavIcons: FC<NavIconsProps> = ({ onCartOpen }) => {
    const { handleCLickOnProfile, handleLogout, handleClick, open, isLGUp, isLoggedIn, anchorEl,
        anchorElCetagories, handleClose, toggleTheme, handleClickCetagories, handleCloseCetagories, navItems, openCetagories } = useLogic();

    return (
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

            <Settings onClick={handleClick} open={open} />
            <AccountMenu
                anchorEl={anchorEl}
                handleCLickOnProfile={handleCLickOnProfile}
                handleClose={handleClose}
                handleLogout={handleLogout}
                isLoggedIn={isLoggedIn}
                open={open}
                toggleTheme={toggleTheme}
            />

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
                    <CetagoriesSmScreens onClick={handleClickCetagories} openCetagories={openCetagories} />
                    <CetegoriesSmMenu anchorElCetagories={anchorElCetagories} navItems={navItems} onClick={handleCloseCetagories} openCetagories={openCetagories} />
                </>
            )}
        </Stack>
    )
}

export default NavIcons
