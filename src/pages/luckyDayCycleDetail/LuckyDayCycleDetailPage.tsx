import * as S from "./LuckyDayCycleDetailPage.styled";
import React from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { SvgButton } from "components";
import { CircleBoxIcon } from "assets";
import { useGetLuckyDayCycleInfo } from "services";

const LuckyDayCycleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const theme = useTheme();
  const { data, isLoading, error } = useGetLuckyDayCycleInfo(Number(id));

  console.log("Fetched data:", data);

  if (isLoading) {
    return <S.ErrorBox>로딩 중...</S.ErrorBox>; // NOTE: spinner 추가 예정입니다.
  }

  if (error) {
    return (
      <S.ErrorBox>
        <p>{error.message}</p>
        <S.Logo_Sad />
      </S.ErrorBox>
    );
  }

  // FIX: 사이클 내 럭키데이 data 누락, API 수정 요청 드려야 합니다.
  const labels =
    data?.expDtList.map((date: string) => {
      const formattedDate = new Date(date);
      return `${
        formattedDate.getMonth() + 1
      }월 ${formattedDate.getFullYear()}일`;
    }) || [];

  return (
    <>
      <S.TitleBox>럭키 데이 보관함</S.TitleBox>
      <S.ContentsBox>
        <S.GridContainer>
          {labels.map((label, index) => (
            <SvgButton
              key={index}
              label={label}
              icon={<CircleBoxIcon />}
              width="80px"
              height="80px"
              textColor={theme.colors.white}
              fillColor={theme.colors.purple}
            />
          ))}
        </S.GridContainer>
      </S.ContentsBox>
    </>
  );
};

export default LuckyDayCycleDetailPage;
