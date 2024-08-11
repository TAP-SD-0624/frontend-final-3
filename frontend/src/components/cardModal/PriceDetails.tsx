import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function PriceDetails() {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="body1" color="var(--high-emphasis)">
          Subtotal:
        </Typography>
        <Typography variant="body1" color="var(--high-emphasis)">
          $200
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="body1" color="var(--high-emphasis)">
          Tax:
        </Typography>
        <Typography variant="body1" color="var(--high-emphasis)">
          $2
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
          $202
        </Typography>
      </Stack>
    </Box>
  );
}
