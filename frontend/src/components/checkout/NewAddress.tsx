import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Grid, Typography, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomTextField from "@components/shared/CustomTextField"; // Import your shared component
import { useMutation } from "@tanstack/react-query";
import useSnackbar from "@src/hooks/useSnackbar";
import order from "@src/api/order";
import useCartContext from "@src/hooks/useCartContext";

const validationSchema = Yup.object({
  orderOwner: Yup.string().required("Order Owner Name is required"),
  phoneNumber: Yup.string().required("Mobile Number is required"),
  street: Yup.string().required("Street Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  pin: Yup.string().required("Pin Code is required"),
});

export const OrderMutationKey = ["Order"];

export default function AddressForm() {
  const [open, setOpen] = React.useState(true);
  const { showSnackbar } = useSnackbar();
  const { clearCart, getCart } = useCartContext();
  const cart = getCart();
  const itemsList = cart.map(item => ({
    id: item.id,
    quantity: item.qty,
  }));

  const { mutate: orderMutate } = useMutation({
    mutationKey: OrderMutationKey,
    mutationFn: order,
    onSuccess: (data) => {
      showSnackbar({ severity: "success", message: data.message });
      clearCart();
    },
    onError: () => {
      showSnackbar({ severity: "error", message: "Somthing wrong!" });
    },
  });


  const formik = useFormik({
    initialValues: {
      itemsList, // Pass itemsList here
      orderOwner: "",
      phoneNumber: "",
      street: "",
      city: "",
      state: "",
      pin: "",
      cardNumber: "", // Add cardNumber field
    },
    validationSchema,
    onSubmit: (values) => {
      const requestBody = {
        itemsList: values.itemsList,
        address: {
          state: values.state,
          city: values.city,
          street: values.street,
          pin: values.pin,
        },
        phoneNumber: values.phoneNumber,
        orderOwner: values.orderOwner,
        cardNumber: values.cardNumber,
      };

      orderMutate(requestBody);
    },
  });




  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            id="fullName"
            name="orderOwner"
            label="Full Name"
            placeholder="Enter Name"
            value={formik.values.orderOwner}
            onChange={formik.handleChange}
            error={formik.touched.orderOwner && Boolean(formik.errors.orderOwner)}
            helperText={formik.touched.orderOwner && formik.errors.orderOwner}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            id="mobileNumber"
            name="phoneNumber"
            label="Mobile Number"
            placeholder="+11"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={
              formik.touched.phoneNumber && formik.errors.phoneNumber
            }
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            id="streetAddress"
            name="street"
            label="Street Address"
            placeholder="Enter Address"
            value={formik.values.street}
            onChange={formik.handleChange}
            error={
              formik.touched.street &&
              Boolean(formik.errors.street)
            }
            helperText={
              formik.touched.street && formik.errors.street
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
            name="pin"
            label="Pin Code"
            placeholder="Enter Pin Code"
            value={formik.values.pin}
            onChange={formik.handleChange}
            error={formik.touched.pin && Boolean(formik.errors.pin)}
            helperText={formik.touched.pin && formik.errors.pin}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </form>
  );
}
