import { ax } from "./axios";
import type { ActivitiesServerModel } from "types";

export const getLuckyDaysActivities = async () => {
  const { data } = await ax.get<ActivitiesServerModel>("/luckydays/activity");

  return data;
};
