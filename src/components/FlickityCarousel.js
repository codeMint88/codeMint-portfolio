import React, { useEffect } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import styled from "styled-components";
import Figure from "./Figure";

function Carousel({ pictures }) {
  useEffect(() => {
    const carousel = new Flickity(".carousel", {
      imagesLoaded: true,
      percentPosition: false,
      pageDots: false,
    });

    const imgs = document.querySelectorAll(".carousel-cell img");

    const handleScroll = () => {
      carousel.slides.forEach((slide, i) => {
        const img = imgs[i];
        const x = ((slide.target + carousel.x) * -1) / 3;
        img.style.transform = `translateX(${x}px)`;
      });
    };

    carousel.on("scroll.flickity", handleScroll);

    return () => {
      carousel.off("scroll.flickity", handleScroll);
      carousel.destroy();
    };
  }, []);

  return (
    <CarouselWrapper className="carousel">
      {pictures.map((picture) => (
        <CarouselCell className="carousel-cell" key={picture.src}>
          <Figure
            src={picture.src}
            srcSet={picture.srcSet}
            caption={picture.caption}
            alt={picture.alt}
            width={picture.width}
            height={picture.height}
          />
        </CarouselCell>
      ))}
    </CarouselWrapper>
  );
}

export default Carousel;

const CarouselWrapper = styled.div`
  height: 100%;
`;

const CarouselCell = styled.div`
  margin-right: 20px;
  overflow: hidden;
  height: 100%;
`;
