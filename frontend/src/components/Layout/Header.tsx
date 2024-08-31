import { Logout } from '@mui/icons-material';
import { Stack, Typography, IconButton, Theme, useMediaQuery } from '@mui/material';
import { Search, StyledInputBase } from '@components/Search';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import React from 'react'
import { useLocation } from 'react-router-dom';
import useLogic from '@components/Navbar/useLogic';

interface HeaderProps {
    pageName: string;
}

const Header = ({ pageName }: HeaderProps) => {
    let title = '';
    let button = <></>;
    const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
    const location = useLocation();
    const orderId = location?.state?.orderId;
    const { handleLogout } = useLogic();

    switch (pageName) {
        case '/user-profile/order':
            title = `Order ${orderId}`;
            break;
        case '/user-profile/myOrders':
            title = 'My Orders';
            button = <Stack direction="row" width="360px" gap="8px" alignItems="center" justifyContent="center">
                <ArrowBackIosNewIcon sx={{ width: "24px", height: "24px", color: "var(--dark)" }} />
                <Search width={396}>
                    <StyledInputBase
                        placeholder="Search"
                        inputProps={{ "aria-label": "search" }}
                    />
                </Search>
            </Stack>
            break;
        case '/user-profile':
            title = 'Personal Information';
            button = <IconButton
                onClick={handleLogout}
                sx={{
                    border: "1px solid var(--primary)",
                    borderRadius: "8px",
                    gap: "8px",
                    width: {
                        xs: "50px",
                        sm: "100px",
                        md: "120px",
                        lg: "136px",
                    }
                }}
            >
                <Logout
                    sx={{
                        height: "24px", color: "var(--primary)", width: "24px",
                    }}
                    fontSize="small"
                />
                <Typography
                    display={isXs ? "none" : "block"}
                    sx={{
                        fontFamily: "Inter",
                        fontWeight: "600",
                        color: "var(--primary)",
                        fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "14px",
                            lg: "16px",
                        },
                    }}
                >
                    Logout
                </Typography>
            </IconButton>;
            break;
        default:
            title = '';
    }
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
        >
            <Typography
                sx={{
                    fontFamily: "Inter",
                    fontWeight: "600",
                    color: "var(--primary)",
                    fontSize: {
                        xs: "20px",
                        sm: "25px",
                        md: "30px",
                        lg: "34px",
                    },
                }}
            >
                {title}
            </Typography>
            {button}
        </Stack>
    )
}

export default Header