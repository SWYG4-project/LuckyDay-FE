import * as S from "./Profile.styled";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { isLoggedInAtom } from "atoms";

export default function Profile() {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");

  const getProfile = async () => {
    try {
      const data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      console.log(data);

      setEmail(data.kakao_account.email);
      setNickName(data.properties.nickname);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickButton = () => {
    navigate("/luckyBoard");
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      {isLoggedIn && (
        <S.ContentsBox>
          <S.Logo_Basic />
          <S.Text_h1>enjoy your Lucky Day!</S.Text_h1>
          <S.Text_h2>
            {nickName}님,반갑습니다. <br />
            📧 {email}
          </S.Text_h2>
          <button onClick={() => onClickButton()}>럭키보드로 가기</button>
        </S.ContentsBox>
      )}
    </>
  );
}
