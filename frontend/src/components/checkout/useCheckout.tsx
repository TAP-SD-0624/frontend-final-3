import React from 'react'
import * as Yup from "yup";
import { useFormik } from "formik";
import useCartContext from "@src/hooks/useCartContext";
import { useMutation } from "@tanstack/react-query";
import order from '@src/api/order';
import useSnackbar from '@src/hooks/useSnackbar';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
    orderOwner: Yup.string().required("Order Owner Name is required"),
    phoneNumber: Yup.string().required("Mobile Number is required"),
    street: Yup.string().required("Street Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    pin: Yup.string().required("Pin Code is required"),
    cardNumber: Yup.string().required("Card Number is required"),
});

export const OrderMutationKey = ["Order"];

const useCheckout = () => {
    const { showSnackbar } = useSnackbar();
    const { clearCart, getCart } = useCartContext();
    const cart = getCart();
    const itemsList = cart.map(item => ({
        id: item.id,
        quantity: item.qty,
    }));

    const navigate = useNavigate();
    const { mutate: orderMutate, isPending } = useMutation({
        mutationKey: OrderMutationKey,
        mutationFn: order,
        onSuccess: (data) => {
            showSnackbar({ severity: "success", message: data.data });
            clearCart();
            navigate("/home")
        },
        onError: () => {
            showSnackbar({ severity: "error", message: "Somthing wrong!" });
        },
    });


    const formikprops = useFormik({
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
    return {
        formikprops,
        isPending,
    }
}

export default useCheckout
