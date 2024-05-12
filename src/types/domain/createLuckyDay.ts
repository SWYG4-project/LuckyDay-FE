export interface Activities {
  category: string;
  actList: { actNo: string; keyword: string }[];
}

export interface ActivitiesServerModel {
  code: string;
  message: string;
  resData: Activities[];
}
