import React, { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { ax } from "apis/axios";
import { LuckyBoardAfterPage, LuckyBoardBeforePage } from ".";

interface LuckyDayResponse {
  code: string;
  message: string;
  resData: unknown | null;
}

const LuckyBoardPage: React.FC = () => {
  const [hasCurrentLuckyDay, setHasCurrentLuckyDay] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    const fetchLuckyDayData = async () => {
      try {
        const res: AxiosResponse<LuckyDayResponse> = await ax.get(
          "/luckydays/cycl/1",
          {
            params: { isCurrent: 1 },
          }
        );

        console.log("API 요청 URL:", res.config.url);
        console.log("API 요청 파라미터:", res.config.params);
        console.log("API 응답 데이터:", res.data);

        if (res.data && res.data.resData !== null) {
          setHasCurrentLuckyDay(true);
        } else {
          setHasCurrentLuckyDay(false);
        }
      } catch (error) {
        const axiosError = error as AxiosError<LuckyDayResponse>;
        console.error("Error fetching lucky day data:", axiosError);

        if (
          axiosError.response &&
          axiosError.response.data &&
          axiosError.response.data.code === "2007"
        ) {
          setHasCurrentLuckyDay(false);
        } else {
          console.error("Error fetching lucky day data:", axiosError);
        }
      }
    };

    fetchLuckyDayData();
  }, []);

  console.log(hasCurrentLuckyDay);

  return (
    <div>
      {hasCurrentLuckyDay ? <LuckyBoardAfterPage /> : <LuckyBoardBeforePage />}
    </div>
  );
};

export default LuckyBoardPage;
