import { Logout } from '@mui/icons-material'
import { Menu, MenuItem, Avatar, ListItemIcon, Divider } from '@mui/material'
import React, { FC } from 'react'
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageIcon from "@mui/icons-material/Language";

interface AccountMenuProps {
    anchorEl: HTMLElement | null;
    handleClose: () => void;
    isLoggedIn: boolean;
    handleCLickOnProfile: () => void;
    handleLogout: () => void;
    open: boolean;
    toggleTheme: () => void;
}

const AccountMenu: FC<AccountMenuProps> = ({ anchorEl, toggleTheme, handleCLickOnProfile, handleLogout, isLoggedIn, handleClose, open }) => {
    return (
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
                <ListItemIcon>
                    <LanguageIcon fontSize="small" />
                </ListItemIcon>
                Switch Language{" "}
            </MenuItem>

            {isLoggedIn &&
                <><Divider /><MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem></>
            }
        </Menu>
    )
}

export default AccountMenu
