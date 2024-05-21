import * as S from "./LuckyDayCycleListPage.styled";
import { useNavigate } from "react-router-dom";
import { useGetLuckyDayCycleList } from "services";
import { GetLuckyDayCycleList } from "types";
import { PageSpinner, SingleButtonLayout } from "components";

export default function LuckyDayCycleListPage() {
  const { data: cycles, error, isLoading } = useGetLuckyDayCycleList();
  const navigate = useNavigate();

  console.log("Cycles:", cycles);

  if (isLoading) {
    return <PageSpinner />;
  }

  if (error || !cycles || cycles.length === 0) {
    return (
      <S.ErrorBox>
        <p>아직 보관함이 비어 있어요.</p>
        <S.Logo_Sad />
      </S.ErrorBox>
    );
  }

  return (
    <SingleButtonLayout>
      <S.TitleBox>럭키 데이 보관함</S.TitleBox>
      <S.ContentsBox>
        {cycles.map((cycle: GetLuckyDayCycleList) => (
          <S.MenuBox
            key={cycle.cyclNo}
            onClick={() => navigate(`/luckydays/list/${cycle.cyclNo}`)}
          >
            {`${cycle.startDt} ~ ${cycle.endDt}`}
          </S.MenuBox>
        ))}
      </S.ContentsBox>
    </SingleButtonLayout>
  );
}
