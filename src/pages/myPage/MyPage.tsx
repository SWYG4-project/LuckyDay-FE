import * as S from "./myPage.styled";

export default function MyPage() {
  return (
    <>
      <S.TitleBox>마이페이지</S.TitleBox>
      <S.ContentsBox>
        <S.MenuBox>프로필 설정</S.MenuBox>
        <S.MenuBox>로그아웃</S.MenuBox>
        <S.MenuBox>회원 탈퇴</S.MenuBox>
      </S.ContentsBox>
    </>
  );
}
