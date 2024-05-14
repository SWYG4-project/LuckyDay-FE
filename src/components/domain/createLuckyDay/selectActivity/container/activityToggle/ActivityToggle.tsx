import React, { useEffect, useRef } from "react";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";

import { ArrowIcon, CheckIcon } from "assets";
import type { Activities, CreateLuckyDayForm } from "types";
import * as S from "./ActivityToggle.styled";

interface ActivityToggleProps {
  activity: { icon: React.ReactNode; label: string };
  data?: Activities;
  isOpen: boolean;
  toggle: string | null;
  setValue: UseFormSetValue<CreateLuckyDayForm>;
  watch: UseFormWatch<CreateLuckyDayForm>;
  handleToggle: (toggle: string | null) => void;
  getSelectItems: (items: number[]) => void;
}

function ActivityToggle({
  activity,
  data,
  isOpen,
  toggle,
  setValue,
  watch,
  handleToggle,
  getSelectItems,
}: ActivityToggleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const activityRef = useRef<HTMLButtonElement>(null);

  const handleToggleClick = (): void => {
    if (activity.label === toggle) {
      return handleToggle(null);
    }

    handleToggle(activity.label);
  };

  const handleItemClick =
    (actNo: number) =>
    (e: React.MouseEvent): void => {
      e.stopPropagation();
      const updatedSelectedItems = watch("actList").includes(actNo)
        ? watch("actList").filter((item) => item !== actNo)
        : [...watch("actList"), actNo];

      setValue("actList", updatedSelectedItems);
      getSelectItems(updatedSelectedItems);
    };

  useEffect(() => {
    const handleFocus = (e: MouseEvent): void => {
      if (
        ref.current?.contains(e.target as HTMLElement) ||
        toggle !== activity.label
      ) {
        return;
      }
      handleToggle(null);
    };

    document.addEventListener("mouseup", handleFocus);
    return () => {
      document.removeEventListener("mouseup", handleFocus);
    };
  }, [handleToggle, toggle, activity.label]);

  return (
    <S.ActivityButton
      key={data?.category}
      ref={ref}
      isOpen={isOpen}
      onClick={handleToggleClick}
    >
      <S.Img
        // TODO:innerShadow값이 있어 이미지로 따로 설정해줌
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
              const isSelected = watch("actList")?.includes(item.actNo);

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
