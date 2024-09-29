import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "hooks";

export default function Auth() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { addToast } = useToast();

  const token = searchParams.get("token")!;
  const email = searchParams.get("email")!;
  const nickname = searchParams.get("nickname")!;
  const profileNumber = searchParams.get("prfNo")!;
  const hasLuckyday = searchParams.get("isExistLcDay")!;
  const isExperienced = searchParams.get("isExp")!;
  const expirationTime = searchParams.get("expirationTime")!;

  useEffect(() => {
    sessionStorage.setItem("accessToken", token!);
    sessionStorage.setItem("email", email!);
    sessionStorage.setItem("nickname", nickname!);
    sessionStorage.setItem("profileNumber", profileNumber!);
    sessionStorage.setItem("hasLuckyday", hasLuckyday!);
    sessionStorage.setItem("isExperienced", isExperienced!);
    sessionStorage.setItem("expirationTime", expirationTime!);

    if (token) {
      if (isExperienced === "0") {
        navigate("/profile");
      } else {
        navigate("/luckyboard");
      }
      window.location.reload();
    }
  }, [
    email,
    navigate,
    nickname,
    token,
    profileNumber,
    hasLuckyday,
    isExperienced,
    expirationTime,
  ]);

  useEffect(() => {
    const checkTokenExpiration = () => {
      const currentTime = Math.floor(Date.now() / 1000);
      const expiration = parseInt(expirationTime);

      if (currentTime >= expiration) {
        addToast({ content: "토큰이 만료되었습니다. 다시 로그인해 주세요." });
        sessionStorage.clear();
        navigate("/");
      }
    };

    const interval = setInterval(checkTokenExpiration, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [expirationTime, navigate, addToast]);

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
