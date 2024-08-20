import * as S from "./NoticePage.styled";
import { SingleButtonLayout } from "components";

export default function NoticePage() {
  return (
    <SingleButtonLayout>
      <S.TitleBox>공지사항</S.TitleBox>
      <S.ContentsBox>
        {/* NOTE: 공지사항 세부 페이지는 논의가 필요합니다. api를 사용할 것인지, 프론트에서 관리할 것인지도 논의 필요 */}
        {/* <S.MenuBox>
          튜토리얼 기능이 추가되었어요.
          <S.DateBox>2024년 7월 3일</S.DateBox>
        </S.MenuBox> */}
        <S.MenuBox>
          럭키데이 서비스의 만족도를 평가해주세요.
          <S.DateBox>2024년 7월 1일</S.DateBox>
        </S.MenuBox>
        <S.MenuBox>
          게시판 페이지가 추가되었어요.
          <S.DateBox>2024년 6월 28일</S.DateBox>
        </S.MenuBox>
      </S.ContentsBox>
    </SingleButtonLayout>
  );
}
