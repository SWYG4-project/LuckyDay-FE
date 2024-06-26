import * as S from "./Profile.styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SvgButton, SingleButtonLayout } from "components";
import { LongBoxIcon } from "assets";

export default function Profile() {
  const navigate = useNavigate();
  const [isLongEmail, setIsLongEmail] = useState(false);

  const isLoggedIn = sessionStorage.getItem("accessToken");
  const nickname = sessionStorage.getItem("nickname");
  const email = sessionStorage.getItem("email");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
      return;
    }

    if (email && email.length >= 27) {
      setIsLongEmail(true);
    }
  }, [isLoggedIn, email, navigate]);

  return (
    <SingleButtonLayout>
      <S.ContentsBox>
        <S.Logo_Basic />
        <S.TitleTextBox>Enjoy your Lucky Day!</S.TitleTextBox>
        <S.TextBox>
          {nickname}님, 반가워요. <br />
          {nickname}님의 럭키한 날에 <br />
          아래 주소로 메일이 발송될 거예요.
        </S.TextBox>
        <S.MailBox isLongEmail={isLongEmail}>💌 {email}</S.MailBox>
        <S.ButtonBox>
          <SvgButton
            label="럭키 보드로 가기"
            onClick={() => navigate("/luckyboard")}
            icon={<LongBoxIcon />}
          ></SvgButton>
        </S.ButtonBox>
      </S.ContentsBox>
    </SingleButtonLayout>
  );
}
