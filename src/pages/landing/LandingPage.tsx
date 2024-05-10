import * as S from "./LandingPage.styled";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "atoms";
import { Carousel, KakaoLogin } from "components/domain";

export default function LandingPage() {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/luckyBoard");
  };

  const images = [
    // NOTE : 목업 이미지 첨부해 보았는데 화질이 안좋아서 추후 이미지 확정되면 고화질로 변경 예정입니다.
    "/images/landing/landing-01.png",
    "/images/landing/landing-02.png",
    "/images/landing/landing-03.png",
    "/images/landing/landing-04.png",
    "/images/landing/landing-05.png",
    "/images/landing/landing-06.png",
  ];

  const texts = [
    "럭키 데이 \n 무작위로 찾아오는 나만의 행운의 날",
    "원하는 럭키 데이 활동을 골라 보세요. \n 직접 입력도 가능해요.",
    "럭키 데이 개수와 기간 범위도 \n 직접 정할 수 있어요.",
    "앞서 제출한 내용을 바탕으로 \n 럭키 데이 활동과 날짜가 랜덤 배정됩니다.",
    "만들어진 럭키 데이를 \n색과 모양이 바뀌는 아이콘으로 확인해 보세요.",
    "럭키 데이 전날에 깜짝 메일을 받아 보세요. \n배정된 활동을 확인할 수 있습니다.",
  ];

  return (
    <S.Landing>
      <S.ContentsBox>
        <Carousel images={images} texts={texts} />
        <div>
          {isLoggedIn ? (
            <button onClick={() => onClickButton()}>로그인 된 상태</button>
          ) : (
            <KakaoLogin />
          )}
        </div>
      </S.ContentsBox>
    </S.Landing>
  );
}
