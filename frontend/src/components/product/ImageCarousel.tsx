import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image from "../../assets/product-image.png";
import base from "../../assets/base.png";
import { useLocation } from "react-router-dom";
import useProduct from "@src/screens/hooks/useProduct";

const ImageCarousel = () => {
  const [img, setImg] = useState(image);
  const location = useLocation();
  const productId = location?.state?.productId;
  const { productData } = useProduct(productId);

  const arr = [
    {
      src: productData?.product?.ProductImages[0]?.path,
      alt: productData?.product?.name,
    },
    {
      src: productData?.product?.ProductImages[0]?.path,
      alt: productData?.product?.name,
    },
    {
      src: productData?.product?.ProductImages[0]?.path,
      alt: productData?.product?.name,
    },
    {
      src: productData?.product?.ProductImages[0]?.path,
      alt: productData?.product?.name,
    },
  ];

  return (
    <Stack sx={{ width: { xs: "100%", sm: "50%" } }}>
      <img
        src={productData?.product?.ProductImages[0]?.path}
        alt={productData?.product?.name}
        width="100%"
        height="500px"
        style={{ borderRadius: "16px", objectFit: "cover" }}
      />
      <Box sx={{ width: { xs: "100%", sm: "80%" }, m: "16px auto" }}>
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={false} // Consider enabling infinite loop
          dynamicHeight={true} // Adjust height dynamically
          className="custom-carousel"
          centerSlidePercentage={25}
          centerMode={true}
        >
          {arr.map((product) => (
            <div
              style={{
                margin: "16px",
                cursor: "pointer",
              }}
              onClick={() => setImg(product.src)}
            >
              <img
                style={{
                  width: "75px",
                  height: "75px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
                src={product.src}
                alt={product.alt}
              />
            </div>
          ))}
        </Carousel>
      </Box>
    </Stack>
  );
};

export default ImageCarousel;
