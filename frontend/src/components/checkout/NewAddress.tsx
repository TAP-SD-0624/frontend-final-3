import React from "react";
import { useFormik } from "formik";
import { Button, Grid, Typography, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@components/shared/TextField";
export default function AddressForm() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="fullName"
          name="orderOwner"
          label="Full Name"
          placeholder="Enter Name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="mobileNumber"
          name="phoneNumber"
          label="Mobile Number"
          placeholder="+11"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="streetAddress"
          name="street"
          label="Street Address"
          placeholder="Enter Address"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="state"
          name="state"
          label="State"
          placeholder="Enter State"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="city"
          name="city"
          label="City"
          placeholder="Enter City"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="pinCode"
          name="pin"
          label="Pin Code"
          placeholder="Enter Pin Code"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}
