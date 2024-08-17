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
  TextField,
  Grid,
} from "@mui/material";
import theme from "../../styles/customTheme";
import LockIcon from "@mui/icons-material/Lock";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { LoginFormProps } from "./types";
import { FC } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Form, FormikProvider } from "formik";

const Login: FC = () => {
  return (
    <form autoComplete="off" >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
                  position: "absolute",
                  top: `calc(-${theme.spacing(4)} - 20px)`, // -padding - half of the avatar size
                }}
              >
                <LockIcon />
              </Avatar>
              <Stack
                direction="row"
                gap={2}
                sx={{ alignItems: "center", mb: 3 }}
              >
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
              </Stack>
              <TextField
                name="email"
                type="email"
                label="Email Address"
                required
                fullWidth
                sx={{ mb: 2.5 }}
              />
              <TextField
                required
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mb: 1 }}
              >
                Sign in
              </Button>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Button fullWidth sx={{ textTransform: "none" }}>
                  Forgot password?
                </Button>
                <Button fullWidth sx={{ textTransform: "none" }}>
                  Don't have an account? Sign Up
                </Button>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                gap="3px"
                paddingTop="20px"
              >
                <Typography
                  noWrap
                  component="a"
                  href="#"
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
                  component="a"
                  href="#"
                  sx={{
                    color: "var(--footer-text)",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 500,
                    alignContent: "flex-end",
                  }}
                >
                  Your Website 2024
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        </Box>
    </form>
  );
};

export default Login;
