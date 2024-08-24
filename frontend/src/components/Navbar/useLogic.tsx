import { useMediaQuery, Theme } from '@mui/material';
import logout from '@src/api/logout';
import useAccountContext from '@src/hooks/useAccountContext';
import useSnackbar from '@src/hooks/useSnackbar';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useTheme from '@src/lib/hooks/useTheme';

const useLogic = () => {
    const navItems = ["Handbags", "Watches", "Skincare", "Jewellery", "Apparels"];
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorElCetagories, setAnchorElCetagories] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const openCetagories = Boolean(anchorElCetagories);

    const { onLogout } = useAccountContext();

    const handleClick = (event: { currentTarget: React.SetStateAction<HTMLElement | null>; }) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseCetagories = () => {
        setAnchorElCetagories(null);
    };

    const handleClickCetagories = (event: { currentTarget: React.SetStateAction<HTMLElement | null>; }) => {
        setAnchorElCetagories(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const { showSnackbar } = useSnackbar();

    const handleLogout = () => {
        logout();
        showSnackbar({ severity: "success", message: "Successfully logged out" })
        onLogout();
        handleClose();
    }

    const handleCLickOnProfile = () => {
        navigate("/user-profile");
        setAnchorEl(null);
    }

    const [theme, toggleTheme] = useTheme();
    const isLGUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
    const isEmptyToken = (token: string | null): boolean => {
        return !token || token === "";
    }
    const accessToken = localStorage.getItem("user-token");
    const isLoggedIn = !isEmptyToken(accessToken);

    return {
        handleCLickOnProfile,
        handleLogout,
        isLoggedIn,
        isLGUp,
        toggleTheme,
        open,
        handleClick,
        anchorEl,
        anchorElCetagories,
        handleClose,
        handleClickCetagories,
        handleCloseCetagories,
        navItems,
        openCetagories,
    }
}

export default useLogic
