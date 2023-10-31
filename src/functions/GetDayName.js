export default function GetDayName(time) {
  let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
  let date = new Date(time * 1000);
  let dayNumber = date.getDay();
  let day = days[dayNumber];

  return day;
}
