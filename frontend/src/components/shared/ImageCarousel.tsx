import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ImageCarouselProps {
  children?: React.ReactChild[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ children }) => {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      emulateTouch={true}
      autoPlay={true}
      swipeable={true}
      className="carousel"
    >
      {children}
    </Carousel>
  );
};

export default ImageCarousel;
