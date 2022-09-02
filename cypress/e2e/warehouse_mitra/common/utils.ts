import * as moment from "moment";

export function generateDateTime(index: number, form: string): string {
  return moment().add(index, "days").format(form);
}
