import { Box, Button, Container, Stack, Typography } from "@mui/material";
import classes from "./HeroSection.module.css";
import HeroImage from "@src/assets/blackfridayy.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HeroSection() {
  return (
    <Container>
      <Box
        className={classes.heroSection}
        sx={{
          height: {
            xs: "200px",
            sm: "250px",
            md: "400px",
          },
        }}
      >
        <img src={HeroImage} alt="Hero" />
        <Stack
          direction="column"
          className={classes.heroText}
          justifyContent="space-between"
          sx={{
            padding: {
              xs: "8px 20px 12px",
              sm: "8px 30px 12px",
              md: "20px 40px 12px",
              lg: "24px 48px 16px",
            },
            height: {
              xs: "120px",
              sm: "150px",
              md: "250px",
              lg: "300px",
            },
            width: {
              xs: "90% ",
              sm: "65%",
              md: "55%",
            },
          }}
        >
          <Stack spacing={2}>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "28px",
                  sm: "40px",
                  md: "56px",
                  lg: "72px",
                },
                fontWeight: "bold",
                color: "var(--dark)",
              }}
            >
              UPTO 70% OFF{" "}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "28px",
                  sm: "40px",
                  md: "56px",
                  lg: "72px",
                },
                color: "var(--dark)",
              }}
            >
              BLACK FRIDAY{" "}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
