import React from "react";
import BreadCrumbs from "@components/product/BreadCrumbs";
import ImageCarousel from "@components/product/ImageCarousel";
import ProductInformation from "@components/product/ProductInformation";
import TabsSection from "@components/product/TabsSection";
import { Container, Box, Stack } from "@mui/material";

const Product = () => {
  return (
    <>
      <BreadCrumbs />
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

          <TabsSection />
        </Box>
      </Container>
    </>
  );
};

export default Product;
