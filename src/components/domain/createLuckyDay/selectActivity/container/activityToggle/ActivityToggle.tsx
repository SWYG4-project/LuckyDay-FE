import React, { useEffect, useRef, useState } from "react";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";

import { Input } from "components";
import { useToast } from "hooks";
import { ArrowIcon, CheckIcon, CloseIcon, activities } from "assets";
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
  const [text, setText] = useState("");

  const ref = useRef<HTMLDivElement>(null);
  const activityRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const inputWidth = text.length
    ? spanRef.current?.getBoundingClientRect().width
    : 0;

  const { addToast } = useToast();

  const handleToggleClick = (): void => {
    if (text) {
      setText("");
    }

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

  const handleCustomItemClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  const handleCustomItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 14) return;

    setText(e.target.value);
  };

  const handleAddCustomActivity = (e: React.MouseEvent): void => {
    e.stopPropagation();

    const checkSameActivity = watch("customActList")?.includes(text);

    if (checkSameActivity) {
      addToast({ content: "이미 추가된 활동입니다." });
      setText("");

      return;
    }

    setValue("customActList", [...(watch("customActList") ?? ""), text]);
    setText("");
  };

  const handleEnterCustomItemChange = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleAddCustomActivity(e as unknown as React.MouseEvent);
    }
  };

  const DeleteCustomActivity = (selectedActivity: string) => (): void => {
    const filteredActivities = watch("customActList")?.filter(
      (item) => item !== selectedActivity
    );

    setValue("customActList", filteredActivities);
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
    <>
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
              ? "images/img_empty_mediumBox.webp"
              : "images/img_empty_longBox.webp"
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
              (data ? (
                data.actList?.map((item) => {
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
                })
              ) : (
                <S.CustomActivityWrapper>
                  <S.customActiviyItem ref={spanRef}>
                    {text}
                  </S.customActiviyItem>
                  <S.CustomActivity
                    ref={activityRef}
                    key={activities[5].label}
                    onClick={handleCustomItemClick}
                  >
                    <Input
                      value={text}
                      css={S.input(inputWidth)}
                      placeholder=""
                      handleChange={handleCustomItemChange}
                      handleKeyDown={handleEnterCustomItemChange}
                    />
                  </S.CustomActivity>
                  {watch("customActList")?.map((item, i) => {
                    return (
                      <S.CustomActivity
                        ref={activityRef}
                        key={`${item + i}`}
                        isSelected
                        hasValue
                        onClick={handleCustomItemClick}
                      >
                        {item}
                        <CloseIcon onClick={DeleteCustomActivity(item)} />
                      </S.CustomActivity>
                    );
                  })}
                </S.CustomActivityWrapper>
              ))}
          </S.Activities>
        </S.ActivityBox>
        {isOpen && (
          <S.CustomInfo isCustom={activity.label === activities[5].label}>
            <S.ContentLength>{text.length}/14</S.ContentLength>
            <S.AddButton onClick={handleAddCustomActivity}>추가</S.AddButton>
          </S.CustomInfo>
        )}
      </S.ActivityButton>
    </>
  );
}

export default ActivityToggle;
