import * as S from "./CreateLuckyDayButton.styled";
import { Link } from "react-router-dom";
import { PlusIcon } from "assets";

export default function CreateLuckyDayButton() {
  return (
    <>
      <Link to="/createLuckyDay">
        <S.CreateLuckyDayButton>
          <PlusIcon />
        </S.CreateLuckyDayButton>
      </Link>
    </>
  );
}
