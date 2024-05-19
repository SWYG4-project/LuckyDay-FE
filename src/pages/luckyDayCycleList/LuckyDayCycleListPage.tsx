import * as S from "./LuckyDayCycleListPage.styled";
import { useGetLuckyDayCycles } from "services";
import { GetLuckyDayCycleList } from "types";
import { formatDate } from "utils";

export default function LuckyDayCycleListPage() {
  const { data: cycles, error } = useGetLuckyDayCycles();

  return (
    <>
      <S.TitleBox>럭키 데이 보관함</S.TitleBox>
      <S.ContentsBox>
        {error ? (
          <S.ErrorBox>
            <p>지난 럭키 데이 사이클이 없어요.</p>
            <S.Logo_Sad />
          </S.ErrorBox>
        ) : (
          cycles?.map((cycle: GetLuckyDayCycleList) => (
            <S.MenuBox key={cycle.cyclNo}>
              {`${formatDate(cycle.startDT, "YYYY-MM-DD")} ~ ${formatDate(
                cycle.endDT,
                "YYYY-MM-DD"
              )}`}
            </S.MenuBox>
          ))
        )}
      </S.ContentsBox>
    </>
  );
}
