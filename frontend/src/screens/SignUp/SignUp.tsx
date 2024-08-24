import React from "react";
import {
  Box,
  Paper,
  Stack,
  Avatar,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import theme from "../../styles/customTheme";
import LockIcon from "@mui/icons-material/Lock";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { FC } from "react";
import { FormikProvider, Form } from "formik";
import TextField from "@src/components/shared/TextField";
import useSignupForm from "./useSignupForm";
import LoadingButton from "@mui/lab/LoadingButton";


const SignUp: FC = () => {
  const { formikProps, isPending } = useSignupForm();
  const { isValid, dirty, values } = formikProps;
  const { password, confirmPassword } = values;

  const isSubmitEnabled = isValid && (password === confirmPassword);

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
                  Sign up
                </Typography>
              </Stack>
              <Stack
                direction="row"
                gap={2}
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%"
                }}
              >
                <TextField
                  name="firstName"
                  type="text"
                  label="First Name"
                  fullWidth
                  sx={{ mb: 2, flex: "1" }}
                />
                <TextField
                  name="lastName"
                  type="text"
                  label="Last Name"
                  fullWidth
                  sx={{ mb: 2, flex: "1" }}
                />
              </Stack>
              <TextField
                name="email"
                type="email"
                label="Email Address"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                sx={{ mb: 2 }}
                fullWidth
              />
              <TextField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth
              />
              <FormControlLabel
                control={
                  <Checkbox value="remember" color="primary" size="small" />
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
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
                disabled={!dirty || !isSubmitEnabled}
                loading={isPending}
                sx={{ mb: 1 }}
              >
                Sign Up
              </LoadingButton>

              <Typography
                noWrap
                component="a"
                href="/"
                sx={{
                  color: "primary",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 500,
                  width: "100%",
                  textAlign: "end",
                  pt: "10px",
                }}
              >
                Already have an account? Sign in
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                gap="3px"
                paddingTop="15px"
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
    </FormikProvider>);
};

export default SignUp;
