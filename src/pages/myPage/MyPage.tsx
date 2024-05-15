import { Link, useNavigate } from "react-router-dom";

import { useLogout } from "services";
import * as S from "./myPage.styled";

export default function MyPage() {
  const navigate = useNavigate();

  const { mutate: logoutMutate } = useLogout();

  const logout = () => {
    sessionStorage.clear();
    logoutMutate();

    navigate("/");
  };

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
