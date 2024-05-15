import { ArchiveModal } from "components";
import { useModal } from "hooks";
import * as S from "./LuckyBoardPage.styled";

export default function LuckyBoardPage() {
  const { handleOpenModal } = useModal();

  const 지난럭키데이 = ["2024년 05월 15일"];
  const 제외일자 = "2024년 05월 15일";

  const 럭키데이정보 = (
    <p>
      생성 옵션:
      <br />
      시작일(서버데이터) ~ 시작일(서버데이터)
      <br />
      {<strong>선택한 기간(서버데이터)</strong>}일 동안{" "}
      <strong>선택한 개수(서버데이터)</strong>개의 럭키 데이
      <br />
      {제외일자 ? `\n제외 날짜:\n ${제외일자}` : ""}
    </p>
  );

  const handleOpenLastLuckyDayModal = () => {
    //TODO: 추후 더보기 버튼에 연결 필요
    handleOpenModal(
      <ArchiveModal css={S.archiveModal} moreInfo={럭키데이정보} />
    );
  };

  const handleOpenCheckLuckyDayModal = () => {
    //TODO: 추후 더보기 버튼에 연결 필요
    handleOpenModal(
      <ArchiveModal css={S.archiveModal} lastInfo={지난럭키데이} />
    );
  };

  return <>{/* FIX: API 연결 후 수정 예정입니다. */}</>;
}
