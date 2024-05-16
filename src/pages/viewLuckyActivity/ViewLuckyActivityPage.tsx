import dayjs from "dayjs";

import { SingleButtonLayout, SvgFrame } from "components";
import { formatDate } from "utils";
import { ShortBoxIcon, activities } from "assets";
import * as S from "./ViewLuckyActivityPage.styled";

function ViewLuckyActivityPage() {
  const data = {
    actNm: "향초로 기분 전환하기",
    actInfo:
      "나에게 향초를 선물해서 분위기를 내 보는 것은 어떨까요? 지친 하루를 마무리할 때, 내가 직접 고른 향이 나는 향초는 편안한 휴식과 아늑한 밤을 선사해 줄 거예요.",
    review: null,
    imageName: null,
    imagePath: null,
    imageUrl: null,
    dday: "2024-05-16",
    category: "특별한 선물",
  };

  return (
    <SingleButtonLayout>
      <S.ViewLuckyActivityPage>
        <S.LuckydayInfo>
          <span>{formatDate(data.dday)}</span>
          <span>
            {data.dday === dayjs().format("YYYY-MM-DD") ? "오늘의" : "추억의"}{" "}
            럭키 데이 활동은...
          </span>
        </S.LuckydayInfo>
        <S.LuckydayDetailInfo>
          <S.Img src="public/images/img_luckydayBg.png" />
          {activities.find((item) => item.label === data.category)?.icon}
          <p>{data.actNm}</p>
          <p>{data.actInfo}</p>
        </S.LuckydayDetailInfo>
        <S.Button>
          <SvgFrame css={S.svgFrame} icon={<ShortBoxIcon />} />
          <span>{data.review ? "기록하기" : "기록보기"}</span>
        </S.Button>
      </S.ViewLuckyActivityPage>
    </SingleButtonLayout>
  );
}

export default ViewLuckyActivityPage;
