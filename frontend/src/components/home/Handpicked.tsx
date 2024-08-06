import Title from "@components/shared/Title";
import { Box, Container } from "@mui/material";
import { productsMock } from "@src/mocks";
import React from "react";
import classes from "./Handpicked.module.css";

export default function Handpicked() {
  return (
    <Box className={classes.handpicked}>
      <Container>
        <Title isBright>Handpicked Collections</Title>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 3,
          }}
        >
          {productsMock.slice(0, 4).map((product) => (
            <Box key={product.slug} className={classes.item}>
              <img src={product.img} alt={product.name} />
              <p>{product.name}</p>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
