import { Box, Stack, Typography } from "@mui/material";
import useCartContext from "@src/hooks/useCartContext";
import React from "react";
export default function PriceDetails() {
  const { getCart } = useCartContext();
  const cart = getCart();
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty, 0).toFixed(2);
  const tax = 2.0;
  const total = (parseFloat(subtotal) + tax).toFixed(2);
  
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="body1" color="var(--high-emphasis)">
          Subtotal:
        </Typography>
        <Typography variant="body1" color="var(--high-emphasis)">
          ${subtotal}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="body1" color="var(--high-emphasis)">
          Tax:
        </Typography>
        <Typography variant="body1" color="var(--high-emphasis)">
          $2.00
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          variant="body1"
          color="var(--high-emphasis)"
          fontWeight="bold"
        >
          Total:
        </Typography>
        <Typography
          variant="body1"
          color="var(--high-emphasis)"
          fontWeight="bold"
        >
          ${total}
        </Typography>
      </Stack>
    </Box>
  );
}
