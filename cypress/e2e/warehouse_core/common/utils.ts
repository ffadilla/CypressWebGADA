import * as moment from "moment";

export function generateDateTime(index: number, form: string): string {
  return moment().add(index, "days").format(form);
}

export function reformatDate(
  input: string,
  inputFormat: string,
  outputFormat: string
): string {
  return moment(input, inputFormat).format(outputFormat);
}

export function padTo2Digits(num: number): string {
  return num.toString().padStart(2, "0");
}

export function replaceElementIndex(selector: string, index: number): string {
  return selector.replace("index", index.toString());
}

export function interceptAPI(
  APIMethod: string,
  APIEndpoint: string,
  alias: string
) {
  cy.intercept(APIMethod, APIEndpoint).as(alias);
}

export function getRandomIntInclusive(min: number, max: number) {
  // The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
