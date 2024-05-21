import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useToast } from "hooks";
import * as S from "./LoadingPage.styled";

function LoadingPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [, setCurrentImageIndex] = useState(0);
  const [isSliderOpen, setIsSliderOpen] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const { addToast } = useToast();

  const images = [
    "/images/profile/profile-01.webp",
    "/images/profile/profile-02.webp",
    "/images/profile/profile-03.webp",
    "/images/profile/profile-04.webp",
    "/images/profile/profile-05.webp",
  ];

  useEffect(() => {
    setIsAnimating(true);

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);

      setTimeout(() => {
        setIsAnimating(true);
      }, 100);
    }, images.length * 400);

    const timeoutId = setTimeout(() => {
      setIsSliderOpen(false);
      clearInterval(intervalId);
      addToast({ content: "럭키데이 생성이 완료되었습니다." });
      navigate("/luckyboard", { replace: true });
    }, 4000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!state) return navigate("/luckyboard");
  }, [state]);

  if (!isSliderOpen) {
    return null;
  }

  return (
    <S.LoadingPage>
      <S.Title>럭키볼을 꺼내고 있어요!</S.Title>
      <S.ImagesContainer>
        {images.map((src, index) => (
          <S.Img
            key={index}
            isAnimating={isAnimating}
            delay={index * 0.3}
            src={src}
            alt={`슬라이드 이미지 ${index + 1}`}
          />
        ))}
      </S.ImagesContainer>
    </S.LoadingPage>
  );
}

export default LoadingPage;
