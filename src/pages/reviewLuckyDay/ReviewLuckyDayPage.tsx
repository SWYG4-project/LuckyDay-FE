import * as S from "./ReviewLuckyDayPage.styled";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "hooks";
import {
  useGetLuckyDayDetail,
  useCreateLuckyDayReview,
  useUpdateLuckyDayReview,
} from "services";
import {
  FileUploader,
  PageSpinner,
  SingleButtonLayout,
  SvgButton,
} from "components";
import { ShortBoxIcon } from "assets";
import { formatDate } from "utils";
import axios from "axios";

export default function ReviewLuckyDayPage() {
  const { id } = useParams();
  const { addToast } = useToast();

  const { data, isLoading, error } = useGetLuckyDayDetail(id || "");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [review, setReview] = useState<string>("");
  const [reviewError, setReviewError] = useState<string>("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const createReviewMutation = useCreateLuckyDayReview();
  const updateReviewMutation = useUpdateLuckyDayReview();

  const navigate = useNavigate();

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

  const handleSubmit = () => {
    if (!review) {
      addToast({ content: "내용을 입력해 주세요." });
      return;
    }

    const reviewReqDto = {
      dtlNo: id ? Number(id) : 0,
      review,
    };

    const mutationFn = isEditMode
      ? updateReviewMutation.mutate
      : createReviewMutation.mutate;

    mutationFn(
      { body: reviewReqDto, image: uploadedFile || undefined },
      {
        onSuccess: () => {
          addToast({
            content: isEditMode ? "수정되었습니다." : "저장되었습니다.",
          });
          navigate(`/luckydays/review/${id}`);
        },
        onError: (error) => {
          if (axios.isAxiosError(error) && error.response) {
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
            addToast({ content: "저장 중 오류가 발생했습니다" });
          }
        },
      }
    );
  };

  useEffect(() => {
    if (data && data.resData && data.resData.review !== null) {
      setReview(data.resData.review);
      setIsEditMode(true);
    }
  }, [data]);

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
            label={isEditMode ? "수정하기" : "저장하기"}
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
