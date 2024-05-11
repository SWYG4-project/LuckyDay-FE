import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "hooks";

export default function Auth() {
  const navigate = useNavigate();
  const { isLoggedIn, getToken } = useUser();
  const params = new URL(document.URL).searchParams;
  const code = params.get("code");

  useEffect(() => {
    if (!isLoggedIn && code) {
      getToken(code);
    }
  }, [code, getToken, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile");
    }
  }, [isLoggedIn, navigate]);

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
