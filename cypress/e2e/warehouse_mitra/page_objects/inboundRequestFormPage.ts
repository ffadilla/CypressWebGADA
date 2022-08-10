import BasePage from "./basePage";

export default class InboundRequestFormPage extends BasePage {
  path = "/inventory/inbound/request/create";
  xPathSubmitRequestFormButton =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[2]/div/div/button[2]';
}
