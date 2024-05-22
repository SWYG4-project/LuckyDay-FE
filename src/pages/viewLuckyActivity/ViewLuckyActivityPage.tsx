import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";

import { PageSpinner, SingleButtonLayout, SvgFrame } from "components";
import { useGetLuckyDayDetail } from "services";
import { formatDate } from "utils";
import { ShortBoxIcon, activities } from "assets";
import * as S from "./ViewLuckyActivityPage.styled";

function ViewLuckyActivityPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetLuckyDayDetail(id!);

  const handleClickRecord = () => {
    if (data?.resData.review) {
      navigate(`/luckydays/review/${id}`);
    } else {
      navigate(`/luckydays/create/${id}`);
    }
  };

  if (isLoading) {
    return <PageSpinner />;
  }

  return (
    <SingleButtonLayout>
      <S.ViewLuckyActivityPage>
        <S.LuckydayInfo>
          <span>
            {data ? formatDate(data.resData.dday, "YYYY-MM-DD") : "-"}
          </span>
          <span>
            {data?.resData.dday === dayjs().format("YYYY-MM-DD")
              ? "오늘의"
              : "추억의"}{" "}
            럭키 데이 활동은...
          </span>
        </S.LuckydayInfo>
        <S.LuckydayDetailInfo>
          <S.Img src="/public/images/img_luckydayBg.webp" alt="luckyday" />
          {
            activities.find((item) => item.label === data?.resData.category)
              ?.icon
          }
          <p>{data?.resData.actNm}</p>
          <p>{data?.resData.actInfo}</p>
        </S.LuckydayDetailInfo>
        <S.Button onClick={handleClickRecord}>
          <SvgFrame css={S.svgFrame} icon={<ShortBoxIcon />} />
          <span>{data?.resData.review ? "기록보기" : "기록하기"}</span>
        </S.Button>
      </S.ViewLuckyActivityPage>
    </SingleButtonLayout>
  );
}

export default ViewLuckyActivityPage;
