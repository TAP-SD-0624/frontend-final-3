import { Box, Typography } from "@mui/material";
import React from "react";

interface OrderDetailsProps {
  subTotal: number;
  discount: number;
  deliveryFee: number;
  grandTotal: number;
}

export default function OrderDetailsAmount({
  subTotal,
  discount,
  deliveryFee,
  grandTotal,
}: OrderDetailsProps) {
  return (
    <Box mt= {2}>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="body2" color="var(--low-emphasis)">
          Sub Total
        </Typography>
        <Typography variant="body2" color="var(--high-emphasis)">
          ${subTotal.toFixed(2)}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="body2" color="var(--low-emphasis)">
          Discount
        </Typography>
        <Typography variant="body2" color="var(--high-emphasis)">
          -${discount.toFixed(2)}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="body2" color="var(--low-emphasis)">
          Delivery Fee
        </Typography>
        <Typography variant="body2" color="var(--high-emphasis)">
          ${deliveryFee.toFixed(2)}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" fontWeight="medium">
        <Typography
          variant="subtitle1"
          color="var(--high-emphasis)"
          fontWeight="bold"
        >
          Grand Total
        </Typography>
        <Typography
          variant="subtitle1"
          color="var(--high-emphasis)"
          fontWeight="bold"
        >
          ${grandTotal.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
}
