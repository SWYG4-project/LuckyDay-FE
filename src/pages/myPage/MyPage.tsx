import * as S from "./myPage.styled";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "contexts/UserContext";

export default function MyPage() {
  const { logout } = useContext(UserContext);

  return (
    <>
      <S.TitleBox>마이페이지</S.TitleBox>
      <S.ContentsBox>
        <Link to="/editProfile">
          <S.MenuBox>프로필 설정</S.MenuBox>
        </Link>
        <S.MenuBox>럭키보드 초기화</S.MenuBox>
        <S.MenuBox onClick={logout}>로그아웃</S.MenuBox>{" "}
        <S.MenuBox>회원 탈퇴</S.MenuBox>
      </S.ContentsBox>
    </>
  );
}
