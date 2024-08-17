import TabPanel from '@components/product/TabPanel'
import { Container, Box, Stack, Typography, IconButton, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, Link, TableContainer, Divider, Button } from '@mui/material'
import { order } from '@src/mocks'
import React, { useState } from 'react'
import { useMediaQuery } from "@mui/material";
import OrderDetailsAmount from '@components/shared/OrderDetailsAmount';
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
        <Box
            // sx={{
            //     width: {
            //         md: "890px",
            //         lg: "930px",
            //     },
            // }}
        >
               

                <TabsSection tab={orderTabs} tabPanel={orderTabPanels} />
                <Stack>
                    <Typography sx={{ fontFamily: "Inter", fontWeight: "600", fontSize: "20px" }}
                        color="var(--dark)">
                        Order Information
                    </Typography>
                    <Divider />
                    <Stack direction="row" justifyContent="space-between">
                        <Stack mt="16px">
                            <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                                color="var(--low-emphasis)">
                                Order Details
                            </Typography>
                            <OrderDetailsAmount
                                subTotal={119.69}
                                discount={-13.40}
                                deliveryFee={-0.00}
                                grandTotal={106.29}
                            />
                        </Stack>
                        <Stack mt="16px">
                            <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                                color="var(--low-emphasis)">
                                Payment Details
                            </Typography>
                            <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                                color="var(--high-emphasis)">
                                Cash on Delivery
                            </Typography>
                        </Stack>
                        <Stack mt="16px">
                            <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                                color="var(--low-emphasis)">
                                Address Details
                            </Typography>
                            <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                                color="var(--high-emphasis)">
                                Vincent Lobo
                            </Typography>
                            <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                                color="var(--high-emphasis)">
                                3068  Woodlawn Drive
                            </Typography>
                            <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                                color="var(--high-emphasis)">
                                Milwaukee
                            </Typography>
                            <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                                color="var(--high-emphasis)">
                                414-672-5388
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent="flex-end" marginTop="58px" gap="24px">
                        <Button
                            sx={{
                                fontFamily: "Inter",
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "var(--bright)",
                                backgroundColor: "var(--primary)",
                                width: "136px",
                                height: "44px",
                                borderRadius: "8px",
                                padding: "10px 8px",
                                textTransform: "none",
                                alignItems: "center",
                            }}
                        >
                            Reorder
                        </Button>
                        <Button
                            sx={{
                                fontFamily: "Inter",
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "var(--primary)",
                                backgroundColor: "var(--bright)",
                                width: "136px",
                                height: "44px",
                                borderRadius: "8px",
                                padding: "10px 8px",
                                textTransform: "none",
                                alignItems: "center",
                                border: "2px solid var(--primary)",
                            }}
                        >
                            Add Rating
                        </Button>
                    </Stack>
                </Stack>
        </Box>
    )
}

export default Order
