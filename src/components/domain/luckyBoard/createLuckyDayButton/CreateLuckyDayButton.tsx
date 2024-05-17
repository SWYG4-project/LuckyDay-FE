import * as S from "./CreateLuckyDayButton.styled";
import { PlusIcon } from "assets";

interface CreateLuckyDayButtonProps {
  onClick?: () => void;
}

export default function CreateLuckyDayButton({
  onClick,
}: CreateLuckyDayButtonProps) {
  return (
    <S.CreateLuckyDayButton onClick={onClick}>
      <PlusIcon />
    </S.CreateLuckyDayButton>
  );
}
