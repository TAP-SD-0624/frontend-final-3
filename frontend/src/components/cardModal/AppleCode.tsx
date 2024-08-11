import { Box, Button, TextField } from "@mui/material";
import React from "react";

export default function AppleCode() {
  return (
    <Box
      mt={3}
      sx={{
        background: "var(--grey)",
        width: "80%",
        margin: "24px auto",
      }}
    >
      <TextField
        fullWidth
        placeholder="Apply Coupon Code"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <Button
              sx={{
                color: "var(--primary)",
                fontWeight: "bold",
              }}
            >
              CHECK
            </Button>
          ),
        }}
      />
    </Box>
  );
}
