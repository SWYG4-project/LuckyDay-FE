import React, { useRef, useState } from "react";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";

import { useToast } from "hooks";
import type { CreateLuckyDayForm } from "types";

interface useCustomInputProps {
  setValue: UseFormSetValue<CreateLuckyDayForm>;
  watch: UseFormWatch<CreateLuckyDayForm>;
}

const useCustomInput = ({ setValue, watch }: useCustomInputProps) => {
  const [text, setText] = useState("");

  const spanRef = useRef<HTMLSpanElement>(null);

  const inputWidth = text.length
    ? spanRef.current?.getBoundingClientRect().width
    : 0;
  const { addToast } = useToast();

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
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      handleAddCustomActivity(e as unknown as React.MouseEvent);
    }
  };

  const DeleteCustomActivity = (selectedActivity: string) => (): void => {
    const filteredActivities = watch("customActList")?.filter(
      (item) => item !== selectedActivity
    );

    setValue("customActList", filteredActivities);
  };

  return {
    spanRef,
    inputWidth,
    text,
    setText,
    handleCustomItemChange,
    handleEnterCustomItemChange,
    handleAddCustomActivity,
    DeleteCustomActivity,
  };
};

export default useCustomInput;
