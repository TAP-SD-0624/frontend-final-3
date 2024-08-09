import {
  Box,
  Container,
  Stack,
  Typography,
  Rating,
  Divider,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import classes from "./product.module.css";
import image from "../../assets/product-image.png";
import BreadCrumbs from "./BreadCrumbs";
import Title from "@components/shared/Title";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const ProductSection = () => {
  const [value, setValue] = useState(2);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 2;
  return (
    <Container>
      <Box>
        <Stack
          width="100%"
          className={classes.product}
          direction="row"
          justifyContent="space-between"
        >
          <img src={image} alt="bag" />
          <Stack spacing={2}>
            <Title>Coach</Title>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: "600",
                color: "var(--low-emphasis)",
                transform: "translateY(-15px)",
              }}
            >
              Leather Coach Bag with adjustable starps.
            </Typography>
            <Stack direction="row" gap="14px">
              <Rating
                name="rating-controlled"
                value={value}
                readOnly
                sx={{ gap: "8px", color: "var(--stars)" }}
                // onChange={(event, newValue) => {
                //   setValue(newValue);
                // }}
              />
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "var(--light-text)",
                }}
              >
                (250) Ratings
              </Typography>
            </Stack>
            <Stack direction="row" gap="16px" alignItems="center">
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "40px",
                  fontWeight: "700",
                  color: "var(--high-emphasis)",
                }}
              >
                $54.69
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "34px",
                  fontWeight: "600",
                  color: "var(--light-text)",
                  textDecoration: "line-through",
                }}
              >
                $78.66
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "var(--vibrant)",
                }}
              >
                50%OFF
              </Typography>
            </Stack>
            <Divider />
            <Stack direction="row" alignItems="center" gap="16px">
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "var(--q-black)",
                }}
              >
                Quantity:
              </Typography>
              <Stack
                direction="row"
                sx={{ borderRadius: "4px", border: "1px solid var(--primary)" }}
              >
                <MobileStepper
                  variant="text"
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  sx={{ borderRadius: "4px" }}
                  nextButton={
                    <IconButton
                      disabled={activeStep === maxSteps - 1}
                      sx={{
                        width: "24px",
                        height: "24px",
                      }}
                    >
                      <AddIcon
                        sx={{
                          color: "var(--high-emphasis)",
                        }}
                      />
                    </IconButton>
                  }
                  backButton={
                    <IconButton
                      // disabled={activeStep === 0}
                      sx={{
                        width: "24px",
                        height: "24px",
                      }}
                    >
                      <RemoveIcon
                        sx={{
                          color: "var(--high-emphasis)",
                        }}
                      />
                    </IconButton>
                  }
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default ProductSection;
