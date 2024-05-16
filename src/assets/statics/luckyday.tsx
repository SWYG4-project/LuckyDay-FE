import {
  BookIcon,
  CandyIcon,
  HeartIcon,
  PresentIcon,
  ShoeIcon,
} from "assets/icon";

export const activities = [
  { icon: <PresentIcon />, label: "특별한 선물" },
  { icon: <CandyIcon />, label: "맛있는 음식" },
  { icon: <BookIcon />, label: "배움과 문화" },
  { icon: <ShoeIcon />, label: "이동과 탐험" },
  { icon: <HeartIcon />, label: "일상 속 소소함" },
  // { icon: <SmileIcon />, label: "+) 직접 입력" },
] as const;
