import * as S from "./BoardPage.styled";
import { Link } from "react-router-dom";
import { SingleButtonLayout } from "components";

export default function BoardPage() {
  return (
    <SingleButtonLayout>
      <S.TitleBox>게시판</S.TitleBox>
      <S.ContentsBox>
        <Link to="/notice">
          <S.MenuBox>공지사항</S.MenuBox>
        </Link>
        <Link to="https://forms.gle/oZad9g1RsYMzguLZ6">
          <S.MenuBox>만족도 설문 보내기</S.MenuBox>
        </Link>
        <Link to="/info">
          <S.MenuBox>만든 사람들</S.MenuBox>
        </Link>
      </S.ContentsBox>
    </SingleButtonLayout>
  );
}
