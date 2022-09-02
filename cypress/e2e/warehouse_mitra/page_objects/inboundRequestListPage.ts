import BasePage from "./basePage";

export default class InboundRequestListPage extends BasePage {
  path = "/inventory/inbound/request/list";
  createRequestButton =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[3]/div[2]/span/button';
  createNewRequestButtonOption = "Buat Barang Masuk Baru";
}
