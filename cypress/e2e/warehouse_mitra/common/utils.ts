import * as moment from "moment";

export function generateDateTime(index: number, form: string): string {
  return moment().add(index, "days").format(form);
}

export function padTo2Digits(num: number): string {
  return num.toString().padStart(2, "0");
}
