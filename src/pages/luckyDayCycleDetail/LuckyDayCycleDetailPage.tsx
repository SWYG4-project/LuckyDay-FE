import * as S from "./LuckyDayCycleDetailPage.styled";
import { useParams } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { SvgButton } from "components";
import { CircleBoxIcon } from "assets";
import { GetLuckyDayCycleDetail } from "types";
import { useGetLuckyDayCycleDetails } from "services";

const LuckyDayCycleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetLuckyDayCycleDetails(Number(id));
  const theme = useTheme();

  if (isLoading) {
    return <S.ErrorBox>로딩 중...</S.ErrorBox>; // NOTE: spinner 추가 예정입니다.
  }

  if (error) {
    return (
      <S.ErrorBox>
        <p>{(error as Error).message}</p>
        <S.Logo_Sad />
      </S.ErrorBox>
    );
  }

  const labels =
    data?.resData?.map((item: GetLuckyDayCycleDetail) => item.date) || [];
  console.log("Labels:", labels);

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
