import React from "react";
import { useMutation } from "@tanstack/react-query";
import { signup, SignUpResponse } from "./api";
import { useFormik } from "formik";
import { INITIAL_FORM_STATE, SignUpMutationKey } from "./constants";
import { validationSchema } from "./schema";
import { useNavigate } from "react-router-dom";
import useSnackbar from "@src/hooks/useSnackbar";

const useLoginForm = () => {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  const { mutate: signupMutate, isPending } = useMutation({
    mutationKey: SignUpMutationKey,
    mutationFn: signup,
    onSuccess: (data) => {
      showSnackbar({ severity: "success", message: data.message });
      navigate("/login");
    },
    onError: (error) => {
      //@ts-ignore
      const errorMessage = error.response?.data?.message || error.message || "An error occurred";
      showSnackbar({ severity: "warning", message: errorMessage });
    },
  });

  const formikProps = useFormik({
    initialValues: INITIAL_FORM_STATE,
    // onSubmit: (values) => {
    //   return signupMutate(values);
    // },
    onSubmit: (values, { resetForm }) => {
      // Add the dare field to the values object
      const updatedValues = {
        ...values,
        dateOfBirth: "1990-01-01T00:00:00.000Z", // Replace with the actual value you want to add
      };
      resetForm();
      return signupMutate(updatedValues);
    },
    validationSchema,
    validateOnMount: true,
  });

  return {
    formikProps,
    isPending,
  };
};

export default useLoginForm;
