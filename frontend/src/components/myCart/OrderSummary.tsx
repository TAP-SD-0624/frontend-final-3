import React from "react";
import { Box, Typography, Divider, Stack, Button } from "@mui/material";
import OrderDetailsAmount from "@components/shared/OrderDetailsAmount";

interface OrderDetailsProps {
  subTotal: number;
  discount: number;
  deliveryFee: number;
  grandTotal: number;
}

const OrderSummary: React.FC<OrderDetailsProps> = ({
  subTotal,
  discount,
  deliveryFee,
  grandTotal,
}) => {
  return (
    <Box p={2}>
      <Typography
        variant="h6"
        gutterBottom
        color="var(--dark)"
        fontSize="20px"
        fontWeight="bold"
      >
        Order Summary
      </Typography>
      <Divider />
      <OrderDetailsAmount
        subTotal={subTotal}
        discount={discount}
        deliveryFee={deliveryFee}
        grandTotal={grandTotal}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        gap="32px"
        mt="40px"
      >
        <Button
          variant="contained"
          sx={{
            background: "var(--primary)",
            flex: 1,
            color: "var(--bright)",
          }}
        >
          Place Order
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: "var(--primary)",
            color: "var(--primary)",
            flex: 1,
          }}
        >
          Continue Shopping
        </Button>
      </Stack>
    </Box>
  );
};

export default OrderSummary;
