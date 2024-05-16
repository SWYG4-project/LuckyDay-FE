import { SvgButton } from "components/common";
import { LongBoxIcon } from "assets";

const KakaoLogin = () => {
  const handleLogin = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    window.location.href = `${baseUrl}/users/sign-in`;
  };

  return (
    <SvgButton
      label="카카오로 로그인"
      onClick={handleLogin}
      icon={<LongBoxIcon />}
    ></SvgButton>
  );
};

export default KakaoLogin;
