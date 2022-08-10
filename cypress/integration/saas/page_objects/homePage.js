import BasePage from "./basePage.js";

export default class HomePage extends BasePage {
  path = "";
  h4text =
    "h4:contains(Menu pertama yang Anda harus coba: Tambah dan Lihat Inventori)";
  closeTutorialButton = ".MuiButtonBase-root.MuiIconButton-root.jss278";
  confirmCloseTutorialButton = "button:contains('Ya, Keluar')";
  cancelCloseTutorialButton = "button:contains('Batal')";

  //side menu
  inventorySideMenuButton = "h4:contains(Inventori)";
  inventoryListSideMenuButton = "h4:contains(Daftar Barang)";

  // common
  visitHomePage() {
    cy.visit(this.baseUrl + this.path);
  }

  clickCloseTutorialButton() {
    cy.get(this.h4text).next().click();
  }

  clickConfirmCloseTutorialButton() {
    cy.get(this.confirmCloseTutorialButton).click();
  }

  clickCancelCloseTutorialButton() {
    cy.get(this.cancelCloseTutorialButton).click();
  }

  clickInventorySideMenuButton() {
    cy.get(this.inventorySideMenuButton).first().parent().parent().click();
  }

  clickInventoryListSideMenuButton() {
    cy.get(this.inventoryListSideMenuButton).parent().parent().click();
  }
}
