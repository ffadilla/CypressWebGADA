import * as moment from "moment";

export function generateDateTime(ind: number, form: string) {
  return moment().add(ind, "days").format(form);
}
export function generateDateTimeString(index: number) {
  const date = new Date();
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate() + index),
    ].join("") +
    "_" +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join("")
  );
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}
