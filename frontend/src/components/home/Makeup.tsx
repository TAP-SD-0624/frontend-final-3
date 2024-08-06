import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import makeup from "@src/assets/makeup.png";
import skincare from "@src/assets/skincare202.png";
import facepacks from "@src/assets/skincare101.png";
import classes from "./Makeup.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import classNames from "classnames";
export default function Makeup() {
  return (
    <Container>
      <Stack className={classes.makeup} spacing={3}>
        <Box className={classes.lifestyle}>
          <img src={makeup} alt="Makeup" />
          <Box className={classes.content}>
            <Typography className={classes.title}>LIFESTYLE</Typography>
            <Typography className={classes.description}>
              Makeup Accessories from Top Brands
            </Typography>
          </Box>
        </Box>
        <Stack direction="row" justifyContent="space-between" spacing={3}>
          <Box className={classNames(classes.skincare, classes.skin)}>
            <img src={skincare} alt="Skincare" />
            <Box className={classes.content}>
              <Typography className={classes.title}>
                Skincare Essentials
              </Typography>

              <IconButton
                sx={{
                  backgroundColor: "#F1F1F1",
                }}
              >
                <ArrowForwardIcon
                  fontSize="large"
                  sx={{
                    color: "#A53F64",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box className={classNames(classes.skincare, classes.facepacks)}>
            <img src={facepacks} alt="Facepacks" />
            <Box className={classes.content}>
              <Typography className={classes.title}>
                Facepacks & Peels
              </Typography>
              <IconButton
                sx={{
                  backgroundColor: "#C2CCD2",
                }}
              >
                <ArrowForwardIcon
                  fontSize="large"
                  sx={{
                    color: "#1B4B66",
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
