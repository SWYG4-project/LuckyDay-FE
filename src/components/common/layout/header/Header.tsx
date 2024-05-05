import * as S from "./Header.styled";
import { useLocation } from "react-router-dom";
import { Logo, NavigationToggle } from "components";

export default function Header() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <>
      <S.Header>
        <Logo />
        {!isLandingPage && <NavigationToggle />}
      </S.Header>
    </>
  );
}
