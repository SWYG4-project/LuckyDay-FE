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
