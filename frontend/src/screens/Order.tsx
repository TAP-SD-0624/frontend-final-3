import TabPanel from '@components/product/TabPanel'
import { Container, Box, Stack, Typography, IconButton, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, Link, TableContainer, Divider, Button } from '@mui/material'
import { order } from '@src/mocks'
import React, { useState } from 'react'
import { useMediaQuery } from "@mui/material";
import OrderInformation from '@components/OrderInformation';
import TabsSection from '@components/TabsSection';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);

    //@ts-ignore
    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    //@ts-ignore
    const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
    const orderTabs = ["Items Orderd", "Invoices", "Order Shipment"];
    const orderTabPanels = [<TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell sx={{ color: "var(--low-emphasis)" }}>
                        Product Name
                    </TableCell>
                    <TableCell sx={{ color: "var(--low-emphasis)" }}>Price</TableCell>
                    <TableCell sx={{ color: "var(--low-emphasis)" }}>Qty</TableCell>
                    <TableCell sx={{ color: "var(--low-emphasis)" }}>
                        Subtotal
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {order.map((item) => (
                    <TableRow key={item.id} sx={{ borderBottom: "none" }}>
                        <TableCell sx={{ verticalAlign: "top", borderBottom: "none" }}>
                            <Box display="flex" alignItems="flex-start">
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    style={{
                                        width: "75px",
                                        height: "80px",
                                        borderRadius: "8px",
                                        marginRight: "16px",
                                    }}
                                />
                                <Box>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight="bold"
                                        color="var(--high-emphasis)"
                                    >
                                        {item.brand}
                                    </Typography>
                                    <Typography variant="body2" color="var(--low-emphasis)">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="var(--low-emphasis)">
                                        Qty- {item.qty}
                                    </Typography>
                                </Box>
                            </Box>
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top", borderBottom: "none" }}>
                            <Typography fontSize="14px" color="var(--high-emphasis)">
                                ${item.price.toFixed(2)}
                            </Typography>
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top", borderBottom: "none" }}>
                            <Typography color="var(--high-emphasis)">{item.qty}</Typography>
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top", borderBottom: "none" }}>
                            <Typography color="var(--high-emphasis)" fontSize="14px">
                                ${(item.price * item.qty).toFixed(2)}
                            </Typography>

                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>, <Typography
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
            <OrderInformation />
        </Box>
    )
}

export default Order
