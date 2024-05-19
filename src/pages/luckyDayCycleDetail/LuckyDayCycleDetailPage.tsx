import * as S from "./LuckyDayCycleDetailPage.styled";
import React from "react";
import { useTheme } from "@emotion/react";
import { SvgButton } from "components";
import { CircleBoxIcon } from "assets";
import { GetLuckyDayCycleDetail } from "types";
import { useGetLuckyDayCycleDetails } from "services";

const LuckyDayCycleDetailPage: React.FC = () => {
  const isCurrent = 0;
  const { data } = useGetLuckyDayCycleDetails(isCurrent);
  const theme = useTheme();

  const labels =
    data?.resData?.luckyDay.map((day: GetLuckyDayCycleDetail) => {
      const date = new Date(day.date);
      return `${date.getMonth() + 1}월 ${date.getFullYear()}일`;
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
