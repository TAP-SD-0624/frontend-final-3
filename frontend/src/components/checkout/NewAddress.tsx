import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Grid, Typography, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomTextField from "@components/shared/CustomTextField"; // Import your shared component

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  mobileNumber: Yup.string().required("Mobile Number is required"),
  streetAddress: Yup.string().required("Street Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  pinCode: Yup.string().required("Pin Code is required"),
});

export default function AddressForm() {
  const [open, setOpen] = React.useState(true);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      mobileNumber: "",
      streetAddress: "",
      city: "",
      state: "",
      pinCode: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            id="fullName"
            name="fullName"
            label="Full Name"
            placeholder="Enter Name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile Number"
            placeholder="+11"
            value={formik.values.mobileNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)
            }
            helperText={
              formik.touched.mobileNumber && formik.errors.mobileNumber
            }
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            id="streetAddress"
            name="streetAddress"
            label="Street Address"
            placeholder="Enter Address"
            value={formik.values.streetAddress}
            onChange={formik.handleChange}
            error={
              formik.touched.streetAddress &&
              Boolean(formik.errors.streetAddress)
            }
            helperText={
              formik.touched.streetAddress && formik.errors.streetAddress
            }
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            id="state"
            name="state"
            label="State"
            placeholder="Enter State"
            value={formik.values.state}
            onChange={formik.handleChange}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            id="city"
            name="city"
            label="City"
            placeholder="Enter City"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            id="pinCode"
            name="pinCode"
            label="Pin Code"
            placeholder="Enter Pin Code"
            value={formik.values.pinCode}
            onChange={formik.handleChange}
            error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
            helperText={formik.touched.pinCode && formik.errors.pinCode}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </form>
  );
}
