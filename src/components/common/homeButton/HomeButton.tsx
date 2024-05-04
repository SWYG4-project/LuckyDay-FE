import { Link } from "react-router-dom";
import * as S from "./HomeButton.styled";

export default function HomeButton() {
  return (
    <>
      <Link to="/luckyBoard">
        <S.HomeButton>럭키 보드 홈으로 가기</S.HomeButton>
      </Link>
    </>
  );
}
