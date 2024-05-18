import dayjs from "dayjs";

import { ArchiveModal, ButtonLayout, LuckyBalls } from "components";
import { useModal } from "hooks";
import { useGetLuckyDayCycleInfo } from "services";
import { formatDate } from "utils";
import * as S from "./LuckyBoardAfterPage.styled";

export default function LuckyBoardAfterPage() {
  const cyclNo = 84; //NOTE: 임시 데이터로 서버 데이터로 변경 필요

  const { data } = useGetLuckyDayCycleInfo(cyclNo); //TODO: enable 조건 추가 리팩토링 필요

  const { handleOpenModal } = useModal();

  const info = data?.resData;

  const expDatesString = info?.expDtList
    ?.map((item) => `${formatDate(item, "YYYY-MM-DD")}\n`)
    .join("")
    ?.replace(/,/g, "");

  const cycleInfo = (
    <p>
      생성 옵션:
      <br />
      {info ? formatDate(info.startDt, "YYYY-MM-DD") : "-"} ~{" "}
      {info ? formatDate(info.endDt, "YYYY-MM-DD") : "-"}
      <br />
      {<strong>{info?.period}</strong>}일 동안 <strong>{info?.cnt}</strong>개의
      럭키 데이
      <br />
      {expDatesString ? `\n제외 날짜:\n${expDatesString}` : ""}
    </p>
  );

  const handleOpenLastLuckyDayModal = () => {
    handleOpenModal(
      <ArchiveModal css={S.archiveModal} lastInfo={info?.expDtList} />
    );
  };

  const handleOpenCheckLuckyDayModal = () => {
    handleOpenModal(<ArchiveModal css={S.archiveModal} moreInfo={cycleInfo} />);
  };

  return (
    <>
      {/* FIX: API 연결 예정입니다. */}
      <ButtonLayout
        variant="hasColor"
        firstLabel="지난 럭키데이"
        secondLabel="더보기"
        handleClickFirstButton={handleOpenLastLuckyDayModal}
        handleClickSecondButton={handleOpenCheckLuckyDayModal}
      >
        <S.Container>
          <S.TextBox>{dayjs().format("YYYY년 MM월 DD일")}</S.TextBox>
          <S.LuckyMachine>
            <LuckyBalls />
          </S.LuckyMachine>
        </S.Container>
      </ButtonLayout>
    </>
  );
}
