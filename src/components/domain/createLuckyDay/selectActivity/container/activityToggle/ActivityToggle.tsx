import React, { useState } from "react";

import { ArrowIcon, CheckIcon } from "assets";
import * as S from "./ActivityToggle.styled";

interface ToggleProps {
  activity: { icon: React.ReactNode; label: string };
  data?: { category: string; actList: { actNo: string; keyword: string }[] };
}

function Toggle({ activity, data }: ToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.ActivityButton key={data?.category}>
      <S.Img
        src={isOpen ? "images/img_small_square.png" : "images/img_toggle.png"} //TODO: toggle 이미지 변경 예정
      />
      <S.ActivityBox>
        <S.ActivityInfo onClick={() => setIsOpen(!isOpen)}>
          {activity.icon}
          <S.ActivityTitle>{activity.label}</S.ActivityTitle>
          <ArrowIcon css={S.arrowIcon(isOpen)} />
        </S.ActivityInfo>
        <S.Activities>
          {isOpen &&
            data?.actList.map((item) => (
              // TODO: 활동 선택 기능 추가 / 스크린 추가 요청 상태
              <S.Activity>
                <CheckIcon css={S.icon} />
                {item.keyword}
              </S.Activity>
            ))}
        </S.Activities>
      </S.ActivityBox>
    </S.ActivityButton>
  );
}

export default Toggle;
