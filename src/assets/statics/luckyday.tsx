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

export const LUCKYDAY_PERIODS = [
  { label: "7일", period: 7, cnt: 2, expDate: 1 },
  { label: "14일", period: 14, cnt: 2, expDate: 2 },
  { label: "30일", period: 30, cnt: 4, expDate: 4 },
  { label: "60일", period: 60, cnt: 7, expDate: 7 },
] as const;
