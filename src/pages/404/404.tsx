import * as S from "./404.styled";
import { HomeButton } from "components/common/homeButton";

export default function Error404Page() {
  return (
    <>
      <S.NotFound>
        <S.Text_404>404</S.Text_404>
        <S.Text_NotFound>페이지를 찾을 수 없습니다.</S.Text_NotFound>
        <S.Text_Detail>
          존재하지 않거나 사용할 수 없는 페이지입니다. <br /> 입력하신 주소가
          정확한지 다시 한 번 확인해주세요
        </S.Text_Detail>
        <S.Logo_Sad />
        <HomeButton />
      </S.NotFound>
    </>
  );
}
