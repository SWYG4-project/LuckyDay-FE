import * as S from "./CreateLuckyDayButton.styled";
import { PlusIcon } from "assets";
// import { Link } from "react-router-dom";

export default function CreateLuckyDayButton() {
  return (
    <>
      {/* NOTE : 페이지 생성 후 연결 예정 */}
      {/* <Link to="createLuckyDay">  */}
      <S.CreateLuckyDayButton>
        <PlusIcon />
      </S.CreateLuckyDayButton>
      {/* </Link> */}
    </>
  );
}
