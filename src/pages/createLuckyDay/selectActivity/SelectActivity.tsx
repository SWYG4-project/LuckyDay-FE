import React from "react";

import {
  ArrowIcon,
  BookIcon,
  CandyIcon,
  HeartIcon,
  PresentIcon,
  ShoeIcon,
  SmileIcon,
} from "assets";
import * as S from "./SelectActivity.styled";

function SelectActivity() {
  const activities = [
    { icon: <PresentIcon />, label: "특별한 선물" },
    { icon: <CandyIcon />, label: "맛있는 음식" },
    { icon: <BookIcon />, label: "배움과 문화" },
    { icon: <ShoeIcon />, label: "이동과 탐험" },
    { icon: <HeartIcon />, label: "일상 속 소소함" },
    { icon: <SmileIcon />, label: "+) 직접 입력" },
  ] as const;

  return (
    <>
      <S.HeadLine>
        나에게 랜덤 배정될
        <br />
        럭키 데이 활동을 모두 골라 보세요.
      </S.HeadLine>
      <div>
        {activities.map((activity) => (
          <S.ActivityButton>
            <S.Img src="images/img_toggle.png" />
            <S.ActivityInfo>
              {activity.icon}
              <S.ActivityTitle>{activity.label}</S.ActivityTitle>
              <ArrowIcon css={S.arrowIcon} />
            </S.ActivityInfo>
          </S.ActivityButton>
        ))}
      </div>
    </>
  );
}

export default SelectActivity;
