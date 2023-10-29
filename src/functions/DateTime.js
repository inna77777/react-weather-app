export default function DateTime() {
  const currentDate = new Date();

  const options = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    currentDate
  );

  return formattedDate;
}
