import React, { useState } from "react";
import * as S from "./Carousel.styled";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + images.length) % images.length;
    setActiveIndex(newIndex);
  };

  return (
    <S.CarouselContainer>
      {images.map((image, index) => (
        <S.Slide key={index} active={index === activeIndex}>
          <img src={image} alt={`Slide ${index}`} />
        </S.Slide>
      ))}
      <S.ButtonContainer>
        <S.PrevButton onClick={prevSlide}></S.PrevButton>
        <S.NextButton onClick={nextSlide}></S.NextButton>
      </S.ButtonContainer>
    </S.CarouselContainer>
  );
};

export default Carousel;
