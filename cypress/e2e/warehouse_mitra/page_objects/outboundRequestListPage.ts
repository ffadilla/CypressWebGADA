import BasePage from "./basePage";

export default class OutboundRequestListPage extends BasePage {
  path = "/inventory/outbound/request/list";
  searchInputBox =
    'input[placeholder="No. permintaan barang atau nama produk..."]';
  firstIndexData =
    ":nth-child(1) > td:nth-child(2) > a > div.MuiTypography-root";
  tabsContainer = "#chips-container";
  requestStatus =
    "tr:nth-child(1) > td:nth-child(5) > span > span.MuiTypography-root";
  //xpath
  notFoundMsg = '//div[text()="Pencarian Tidak Ditemukan"]';
  outboundMenu =
    '//div[@id="__next"]//div[@role="button"]//span[text()="Barang Keluar"]';

  selectMenuOutbound() {
    cy.xpath(this.outboundMenu).click();
  }

  searchRequest(value: string) {
    cy.get(this.searchInputBox)
      .click()
      .type(value + "{enter}");
  }

  clickTab(value: string) {
    if (value === "Belum Selesai") {
      cy.get(
        this.tabsContainer + ` > div:nth-child(2) > div:nth-child(1)`
      ).click();
    } else if (value === "Sedang Diproses") {
      cy.get(
        this.tabsContainer + ` > div:nth-child(3) > div:nth-child(1)`
      ).click();
    } else if (value === "Sudah Selesai") {
      cy.get(
        this.tabsContainer + ` > div:nth-child(4) > div:nth-child(1)`
      ).click();
    } else if (value === "Dibatalkan") {
      cy.get(
        this.tabsContainer + ` > div:nth-child(5) > div:nth-child(1)`
      ).click();
    } else {
      cy.get(
        this.tabsContainer + ` > div:nth-child(1) > div:nth-child(1)`
      ).click();
    }
  }
}
