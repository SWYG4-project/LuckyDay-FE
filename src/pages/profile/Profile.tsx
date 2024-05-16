import * as S from "./Profile.styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SvgButton } from "components";
import { LongBoxIcon } from "assets";

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
  }, [isLoggedIn, navigate]);

  return (
    <S.ContentsBox>
      <S.Logo_Basic />
      <S.TitleTextBox>Enjoy your Lucky Day!</S.TitleTextBox>
      <S.TextBox>
        {nickname}님, 반가워요. <br />
        {nickname}님의 럭키한 날에 <br />
        아래 주소로 메일이 발송될 거에요.
      </S.TextBox>
      <S.MailBox>💌 {email}</S.MailBox>
      <S.ButtonBox>
        <SvgButton
          label={"럭키 보드로 가기"}
          onClick={() => navigate("/luckyBoard")}
          icon={<LongBoxIcon />}
        ></SvgButton>
      </S.ButtonBox>
    </S.ContentsBox>
  );
}
