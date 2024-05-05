import { useQuery } from "@tanstack/react-query";
import { getLuckyDaysActivities } from "apis";

export const useGetLuckyDaysActivities = () => {
  return useQuery({
    queryKey: ["activities"],
    queryFn: () => getLuckyDaysActivities(),
  });
};
