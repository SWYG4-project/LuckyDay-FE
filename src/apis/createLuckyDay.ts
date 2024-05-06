export const getLuckyDaysActivities = async () => {
  //   const { data } = await ax.get("/luckydays/activity");

  const data = {
    categoriList: [
      {
        category: "특별한 선물",
        actList: [
          { actNo: "a0", keyword: "생화" },
          { actNo: "a1", keyword: "반려 식물" },
          { actNo: "a2", keyword: "향초" },
        ],
      },
      {
        category: "맛있는 음식",
        actList: [
          { actNo: "b0", keyword: "탕후루" },
          { actNo: "b1", keyword: "마라탕" },
          { actNo: "b2", keyword: "치킨" },
        ],
      },
    ],
  };

  return data;
};
