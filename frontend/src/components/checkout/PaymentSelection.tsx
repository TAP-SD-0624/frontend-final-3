import React, { useState } from "react";
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Checkbox,
  Paper,
  Avatar,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import { paymentMethods, upiOptions } from "@src/mocks";

const PaymentSelection = () => {
  const [selectedPayment, setSelectedPayment] = useState("upi");
  const [selectedUPI, setSelectedUPI] = useState("googlePay");
  const [saveForFuture, setSaveForFuture] = useState(true);

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value);
  };

  const handleUPIChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedUPI(event.target.value);
  };

  const handleSaveForFutureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSaveForFuture(event.target.checked);
  };

  return (
    <Box mt="36px">
      <FormControl component="fieldset" fullWidth>
        <Grid container spacing={2}>
          {paymentMethods.map((method) => (
            <Grid item xs={12} sm={6} md={3} key={method.value}>
              <FormControlLabel
                value={method.value}
                control={
                  <Radio sx={{ position: "absolute", top: 0, right: 0 }} />
                }
                label={
                  <Box
                    display="flex"
                    position="relative"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    sx={{
                      border: "1px solid ",
                      borderColor: "var(--border-gray)",
                      width: "160px",
                      height: "145px",
                      borderRadius: "12px",
                      padding: "8px",
                    }}
                  >
                    <img
                      src={method.icon}
                      alt={method.label}
                      style={{
                        marginBottom: "8px",
                      }}
                    />
                    <Typography>{method.label}</Typography>
                  </Box>
                }
                sx={{
                  position: "relative",
                }}
              />
            </Grid>
          ))}
        </Grid>

        {selectedPayment === "upi" && (
          <Paper variant="outlined" sx={{ mt: 3, p: 2 }}>
            <RadioGroup
              aria-label="UPI Options"
              name="upiOptions"
              value={selectedUPI}
              onChange={handleUPIChange}
            >
              {upiOptions.map((option) => (
                <React.Fragment key={option.value}>
                  <FormControlLabel
                    value={option.value}
                    control={<Radio />}
                    label={
                      <Box display="flex" alignItems="center">
                        <Avatar src={option.icon} alt={option.label} />
                        <Typography ml={1}>{option.label}</Typography>
                      </Box>
                    }
                  />
                  {selectedUPI === option.value &&
                    option.value === "googlePay" && (
                      <Box pl={4} mt={2}>
                        <TextField
                          fullWidth
                          label="Enter your UPI Id"
                          placeholder="Eg: 1234567890@upi"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={saveForFuture}
                              onChange={handleSaveForFutureChange}
                            />
                          }
                          label="Save this for future transactions"
                        />
                      </Box>
                    )}
                  {option.value !== upiOptions[upiOptions.length - 1].value && (
                    <Divider />
                  )}
                </React.Fragment>
              ))}
            </RadioGroup>
          </Paper>
        )}
      </FormControl>
    </Box>
  );
};

export default PaymentSelection;
