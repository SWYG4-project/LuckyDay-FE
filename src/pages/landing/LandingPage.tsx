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
    "럭키 데이\n무작위로 찾아오는 나만의 행운의 날",
    "다양한 카테고리 가운데\n원하는 럭키 데이 활동을 골라 보세요.",
    "선택한 기간 안에서 원하는 개수의\n럭키 데이 활동과 날짜가 랜덤 배정됩니다.",
    "만들어진 럭키 데이를\n변화하는 아이콘으로 확인해 보세요.",
    "럭키 데이 전날에 깜짝 메일을 받아 보세요.\n배정된 활동은 당일에 확인할 수 있습니다.",
    "나만의 사진과 텍스트로\n럭키 데이를 기록하고 추억해 보세요.",
  ];

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      navigate("/luckyboard");
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
