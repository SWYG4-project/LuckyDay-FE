import * as S from "./LuckyDayArchivePage.styled";

export default function LuckyDayArchivePage() {
  return (
    <>
      <S.TitleBox>럭키 데이 보관함</S.TitleBox>
      <S.ContentsBox>
        {/* FIX: api 연결 예정 */}
        <S.MenuBox>2024년 01월 03일 ~ 2024년 01월 16일</S.MenuBox>
        <S.MenuBox>2023년 11월 15일 ~ 2023년 11월 29일</S.MenuBox>
        <S.MenuBox>2023년 10월 01일 ~ 2023년 10월 31일</S.MenuBox>
      </S.ContentsBox>
    </>
  );
}
