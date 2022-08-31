import * as moment from "moment";

export function generateDateTime(index: number, form: string) {
  return moment().add(index, "days").format(form);
}
