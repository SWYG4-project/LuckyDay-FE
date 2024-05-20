import * as S from "./ViewLuckyDayPage.styled";
import { useParams } from "react-router-dom";
import { useGetLuckyDayReview } from "services";

export default function ViewLuckyDayPage() {
  const { id } = useParams();
  console.log("dtlNo:", id);

  const { data, isLoading, error } = useGetLuckyDayReview(id || "");

  if (isLoading) {
    return <S.Container>로딩 중...</S.Container>; // NOTE: Spinner 연결 예정입니다.
  }

  if (error || !data) {
    console.log("에러 발생:", error);
    console.log("받은 데이터:", data);
    return <S.Container>오류가 발생했습니다.</S.Container>;
  }

  const { dday, actNm, review, imageUrl } = data.resData;
  console.log("정상 데이터:", data);

  return (
    <S.Container>
      <S.TextBox>{dday}</S.TextBox>
      <S.ReviewBox>
        <S.TextBox>{actNm}</S.TextBox>
        <S.ImageBox>
          {imageUrl && <img src={imageUrl} alt={actNm} />}
        </S.ImageBox>
        <S.ReviewText>{review || "리뷰가 없습니다."}</S.ReviewText>
      </S.ReviewBox>
    </S.Container>
  );
}
