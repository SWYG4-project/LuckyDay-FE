import type { CommonServerModel } from "types";

export type actList = { actNo: number; keyword: string };

export interface Activities {
  category: string;
  actList: actList[];
}

export interface ActivitiesServerModel {
  code: string;
  message: string;
  resData: Activities[];
}

export interface CreateLuckyDayForm {
  actList: number[];
  customActList?: string[];
  period: number;
  cnt: number;
  expDTList?: string[];
}

export interface CreateLuckyDayQueryModel {
  body: CreateLuckyDayForm;
}

interface GetLuckyDayDetail {
  actNm: string;
  actInfo: string;
  review: string | null;
  imageName: string | null;
  imagePath: string | null;
  imageUrl: string | null;
  category: string;
  dday: string;
}

export interface GetLuckyDayDetailServerModel extends CommonServerModel {
  resData: GetLuckyDayDetail;
}

interface GetLuckyDayCycleInfo {
  startDt: string;
  endDt: string;
  period: number;
  cnt: number;
  expDtList: string[];
}

export interface GetLuckyDayCycleInfoServerModel extends CommonServerModel {
  resData: GetLuckyDayCycleInfo;
}

export interface GetLuckyDayCycleList {
  cyclNo: number;
  startDT: string;
  endDT: string;
}

export interface GetLuckyDayCycleResponse {
  code: string;
  message: string;
  resData: {
    cyclList: GetLuckyDayCycleList[];
  } | null;
}

export interface GetLuckyDayCycleDetail {
  dtlNo: number;
  cyclNo: number;
  dDay: number;
  order: number;
  date: string;
}

export interface GetLuckyDayCycleQueryModel {
  hasLuckyday: number;
  query: {
    isCurrent: number;
  };
}

export interface GetLuckyDayCycleServerModel extends CommonServerModel {
  resData: GetLuckyDayCycleDetail[];
}

export interface GetLuckyDayCycleDetailResponse {
  code: string;
  message: string;
  resData: {
    luckyDay: GetLuckyDayCycleDetail[];
  } | null;
}
