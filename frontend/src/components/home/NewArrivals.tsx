import Product from "@components/shared/Product";
import Title from "@components/shared/Title";
import classes from "./NewArrivals.module.css";
import { Box, Container, Stack } from "@mui/material";
import { productsMock } from "@src/mocks";

export default function NewArrivals() {
  return (
    <Container className={classes.newArrivels}>
      <Title viewAll>New Arrivals</Title>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 3,
        }}
      >
        {productsMock.slice(0, 4).map((product) => (
          <Product key={product.slug} product={product} />
        ))}
      </Box>
    </Container>
  );
}
