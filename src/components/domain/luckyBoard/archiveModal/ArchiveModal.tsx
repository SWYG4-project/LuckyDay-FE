import * as S from "./ArchiveModal.styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "hooks";
import { SvgFrame } from "components";
import { CircleBoxIcon, ShortBoxIcon } from "assets";
import type { GetLuckyDayCycleDetail } from "types";

interface ArchiveModalProps {
  className?: string;
  moreInfo?: React.ReactElement;
  lastInfo?: GetLuckyDayCycleDetail[];
}

export default function ArchiveModal({
  className,
  moreInfo,
  lastInfo,
}: ArchiveModalProps) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const { handleModalClose } = useModal();

  const closeModal = () => {
    setIsVisible(false);
    handleModalClose();
  };

  const moveToDetail = (dtlNo: number) => () => {
    navigate(`/luckydays/${dtlNo}`);
    closeModal();
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <S.ArchiveModal
      hasPadding={!!moreInfo}
      className={className}
      isVisible={isVisible}
    >
      {moreInfo && <div>{moreInfo}</div>}
      {lastInfo && (
        <>
          {lastInfo?.length ? (
            <S.LuckyDayButtonWrapper>
              {lastInfo?.map((item) => (
                <S.LuckyDayButton
                  key={item.dtlNo}
                  onClick={moveToDetail(item.dtlNo)}
                >
                  <SvgFrame css={S.svgFrame} icon={<CircleBoxIcon />} />
                  <span>{item.date}</span>
                </S.LuckyDayButton>
              ))}
            </S.LuckyDayButtonWrapper>
          ) : (
            <>
              <span>아직 지난 럭키 데이가 없어요.</span>
              <S.Img src="/images/logo-sad-blue.webp" alt="noLuckyDay" />
            </>
          )}
        </>
      )}

      <S.Button onClick={closeModal}>
        <SvgFrame css={S.svgFrameButton} icon={<ShortBoxIcon />} />
        <span>닫기</span>
      </S.Button>
    </S.ArchiveModal>
  );
}
