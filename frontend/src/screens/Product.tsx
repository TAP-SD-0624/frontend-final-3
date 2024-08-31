import React from "react";
import ImageCarousel from "@components/product/ImageCarousel";
import ProductInformation from "@components/product/ProductInformation";
import { Container, Box, Stack } from "@mui/material";
import TabsPart from "@components/product/TabsPart";

const Product = () => {
 

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
