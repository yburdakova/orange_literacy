import { DataProps } from "../../constants/types";

const getShortMonthName = (month: number): string => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return monthNames[month];
};

export const formatDate = (dateString?: string) => {
  if (!dateString) {
    return 'No date provided'; 
  }

  const date = new Date(dateString);
  
  const year = !isNaN(date.getFullYear()) ? date.getFullYear().toString() : 'NaN';
  const month = !isNaN(date.getMonth()) ? getShortMonthName(date.getMonth()) : 'NaN';
  let day = !isNaN(date.getDate()) ? (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()).toString() : 'NaN';
  let hours = !isNaN(date.getHours()) ? (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()).toString() : 'NaN';

  let minutes = !isNaN(date.getMinutes()) ? (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()).toString() : 'NaN';

  if (year === 'NaN' || month === 'NaN' || day === 'NaN' || hours === 'NaN' || minutes === 'NaN') {
    return 'No date provided';
  }

  day = day.length === 1 ? `0${day}` : day;
  hours = hours.length === 1 ? `0${hours}` : hours;
  minutes = minutes.length === 1 ? `0${minutes}` : minutes;

  const formatedDate: DataProps = {
    year: year,
    month: month,
    day: day,
    hours: hours,
    minutes: minutes,
  };

  return formatedDate;
};
