import React from "react";
import ImageCarousel from "@components/product/ImageCarousel";
import ProductInformation from "@components/product/ProductInformation";
import { Container, Box, Stack } from "@mui/material";
import TabsPart from "@components/product/TabsPart";
import { useLocation } from "react-router-dom";
import useProduct from "./hooks/useProduct";

const Product = () => {
  const location = useLocation();
  const productName = location?.state?.productName;

  const { productData } = useProduct("ad177cf0-3fc6-4577-8672-fa5c7e1305bc");

  return (
    <>
      <Container>
        <Box sx={{ mt: "16px" }}>
          <Stack
            width="100%"
            direction={{
              xs: "column",
              sm: "row",
            }}
            gap="27px"
          >
            <ImageCarousel />
            <ProductInformation />
          </Stack>

          <TabsPart />
        </Box>
      </Container>
    </>
  );
};

export default Product;
