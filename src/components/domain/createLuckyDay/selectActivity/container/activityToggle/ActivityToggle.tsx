import React, { useEffect, useRef } from "react";

import { ArrowIcon, CheckIcon } from "assets";
import type { Activities } from "types";
import * as S from "./ActivityToggle.styled";

interface ActivityToggleProps {
  activity: { icon: React.ReactNode; label: string };
  data?: Activities;
  isOpen: boolean;
  toggle: string | null;
  handleToggle: (toggle: string | null) => void;
}

function ActivityToggle({
  activity,
  data,
  isOpen,
  toggle,
  handleToggle,
}: ActivityToggleProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleToggleClick = (): void => {
    if (activity.label === toggle) {
      return handleToggle(null);
    }

    handleToggle(activity.label);
  };

  useEffect(() => {
    const handleFocus = (e: MouseEvent): void => {
      if (
        ref.current?.contains(e?.target as HTMLElement) ||
        toggle !== activity.label
      )
        return;

      handleToggle(null);
    };

    document.addEventListener("mouseup", handleFocus);
    return () => {
      document.removeEventListener("mouseup", handleFocus);
    };
  }, [handleToggle]);

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
            data?.actList.map((item) => (
              <S.Activity key={item.actNo}>
                <CheckIcon css={S.icon} />
                {item.keyword}
              </S.Activity>
            ))}
        </S.Activities>
      </S.ActivityBox>
    </S.ActivityButton>
  );
}

export default ActivityToggle;
