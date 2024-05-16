import * as S from "./Error404Page.styled";
import { useNavigate } from "react-router-dom";
import { SvgButton } from "components";
import { LongBoxIcon } from "assets";

export default function Error404Page() {
  const navigate = useNavigate();

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
        <SvgButton
          label={"럭키 보드 홈으로 가기"}
          onClick={() => navigate("/luckyBoard")}
          icon={<LongBoxIcon />}
        ></SvgButton>
      </S.NotFound>
    </>
  );
}
