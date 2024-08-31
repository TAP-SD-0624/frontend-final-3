import Product from "@components/shared/Product";
import Title from "@components/shared/Title";
import classes from "./NewArrivals.module.css";
import { Box, Container, Stack } from "@mui/material";
import { productsMock } from "@src/mocks";
import ImageCarousel from "@components/shared/ImageCarousel";
import { useNavigate } from "react-router-dom";
import { productType } from "@src/types";
import useNewArrivals from "@src/screens/hooks/useNewArrivals";

export default function NewArrivals() {
  const navigate = useNavigate();
  const handleOnClickViewMore = () => {
    navigate('/items?newArrivals= New Arrivals', { state: { newArrivals: "New Arrivals" } });
  }
  const handleOnClickProduct = (product) => {
    navigate(`/product?Id= ${product.id} && Name=${product.name}`, { state: { productId: product.id, category: product?.Category?.name, brand: product?.Brand?.name } });
  }

  const { newArrivalsData } = useNewArrivals();
  const data = newArrivalsData?.products;


  return (
    <Box className={classes.newArrivels}>
      <Container>
        <Title onClick={handleOnClickViewMore} viewAll>New Arrivals</Title>
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
          {data?.slice(0, 4).map((product) => (
            <Product onClick={() => handleOnClickProduct(product)}
              key={product.id} product={product} />
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
          {data?.slice(0, 4).map((product) => (
            <Product
              onClick={() => handleOnClickProduct(product)}
              key={product.id}
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
