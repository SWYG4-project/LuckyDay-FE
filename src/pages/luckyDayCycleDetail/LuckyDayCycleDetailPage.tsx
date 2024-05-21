import * as S from "./LuckyDayCycleDetailPage.styled";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { SvgButton } from "components";
import { CircleBoxIcon } from "assets";
import { GetLuckyDayCycleDetail } from "types";
import { useGetLuckyDayCycleDetails } from "services";

const LuckyDayCycleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetLuckyDayCycleDetails(Number(id));
  const theme = useTheme();
  const navigate = useNavigate();

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
    data?.resData?.map((item: GetLuckyDayCycleDetail) => ({
      date: item.date,
      dtlNo: item.dtlNo,
    })) || [];
  console.log("Labels:", labels);

  return (
    <>
      <S.TitleBox>럭키 데이 보관함</S.TitleBox>
      <S.ContentsBox>
        <S.GridContainer>
          {labels.map((label, index) => (
            <SvgButton
              key={index}
              label={label.date}
              icon={<CircleBoxIcon />}
              width="80px"
              height="80px"
              textColor={theme.colors.white}
              fillColor={theme.colors.purple}
              onClick={() => navigate(`/luckydays/${label.dtlNo}`)}
            />
          ))}
        </S.GridContainer>
      </S.ContentsBox>
    </>
  );
};

export default LuckyDayCycleDetailPage;
