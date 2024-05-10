import * as S from "./myPage.styled";
import { Link } from "react-router-dom";

export default function MyPage() {
  return (
    <>
      <S.TitleBox>마이페이지</S.TitleBox>
      <S.ContentsBox>
        <Link to="/editProfile">
          <S.MenuBox>프로필 설정</S.MenuBox>
        </Link>
        <S.MenuBox>로그아웃</S.MenuBox>
        <S.MenuBox>회원 탈퇴</S.MenuBox>
      </S.ContentsBox>
    </>
  );
}
