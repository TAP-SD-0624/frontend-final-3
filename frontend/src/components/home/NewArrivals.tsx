import Product from "@components/shared/Product";
import Title from "@components/shared/Title";
import classes from "./NewArrivals.module.css";
import { Box, Container, Stack } from "@mui/material";
import { productsMock } from "@src/mocks";
import ImageCarousel from "@components/shared/ImageCarousel";

export default function NewArrivals() {
  return (
    <Box className={classes.newArrivels}>
      <Container>
        <Title viewAll>New Arrivals</Title>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "grid",
            },
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 3,
          }}
        >
          {productsMock.slice(0, 4).map((product) => (
            <Product key={product.slug} product={product} />
          ))}
        </Box>
      </Container>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <ImageCarousel>
          {productsMock.slice(0, 4).map((product) => (
            <Product
              key={product.slug}
              product={product}
              style={{
                width: "92%",
                margin: "0 auto",
                paddingBottom: "24px",
              }}
            />
          ))}
        </ImageCarousel>
      </Box>
    </Box>
  );
}
