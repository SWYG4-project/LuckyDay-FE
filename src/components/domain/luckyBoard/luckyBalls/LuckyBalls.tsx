import * as S from "./LuckyBalls.styled";
import { SvgFrame, CenteredSvgFrame } from "components/common";
import { CircleBoxIcon } from "assets";
import { theme } from "styles";

export default function LuckyBalls() {
  return (
    <>
      <S.Container>
        <S.RowBox>
          <S.LuckyBallFace />
          <CenteredSvgFrame label={"D-?"}>
            <SvgFrame css={S.LuckyBall_unknown} icon={<CircleBoxIcon />} />
          </CenteredSvgFrame>
        </S.RowBox>

        <S.RowBox>
          <CenteredSvgFrame label={"D-?"}>
            <SvgFrame css={S.LuckyBall_unknown} icon={<CircleBoxIcon />} />
          </CenteredSvgFrame>
          <CenteredSvgFrame label={"D-?"}>
            <SvgFrame css={S.LuckyBall_unknown} icon={<CircleBoxIcon />} />
          </CenteredSvgFrame>
          <CenteredSvgFrame label={"D-day"} textColor={theme.colors.white}>
            <SvgFrame css={S.LuckyBall_Dday} icon={<CircleBoxIcon />} />
          </CenteredSvgFrame>
        </S.RowBox>

        <S.RowBox>
          <CenteredSvgFrame label={"D-2"}>
            <SvgFrame css={S.LuckyBall_D2} icon={<CircleBoxIcon />} />
          </CenteredSvgFrame>
          <CenteredSvgFrame label={"D-?"}>
            <SvgFrame css={S.LuckyBall_unknown} icon={<CircleBoxIcon />} />
          </CenteredSvgFrame>
        </S.RowBox>
      </S.Container>
    </>
  );
}
