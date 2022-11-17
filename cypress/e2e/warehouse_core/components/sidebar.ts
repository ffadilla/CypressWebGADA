export default class Sidebar {
  configData;

  constructor(configData: any) {
    this.configData = configData;
  }

  sidebarMenuButton = ".MuiListItemButton-root";
  sidebarSubMenuButton = ".MuiCollapse-root";
  inboundMenuButton = 'div[data-testid="sidebar.inbound_menu"]';
  outboundMenuButton = "//div[2]/div/div/div/nav/div[1]/a[3]";
  xpathOutboundRequest =
    "//div/div[2]/div/div/div/nav/div[1]/div[3]/div/div/div/div/a[1]/div";
  xpathOutboundShipment =
    "//div/div[2]/div/div/div/nav/div[1]/div[3]/div/div/div/div/a[2]/div";
  xpathOutboundMenuAccordion = "//div[2]/div/div/div/nav/div[1]/div[2]";

  clickInboundMenu() {
    cy.url().then((url) => {
      if (!url.includes(this.configData.baseUrl + "inventory/inbound/")) {
        cy.get(this.inboundMenuButton).first().click();
      }
    });
  }
  clickInboundRequestMenu() {
    this.clickInboundMenu();
    cy.get(this.sidebarSubMenuButton)
      .find("span")
      .contains("Permintaan Barang")
      .click();
  }

  clickInboundReceiptMenu() {
    this.clickInboundMenu();
    cy.get(this.sidebarSubMenuButton)
      .find("span")
      .contains("Penerimaan Barang")
      .click();
  }

  clickMenuOutbound() {
    cy.xpath(this.xpathOutboundMenuAccordion).click();
  }

  selectOutboundRequest() {
    cy.xpath(this.xpathOutboundRequest).click();
  }

  selectShipmentProcess() {
    cy.xpath(this.xpathOutboundShipment).click();
  }

  clickInventoryMenu() {
    cy.wait(1000);
    cy.url().then((url) => {
      if (
        !url.includes(this.configData.baseUrl + "inventory/list/") ||
        !url.includes(this.configData.baseUrl + "inventory/detail/")
      ) {
        cy.get(this.sidebarMenuButton)
          .find("span")
          .contains("Inventori")
          .click();
      }
    });
    cy.get(this.sidebarSubMenuButton).contains("Daftar Inventori").click();
  }
}
