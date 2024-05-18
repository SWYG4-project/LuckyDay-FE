import * as S from "./LuckyBalls.styled";
import { useState, useEffect } from "react";
import { useModal } from "hooks";
import { SvgFrame, CenteredSvgFrame } from "components";
import { CircleBoxIcon } from "assets";
import CountLuckyDayModal from "../countLuckyDayModal/CountLuckyDayModal";
import { ax } from "apis/axios";

type LuckyBallStatus =
  | "LuckyBall_unknown"
  | "LuckyBall_Dday"
  | "LuckyBall_D2"
  | "LuckyBall_D1"
  | "LuckyBallFace";

interface LuckyBallGrid {
  row1: LuckyBallStatus[];
  row2: LuckyBallStatus[];
  row3: LuckyBallStatus[];
}

interface LuckyDayDetail {
  dday: number | null;
  dtlNo: number;
}

interface GetLuckyDayApiResponse {
  code: string;
  message: string;
  resData: LuckyDayDetail[] | null;
}

const MAX_LUCKY_BALLS = 7;

export default function LuckyBalls() {
  const [luckyBallData, setLuckyBallData] = useState<LuckyBallGrid>({
    row1: [],
    row2: [],
    row3: [],
  });
  const [luckyBallFaceImages, setLuckyBallFaceImages] = useState<string[]>([]);
  const { handleOpenModal, handleModalClose } = useModal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ax.get<GetLuckyDayApiResponse>(
          "/luckydays/cycl/1",
          {
            params: { isCurrent: 1 },
          }
        );

        console.log("API 요청 URL:", response.config.url);
        console.log("API 요청 파라미터:", response.config.params);
        console.log("API 응답 데이터:", response.data);

        const fetchedData: LuckyBallStatus[] = [];
        if (response.data.resData && Array.isArray(response.data.resData)) {
          response.data.resData.forEach((day) => {
            if (day.dday === 0) {
              fetchedData.push("LuckyBall_Dday");
            } else if (day.dday === 1) {
              fetchedData.push("LuckyBall_D1");
            } else if (day.dday === 2) {
              fetchedData.push("LuckyBall_D2");
            } else {
              fetchedData.push("LuckyBall_unknown");
            }
          });
        }

        while (fetchedData.length < MAX_LUCKY_BALLS) {
          fetchedData.push("LuckyBallFace");
        }

        const shuffledData = fetchedData.sort(() => Math.random() - 0.5);

        setLuckyBallData({
          row1: shuffledData.slice(0, 2),
          row2: shuffledData.slice(2, 5),
          row3: shuffledData.slice(5, 7),
        });

        const faceImages = shuffledData
          .filter((type) => type === "LuckyBallFace")
          .map((_, index) => `/images/face-0${index + 1}.png`);
        setLuckyBallFaceImages(faceImages);
      } catch (error) {
        console.error("Error :", error);
      }
    };

    fetchData();
  }, []);

  const renderLuckyBall = (type: LuckyBallStatus, index: number) => {
    if (type === "LuckyBallFace") {
      return (
        <S.LuckyBallFace
          key={index}
          imageUrl={luckyBallFaceImages[index % luckyBallFaceImages.length]} // 주석: LuckyBallFace 스타일을 styled-components로 옮김
        />
      );
    }

    switch (type) {
      case "LuckyBall_unknown":
        return (
          <CenteredSvgFrame
            key={index}
            label={"D-?"}
            onClick={() => handleLuckyBallClick(type)}
          >
            <SvgFrame
              key={index}
              css={S.LuckyBall_unknown}
              icon={<CircleBoxIcon />}
            />
          </CenteredSvgFrame>
        );
      case "LuckyBall_Dday":
        return (
          <CenteredSvgFrame
            key={index}
            label={"D-day"}
            onClick={() => handleLuckyBallClick(type)}
          >
            <SvgFrame
              key={index}
              css={S.LuckyBall_Dday}
              icon={<CircleBoxIcon />}
            />
          </CenteredSvgFrame>
        );
      case "LuckyBall_D1":
        return (
          <CenteredSvgFrame
            key={index}
            label={"D-1"}
            onClick={() => handleLuckyBallClick(type)}
          >
            <SvgFrame
              key={index}
              css={S.LuckyBall_D1}
              icon={<CircleBoxIcon />}
            />
          </CenteredSvgFrame>
        );
      case "LuckyBall_D2":
        return (
          <CenteredSvgFrame
            key={index}
            label={"D-2"}
            onClick={() => handleLuckyBallClick(type)}
          >
            <SvgFrame
              key={index}
              css={S.LuckyBall_D2}
              icon={<CircleBoxIcon />}
            />
          </CenteredSvgFrame>
        );
      default:
        return null;
    }
  };

  const handleLuckyBallClick = (type: LuckyBallStatus) => {
    if (type === "LuckyBallFace") {
      return;
    }

    let label = "";
    switch (type) {
      case "LuckyBall_unknown":
        label = "아직 럭키 데이를 확인할 수 없어요.\n 조금만 기다려주세요.";
        break;
      case "LuckyBall_D2":
        label = "럭키 데이가 2일 남았어요. \n 조금만 기다려주세요.";
        break;
      case "LuckyBall_D1":
        label = "럭키 데이가 1일 남았어요. \n 조금만 기다려주세요.";
        break;
      case "LuckyBall_Dday":
        label = "";
        break;
      default:
        label = "";
    }
    handleOpenModal(
      <CountLuckyDayModal label={label} onClose={handleModalClose} />
    );
  };

  return (
    <>
      <S.Container>
        <S.RowBox>
          {luckyBallData.row1.map((type, index) => (
            <CenteredSvgFrame
              key={index}
              onClick={() => handleLuckyBallClick(type)}
            >
              {renderLuckyBall(type, index)}
            </CenteredSvgFrame>
          ))}
        </S.RowBox>

        <S.RowBox>
          {luckyBallData.row2.map((type, index) => (
            <CenteredSvgFrame
              key={index}
              onClick={() => handleLuckyBallClick(type)}
            >
              {renderLuckyBall(type, index)}
            </CenteredSvgFrame>
          ))}
        </S.RowBox>

        <S.RowBox>
          {luckyBallData.row3.map((type, index) => (
            <CenteredSvgFrame
              key={index}
              onClick={() => handleLuckyBallClick(type)}
            >
              {renderLuckyBall(type, index)}
            </CenteredSvgFrame>
          ))}
        </S.RowBox>
      </S.Container>
    </>
  );
}
