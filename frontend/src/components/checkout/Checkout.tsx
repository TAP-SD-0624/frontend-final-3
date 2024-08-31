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
  Button,
  Stack,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AddressForm from "./NewAddress"; // Adjust path as needed
import PaymentSelection from "./PaymentSelection"; // Adjust path as needed
import { mockOrderDetails } from "@src/mocks";
import OrderSummary from "./OrderSummary";
import OrderDetails from "./OrderDetails";
import useCheckout from "./useCheckout";
import { Form, FormikProvider } from "formik";
import LoadingButton from "@mui/lab/LoadingButton";

export default function Checkout() {
  const [isAddressExpanded, setIsAddressExpanded] = useState(true);
  const [isPaymentExpanded, setIsPaymentExpanded] = useState(false);
  const { formikprops, isPending } = useCheckout();
  const { isValid, dirty } = formikprops;

  const toggleAddressExpand = () => {
    setIsAddressExpanded(!isAddressExpanded);
  };

  const togglePaymentExpand = () => {
    setIsPaymentExpanded(!isPaymentExpanded);
  };


  return (
    <Container>
      <FormikProvider value={formikprops}>
        <Form autoComplete="off">
          <Typography mt="24px" variant="h4" gutterBottom color={"var(--primary)"}>
            Checkout
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" color={"var(--dark)"}>
                  Add New Address
                </Typography>
                <IconButton onClick={toggleAddressExpand}>
                  {isAddressExpanded ? (
                    <ExpandLessIcon
                      sx={{
                        color: "var(--dark)",
                      }}
                    />
                  ) : (
                    <ExpandMoreIcon
                      sx={{
                        color: "var(--dark)",
                      }}
                    />
                  )}
                </IconButton>
              </Box>
              <Divider
                sx={{
                  background: "var(--divider)",
                }}
              />

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
                <Typography variant="h6" color={"var(--dark)"}>
                  Select Payment Method
                </Typography>
                <IconButton onClick={togglePaymentExpand}>
                  {isPaymentExpanded ? (
                    <ExpandLessIcon
                      sx={{
                        color: "var(--dark)",
                      }}
                    />
                  ) : (
                    <ExpandMoreIcon
                      sx={{
                        color: "var(--dark)",
                      }}
                    />
                  )}
                </IconButton>
              </Box>
              <Divider
                sx={{
                  background: "var(--divider)",
                }}
              />

              <Collapse in={isPaymentExpanded}>
                <PaymentSelection />
              </Collapse>
              <Stack direction="row" justifyContent="space-between" mt={8}>
                <Button
                  sx={{
                    color: "var(--primary)",
                    textDecoration: "underline",
                  }}
                >
                  Back to Cart
                </Button>
                <LoadingButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={!dirty || !isValid}
                  loading={isPending}
                  color="primary"
                  sx={{
                    marginTop: "16px",
                    width: "136px",
                    background: "var(--primary)",
                    color: "var(--bright)",
                  }}
                >
                  Next
                </LoadingButton>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4}>
              <OrderSummary />

              <OrderDetails {...mockOrderDetails} />
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </Container>
  );
}
