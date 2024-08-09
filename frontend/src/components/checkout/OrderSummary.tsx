import React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import { mockOrderSummary } from "@src/mocks";

interface OrderItemProps {
  id: number;
  title: string;
  description: string;
  qty: number;
  imageUrl: string;
}

const OrderSummary = () => {
  return (
    <Box p={2}>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <Divider />
      {mockOrderSummary.map((item) => (
        <Box alignItems="center" display="flex" gap="16px" mb={2} key={item.id}>
          <img
            src={item.imageUrl}
            alt={item.title}
            style={{
              width: "75px",
              height: "80px",
              borderRadius: "8px",
            }}
          />
          <Box>
            <Typography
              variant="subtitle1"
              fontWeight="semi-bold"
              color="var(--high-emphasis)"
            >
              {item.title}
            </Typography>
            <Typography variant="body2" color="var(--low-emphasis)">
              {item.description}
            </Typography>
            <Typography variant="body2" color="var(--low-emphasis)">
              Qty- {item.qty}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default OrderSummary;
