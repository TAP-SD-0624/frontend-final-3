import React from 'react'
import { Stack, Typography, Divider, Button } from '@mui/material'
import OrderDetailsAmount from './shared/OrderDetailsAmount'
import { useLocation } from 'react-router-dom';
import useOrder from '@src/screens/hooks/useOrder';

const OrderInformation = () => {
    const location = useLocation();
    const orderId = location?.state?.orderId;
    const { orderData } = useOrder(orderId);
    const data = orderData?.order;

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
                        subTotal={data?.subtotal}
                        discount={data?.totalDiscount}
                        deliveryFee={data?.deliveryFees}
                        grandTotal={data?.grandtotal}
                    />
                </Stack>
                <Stack mt="16px">
                    <Typography sx={{ mb: "16px", fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                        color="var(--low-emphasis)">
                        Payment Details
                    </Typography>
                    <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                        color="var(--high-emphasis)">
                        {data?.paymentDetails}
                    </Typography>
                </Stack>
                <Stack mt="16px">
                    <Typography sx={{ mb: "16px", fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                        color="var(--low-emphasis)">
                        Address Details
                    </Typography>
                    <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                        color="var(--high-emphasis)">
                        {data?.Address.state}
                    </Typography>
                    <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                        color="var(--high-emphasis)">
                        {data?.Address.street}
                    </Typography>
                    <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                        color="var(--high-emphasis)">
                        {data?.Address.city}
                    </Typography>
                    <Typography sx={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px" }}
                        color="var(--high-emphasis)">
                        {data?.Address.pin}
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
