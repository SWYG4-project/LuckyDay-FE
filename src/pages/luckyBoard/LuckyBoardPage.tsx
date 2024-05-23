import React from "react";

import { LuckyBoardAfterPage, LuckyBoardBeforePage } from ".";
import { ArchiveModal, ButtonLayout } from "components";
import {
  useGetLuckyDayCycle,
  useGetLuckyDayCycleInfo,
  useGetLuckyDayCycleLastLuckyDays,
} from "services";
import { useModal, useToast } from "hooks";
import { formatDate } from "utils";
import * as S from "./LuckyBoardPage.styled";

const LuckyBoardPage: React.FC = () => {
  const hasLuckyday = sessionStorage.getItem("hasLuckyday")!;

  const { data } = useGetLuckyDayCycle({
    hasLuckyday: +hasLuckyday,
    query: { isCurrent: 1 },
  });
  const { data: lastLuckyDays } = useGetLuckyDayCycleLastLuckyDays({
    query: { isCurrent: 0 },
  });
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
    if (!lastLuckyDays) {
      return;
    }

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

  return (
    <ButtonLayout
      variant="hasColor"
      firstLabel="지난 럭키데이"
      secondLabel="더보기"
      handleClickFirstButton={handleOpenLastLuckyDayModal}
      handleClickSecondButton={handleOpenCheckLuckyDayModal}
    >
      {data ? <LuckyBoardAfterPage /> : <LuckyBoardBeforePage data={data} />}
    </ButtonLayout>
  );
};

export default LuckyBoardPage;
