import { Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";
import { breadcrumbs, mockOrderDetails } from "@src/mocks";
import CartTable from "./CartTable";
import OrderSummary from "./OrderSummary";
import { useNavigate } from "react-router-dom";

export default function MyCart() {
  const navigat = useNavigate();
  const handleOnClick = () => {
    navigat("/checkout");
  }
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
          <OrderSummary onClick={handleOnClick} {...mockOrderDetails} />
        </Grid>
      </Grid>
    </Container>
  );
}
