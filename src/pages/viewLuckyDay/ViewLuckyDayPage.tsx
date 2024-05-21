import * as S from "./ViewLuckyDayPage.styled";
import { useParams } from "react-router-dom";
import { useGetLuckyDayReview } from "services";
import { PageSpinner } from "components";
import { formatDate } from "utils";

export default function ViewLuckyDayPage() {
  const { id } = useParams();
  console.log("dtlNo:", id);

  const { data, isLoading, error } = useGetLuckyDayReview(id || "");

  if (isLoading) {
    return <PageSpinner />;
  }

  if (error || !data) {
    console.log("에러 발생:", error);
    console.log("받은 데이터:", data);
    return <S.Container>오류가 발생했습니다.</S.Container>;
  }

  const { dday, actNm, review, imageUrl } = data.resData;
  console.log("정상 데이터:", data);
  console.log(imageUrl);

  // FIX : 이미지 주소 수정이 필요합니다.
  // const ImageUrl = `${import.meta.env.VITE_BASE_URL}${imageUrl}`;

  return (
    <S.Container>
      <S.TextBox>{formatDate(dday, "YYYY-MM-DD")}</S.TextBox>
      <S.ReviewBox>
        <S.ImageBox>
          <S.TextBox>{actNm}</S.TextBox>
          <S.Image>{imageUrl && <img src={imageUrl} />}</S.Image>

          {/* FIX : 디폴트 이미지를 구분하는 파라미터가 없습니다. 백엔드 문의 예정 */}
          {/* <S.DefaultImage>{imageUrl && <img src={imageUrl} />}</S.DefaultImage> */}
        </S.ImageBox>
        <S.ReviewTextBox>{review || "리뷰가 없습니다."}</S.ReviewTextBox>
      </S.ReviewBox>
    </S.Container>
  );
}
