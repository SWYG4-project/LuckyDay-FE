import { KakaoLoginButton } from "./KakaoLogin.styled";

const KakaoLogin = () => {
  const handleLogin = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    window.location.href = `${baseUrl}/users/sign-in`;
  };

  return (
    <KakaoLoginButton type="button" onClick={handleLogin}>
      카카오로 로그인
    </KakaoLoginButton>
  );
};

export default KakaoLogin;
