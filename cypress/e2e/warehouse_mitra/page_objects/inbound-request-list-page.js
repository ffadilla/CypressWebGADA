import BasePage from "./base-page.js";

export default class InboundRequestListPage extends BasePage {
  path = '/inventory/inbound/request/list';
  xPathinboundMenu = '//*[@id="__next"]/div/div[2]/div/div/div/nav/div[1]/a[2]/div';
  xPathCreateRequestButton = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[3]/div[2]/span/button';
  textCreateNewRequestButton = 'Buat Barang Masuk Baru';
}
