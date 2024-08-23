import React from "react";
import { useMutation } from "@tanstack/react-query";
import { signup } from "./api";
import { useFormik } from "formik";
import { INITIAL_FORM_STATE, SignUpMutationKey } from "./constants";
import { validationSchema } from "./schema";
import { useNavigate } from "react-router-dom";

const useLoginForm = () => {
  const navigate = useNavigate();

  const { mutate: signupMutate, isPending } = useMutation({
    mutationKey: SignUpMutationKey,
    mutationFn: signup,
    onSuccess: (data) => {
      console.log(data);
      navigate("/login");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const formikProps = useFormik({
    initialValues: INITIAL_FORM_STATE,
    onSubmit: (values) => {
      return signupMutate(values);
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
