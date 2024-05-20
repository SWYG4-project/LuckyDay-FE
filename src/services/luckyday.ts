import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getLuckyDayDetail,
  getLuckyDaysActivities,
  postLuckyDay,
  deleteLuckyBoard,
  getLuckyDayCycleInfo,
  getLuckyDayCycle,
  getLuckyDayCycleList,
} from "apis";
import {
  CreateLuckyDayForm,
  GetLuckyDayCycleList,
  GetLuckyDayCycleQueryModel,
} from "types";

export const useGetLuckyDaysActivities = () => {
  return useQuery({
    queryKey: ["activities"],
    queryFn: () => getLuckyDaysActivities(),
  });
};

export const useCreateLuckyDay = () => {
  return useMutation({
    mutationFn: (req: CreateLuckyDayForm) => postLuckyDay(req),
  });
};

export const useGetLuckyDayDetail = (req: string) => {
  return useQuery({
    queryKey: ["luckyday"],
    queryFn: () => getLuckyDayDetail(req),
  });
};

export const useGetLuckyDayCycleInfo = (req: number, enabled?: boolean) => {
  return useQuery({
    queryKey: ["luckydayCycleInfo"],
    queryFn: () => getLuckyDayCycleInfo(req),
    enabled,
  });
};

export const useGetLuckyDayCycle = (req: GetLuckyDayCycleQueryModel) => {
  return useQuery({
    queryKey: ["luckydayCycle"],
    queryFn: () => getLuckyDayCycle(req),
  });
};

export const useDeleteLuckyBoard = () => {
  return useMutation({
    mutationFn: () => deleteLuckyBoard(),
  });
};

export const useGetLuckyDayCycleList = () => {
  return useQuery<GetLuckyDayCycleList[]>({
    queryKey: ["cycles"],
    queryFn: getLuckyDayCycleList,
  });
};
