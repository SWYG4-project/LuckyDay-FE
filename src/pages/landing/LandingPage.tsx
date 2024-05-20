import * as S from "./LandingPage.styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel, KakaoLogin } from "components/domain";
import Cookies from "js-cookie";

export default function LandingPage() {
  const navigate = useNavigate();

  const images: string[] = [
    "/images/landing/landing-01.webp",
    "/images/landing/landing-02.webp",
    "/images/landing/landing-03.webp",
    "/images/landing/landing-04.webp",
    "/images/landing/landing-05.webp",
    "/images/landing/landing-06.webp",
  ];

  const texts: string[] = [
    "럭키 데이 \n 무작위로 찾아오는 나만의 행운의 날",
    "원하는 럭키 데이 활동을 골라 보세요. \n 직접 입력도 가능해요.",
    "럭키 데이 개수와 기간 범위도 \n 직접 정할 수 있어요.",
    "앞서 제출한 내용을 바탕으로 \n 럭키 데이 활동과 날짜가 랜덤 배정됩니다.",
    "만들어진 럭키 데이를 \n색과 모양이 바뀌는 아이콘으로 확인해 보세요.",
    "럭키 데이 전날에 깜짝 메일을 받아 보세요. \n배정된 활동을 확인할 수 있습니다.",
  ];

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      navigate("/luckyBoard");
    }
  }, [navigate]);

  return (
    <S.Landing>
      <S.ContentsBox>
        <Carousel images={images} texts={texts} />
        {!Cookies.get("accessToken") && <KakaoLogin />}
      </S.ContentsBox>
    </S.Landing>
  );
}
