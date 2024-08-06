import { Box, Button, Container, Stack } from "@mui/material";
import classes from "./HeroSection.module.css";
import HeroImage from "@src/assets/homeBackground.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HeroSection() {
  return (
    <Container>
      <Box className={classes.heroSection}>
        <img src={HeroImage} alt="Hero" />
        <Stack
          direction="column"
          className={classes.heroText}
          justifyContent="space-between"
        >
          <Stack spacing={2}>
            <h1>Carry your Funk</h1>
            <p>Trendy handbags collection for your party animal</p>
          </Stack>
          <Button
            variant="contained"
            sx={{
              width: "fit-content",
            }}
            className={classes.button}
            startIcon={<ArrowForwardIcon />}
          >
            See More
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
