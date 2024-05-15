import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./Profile.styled";

export default function Profile() {
  const navigate = useNavigate();

  const isLoggedIn = sessionStorage.getItem("accessToken");
  const email = sessionStorage.getItem("email");
  const nickname = sessionStorage.getItem("nickname");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
      return;
    }
  }, [isLoggedIn]);

  return (
    <S.ContentsBox>
      <S.Logo_Basic />
      <S.Text_h1>enjoy your Lucky Day!</S.Text_h1>
      <S.Text_h2>
        {nickname}님, 반갑습니다. <br />
        📧 {email}
      </S.Text_h2>
      <button onClick={() => navigate("/luckyBoard")}>럭키보드로 가기</button>
    </S.ContentsBox>
  );
}
