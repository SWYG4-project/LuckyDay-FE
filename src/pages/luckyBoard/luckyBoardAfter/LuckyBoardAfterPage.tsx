import dayjs from "dayjs";

import { ArchiveModal, ButtonLayout, LuckyBalls } from "components";
import { useModal, useToast } from "hooks";
import { useGetLuckyDayCycle, useGetLuckyDayCycleInfo } from "services";
import { formatDate } from "utils";
import * as S from "./LuckyBoardAfterPage.styled";

export default function LuckyBoardAfterPage() {
  const hasLuckyday = sessionStorage.getItem("hasLuckyday")!;

  const { data } = useGetLuckyDayCycle({
    hasLuckyday: +hasLuckyday,
    query: { isCurrent: 1 },
  });

  const { data: info } = useGetLuckyDayCycleInfo(data?.[0].cyclNo ?? 0, !!data); //TODO: enable 조건 추가 리팩토링 필요

  const { handleOpenModal } = useModal();
  const { addToast } = useToast();

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
      <strong>{info?.period}</strong>일 동안 <strong>{info?.cnt}</strong>개의
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
    if (!info)
      return addToast({ content: "진행 중인 럭키 데이 정보가 없어요." });

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
