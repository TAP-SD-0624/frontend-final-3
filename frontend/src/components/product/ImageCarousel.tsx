import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image from "../../assets/product-image.png";
import base from "../../assets/base.png";

const ImageCarousel = () => {
  const [img, setImg] = useState(image);

  const arr = [
    {
      src: image,
      alt: "bag",
    },
    {
      src: base,
      alt: "bag",
    },
    {
      src: image,
      alt: "bag",
    },
    {
      src: image,
      alt: "bag",
    },
    {
      src: image,
      alt: "bag",
    },
    {
      src: image,
      alt: "bag",
    },
  ];

  return (
    <Stack sx={{ width: { xs: "100%", sm: "50%" } }}>
      <img
        src={img}
        alt="bag"
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
