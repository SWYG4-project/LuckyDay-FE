import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getLuckyDayDetail,
  getLuckyDaysActivities,
  postLuckyDay,
  deleteLuckyBoard,
  getLuckyDayCycleInfo,
  getLuckyDayCycles,
  getLuckyDayCycleDetails,
} from "apis";
import {
  CreateLuckyDayForm,
  GetLuckyDayCycleDetailResponse,
  GetLuckyDayCycleList,
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

export const useGetLuckyDayCycleInfo = (req: number) => {
  return useQuery({
    queryKey: ["luckyday"],
    queryFn: () => getLuckyDayCycleInfo(req),
  });
};

export const useDeleteLuckyBoard = () => {
  return useMutation({
    mutationFn: () => deleteLuckyBoard(),
  });
};

export const useGetLuckyDayCycles = () => {
  return useQuery<GetLuckyDayCycleList[]>({
    queryKey: ["cycles"],
    queryFn: getLuckyDayCycles,
  });
};

export const useGetLuckyDayCycleDetails = (isCurrent: number) => {
  return useQuery<GetLuckyDayCycleDetailResponse>({
    queryKey: ["luckyDayCycleDetails", isCurrent],
    queryFn: () => getLuckyDayCycleDetails(isCurrent),
  });
};
