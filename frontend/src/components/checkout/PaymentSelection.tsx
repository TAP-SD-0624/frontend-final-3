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
  Stack,
} from "@mui/material";
import { paymentMethods, upiOptions } from "@src/mocks";

const PaymentSelection = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedUPI, setSelectedUPI] = useState("");
  const [saveForFuture, setSaveForFuture] = useState(true);
  console.log(selectedPayment);

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value);
    console.log(event.target.value);
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
        <RadioGroup
          aria-label="UPI Options"
          name="upiOptions"
          value={selectedPayment}
          onChange={handlePaymentChange}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            flexWrap="wrap"
            gap="16px"
            alignItems="center"
          >
            {paymentMethods.map((method) => (
              <Stack key={method.value}>
                <FormControlLabel
                  value={method.value}
                  control={
                    <Radio
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        color: "var(--primary)", // Unchecked color
                        "&.Mui-checked": {
                          color: "var(--primary)", // Checked color
                        },
                      }}
                    />
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
                        minWidth: "160px",
                        flex: 1,
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
                      <Typography color={"var(--high-emphasis)"}>
                        {" "}
                        {method.label}
                      </Typography>
                    </Box>
                  }
                  sx={{
                    position: "relative",
                  }}
                />
              </Stack>
            ))}
          </Stack>
        </RadioGroup>

        {selectedPayment && (
          <Paper
            variant="outlined"
            sx={{ mt: 3, border: "solid var(--primary) 1px" }}
          >
            <RadioGroup
              aria-label="UPI Options"
              name="upiOptions"
              value={selectedUPI}
              onChange={handleUPIChange}
            >
              {upiOptions.map((option) => (
                <Box
                  key={option.value}
                  py="20px"
                  px="24px"
                  sx={{
                    backgroundColor:
                      option.value === selectedUPI
                        ? "var(--primary-tint-2)"
                        : "var(--bright)",
                  }}
                >
                  <FormControlLabel
                    value={option.value}
                    control={
                      <Radio
                        sx={{
                          color: "var(--primary)", // Unchecked color
                          "&.Mui-checked": {
                            color: "var(--primary)", // Checked color
                          },
                        }}
                      />
                    }
                    label={
                      <Box>
                        <Box display="flex" alignItems="center">
                          <Box
                            sx={{
                              width: "69px",
                              height: "69px",
                              backgroundColor: "var(--bright)",
                              border: "1px solid var(--grey)",
                              borderRadius: "4px",
                              display: "grid",
                              placeItems: "center",
                            }}
                          >
                            <img src={option.icon} alt={option.label} />
                          </Box>
                          <Typography ml={1} color="var(--high-emphasis)">
                            {option.label}
                          </Typography>
                        </Box>
                        {selectedUPI === option.value && (
                          <Stack mt={2}>
                            <TextField
                              label="Enter your UPI Id"
                              placeholder="Eg: 1234567890@upi"
                              InputProps={{
                                sx: {
                                  backgroundColor: "var(--bright)", // Background color
                                  color: "var(--dark)",
                                  border: "solid 1px var(--grey)",
                                },
                              }}
                              InputLabelProps={{
                                sx: {
                                  color: "var(--dark)", // Label text color
                                },
                              }}
                            />
                            <Typography
                              variant="body2"
                              color="var(--low-emphasis)"
                              mt={1}
                            >
                              Eg: 1234567890@ybl
                            </Typography>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={saveForFuture}
                                  onChange={handleSaveForFutureChange}
                                  sx={{
                                    color: "var(--primary)", // Unchecked color
                                    "&.Mui-checked": {
                                      color: "var(--primary)", // Checked color
                                    },
                                  }}
                                />
                              }
                              sx={{
                                color: "var(--low-emphasis)",
                              }}
                              label="Save this for future transactions"
                            />
                          </Stack>
                        )}
                      </Box>
                    }
                    sx={{
                      justifyContent: "space-between",
                      width: "100%",
                      flexDirection: "row-reverse",

                      //   alignItems: "center",
                    }}
                  />

                  {/* {option.value !== upiOptions[upiOptions.length - 1].value && (
                    <Divider />
                  )} */}
                </Box>
              ))}
            </RadioGroup>
          </Paper>
        )}
      </FormControl>
    </Box>
  );
};

export default PaymentSelection;
