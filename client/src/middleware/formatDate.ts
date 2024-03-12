import { DataProps } from "../constants/types";

const getShortMonthName = (month: number): string => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return monthNames[month];
};

export const formatDate = (dateString?: string): DataProps | string => {
  if (!dateString) {
    return 'No date provided'; 
  }
  const date = new Date(dateString);
  const year = date.getFullYear().toString();
  const month = getShortMonthName(date.getMonth());
  let day = date.getDate().toString();
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  day = day.length === 1 ? `0${day}` : day;
  hours = hours.length === 1 ? `0${hours}` : hours;
  minutes = minutes.length === 1 ? `0${minutes}` : minutes;

  const formattedDate: DataProps = {
    year: year,
    month: month,
    day: day,
    hours: hours,
    minutes: minutes,
  };

  return formattedDate;
};
