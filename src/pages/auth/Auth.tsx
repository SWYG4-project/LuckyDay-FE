import axios from "axios";
import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLoggedInAtom } from "atoms";
import {
  CLIENT_SECRET,
  KAKAO_CLIENT_ID,
  KAKAO_REDIRECT_URL,
} from "apis/auth/Auth";
import qs from "qs";

export default function Auth() {
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const params = new URL(document.URL).searchParams;
  const code = params.get("code");

  const getToken = useCallback(async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: KAKAO_CLIENT_ID,
      redirect_uri: KAKAO_REDIRECT_URL,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    try {
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      window.Kakao.init(KAKAO_CLIENT_ID);
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      setIsLoggedIn(true);
      // navigate("/luckyBoard");
      navigate("/profile");
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  }, [navigate, setIsLoggedIn, code]);

  useEffect(() => {
    getToken();
  }, [getToken]);

  return <div>로그인 진행중입니다..</div>;
}
