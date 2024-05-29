import { ax } from "./axios";
import type {
  ActivitiesServerModel,
  CreateLuckyDayForm,
  GetLuckyDayCycleDetailResponse,
  GetLuckyDayCycleInfoServerModel,
  GetLuckyDayCycleLastLuckyDaysQueryModel,
  GetLuckyDayCycleList,
  GetLuckyDayCycleQueryModel,
  GetLuckyDayCycleServerModel,
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

export const getLuckyDayReview = async (
  dtlNo: string
): Promise<GetLuckyDayDetailServerModel> => {
  const { data } = await ax.get<GetLuckyDayDetailServerModel>(
    `/luckydays/${dtlNo}`
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
  return data.resData;
};

export const getLuckyDayCycle = async (req: GetLuckyDayCycleQueryModel) => {
  const { data } = await ax.get<GetLuckyDayCycleServerModel>(
    `/luckydays/cycl/${req.hasLuckyday}`,
    { params: req.query }
  );
  return data.resData;
};

export const getLuckyDayCycleList = async (): Promise<
  GetLuckyDayCycleList[]
> => {
  const { data } = await ax.get<{
    resData: GetLuckyDayCycleList[];
  }>("/luckydays/cycl/list");

  return data.resData;
};

export const getLuckyDayCycleLastLuckyDays = async (
  req: GetLuckyDayCycleLastLuckyDaysQueryModel
) => {
  const { data } = await ax.get<GetLuckyDayCycleServerModel>(
    `/luckydays/cycl`,
    { params: req.query }
  );

  return data.resData;
};

export const getLuckyDayCycleDetails = async (
  id: number
): Promise<GetLuckyDayCycleDetailResponse> => {
  const { data } = await ax.get<GetLuckyDayCycleDetailResponse>(
    `/luckydays/cycl/${id}`,
    {
      params: { isCurrent: 0 },
    }
  );
  return data;
};
