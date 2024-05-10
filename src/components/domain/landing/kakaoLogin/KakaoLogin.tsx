import { KAKAO_AUTH_URL } from "config";
import { KakaoLoginButton } from "./KakaoLogin.styled";

const KakaoLogin = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <KakaoLoginButton type="button" onClick={handleLogin}>
      카카오로 로그인
    </KakaoLoginButton>
  );
};

export default KakaoLogin;
