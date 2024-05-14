import React, { useEffect, useState } from "react";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";

import { useGetLuckyDaysActivities } from "services";
import { BookIcon, CandyIcon, HeartIcon, PresentIcon, ShoeIcon } from "assets";
import type { CreateLuckyDayForm } from "types";
import { ActivityToggle } from "./container";
import * as S from "./SelectActivity.styled";

interface SelectActivityProps {
  setValue: UseFormSetValue<CreateLuckyDayForm>;
  watch: UseFormWatch<CreateLuckyDayForm>;
}

function SelectActivity({ watch, setValue }: SelectActivityProps) {
  const { data } = useGetLuckyDaysActivities();
  const [toggle, setToggle] = useState<string | null>(null);

  const actNos = data?.resData.flatMap((activity) =>
    activity.actList.map((item) => item.actNo)
  );

  const [, setSelectedItems] = useState<number[]>([]);

  const activities = [
    { icon: <PresentIcon />, label: "특별한 선물" },
    { icon: <CandyIcon />, label: "맛있는 음식" },
    { icon: <BookIcon />, label: "배움과 문화" },
    { icon: <ShoeIcon />, label: "이동과 탐험" },
    { icon: <HeartIcon />, label: "일상 속 소소함" },
    // { icon: <SmileIcon />, label: "+) 직접 입력" },
  ] as const;

  const getSelectItems = (value: number[]) => {
    setSelectedItems(value);
  };

  const handleToggle = (toggleLabel: string | null): void =>
    setToggle(toggleLabel);

  useEffect(() => {
    if (data && !watch("actList").length) {
      const actNos = data.resData.flatMap((activity) =>
        activity.actList.map((item) => item.actNo)
      );

      setSelectedItems(actNos);
      setValue("actList", actNos);
    }
  }, [data]);

  return (
    <>
      <S.HeadLine>
        나에게 랜덤 배정될
        <br />
        럭키 데이 활동을 모두 골라 보세요.
      </S.HeadLine>
      <S.Activities>
        {activities.map((activity) => {
          if (!actNos) return null;

          return (
            <ActivityToggle
              key={activity.label}
              activity={activity}
              getSelectItems={getSelectItems}
              setValue={setValue}
              watch={watch}
              data={data?.resData.find(
                (item) => item.category === activity.label
              )}
              toggle={toggle}
              isOpen={toggle === activity.label}
              handleToggle={handleToggle}
            />
          );
        })}
      </S.Activities>
    </>
  );
}

export default SelectActivity;
