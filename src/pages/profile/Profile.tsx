import * as S from "./Profile.styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "hooks";

export default function Profile() {
  const navigate = useNavigate();
  const { isLoggedIn, userProfile, logout } = useUser();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
      return;
    }
  }, [navigate, isLoggedIn, logout]);

  return (
    <S.ContentsBox>
      <S.Logo_Basic />
      <S.Text_h1>enjoy your Lucky Day!</S.Text_h1>
      <S.Text_h2>
        {userProfile.nickname}님, 반갑습니다. <br />
        📧 {userProfile.email}
      </S.Text_h2>
      <button onClick={() => navigate("/luckyBoard")}>럭키보드로 가기</button>
    </S.ContentsBox>
  );
}
