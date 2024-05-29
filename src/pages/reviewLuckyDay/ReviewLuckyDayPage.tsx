import * as S from "./ReviewLuckyDayPage.styled";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "hooks";
import { useGetLuckyDayDetail } from "services";
import {
  FileUploader,
  PageSpinner,
  SingleButtonLayout,
  SvgButton,
} from "components";
import { ShortBoxIcon } from "assets";
import { formatDate } from "utils";
import { ax } from "apis/axios";
import axios from "axios";

export default function ReviewLuckyDayPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetLuckyDayDetail(id || "");

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [review, setReview] = useState<string>("");
  const [reviewError, setReviewError] = useState<string>("");
  const { addToast } = useToast();

  const handleFileSelect = (file: File) => {
    setUploadedFile(file);
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 100) {
      setReviewError("리뷰는 100자 이내로 작성해 주세요.");
    } else {
      setReviewError("");
      setReview(e.target.value);
    }
  };

  const handleSubmit = async () => {
    if (!review) {
      addToast({ content: "내용을 입력해 주세요." });
      return;
    }

    const reviewReqDto = {
      dtlNo: id || "0",
      review: review,
    };

    const formData = new FormData();
    formData.append(
      "reviewReqDto",
      new Blob([JSON.stringify(reviewReqDto)], { type: "application/json" })
    );

    if (uploadedFile) {
      formData.append("image", uploadedFile);
    }

    try {
      const response = await ax.post("/luckydays/review", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        addToast({ content: "저장되었습니다." });
        navigate(`/luckydays/review/${id}`);
      } else {
        addToast({ content: "저장에 실패했습니다." });
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error response:", error.response);
        if (error.response.status === 2013) {
          addToast({ content: "이미지 또는 내용을 입력해 주세요." });
        } else {
          addToast({
            content: `저장 중 오류가 발생했습니다: ${
              error.response.data.message || error.response.status
            }`,
          });
        }
      } else {
        console.error("Error:", error);
        addToast({ content: "저장 중 오류가 발생했습니다" });
      }
    }
  };

  useEffect(() => {
    if (data && data.resData && data.resData.review !== null) {
      navigate(`/luckydays/${id}`);
    }
  }, [data, id, navigate]);

  if (isLoading) {
    return <PageSpinner />;
  }

  if (error || !data) {
    return <S.Container>오류가 발생했습니다.</S.Container>;
  }

  const { dday, actNm } = data.resData;

  return (
    <SingleButtonLayout>
      <S.Container>
        <S.TextBox>{formatDate(dday, "YYYY-MM-DD")}</S.TextBox>
        <S.ReviewBox>
          <S.TextBox>{actNm}</S.TextBox>
          <S.ImageUploadBox>
            <FileUploader onFileSelect={handleFileSelect} />
            {uploadedFile && (
              <S.ImageBox>
                <img
                  src={URL.createObjectURL(uploadedFile)}
                  alt="Uploaded preview"
                />
              </S.ImageBox>
            )}
          </S.ImageUploadBox>
          <S.ReviewTextarea
            value={review}
            onChange={handleReviewChange}
            placeholder={"100자 이내로 럭키 데이를 기록해 보세요:)"}
          />
          <S.ErrorContainer>
            {reviewError && <S.ErrorText>{reviewError}</S.ErrorText>}
          </S.ErrorContainer>
        </S.ReviewBox>
        <S.ButtonBox>
          <SvgButton
            label="저장하기"
            icon={<ShortBoxIcon />}
            width="120px"
            height="50px"
            onClick={handleSubmit}
          />
        </S.ButtonBox>
      </S.Container>
    </SingleButtonLayout>
  );
}
