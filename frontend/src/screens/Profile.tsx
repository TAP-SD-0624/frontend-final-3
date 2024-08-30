import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import avatar from "../assets/avatar.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TextField from "@src/components/shared/TextField";
import { FormikProvider, Form } from "formik";
import useLoginForm from "./SignIn/useLoginForm";
import classes from "./Profile.module.css";
import { useLocation } from "react-router-dom";
import useUserData from "./hooks/useUserData";

const Profile = () => {
  const { formikProps, id } = useLoginForm();
  const { userData } = useUserData("b78222e0-64db-49bc-8fb4-e26a6bde4d57");

  return (
    <Box>
      <Typography
        className={classes.header}
        sx={{
          fontSize: {
            xs: "16px",
            sm: "17px",
            md: "18px",
            lg: "20px",
          },
        }}
      >
        Personal Information
      </Typography>
      <Divider />
      <Stack direction="row" alignItems="flex-end" gap="16px" mt="37px">
        <Avatar
          alt="Travis Howard"
          src={avatar}
          sx={{ width: "fit-content", height: "80px" }}
        />
        <Stack direction="row" gap="16px" alignItems="center">
          <Button
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "500",
              color: "var(--bright)",
              backgroundColor: "var(--primary)",
              width: {
                lg: "136px",
              },
              height: "38px",
              borderRadius: "8px",
              padding: "8px 0px 0px 0px",
              textTransform: "none",
              alignItems: "baseline",
            }}
          >
            Upload
          </Button>
          <Button
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "500",
              color: "var(--error)",
              backgroundColor: "var(--bright)",
              width: {
                lg: "136px",
              },
              height: "44px",
              border: "2px solid var(--error)",
              borderRadius: "8px",
              textTransform: "none",
              alignItems: "centre",
              gap: "8px",
              padding: "10px 8px",
            }}
          >
            <DeleteOutlineIcon
              sx={{ width: "24px", height: "24px", color: "var(--error)" }}
            />
            Delete
          </Button>
        </Stack>
      </Stack>

      <FormikProvider value={formikProps}>
        <Form autoComplete="off">
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              pt: "8px",
              pr: "8px",
              width: "100%",
            }}
          >
            <Stack
              sx={{
                position: "relative",
              }}
            >
              <Grid container>
                <Grid item xs={12} sm={6} md={5}>
                  <Stack gap="8px">
                    <label className={classes.label}>First Name</label>
                    <TextField
                      name="firstName"
                      type="text"
                      placeholder={userData?.user?.firstName}
                      fullWidth
                      id="firstName"
                      InputProps={{
                        sx: {
                          fontFamily: "Inter",
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "var(--low-emphasis)",
                          backgroundColor: "var(--grey)",
                          margin: "0px",
                          borderTopRightRadius: "0px",
                          borderBottomRightRadius: "0px",
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "transparent",
                          },
                          "& .MuiInputBase-input": {
                            borderTopRightRadius: "0px",
                            borderBottomRightRadius: "0px",
                          },
                        },
                      }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                  <Stack gap="8px">
                    <label className={classes.label}>Last Name</label>
                    <TextField
                      name="lastName"
                      type="text"
                      placeholder={userData?.user.lastName}
                      fullWidth
                      id="lastName"
                      InputProps={{
                        sx: {
                          fontFamily: "Inter",
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "var(--low-emphasis)",
                          backgroundColor: "var(--grey)",
                          margin: "0px",
                          borderTopLeftRadius: "0px",
                          borderBottomLeftRadius: "0px",
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "transparent",
                          },
                          "& .MuiInputBase-input": {
                            borderTopLeftRadius: "0px",
                            borderBottomLeftRadius: "0px",
                          },
                        },
                      }}
                    />
                  </Stack>
                </Grid>
                {/* </Stack> */}
              </Grid>
            </Stack>
            <Grid container>
              <Grid item xs={12} sm={8} md={8}>
                <Stack gap="8px" mt="8px">
                  <label className={classes.label}>Email</label>
                  <TextField
                    className={classes.textField}
                    name="email"
                    type="email"
                    placeholder={userData?.user.email}
                    fullWidth
                    id="email"
                    InputProps={{
                      sx: {
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "transparent",
                        },
                      },
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
            <Stack gap="8px" mt="8px">
              <label className={classes.label}>Mobile Number</label>

              <Grid container spacing={1}>
                <Grid item xs={3} sm={2} md={1.5}>
                  <TextField
                    className={classes.textField}
                    name="mobile"
                    placeholder={userData?.user.mobileNumber.substring(0, 4)}
                    type="tel"
                    id="tel"
                    fullWidth
                    InputProps={{
                      sx: {
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "transparent",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={9} sm={6}>
                  <TextField
                    name="mobile"
                    placeholder={userData?.user.mobileNumber.substring(4)}
                    type="tel"
                    id="nobile"
                    fullWidth
                    className={classes.textField}
                    InputProps={{
                      sx: {
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "transparent",
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Stack>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Stack gap="8px" mt="8px">
                  <label className={classes.label}>Date of birth</label>
                  <TextField
                    name="date"
                    placeholder="DD/MM/YYYY"
                    type="date"
                    id="date"
                    className={classes.textField}
                    fullWidth
                    sx={{
                      textTransform: "uppercase",
                      borderColor: "var(--grey)",
                    }}
                    InputProps={{
                      sx: {
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "transparent",
                        },
                      },
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
            <Stack marginTop="40px" width="inhirit"></Stack>
            <Typography
              className={classes.header}
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "17px",
                  md: "18px",
                  lg: "20px",
                },
              }}
            >
              Change Password
            </Typography>
            <Divider />
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Stack mt="37px" gap="8px">
                  <label className={classes.label}>Current Password</label>
                  <TextField
                    name="password"
                    placeholder="********"
                    type="password"
                    id="password"
                    fullWidth
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "var(--low-emphasis)",
                      backgroundColor: "var(--grey)",
                      margin: "0px",
                      borderColor: "var(--grey)",
                    }}
                    InputProps={{
                      sx: {
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "transparent",
                        },
                      },
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Stack mt="16px" gap="8px">
                  <label className={classes.label}>New Password</label>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                      backgroundColor: "var(--grey)",
                      borderColor: "var(--grey)",
                    }}
                  >
                    <TextField
                      name="newPassword"
                      placeholder="******"
                      type="password"
                      id="newPassword"
                      fullWidth
                      sx={{
                        fontFamily: "Inter",
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "var(--low-emphasis)",
                        margin: "0px",
                        backgroundColor: "var(--grey)",
                        border: "none",
                      }}
                      InputProps={{
                        sx: {
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "transparent",
                          },
                        },
                      }}
                    />

                    <IconButton>
                      <VisibilityIcon
                        sx={{
                          width: "24px",
                          height: "24px",
                          color: "var(--dark)",
                        }}
                      />
                    </IconButton>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Stack mt="16px" gap="8px">
                  <label className={classes.label}>Confirm Password</label>
                  <TextField
                    name="confirmPassword"
                    placeholder="******"
                    type="password"
                    id="confirmPassword"
                    fullWidth
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "var(--low-emphasis)",
                      backgroundColor: "var(--grey)",
                      margin: "0px",
                      borderColor: "var(--grey)",
                    }}
                    InputProps={{
                      sx: {
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "transparent",
                        },
                      },
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
            <Stack direction="row" justifyContent="flex-end" marginTop="28px">
              <Button
                sx={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--bright)",
                  backgroundColor: "var(--primary)",
                  width: "136px",
                  height: "36px",
                  borderRadius: "8px",
                  padding: "8px",
                  textTransform: "none",
                  alignItems: "center",
                }}
              >
                Save Changes
              </Button>
            </Stack>
          </Box>
        </Form>
      </FormikProvider>
    </Box>
  );
};

export default Profile;
