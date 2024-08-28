import { Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";
import { breadcrumbs, mockOrderDetails } from "@src/mocks";
import CartTable from "./CartTable";
import OrderSummary from "./OrderSummary";
import { useNavigate } from "react-router-dom";
import useCartContext from "@src/hooks/useCartContext";

export default function MyCart() {
  const navigat = useNavigate();
  const handleOnClick = () => {
    navigat("/checkout");
  }
  const { getCart } = useCartContext();
  const cart = getCart();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = 2.0;
  const total = parseFloat((subtotal + tax).toFixed(2));
  
  return (
    <Container>
      <Typography
        variant="h4"
        mt="24px"
        gutterBottom
        color="var(--primary)"
        sx={{
          marginBottom: "80px",
        }}
      >
        My Cart
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={7}>
          <CartTable />
        </Grid>
        <Grid item xs={12} sm={5}>
          <OrderSummary onClick={handleOnClick} subTotal={subtotal} discount={20} deliveryFee={tax} grandTotal={total} />
        </Grid>
      </Grid>
    </Container>
  );
}
