import React from "react";

import { SvgFrame } from "components";
import { CircleBoxIcon, ShortBoxIcon } from "assets";
import * as S from "./ArchiveModal.styled";
import { useModal } from "hooks";

interface ArchiveModalProps {
  className?: string;
  moreInfo?: React.ReactElement;
  lastInfo?: string[];
}

function ArchiveModal({ className, moreInfo, lastInfo }: ArchiveModalProps) {
  const { handleModalClose } = useModal();

  return (
    <S.ArchiveModal className={className}>
      {moreInfo && <div>{moreInfo}</div>}
      {lastInfo?.length ? (
        <S.LuckyDayButtonWrapper>
          {lastInfo.map((item) => (
            <S.LuckyDayButton>
              <SvgFrame css={S.svgFrame} icon={<CircleBoxIcon />} />
              <span>{item}</span>
            </S.LuckyDayButton>
          ))}
        </S.LuckyDayButtonWrapper>
      ) : (
        <>
          <span>아직 지난 럭키 데이가 없어요.</span>
          <S.Img src="/public/images/profile/profile-07.png" alt="noLuckyDay" />
        </>
      )}
      <S.Button onClick={handleModalClose}>
        <SvgFrame css={S.svgFrame} icon={<ShortBoxIcon />} />
        <span>닫기</span>
      </S.Button>
    </S.ArchiveModal>
  );
}

export default ArchiveModal;
