import { Link } from "react-router-dom";
import * as S from "./Logo.styled";

export default function Logo() {
  return (
    <>
      <Link to="/luckyBoard">
        <S.LogoBox>
          <S.Logo_Basic />
          Lucky Day
        </S.LogoBox>
      </Link>
    </>
  );
}
