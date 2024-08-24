import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, IconButton, Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import Sidebar from "@components/Sidebar";
import BreadCrumbs from "@components/product/BreadCrumbs";
import MobileDrawer from "@components/MobileDrawer";
import { useLocation } from 'react-router-dom';
import Header from "./Header";

const Layoutwithsidebar = () => {
    const location = useLocation();
    const path = location.pathname;
    console.log(path);

    const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

    return (
        <>
            <Container>
                <BreadCrumbs />
                <Header pageName={path} />
                <Stack
                    width="100%"
                    mt="16px"
                    direction="row"
                    justifyContent="space-between"
                    gap="16px"
                >
                    {isXs ? <MobileDrawer /> : <Sidebar />}
                    <Box flex={1}>
                        <Outlet />
                    </Box>
                </Stack>
            </Container>
        </>

    )
};

export default Layoutwithsidebar
