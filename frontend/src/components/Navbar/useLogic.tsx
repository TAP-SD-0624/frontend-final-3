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
    const handleClose = () => {
        console.log(!Boolean(anchorEl))
        console.log(open)
        setAnchorEl(prev => {
            // If prev is not null, close the menu
            if (prev) {
                return null;
            }
            // If prev is already null, do nothing
            return prev;
        });
    };
    ;

    const handleClick = (event: { currentTarget: React.SetStateAction<HTMLElement | null>; }) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClickOnCart = () => {
        handleClose();
        navigate("/myCart");
    }

    const handleCloseCetagories = () => {
        setAnchorElCetagories(null);
    };

    const handleClickCetagories = (event: { currentTarget: React.SetStateAction<HTMLElement | null>; }) => {
        setAnchorElCetagories(event.currentTarget);
    };



    const handleCLickLogin = () => {
        setAnchorEl(null)
        navigate("/login");
    }


    const { showSnackbar } = useSnackbar();

    const handleLogout = () => {
        logout();
        showSnackbar({ severity: "success", message: "Successfully logged out" })
        onLogout();
        handleClose();
    }

    const handleCLickOnProfile = () => {
        handleClose();
        navigate("/user-profile");
    }

   

    const [theme, toggleTheme] = useTheme();
    const handleToggleTheme = () => {
        handleClose();
        toggleTheme();
    }

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
        handleCLickLogin,
        handleClickOnCart,
        handleToggleTheme,
        setAnchorEl,
    }
}

export default useLogic
