import { useNavigate } from "react-router-dom";
import * as S from "./Logo.styled";

export default function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/luckyboard");
  };

  return (
    <S.LogoBox onClick={handleClick}>
      <S.Logo_Basic />
      Lucky Day
    </S.LogoBox>
  );
}
