import React from "react";
import { Box, Typography, Divider, Stack, Button } from "@mui/material";
import OrderDetailsAmount from "@components/shared/OrderDetailsAmount";
import useCartContext from "@src/hooks/useCartContext";
import { useNavigate } from "react-router-dom";

interface OrderDetailsProps {
  subTotal: number;
  discount: number;
  deliveryFee: number;
  grandTotal: number;
  onClick?: () => void;
}

const OrderSummary: React.FC<OrderDetailsProps> = ({
  subTotal,
  discount,
  deliveryFee,
  grandTotal,
  onClick = () => { },
}) => {
  const navigate = useNavigate();
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
      <Divider
        sx={{
          background: "var(--divider)",
        }}
      />
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
          onClick={onClick}
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
          onClick={() => navigate("/home")}
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
