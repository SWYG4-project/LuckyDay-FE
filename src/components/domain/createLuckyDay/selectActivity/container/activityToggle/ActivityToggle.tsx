import React, { useEffect, useRef } from "react";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";

import { Input } from "components";
import { ArrowIcon, CheckIcon, CloseIcon, activities } from "assets";
import type { Activities, CreateLuckyDayForm } from "types";
import { useCustomInput } from "./hooks";
import * as S from "./ActivityToggle.styled";

interface ActivityToggleProps {
  activity: {
    icon: React.ReactNode;
    label: (typeof activities)[number]["label"];
  };
  data?: Activities;
  index: number;
  isOpen: boolean;
  toggle: string | null;
  checked: boolean;
  setValue: UseFormSetValue<CreateLuckyDayForm>;
  watch: UseFormWatch<CreateLuckyDayForm>;
  handleToggle: (toggle: string | null) => void;
  getSelectItems: (items: number[]) => void;
}

function ActivityToggle({
  activity,
  data,
  index,
  checked,
  isOpen,
  toggle,
  setValue,
  watch,
  handleToggle,
  getSelectItems,
}: ActivityToggleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const activityRef = useRef<HTMLButtonElement>(null);

  const {
    spanRef,
    inputWidth,
    text,
    setText,
    handleCustomItemChange,
    handleEnterCustomItemChange,
    DeleteCustomActivity,
    handleAddCustomActivity,
  } = useCustomInput({ setValue, watch });

  const actNos = data?.actList.map((item) => item.actNo);

  const handleToggleClick = (): void => {
    if (text) {
      setText("");
    }

    if (activity.label === toggle) {
      return handleToggle(null);
    }

    handleToggle(activity.label);
  };

  const handleStopPropagation = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  const handleClickCheckbox =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentCheckedValue = e.target?.checked;

      if (!currentCheckedValue) {
        setValue(`acts.${index}.checked`, false);
        setValue(`acts.${index}.actList`, []);
      }
      if (currentCheckedValue) {
        setValue(`acts.${index}.checked`, true);
        setValue(`acts.${index}.actList`, [
          ...(watch(`acts.${index}.actList`) ?? []),
          ...(actNos ?? []),
        ]);
      }
    };

  const handleItemClick =
    (actNo: number) =>
    (e: React.MouseEvent): void => {
      handleStopPropagation(e);

      const updatedSelectedItems = watch(`acts.${index}.actList`)?.includes(
        actNo
      )
        ? watch(`acts.${index}.actList`)?.filter((item) => item !== actNo)
        : [...(watch(`acts.${index}.actList`) ?? []), actNo];

      setValue(`acts.${index}.actList`, [
        ...(watch(`acts.${index}.actList`) ?? []),
        ...(actNos ?? []),
      ]);
      setValue(`acts.${index}.actList`, updatedSelectedItems);
      getSelectItems(updatedSelectedItems ?? []);

      if (
        actNos?.length ??
        0 > (watch(`acts.${index}`).actList ?? [])?.length
      ) {
        setValue(`acts.${index}.checked`, false);
      }
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
        key={index}
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
          <S.ActivityInfo
            isOpen={isOpen}
            isChecked={activity.label !== "+) 직접 입력"}
          >
            {activity.icon}
            <S.ActivityTitle>{activity.label}</S.ActivityTitle>
            {activity.label !== "+) 직접 입력" && (
              <S.CheckboxWrapper isOpen={isOpen}>
                <input
                  type="checkbox"
                  checked={checked}
                  id={`check${index}`}
                  onChange={handleClickCheckbox(index)}
                />
                <label htmlFor={`check${index}`} />
              </S.CheckboxWrapper>
            )}
            <ArrowIcon css={S.arrowIcon(isOpen)} />
          </S.ActivityInfo>
          <S.Activities>
            {isOpen &&
              (data ? (
                data.actList?.map((item) => {
                  const isSelected = watch(`acts.${index}.actList`)?.includes(
                    item.actNo
                  );

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
                    onClick={handleStopPropagation}
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
                        onClick={handleStopPropagation}
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
