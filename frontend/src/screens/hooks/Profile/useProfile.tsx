import React from "react";
import useAccountContext from "@src/hooks/useAccountContext";
import { useMutation } from "@tanstack/react-query";
import { login } from "./api";
import { useFormik } from "formik";
import { INITIAL_FORM_STATE, LoginMutationKey } from "./constants";
import { validationSchema } from "./schema";
import useSnackbar from "@src/hooks/useSnackbar";

const useLoginForm = () => {
  const { onLogin } = useAccountContext();
  const { showSnackbar } = useSnackbar();
  let id;

  const { mutate: loginMutate, isPending } = useMutation({
    mutationKey: LoginMutationKey,
    mutationFn: login,
    onSuccess: (data) => {
      showSnackbar({ severity: "success", message: data.message });
      localStorage.removeItem;
      localStorage.setItem("user-token", data.token);
      onLogin(data?.token, { shouldNavigate: true });
      id = data?.user?.id;
      console.log(id)
    },
    onError: () => {
      showSnackbar({ severity: "error", message: "Somthing wrong!" });
    },
  });

  const formikProps = useFormik({
    initialValues: INITIAL_FORM_STATE,
    onSubmit: (values) => {
      return loginMutate(values);
    },
    validationSchema,
    validateOnMount: true,
  });

  return {
    formikProps,
    isPending,
    id,
  };
};

export default useLoginForm;
