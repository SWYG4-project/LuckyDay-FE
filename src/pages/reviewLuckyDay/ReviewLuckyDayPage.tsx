import * as S from "./ReviewLuckyDayPage.styled";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetLuckyDayDetail } from "services";
import { FileUploader, Input, SvgButton } from "components";
import { ShortBoxIcon } from "assets";
import { ax } from "apis/axios";
import axios from "axios";

export default function ReviewLuckyDayPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetLuckyDayDetail(id || "");

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [review, setReview] = useState<string>("");

  const handleFileSelect = (file: File) => {
    setUploadedFile(file);
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview(e.target.value);
  };

  const handleSubmit = async () => {
    if (!uploadedFile || !review) {
      alert("이미지 또는 내용을 입력해 주세요");
      return;
    }

    const formData = new FormData();
    formData.append("dtlNo", id || "0");
    formData.append("review", review);
    formData.append("image", uploadedFile);

    try {
      const response = await ax.post("/luckydays/review", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 202) {
        alert("저장되었습니다");
      } else {
        alert("저장에 실패했습니다");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error response:", error.response);
        alert(
          `저장 중 오류가 발생했습니다: ${
            error.response.data.message || error.response.status
          }`
        );
      } else {
        console.error("Error:", error);
        alert("저장 중 오류가 발생했습니다");
      }
    }
  };

  if (isLoading) {
    return <S.Container>로딩 중...</S.Container>; // NOTE: spinner 추가 예정입니다.
  }

  if (error || !data) {
    console.log("에러 발생:", error);
    console.log("받은 데이터:", data);
    return <S.Container>오류가 발생했습니다.</S.Container>;
  }

  const { dday, actNm } = data.resData;

  return (
    <S.Container>
      <S.TextBox>{dday}</S.TextBox>
      <S.ReviewBox>
        <S.TextBox>{actNm}</S.TextBox>
        <S.ImageUploadBox>
          <FileUploader onFileSelect={handleFileSelect} />
          {uploadedFile && (
            <S.ImageBox>
              <img
                src={URL.createObjectURL(uploadedFile)}
                alt="Uploaded preview"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              />
            </S.ImageBox>
          )}
        </S.ImageUploadBox>
        <Input
          css={S.ReviewInput}
          value={review}
          handleChange={handleReviewChange}
          placeholder={"100자 이내로 럭키 데이를 기록해 보세요:)"}
        />
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
  );
}
