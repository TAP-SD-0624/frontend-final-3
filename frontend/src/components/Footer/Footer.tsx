import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  const footerItems = [
    "Skincare",
    "Personal Care",
    "Handbags",
    "Apparels",
    "Watches",
    "Eye Wear",
    "Jewellery",
  ];

  return (
    <Box
      sx={{
        backgroundColor: "var(--icon)",
        marginTop: "32px",
        paddingBottom: "30px",
      }}
    >
      <Container>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          justifyContent="space-between"
          alignItems="start"
          paddingTop="30px"
        >
          <Box>
            <Stack
              sx={{
                gap: "8px",
                alignItems: "baseline",
              }}
            >
              <Typography
                noWrap
                component="a"
                href="#"
                sx={{
                  color: "var(--bright)",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                Shop by Category
              </Typography>
              {footerItems.map((item, index) => (
                <Typography
                  key={index}
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    color: "var(--footer-text)",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Box>
          <Box
            paddingTop="15px"
            width={{
              xs: "95%",
              sm: "100%",
            }}
          >
            <Stack gap="16px">
              <Stack
                direction="row"
                gap="20px"
                justifyContent={{
                  xs: "flex-start",
                  sm: "flex-end",
                }}
                alignItems="center"
              >
                <IconButton
                  sx={{
                    width: "38px",
                    height: "38px",
                    backgroundColor: "var(--footer-icon-bg)",
                  }}
                >
                  <FacebookIcon
                    sx={{
                      color: "var(--icon)",
                    }}
                  />
                </IconButton>
                <IconButton
                  sx={{
                    width: "38px",
                    height: "38px",
                    backgroundColor: "var(--footer-icon-bg)",
                  }}
                >
                  <InstagramIcon
                    sx={{
                      color: "var(--icon)",
                    }}
                  />
                </IconButton>
                <IconButton
                  sx={{
                    width: "38px",
                    height: "38px",
                    backgroundColor: "var(--footer-icon-bg)",
                  }}
                >
                  <TwitterIcon
                    sx={{
                      color: "var(--icon)",
                    }}
                  />
                </IconButton>
                <IconButton
                  sx={{
                    width: "38px",
                    height: "38px",
                    backgroundColor: "var(--footer-icon-bg)",
                  }}
                >
                  <YouTubeIcon
                    sx={{
                      color: "var(--icon)",
                    }}
                  />
                </IconButton>
              </Stack>
              <Stack
                direction="row"
                gap="20px"
                justifyContent={{
                  xs: "flex-start",
                  sm: "flex-end",
                }}
                alignItems="center"
                paddingTop="20px"
              >
                <IconButton
                  sx={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: "var(--icon)",
                  }}
                >
                  <LocationOnIcon
                    sx={{
                      color: "var(--bright)",
                    }}
                  />
                </IconButton>
                <Typography
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    color: "var(--bright)",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  United States
                </Typography>
              </Stack>
              <Stack
                direction="row"
                gap="20px"
                justifyContent="flex-end"
                alignItems="center"
              >
                <IconButton
                  sx={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: "var(--icon)",
                  }}
                >
                  <CopyrightIcon
                    sx={{
                      color: "var(--footer-text)",
                    }}
                  />
                </IconButton>
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
                  2021 | Cora Leviene All Rights Reserved
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
