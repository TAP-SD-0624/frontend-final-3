import { Box, Container, Stack, Typography } from "@mui/material";
import classes from "./HeroSection.module.css";

interface HeroSectionProps {
  imageUrl: string;
  title: string;
  description: string;
}

export default function HeroSection({
  imageUrl,
  title,
  description,
}: HeroSectionProps) {
  return (
    <Box
      className={classes.heroSection}
      sx={{
        height: {
          xs: "200px",
          sm: "250px",
          md: "400px",
        },
        mt: "-20px"
      }}
    >
      <img src={imageUrl} alt="Hero" />

      <Stack
        direction="column"
        className={classes.heroText}
        justifyContent="space-between"
        sx={{
          width: {
            xs: "40% ",
            xl: "30%",
          },
        }}
      >
        <Stack spacing={2}>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "30px",
                sm: "40px",
                md: "50px",
                lg: "50px",
              },
              fontWeight: "bold",
              color: "var(--dark)",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: "10px",
                sm: "14px",
                md: "16px",
                lg: "20px",
              },
              fontWeight: "500",
              color: "var(--low-emphasis)",
            }}
          >
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
