import * as S from "./LuckyBoardAfterPage.styled";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

import {
  ArchiveModal,
  ButtonLayout,
  LuckyBalls,
  PageSpinner,
} from "components";
import { useModal, useToast } from "hooks";
import {
  useGetLuckyDayCycle,
  useGetLuckyDayCycleInfo,
  useGetLuckyDayCycleLastLuckyDays,
} from "services";
import { formatDate } from "utils";

export default function LuckyBoardAfterPage() {
  const [openLastLuckyDays, setOpenLastLuckyDays] = useState(false);

  const hasLuckyday = sessionStorage.getItem("hasLuckyday")!;

  const { data, isLoading } = useGetLuckyDayCycle({
    hasLuckyday: +hasLuckyday,
    query: { isCurrent: 1 },
  });
  const { data: lastLuckyDays } = useGetLuckyDayCycleLastLuckyDays(
    { query: { isCurrent: 0 } },
    openLastLuckyDays
  );
  const { data: info } = useGetLuckyDayCycleInfo(data?.[0].cyclNo ?? 0, !!data);

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
    //TODO: dependency 임시 추가 -> 추후 수정 필요
    handleOpenModal(
      <ArchiveModal
        css={S.archiveModal}
        lastInfo={lastLuckyDays?.filter(
          (item) => item.dday !== 1 && item.date !== null
        )}
      />
    );
  };

  const handleOpenCheckLuckyDayModal = () => {
    if (!info)
      return addToast({ content: "진행 중인 럭키 데이 정보가 없어요." });

    handleOpenModal(<ArchiveModal css={S.archiveModal} moreInfo={cycleInfo} />);
  };

  useEffect(() => {
    setOpenLastLuckyDays(true);
  }, [handleOpenLastLuckyDayModal]);

  if (isLoading) {
    return <PageSpinner />;
  }

  return (
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
  );
}
