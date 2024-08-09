import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { mockAboutData } from "@src/mocks";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";

interface SectionProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  direction?: "row" | "row-reverse";
}

const AboutPage = () => {
  return (
    <Box>
      <HeroSection {...mockAboutData[0]} />
      <Container>
        <Stack alignItems="center" mt="40px">
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            color="var(--high-emphasis)"
          >
            {mockAboutData[1].title}
          </Typography>
          <Typography
            variant="body1"
            color="var(--low-emphasis)"
            sx={{
              width: {
                xs: "90%",
                sm: "70%",
                md: "60%",
              },
              textAlign: "center",
            }}
          >
            {mockAboutData[1].description}
          </Typography>
        </Stack>
        <AboutSection {...mockAboutData[2]} direction="row-reverse" />
        <AboutSection {...mockAboutData[3]} />
        <AboutSection {...mockAboutData[4]} direction="row-reverse" />
      </Container>
    </Box>
  );
};

export default AboutPage;
