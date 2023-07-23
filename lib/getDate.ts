export default function getDate (date: Date) {
  const year = date.getFullYear() // 년도
  const month = date.getMonth() + 1 // 월
  const today = date.getDate() // 날짜

  return `${year}년 ${month}월 ${today}일`
}
