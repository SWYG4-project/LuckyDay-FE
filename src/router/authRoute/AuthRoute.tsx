import { Navigate, Outlet } from "react-router-dom";

function AuthRoute() {
  const acessToken = sessionStorage.getItem("accessToken");

  return acessToken ? <Outlet /> : <Navigate to={"/"} />;
}

export default AuthRoute;
