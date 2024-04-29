import { Carousel } from "components/common/carousel";
import * as S from "./Landing.styled";

export default function Landing() {
  const images = [
    "/images/test1.jpg", // 캐러셀 테스트용 이미지입니다. 추후 랜딩페이지 이미지로 변경예정입니다.
    "/images/test2.jpg",
    "/images/test3.jpg",
    "/images/test4.jpg",
    "/images/test5.jpg",
    "/images/test6.jpg",
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
      </S.ContentsBox>
    </S.Landing>
  );
}
