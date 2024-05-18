import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getLuckyDayCycleInfo,
  getLuckyDayDetail,
  getLuckyDaysActivities,
  postLuckyDay,
} from "apis";
import { CreateLuckyDayForm } from "types";

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

export const useGetLuckyDayCycleInfo = (req: number) => {
  return useQuery({
    queryKey: ["luckyday"],
    queryFn: () => getLuckyDayCycleInfo(req),
  });
};
