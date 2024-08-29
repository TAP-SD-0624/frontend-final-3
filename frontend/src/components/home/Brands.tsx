import Title from "@components/shared/Title";
import { Box, Container } from "@mui/material";
import { brandsMock } from "@src/mocks";
import classes from "./Brands.module.css";
import ImageCarousel from "@components/shared/ImageCarousel";
import { productType } from "@src/types";
import { useLocation, useNavigate } from "react-router-dom";
import useBrands from "@src/screens/hooks/useBrands";

interface product {
  id: string;
  name: string;
  imagePath: string;
}

export default function Brands() {
  const navigate = useNavigate();
  const handleOnClickBrand = (brand: product) => {
    navigate(`/items?brand= ${brand.name}`, { state: { brandName: brand.name } });
  }

  const { brandsData } = useBrands();
  const data = brandsData?.brands;
  console.log(data)

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
          {data?.map((product) => (
            <Box key={product.name} className={classes.item} onClick={() => handleOnClickBrand(product)}>
              <img src={product.imagePath} alt={product.name} />
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
          {data?.map((product: product) => (
            <Box
              onClick={() => handleOnClickBrand(product)}
              key={product.name}
              className={classes.item}
              sx={{
                width: "70%",
                margin: "0 auto",
                marginBottom: "48px",
              }}
            >
              <img
                src={product.imagePath}
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
