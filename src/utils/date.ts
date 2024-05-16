export const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");

  return `${year}년 ${month}월 ${day}일`;
};

export const formatDate = (date?: string): string | undefined => {
  if (!date) return;

  const [year, month, day] = date.split("-");

  const formattedMonth = month.padStart(2, "0");
  const formattedDay = day.padStart(2, "0");

  return `${year}년 ${formattedMonth}월 ${formattedDay}일`;
};
