import * as S from "./ViewLuckyDayPage.styled";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useToast } from "hooks";
import { useGetLuckyDayReview } from "services";
import { GetLuckyDayDetail } from "types";
import { ComponentSpinner, PageSpinner, SingleButtonLayout } from "components";
import { formatDate } from "utils";

export default function ViewLuckyDayPage() {
  const { id } = useParams();
  const { addToast } = useToast();
  console.log("dtlNo:", id);

  const { data, isLoading, error } = useGetLuckyDayReview(id || "");
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  if (isLoading) {
    return <PageSpinner />;
  }

  if (error || !data) {
    console.log("에러 발생:", error);
    console.log("받은 데이터:", data);
    addToast({ content: "오류가 발생했습니다." });
    return;
  }

  const { dday, actNm, review, imageUrl } = data.resData as GetLuckyDayDetail;
  console.log("정상 데이터:", data);
  console.log(imageUrl);

  const ImageUrl = imageUrl
    ? `${import.meta.env.VITE_BASE_URL}${imageUrl}`
    : "";

  const isDefaultImage = imageUrl?.includes("/images/default");

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <SingleButtonLayout>
      <S.Container>
        <S.TextBox>{formatDate(dday, "YYYY-MM-DD")}</S.TextBox>
        <S.ReviewBox>
          <S.ImageBox>
            <S.TextBox>{actNm}</S.TextBox>
            {imageLoading && <ComponentSpinner />}

            {imageUrl &&
              (isDefaultImage ? (
                <S.DefaultImage>
                  <img src={ImageUrl} alt="Default" onLoad={handleImageLoad} />
                </S.DefaultImage>
              ) : (
                <S.Image>
                  <img src={ImageUrl} alt="Uploaded" onLoad={handleImageLoad} />
                </S.Image>
              ))}
          </S.ImageBox>
          <S.ReviewTextBox>{review}</S.ReviewTextBox>
        </S.ReviewBox>
      </S.Container>
    </SingleButtonLayout>
  );
}
