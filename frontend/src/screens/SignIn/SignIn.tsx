import React from "react";
import {
  Box,
  Paper,
  Stack,
  Avatar,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { FC } from "react";
import { FormikProvider, Form } from "formik";
import useLoginForm from "./useLoginForm";
import { Navigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@src/components/shared/TextField";


const SignIn: FC = () => {
  const { formikProps, isPending } = useLoginForm();
  const accessToken = localStorage.getItem("access-token");
  const { isValid, dirty, errors } = formikProps;
  console.log(errors);

  const isEmptyToken = (token: string | null): boolean => {
    return !token || token === "";
  }
  const isLoggedIn = !isEmptyToken(accessToken);

  if (isLoggedIn) return <Navigate to="/me" replace state={{ from: location.pathname }} />;
  
  return (
    <FormikProvider value={formikProps}>
      <Form autoComplete="off">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "20px",
          }}
        >
          <Paper
            elevation={10}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              p: 4,
              pb: 1,
              width: { xs: "90%" },
              maxWidth: { md: "520px" },
            }}
          >
            <Stack alignItems="center" sx={{ position: "relative" }}>
              <Avatar
                sx={{
                  backgroundColor: "purple",
                }}
              >
                <LockIcon />
              </Avatar>
              <Stack direction="row" gap={2} sx={{ alignItems: "center", mb: 3 }}>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
              </Stack>
              <TextField
                name="email"
                type="email"
                label="Email Address"
                fullWidth
                sx={{ mb: 2.5 }}
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                fullWidth
              />
              <FormControlLabel
                control={
                  <Checkbox value="remember" color="primary" size="small" />
                }
                label="Remember me"
                sx={{
                  my: 1,
                  alignSelf: "flex-start",
                  color: "text.secondary",
                }}
              />
            <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                disabled={!dirty || !isValid}
                loading={isPending}
                sx={{ mb: 1 }}
              >
                Sign in
              </LoadingButton>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                paddingTop="10px"
              >
                <Typography
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    color: "primary",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Forgot password?
                </Typography>
                <Typography
                  noWrap
                  component="a"
                  href="/signUp"
                  sx={{
                    color: "primary",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Don't have an account? Sign Up
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                gap="3px"
                paddingTop="20px"
              >
                <Typography
                  noWrap
                  sx={{
                    color: "var(--footer-text)",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 500,
                    alignContent: "flex-end",
                  }}
                >
                  Copyright
                </Typography>
                <CopyrightIcon
                  sx={{
                    color: "var(--footer-text)",
                  }}
                />
                <Typography
                  noWrap
                  sx={{
                    color: "var(--footer-text)",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 500,
                    alignContent: "flex-end",
                  }}
                >
                  <a
                    href="/home"
                    style={{
                      textDecoration: "underline",
                      color: "inherit",
                    }}
                  >
                    Your Website
                  </a>{" "}
                  2024
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        </Box>
       
      </Form>
    </FormikProvider>
  );
};

export default SignIn;
