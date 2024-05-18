export const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");

  return `${year}년 ${month}월 ${day}일`;
};

type FormatDateTemplate = "YYYY-MM-DD" | "MM-DD";

export const formatDate = (
  date: string,
  template: FormatDateTemplate
): string | undefined => {
  if (!date) return;

  const [year, month, day] = date.split("-");

  const formattedMonth = month.padStart(2, "0");
  const formattedDay = day.padStart(2, "0");

  switch (template) {
    case "YYYY-MM-DD":
      return `${year}년 ${formattedMonth}월 ${formattedDay}일`;

    case "MM-DD":
      return ` ${formattedMonth}월 ${formattedDay}일`;
  }
};
