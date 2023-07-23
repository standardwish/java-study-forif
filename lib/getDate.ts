export default function getDate(date: Date) {
  let year = date.getFullYear(); // 년도
  let month = date.getMonth() + 1; // 월
  let today = date.getDate(); // 날짜

  return `${year}년 ${month}월 ${today}일`;
}
