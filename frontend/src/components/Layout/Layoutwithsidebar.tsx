import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import Sidebar from "@components/Sidebar";
import BreadCrumbs from "@components/product/BreadCrumbs";
import { Logout } from "@mui/icons-material";
import { useLocation } from 'react-router-dom';
import Header from "./Header";

const Layoutwithsidebar = () => {
    const location = useLocation();
    const path = location.pathname;
    console.log(path);

   


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
                    <Sidebar />
                    <Box flex={1}>
                        <Outlet />
                    </Box>
                </Stack>
            </Container>
        </>

    )
};

export default Layoutwithsidebar
