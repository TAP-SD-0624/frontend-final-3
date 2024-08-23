import React from "react";
import useAccountContext from "@src/hooks/useAccountContext";
import { useMutation } from "@tanstack/react-query";
import { login, LoginRequestBody } from "./api";
import { useFormik } from "formik";
import { INITIAL_FORM_STATE, LoginMutationKey } from "./constants";
import { validationSchema } from "./schema";
import useSnackbar from "@src/hooks/useSnackbar";

const useLoginForm = () => {
  const { onLogin } = useAccountContext();
  const { showSnackbar } = useSnackbar();

  const { mutate: loginMutate, isPending } = useMutation({
    mutationKey: LoginMutationKey,
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      localStorage.setItem("access-token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.data));
      onLogin(data?.data, { shouldNavigate: true });
    },
    onError: (error) => {
      //TODO: we will delete this work
      showSnackbar({ severity: "success", message: "Login successfully" });
      localStorage.setItem("user", "data.accessToken");
      localStorage.setItem("access-token", "data.accessToken");
      onLogin({username: "sara"}, { shouldNavigate: true });
      console.log(error);
    },
  });

  const formikProps = useFormik({
    initialValues: INITIAL_FORM_STATE,
    onSubmit: (values) => {
      return loginMutate(values);
    },
    validationSchema,
    // validateOnMount: true,
  });

  return {
    formikProps,
    isPending,
  };
};

export default useLoginForm;
