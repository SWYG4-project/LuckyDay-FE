export interface Activities {
  category: string;
  actList: { actNo: number; keyword: string }[];
}

export interface ActivitiesServerModel {
  code: string;
  message: string;
  resData: Activities[];
}

export interface CreateLuckyDayForm {
  actList: number[];
  customActList: string[];
  period: number;
  cnt: number;
  expDtList: string[];
}
