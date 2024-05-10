import { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CLIENT_SECRET, KAKAO_CLIENT_ID, KAKAO_REDIRECT_URL } from "config";
import { ax } from "apis/axios";
import Cookies from "js-cookie";
import qs from "qs";

interface TokenResponse {
  access_token: string;
}

export default function Auth() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
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
      const res = await ax.post<TokenResponse>(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      window.Kakao.init(KAKAO_CLIENT_ID);
      window.Kakao.Auth.setAccessToken(res.data.access_token);

      // 쿠키에 토큰 저장: HttpOnly, Secure 옵션은 서버에서 설정
      Cookies.set("accessToken", res.data.access_token, {
        expires: 1,
        secure: true,
        sameSite: "strict",
      });
      setIsLoggedIn(true);
      navigate("/profile"); // 프로필페이지는 논의 예정입니다.
    } catch (err) {
      console.log(err);
      Cookies.remove("accessToken");
      setIsLoggedIn(false);
      navigate("/");
    }
  }, [navigate, setIsLoggedIn, code]);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    setIsLoggedIn(!!accessToken);
    getToken();
  }, [getToken, setIsLoggedIn]);

  return (
    <div>
      {isLoggedIn ? (
        <div>로그인 진행 중입니다.</div>
      ) : (
        <div>로그인이 필요합니다.</div>
      )}
    </div>
  );
}
