import React from 'react'
import { Stack, Typography, Divider, Button } from '@mui/material'
import OrderDetailsAmount from './shared/OrderDetailsAmount'

const OrderInformation = () => {
    return (
        <Stack mt="42px">
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
                    <Typography sx={{mb:"16px", fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                        color="var(--low-emphasis)">
                        Payment Details
                    </Typography>
                    <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                        color="var(--high-emphasis)">
                        Cash on Delivery
                    </Typography>
                </Stack>
                <Stack mt="16px">
                    <Typography sx={{mb: "16px", fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
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
    )
}

export default OrderInformation
