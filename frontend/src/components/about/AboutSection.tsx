import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

interface AboutSectionProps {
  imageUrl: string;
  title: string;
  description: string;
  direction?: "row" | "row-reverse";
}

export default function AboutSection({
  imageUrl,
  title,
  description,
  direction = "row",
}: AboutSectionProps) {
  return (
    <Box mt={6}>
      <Grid container spacing={4} alignItems="center" direction={direction}>
        <Grid item xs={12} md={7}>
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: "100%",
              height: "300px",
            }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            color="var(--high-emphasis)"
          >
            {title}
          </Typography>
          <Typography variant="body1" color="var(--low-emphasis)">
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
