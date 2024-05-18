import { ax } from "./axios";
import type {
  ActivitiesServerModel,
  CreateLuckyDayForm,
  GetLuckyDayCycleInfoServerModel,
  GetLuckyDayDetailServerModel,
} from "types";

export const getLuckyDaysActivities = async () => {
  const { data } = await ax.get<ActivitiesServerModel>("/luckydays/activity");

  return data;
};

export const postLuckyDay = async (req: CreateLuckyDayForm) => {
  const { data } = await ax.post("/luckydays", req);

  return data;
};

export const getLuckyDayDetail = async (req: string) => {
  const { data } = await ax.get<GetLuckyDayDetailServerModel>(
    `/luckydays/${req}`
  );

  return data;
};

export const deleteLuckyBoard = async () => {
  const { data } = await ax.delete("/luckydays");

  return data;
};

export const getLuckyDayCycleInfo = async (req: number) => {
  const { data } = await ax.get<GetLuckyDayCycleInfoServerModel>(
    `/luckydays/info/${req}`
  );


  return data;
};
