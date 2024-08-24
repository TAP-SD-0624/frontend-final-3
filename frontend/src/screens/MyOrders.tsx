import React, { useState } from 'react'
import {
    Container, Box, Stack, Typography, Tab, Tabs, Grid, Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    IconButton,
    Checkbox,
    FormControlLabel,
} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useMediaQuery } from "@mui/material";
import { mockOrders } from '@src/mocks';
import TabsSection from '@components/TabsSection';
import "./table.css"
const MyOrders = () => {
    const [tabIndex, setTabIndex] = useState(0);

    //@ts-ignore
    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    //@ts-ignore
    const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

    const orderTabs = ["Completed", "Processing", "Cancelled"];
    const orderTabPanels = [<Grid container spacing={10}>
        <Grid item xs={6} sm={12}>
            <Table sx={{ width: "100%"}}>
                <TableHead>

                    <TableRow sx={{ width: "100%" }}>
                        <TableCell sx={{ width: "50px", color: "var(--low-emphasis)" }}>
                        </TableCell>
                        <TableCell sx={{ color: "var(--low-emphasis)" }}>
                            Order Id
                        </TableCell>
                        <TableCell sx={{ color: "var(--low-emphasis)" }}>Date</TableCell>
                        <TableCell sx={{ color: "var(--low-emphasis)" }}>Price</TableCell>
                        <TableCell sx={{ color: "var(--low-emphasis)" }}>
                            Status
                        </TableCell>
                        <TableCell sx={{ color: "var(--low-emphasis)" }}>

                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {mockOrders.map((item) => (
                        <TableRow key={item.id} sx={{ borderBottom: "none" }}>
                            <TableCell sx={{ paddingRight: '0px', verticalAlign: "top", borderBottom: "none", backgroundColor: "var(--grey)" }}>
                                <Checkbox sx={{ width: "18px", height: "18px", color: "var(--low-emphasis)" }} />

                            </TableCell>
                            <TableCell sx={{ verticalAlign: "top", borderBottom: "none", backgroundColor: "var(--grey)" }}>

                                <Typography
                                    sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                                    color="var(--high-emphasis)"
                                >
                                    {item.orderId}
                                </Typography>

                            </TableCell>
                            <TableCell sx={{ verticalAlign: "top", borderBottom: "none", backgroundColor: "var(--grey)" }}>
                                <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                                    color="var(--high-emphasis)">
                                    {item.date}
                                </Typography>
                            </TableCell>

                            <TableCell sx={{ verticalAlign: "top", borderBottom: "none", backgroundColor: "var(--grey)" }}>
                                <Typography color="var(--high-emphasis)" sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                                >
                                    {item.price}
                                </Typography>

                            </TableCell>
                            <TableCell sx={{ verticalAlign: "top", borderBottom: "none", backgroundColor: "var(--grey)" }}>
                                <Typography color="var(--primary)" sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                                >
                                    {item.status}
                                </Typography>

                            </TableCell>
                            <TableCell sx={{ verticalAlign: "top", borderBottom: "none", backgroundColor: "var(--grey)" }}>
                                <IconButton sx={{ width: "24px", height: "24px" }}>
                                    <ArrowForwardIosIcon sx={{ width: "fit-content", height: "15px", color: "var(--low-emphasis)" }} />
                                </IconButton>

                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table></Grid></Grid>, <Typography
                sx={{
                    textTransform: "none",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "var(--low-emphasis)",
                    whiteSpace: "pre-line",
                    lineHeight: 1.5,
                }}
            >
        Related Products content goes here.
    </Typography>, <Typography
        sx={{
            textTransform: "none",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "500",
            color: "var(--low-emphasis)",
            whiteSpace: "pre-line",
            lineHeight: 1.5,
        }}
    >
        Related Products content goes here.
    </Typography>];

    return (
        <Box>
            <TabsSection tab={orderTabs} tabPanel={orderTabPanels} />
        </Box>
    )
}

export default MyOrders
