import React, { useState } from "react";
import {
  Container,
  Breadcrumbs,
  Typography,
  Collapse,
  IconButton,
  Box,
  Divider,
  Grid,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AddressForm from "./NewAddress"; // Adjust path as needed
import PaymentSelection from "./PaymentSelection"; // Adjust path as needed
import { breadcrumbs, mockOrderDetails } from "@src/mocks";
import OrderSummary from "./OrderSummary";
import OrderDetails from "./OrderDetails";
export default function Checkout() {
  const [isAddressExpanded, setIsAddressExpanded] = useState(true);
  const [isPaymentExpanded, setIsPaymentExpanded] = useState(true);

  const toggleAddressExpand = () => {
    setIsAddressExpanded(!isAddressExpanded);
  };

  const togglePaymentExpand = () => {
    setIsPaymentExpanded(!isPaymentExpanded);
  };

  const breadcrumbs = [
    <Typography key="1" color="text.primary">
      Home
    </Typography>,
    <Typography key="2" color="text.primary">
      Checkout
    </Typography>,
  ];

  return (
    <Container>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          marginBottom: "24px",
          marginTop: "44px",
        }}
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6">Add New Address</Typography>
            <IconButton onClick={toggleAddressExpand}>
              {isAddressExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Divider />

          <Collapse in={isAddressExpanded}>
            <AddressForm />
          </Collapse>

          {/* Payment Selection Section */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={4}
          >
            <Typography variant="h6">Payment Method</Typography>
            <IconButton onClick={togglePaymentExpand}>
              {isPaymentExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Divider />

          <Collapse in={isPaymentExpanded}>
            <PaymentSelection />
          </Collapse>
        </Grid>
        <Grid item xs={12} sm={4}>
          <OrderSummary />

          <OrderDetails {...mockOrderDetails} />
        </Grid>
      </Grid>
    </Container>
  );
}
