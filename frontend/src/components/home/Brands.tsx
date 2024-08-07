import Title from "@components/shared/Title";
import { Box, Container } from "@mui/material";
import { brandsMock } from "@src/mocks";
import classes from "./Brands.module.css";
import ImageCarousel from "@components/shared/ImageCarousel";

export default function Brands() {
  return (
    <Box
      className={classes.brands}
      sx={{
        paddingBottom: {
          xs: "40px",
          sm: "88px",
        },
      }}
    >
      <Container>
        <Title>Shop by Brands</Title>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "grid",
            },
            gridTemplateColumns: "repeat(auto-fill, minmax(168px, 1fr))",
            gap: 3,
          }}
        >
          {brandsMock.slice(0, 6).map((product) => (
            <Box key={product.name} className={classes.item}>
              <img src={product.img} alt={product.name} />
            </Box>
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
          {brandsMock.slice(0, 6).map((product) => (
            <Box
              key={product.name}
              className={classes.item}
              sx={{
                width: "70%",
                margin: "0 auto",
                marginBottom: "48px",
              }}
            >
              <img
                src={product.img}
                alt={product.name}
                style={{
                  width: "60%",
                }}
              />
            </Box>
          ))}
        </ImageCarousel>
      </Box>
    </Box>
  );
}
