import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token")!;
  const email = searchParams.get("email")!;
  const nickname = searchParams.get("nickname")!;
  const hasLuckyday = searchParams.get("isExistLcDay")!;

  useEffect(() => {
    sessionStorage.setItem("accessToken", token!);
    sessionStorage.setItem("email", email!);
    sessionStorage.setItem("nickname", nickname!);
    sessionStorage.setItem("hasLuckyday", hasLuckyday!);

    if (token) {
      if (hasLuckyday === "1") {
        navigate("/luckyboard");
      } else {
        navigate("/profile");
      }
      window.location.reload();
    }
  }, [email, navigate, nickname, token, hasLuckyday]);

  return (
    <div>
      {token ? (
        <div>로그인 진행 중입니다.</div>
      ) : (
        <div>로그인이 필요합니다.</div>
      )}
    </div>
  );
}
