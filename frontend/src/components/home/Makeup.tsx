import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import makeup from "@src/assets/makeup.png";
import skincare from "@src/assets/skincare202.png";
import facepacks from "@src/assets/skincare101.png";
import classes from "./Makeup.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
export default function Makeup() {
  const navigate = useNavigate();
  return (
    <Container>
      <Stack className={classes.makeup} spacing={3}>
        <Box
          onClick={() => navigate('/items?limitedEdition= Limited Edition', { state: { limitedEdition: "Limited Edition" } })}
          className={classes.lifestyle}>
          <img src={makeup} alt="Makeup" />
          <Box
            className={classes.content}
            sx={{
              width: {
                xs: "90%",
                sm: "70%",
                md: "50%",
              },
            }}
          >
            <Typography
              className={classes.title}
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "20px",
                  md: "25px",
                  lg: "30px",
                },
              }}
            >
              LIFESTYLE
            </Typography>
            <Typography
              className={classes.description}
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "36px",
                  md: "40px",
                  lg: "52px",
                },
              }}
            >
              Makeup Accessories from Top Brands
            </Typography>
          </Box>
        </Box>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          justifyContent="space-between"
          spacing={3}
        >
          <Box
            onClick={() => navigate('/items?discountedProducts= Discounted Products', { state: { discountedProducts: "Discounted Products" } })}
            className={classNames(classes.skincare, classes.skin)}>
            <img src={skincare} alt="Skincare" />
            <Box
              className={classes.content}
              sx={{
                top: {
                  xs: "16px !important",
                  md: "26px !important",
                },
              }}
            >
              <Typography
                className={classes.title}
                sx={{
                  fontSize: {
                    xs: "18px",
                    sm: "32px",
                    md: "40px",
                  },
                }}
              >
                Skincare Essentials
              </Typography>

              <IconButton
                sx={{
                  backgroundColor: "#F1F1F1",
                }}
              >
                <ArrowForwardIcon
                  sx={{
                    color: "#A53F64",
                    fontSize: {
                      xs: "small",
                      sm: "medium",
                      md: "large",
                    },
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box
            onClick={() => navigate('/items?popularProducts= Popular Products', { state: { popularProducts: "Popular Products" } })}
            className={classNames(classes.skincare, classes.facepacks)}>
            <img src={facepacks} alt="Facepacks" />
            <Box
              className={classes.content}
              sx={{
                top: {
                  xs: "16px !important",
                  md: "26px !importnat",
                },
              }}
            >
              <Typography
                className={classes.title}
                sx={{
                  fontSize: {
                    xs: "18px",
                    sm: "32px",
                    md: "40px",
                  },
                }}
              >
                Facepacks & Peels
              </Typography>
              <IconButton
                sx={{
                  backgroundColor: "#C2CCD2",
                }}
              >
                <ArrowForwardIcon
                  sx={{
                    color: "#1B4B66",
                    fontSize: {
                      xs: "small",
                      sm: "medium",
                      md: "large",
                    },
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}
