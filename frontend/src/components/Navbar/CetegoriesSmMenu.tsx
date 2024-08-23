import { Menu, MenuItem, Typography } from '@mui/material'
import React, { FC } from 'react'

interface CetegoriesSmMenuProps {
    anchorElCetagories: null | HTMLElement;
    onClick: () => void;
    navItems: string[];
    openCetagories: boolean;
}
const CetegoriesSmMenu: FC<CetegoriesSmMenuProps> = ({ anchorElCetagories, onClick, navItems, openCetagories }) => {
    return (
        <Menu
            anchorEl={anchorElCetagories}
            id="cetagories-menu"
            open={openCetagories}
            onClose={onClick}
            onClick={onClick}
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
    )
}

export default CetegoriesSmMenu
