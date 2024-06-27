import * as S from "./Header.styled";
import { useLocation } from "react-router-dom";
import { Logo, NavigationToggle } from "components";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <>
      <S.Header>
        <Logo />
        {!(pathname === "/" || pathname === "/profile") && <NavigationToggle />}
      </S.Header>
    </>
  );
};

export default Header;
