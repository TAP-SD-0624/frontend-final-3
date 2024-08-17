import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import avatar from "../assets/avatar.png";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Profile = () => {
  return (
      <Box
        // sx={{
        //   width: {
        //     md: "800px",
        //     lg: "874px",
        //   },
        // }}
      >
        {/* <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: "600",
              color: "var(--primary)",
              fontSize: {
                xs: "20px",
                sm: "25px",
                md: "30px",
                lg: "34px",
              },
            }}
          >
            Personal Information
          </Typography>
          <IconButton
            sx={{
              border: "1px solid var(--primary)",
              borderRadius: "8px",
              gap: "8px",
              width: "136px",
            }}
          >
            <Logout
              sx={{ width: "24px", height: "24px", color: "var(--primary)" }}
              fontSize="small"
            />
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "600",
                color: "var(--primary)",
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                  lg: "16px",
                },
              }}
            >
              Logout
            </Typography>
          </IconButton>
        </Stack> */}
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: "600",
            color: "var(--dark)",
            fontSize: {
              xs: "10px",
              sm: "13px",
              md: "17px",
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
                width: "136px",
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
                width: "136px",
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

        <form autoComplete="off">
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              pt: "8px",
              width: "100%",
            }}
          >
            <Stack alignItems="center" sx={{ position: "relative" }}>
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  width: "100%",
                  mt: "16px",
                }}
              >
                <Stack gap="8px">
                  <label
                    style={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "var(--high-emphasis)",
                    }}
                  >
                    First Name
                  </label>
                  <input
                    name="firstName"
                    placeholder="John"
                    type="text"
                    id="firstName"
                    style={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "var(--low-emphasis)",
                      backgroundColor: "var(--grey)",
                      margin: "0px",
                      width: "328px",
                      borderColor: "var(--grey)",
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "0px",
                      borderRight: "none",
                    }}
                  />
                </Stack>

                <Stack gap="8px">
                  <label
                    style={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "var(--high-emphasis)",
                    }}
                  >
                    Last Name
                  </label>
                  <input
                    name="firstName"
                    placeholder="Doe"
                    type="text"
                    id="firstName"
                    style={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "var(--low-emphasis)",
                      backgroundColor: "var(--grey)",
                      margin: "0px",
                      width: "328px",
                      borderColor: "var(--grey)",
                      borderTopLeftRadius: "0px",
                      borderBottomLeftRadius: "0px",
                      borderLeft: "none",
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack gap="8px" mt="8px">
              <label
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--high-emphasis)",
                }}
              >
                Email
              </label>
              <input
                name="email"
                placeholder="Johndoe@johndoe.com"
                type="email"
                id="email"
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--low-emphasis)",
                  backgroundColor: "var(--grey)",
                  margin: "0px",
                  borderColor: "var(--grey)",
                }}
              />
            </Stack>
            <Stack gap="8px" mt="8px">
              <label
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--high-emphasis)",
                }}
              >
                Mobile Number
              </label>
              <Stack direction="row" gap="8px">
                <input
                  name="mobile"
                  placeholder="+11"
                  type="tel"
                  id="email"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "var(--low-emphasis)",
                    backgroundColor: "var(--grey)",
                    margin: "0px",
                    width: "328px",
                    borderColor: "var(--grey)",
                  }}
                />
                <input
                  name="mobile"
                  placeholder="202-555-0114"
                  type="tel"
                  id="email"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "var(--low-emphasis)",
                    backgroundColor: "var(--grey)",
                    margin: "0px",
                    width: "328px",
                    borderColor: "var(--grey)",
                  }}
                />
              </Stack>
            </Stack>
            <Stack gap="8px" mt="8px">
              <label
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--high-emphasis)",
                }}
              >
                Date of birth
              </label>
              <input
                name="date"
                placeholder="DD/MM/YYYY"
                type="date"
                id="date"
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--low-emphasis)",
                  backgroundColor: "var(--grey)",
                  margin: "0px",
                  textTransform: "uppercase",
                  width: "328px",
                  borderColor: "var(--grey)",
                }}
              />
            </Stack>
            <Stack marginTop="40px" width="inhirit"></Stack>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "600",
                color: "var(--dark)",
                fontSize: {
                  xs: "10px",
                  sm: "13px",
                  md: "17px",
                  lg: "20px",
                },
              }}
            >
              Change Password
            </Typography>
            <Divider />
            <Stack mt="37px" gap="8px">
              <label
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--high-emphasis)",
                }}
              >
                Current Password
              </label>
              <input
                name="password"
                placeholder="********"
                type="password"
                id="password"
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--low-emphasis)",
                  backgroundColor: "var(--grey)",
                  margin: "0px",
                  width: "328px",
                  borderColor: "var(--grey)",
                }}
              />
            </Stack>
            <Stack mt="16px" gap="8px">
              <label
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--high-emphasis)",
                }}
              >
                New Password
              </label>
              <Stack
                direction="row"
                alignItems="center"
                width="328px"
                justifyContent="space-between"
                sx={{
                  backgroundColor: "var(--grey)",
                  borderColor: "var(--grey)",
                }}
              >
                <input
                  name="newPassword"
                  placeholder="******"
                  type="password"
                  id="newPassword"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "var(--low-emphasis)",
                    margin: "0px",
                    backgroundColor: "var(--grey)",
                    border: "none",
                  }}
                />
                <IconButton>
                  <VisibilityIcon
                    sx={{ width: "24px", height: "24px", color: "var(--dark)" }}
                  />
                </IconButton>
              </Stack>
            </Stack>
            <Stack mt="16px" gap="8px">
              <label
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--high-emphasis)",
                }}
              >
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                placeholder="******"
                type="password"
                id="confirmPassword"
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--low-emphasis)",
                  backgroundColor: "var(--grey)",
                  margin: "0px",
                  width: "328px",
                  borderColor: "var(--grey)",
                }}
              />
            </Stack>
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
        </form>
      </Box>
  );
};

export default Profile;
