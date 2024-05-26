import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token")!;
  const email = searchParams.get("email")!;
  const nickname = searchParams.get("nickname")!;
  const profileNumber = searchParams.get("prfNo")!;
  const hasLuckyday = searchParams.get("isExistLcDay")!;
  const isExperienced = searchParams.get("isExp")!;

  useEffect(() => {
    sessionStorage.setItem("accessToken", token!);
    sessionStorage.setItem("email", email!);
    sessionStorage.setItem("nickname", nickname!);
    sessionStorage.setItem("profileNumber", profileNumber!);
    sessionStorage.setItem("hasLuckyday", hasLuckyday!);
    sessionStorage.setItem("isExperienced", isExperienced!);

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
  ]);

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
