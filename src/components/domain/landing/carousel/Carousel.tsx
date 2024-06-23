import * as S from "./Carousel.styled";
import { useState } from "react";
import { ArrowIcon } from "assets";
import { useSwipeable } from "react-swipeable";

interface CarouselProps {
  images: string[];
  texts: string[];
}

const Carousel = ({ images, texts }: CarouselProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextSlide = (): void => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
  };

  const handlePrevSlide = (): void => {
    const newIndex = (activeIndex - 1 + images.length) % images.length;
    setActiveIndex(newIndex);
  };

  const handleDotClick = (index: number): void => {
    setActiveIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextSlide,
    onSwipedRight: handlePrevSlide,
  });

  return (
    <S.CarouselContainer {...handlers}>
      <S.TextBox>{texts[activeIndex]}</S.TextBox>
      <S.SlideContainer>
        {images.map((image, index) => (
          <S.Slide key={index} active={index === activeIndex}>
            <S.Image src={image} alt={`Slide ${index}`} />
          </S.Slide>
        ))}
      </S.SlideContainer>
      <S.ButtonContainer>
        <S.PrevButton onClick={handlePrevSlide}>
          <ArrowIcon css={S.PrevArrowIcon} />
        </S.PrevButton>
        <S.DotContainer>
          {images.map((_, index) => (
            <S.Dot
              key={index}
              active={index === activeIndex}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </S.DotContainer>
        <S.NextButton onClick={handleNextSlide}>
          <ArrowIcon css={S.NextArrowIcon} />
        </S.NextButton>
      </S.ButtonContainer>
    </S.CarouselContainer>
  );
};

export default Carousel;
