import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import OrderDetailsAmount from "@components/shared/OrderDetailsAmount";

interface OrderDetailsProps {
  subTotal: number;
  discount: number;
  deliveryFee: number;
  grandTotal: number;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({
  subTotal,
  discount,
  deliveryFee,
  grandTotal,
}) => {
  return (
    <Box p={2}>
      <Typography variant="h6" gutterBottom>
        Order Details
      </Typography>
      <Divider />
      <OrderDetailsAmount
        subTotal={subTotal}
        discount={discount}
        deliveryFee={deliveryFee}
        grandTotal={grandTotal}
      />
    </Box>
  );
};

export default OrderDetails;
