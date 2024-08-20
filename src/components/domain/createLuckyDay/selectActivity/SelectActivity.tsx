import React, { useState } from "react";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";

import { activities, CheckIcon } from "assets";
import type { ActivitiesServerModel, CreateLuckyDayForm } from "types";
import { ActivityToggle } from "./container";
import * as S from "./SelectActivity.styled";

interface SelectActivityProps {
  data?: ActivitiesServerModel;
  setValue: UseFormSetValue<CreateLuckyDayForm>;
  watch: UseFormWatch<CreateLuckyDayForm>;
  getSelectItems: (value: number[]) => void;
}

function SelectActivity({
  data,
  getSelectItems,
  watch,
  setValue,
}: SelectActivityProps) {
  const [toggle, setToggle] = useState<string | null>(null);

  const actNos = data?.resData.flatMap((activity) =>
    activity.actList.map((item) => item.actNo)
  );

  const currentActsUnChecked = watch("acts")?.filter(({ checked }) => !checked);

  const handleToggle = (toggleLabel: string | null): void =>
    setToggle(toggleLabel);

  const handleCheckAllBoxes = () => {
    const acts = data?.resData
      .map((activity) => ({
        category: activity.category ?? "",
        actList:
          activity.actList.length > 0
            ? activity.actList.map((act) => act.actNo)
            : [],
        checked: currentActsUnChecked?.length === 5 ? true : false,
      }))
      .filter(({ category }) => category !== "직접 입력");

    if (!acts) return;

    setValue("acts", acts);
  };

  return (
    <>
      <S.HeadLineWrapper>
        <S.HeadLine>
          나에게 랜덤 배정될
          <br />
          럭키 데이 활동을 모두 골라 보세요.
        </S.HeadLine>
        <S.Button
          isNotChecked={currentActsUnChecked?.length === 5}
          onClick={handleCheckAllBoxes}
        >
          <CheckIcon css={S.icon} />
          {currentActsUnChecked?.length === 5 ? (
            <span>모두 선택</span>
          ) : (
            <span>전체 해제</span>
          )}
        </S.Button>
      </S.HeadLineWrapper>
      <S.Activities>
        {activities.map((activity, i) => {
          if (!actNos) return null;

          return (
            <ActivityToggle
              key={activity.label}
              activity={activity}
              getSelectItems={getSelectItems}
              setValue={setValue}
              watch={watch}
              data={data?.resData?.find(
                (item) => item.category === activity.label
              )}
              checked={watch(`acts.${i}.checked`) ?? false}
              index={i}
              toggle={toggle}
              isOpen={
                toggle === activity.label ||
                (activity.label === toggle && toggle === "+) 직접 입력")
              }
              handleToggle={handleToggle}
            />
          );
        })}
      </S.Activities>
    </>
  );
}

export default SelectActivity;
