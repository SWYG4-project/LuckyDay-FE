import React, { useEffect, useRef, useState } from "react";
import type { UseFormSetValue } from "react-hook-form";

import { ArrowIcon, CheckIcon } from "assets";
import type { Activities, CreateLuckyDayForm } from "types";
import * as S from "./ActivityToggle.styled";

interface ActivityToggleProps {
  activity: { icon: React.ReactNode; label: string };
  data?: Activities;
  actNos: number[];
  isOpen: boolean;
  toggle: string | null;
  setValue: UseFormSetValue<CreateLuckyDayForm>;
  handleToggle: (toggle: string | null) => void;
}

function ActivityToggle({
  activity,
  data,
  actNos,
  isOpen,
  toggle,
  setValue,
  handleToggle,
}: ActivityToggleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const activityRef = useRef<HTMLButtonElement>(null);

  const [selectedItems, setSelectedItems] = useState<number[]>(actNos);

  const handleToggleClick = (): void => {
    if (activity.label === toggle) {
      if (activityRef.current) return;

      return handleToggle(null);
    }

    handleToggle(activity.label);
  };

  const handleItemClick = (actNo: number) => (): void => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(actNo)) {
        return prevSelectedItems.filter((item) => item !== actNo);
      } else {
        return [...prevSelectedItems, actNo];
      }
    });
  };

  // useEffect(() => { //TODO: 동작 오류가 있어 임시 주석처리
  //   const handleFocus = (e: MouseEvent): void => {
  //     if (
  //       ref.current?.contains(e?.target as HTMLElement) ||
  //       toggle !== activity.label
  //     )
  //       return;
  //     handleToggle(null);
  //   };

  //   document.addEventListener("mouseup", handleFocus);
  //   return () => {
  //     document.removeEventListener("mouseup", handleFocus);
  //   };
  // }, [handleToggle]);

  useEffect(() => {
    setValue("actList", selectedItems);
  }, [selectedItems]);

  return (
    <S.ActivityButton
      key={data?.category}
      ref={ref}
      isOpen={isOpen}
      onClick={handleToggleClick}
    >
      <S.Img
        src={
          isOpen
            ? "images/img_empty_mediumBox.png"
            : "images/img_empty_longBox.png"
        }
      />
      <S.ActivityBox isOpen={isOpen}>
        <S.ActivityInfo isOpen={isOpen}>
          {activity.icon}
          <S.ActivityTitle>{activity.label}</S.ActivityTitle>
          <ArrowIcon css={S.arrowIcon(isOpen)} />
        </S.ActivityInfo>
        <S.Activities>
          {isOpen &&
            data?.actList?.map((item) => {
              const isSelected = selectedItems.includes(item.actNo);

              return (
                <S.Activity
                  isSelected={isSelected}
                  ref={activityRef}
                  key={item.actNo}
                  onClick={handleItemClick(item.actNo)}
                >
                  <CheckIcon css={S.icon} />
                  {item.keyword}
                </S.Activity>
              );
            })}
        </S.Activities>
      </S.ActivityBox>
    </S.ActivityButton>
  );
}

export default ActivityToggle;
