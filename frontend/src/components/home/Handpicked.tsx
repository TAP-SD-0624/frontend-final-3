import Title from "@components/shared/Title";
import { Box, Container } from "@mui/material";
import { productsMock } from "@src/mocks";
import classes from "./Handpicked.module.css";
import ImageCarousel from "@components/shared/ImageCarousel";
import { productType } from "@src/types";
import { useNavigate } from "react-router-dom";

export default function Handpicked() {
  const navigate = useNavigate();
  const handleOnClickCategory = (category: productType) => {
    navigate(`/items?category= ${category.name}`, { state: { categoryName: category.name } });
  }

  return (
    <Box className={classes.handpicked}>
      <Container>
        <Title isBright>Handpicked Collections</Title>
        <Box
          sx={{
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 3,
            display: {
              xs: "none",
              sm: "grid",
            },
          }}
        >
          {productsMock.slice(0, 4).map((product) => (
            <Box key={product.slug} className={classes.item} onClick={() => handleOnClickCategory(product)}>
              <img src={product.img} alt={product.name} />
              <p>{product.name}</p>
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
          {productsMock.map((product) => (
            <Box
              onClick={() => handleOnClickCategory(product)}
              key={product.slug}
              className={classes.item}
              sx={{
                width: "92%",
                margin: "0 auto",
                marginBottom: "40px",
              }}
            >
              <img src={product.img} alt={product.name} />
              <p>{product.name}</p>
            </Box>
          ))}
        </ImageCarousel>
      </Box>
    </Box>
  );
}
