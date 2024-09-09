import React, { useState } from "react";
import {
    Avatar,
    Box,
    Button,
    Divider,
    Grid,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import avatar from "../assets/avatar.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TextField from "@src/components/shared/TextField";
import { FormikProvider, Form, useFormik } from "formik";
import useLoginForm from "./SignIn/useLoginForm";
import classes from "./Profile.module.css";
import { useLocation } from "react-router-dom";
import useUserData from "./hooks/useUserData";
import {
    validationSchema,
    validationSchemaPassword,
} from "./hooks/Profile/schema";
import { useMutation } from "@tanstack/react-query";
import { updateUserData, UpdateUserDataRequestBody } from "./hooks/Profile/api";
import useSnackbar from "@src/hooks/useSnackbar";
import LoadingButton from "@mui/lab/LoadingButton";
import {
    updatePassword,
    UpdatePasswordRequestBody,
} from "@src/api/updatePassword";
const UpdateUserDataMutationKey = ["UpdateUserData"];
const UpdatePasswordMutationKey = ["UpdateUserPassword"];
import { queryClient } from "@src/queryClient";
import useLogic from "@components/Navbar/useLogic";

const Profile = () => {
    const { id } = useLoginForm();
    const mockId = "b78222e0-64db-49bc-8fb4-e26a6bde4d57";

    const updateUserDataWrapper = (values: UpdateUserDataRequestBody) => {
        return updateUserData(mockId, values);
    };

    const updateUserPassword = (values: UpdatePasswordRequestBody) => {
        return updatePassword(mockId, values);
    };

    const { userData } = useUserData(mockId);
    const { showSnackbar } = useSnackbar();

    const INITIAL_FORM_STATE = {
        firstName: userData?.user?.firstName,
        lastName: userData?.user?.lastName,
        mobileNumber: userData?.user?.mobileNumber,
        image: '',
    };

    const INITIAL_FORM_STATE_Password = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    };

    const [selectedImage, setSelectedImage] = useState(avatar);





    const { mutate: updateUserDataMutate, isPending } = useMutation({
        mutationKey: UpdateUserDataMutationKey,
        mutationFn: updateUserDataWrapper,
        onSuccess: (data) => {
            showSnackbar({ severity: "success", message: data.message });
            useUserData(mockId);
        },
        onError: (error) => {
            const errorMessage =
                error.response?.data?.message.includs("Phone number");
            errorMessage;
            showSnackbar({ severity: "warning", message: errorMessage });

            showSnackbar({
                severity: "success",
                message: "User's data updated successfuly",
            });
            console.log(error);
        },
    });

    const { mutate: updateFormPassword, isPending: isUpdatePasswordPending } =
        useMutation({
            mutationKey: UpdatePasswordMutationKey,
            mutationFn: updateUserPassword,
            onSuccess: (data) => {
                showSnackbar({ severity: "success", message: data.message });
                useUserData(mockId);
            },
            onError: () => {
                useUserData(mockId);
            },
        });

    const formikProps = useFormik({
        initialValues: INITIAL_FORM_STATE,
        onSubmit: (values, { resetForm }) => {
            return updateUserDataMutate(values, {
                onError: () => resetForm(),
            });
        },
        validationSchema,
        validateOnMount: true,
    });

    const formikprops = useFormik({
        initialValues: INITIAL_FORM_STATE_Password,
        onSubmit: (values) => {
            return updateFormPassword(values);
        },
        validationSchemaPassword,
        validateOnMount: true,
    });

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageURL = reader.result; // Get the image as a data URL
                setSelectedImage(imageURL); // Set the image URL in the state
                formikProps.setFieldValue('image', imageURL); // Set the image URL in the formik form state
            };
            reader.readAsDataURL(file);
        }
    };



    const { isValid, values } = formikprops;
    const { newPassword, confirmPassword } = values;

    const isSubmitEnabled = isValid && newPassword === confirmPassword;

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
            <FormikProvider value={formikProps}>
                <Form autoComplete="off">
                    <Stack direction="row" alignItems="flex-end" gap="16px" mt="37px">
                        <Avatar
                            alt="Profile Image"
                            src={selectedImage}
                            sx={{ width: "80px", height: "80px" }}
                        />
                        <Stack direction="row" gap="16px" alignItems="center">
                            <input
                                name="image"
                                accept="image/*"
                                type="file"
                                id="avatar-upload"
                                style={{ display: 'none' }}
                                onChange={handleImageChange} // Call your file change handler here
                            />
                            <label htmlFor="avatar-upload">
                                <Button
                                    component="span"
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
                                        cursor: "pointer",
                                        alignItems: "baseline",
                                        '&:hover': {
                                            backgroundColor: "var(--primary)",
                                        }, '&:click': {
                                            backgroundColor: "var(--primary)",
                                        },
                                    }}
                                >
                                    Upload
                                </Button>
                            </label>
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
                                            readOnly: true,
                                        }}
                                    />
                                </Stack>
                            </Grid>
                        </Grid>
                        <Stack gap="8px" mt="8px">
                            <label className={classes.label}>Mobile Number</label>

                            <Stack direction="row">
                                <Grid container gap="8px">
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            name="mobileNumber"
                                            placeholder={userData?.user.mobileNumber}
                                            id="mobileNumber"
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
                        <Stack direction="row" justifyContent="flex-end" marginTop="28px">
                            <LoadingButton
                                type="submit"
                                loading={isPending}
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
                                    "&:hover": {
                                        backgroundColor: "var(--primary)",
                                    },
                                    "&:click": {
                                        backgroundColor: "var(--primary)",
                                    },
                                }}
                            >
                                Save Changes
                            </LoadingButton>
                        </Stack>
                    </Box>
                </Form>
            </FormikProvider>
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
            <FormikProvider value={formikprops}>
                <Form autoComplete="off">
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Stack mt="37px" gap="8px">
                                <label className={classes.label}>Current Password</label>
                                <TextField
                                    name="currentPassword"
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
                        <LoadingButton
                            type="submit"
                            loading={isUpdatePasswordPending}
                            disabled={!isSubmitEnabled}
                            sx={{
                                fontFamily: "Inter",
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "var(--bright)",
                                backgroundColor: "var(--primary)",
                                width: "180px",
                                height: "36px",
                                borderRadius: "8px",
                                padding: "8px",
                                textTransform: "none",
                                alignItems: "center",
                                "&:hover": {
                                    backgroundColor: "var(--primary)",
                                },
                                "&:click": {
                                    backgroundColor: "var(--primary)",
                                },
                            }}
                        >
                            Change Password
                        </LoadingButton>
                    </Stack>
                </Form>
            </FormikProvider>
        </Box>
    );
};

export default Profile;
