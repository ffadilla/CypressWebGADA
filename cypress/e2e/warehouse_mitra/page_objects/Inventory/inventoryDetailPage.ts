import BasePage from "../basePage";

export default class InventoryDetailPage extends BasePage {
  path = "/inventory/detail?id=";

  skuHeaderTitleXPath =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[1]/div[1]';
  skuNameXPath = this.skuHeaderTitleXPath + "/div/div[2]/p";
  skuMeasurementXPath = this.skuHeaderTitleXPath + "/div/div[2]/div/p";
  skuHeaderInformationXPath =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[1]/div[2]';
  storeNameXPath = this.skuHeaderInformationXPath + "/div/div[1]/div/div[2]";
  warehouseNameXPath =
    this.skuHeaderInformationXPath + "/div/div[2]/div/div[2]";

  skuSellableInformationXPath =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[2]/div[1]';
  skuOutboundInformationXPath =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[2]/div[2]';

  expiryDateTableXpath = '(//tbody[contains(@class, "MuiTableBody-root")])[1]';

  movementTableXPath = '(//tbody[contains(@class, "MuiTableBody-root")])[2]';
  movementReferenceIDXPath =
    this.movementTableXPath + "/tr[index]/td[1]/div/div[1]";
  movementRequestIDXPath =
    this.movementTableXPath + "/tr[index]/td[1]/div/div[2]";
  movementCategoryXPath = this.movementTableXPath + "/tr[index]/td[2]";
  movementAmountXPath = this.movementTableXPath + "/tr[index]/td[3]";
  movementInventoryFinalAmountXPath =
    this.movementTableXPath + "/tr[index]/td[4]";
  movementTimeXPath = this.movementTableXPath + "/tr[index]/td[5]/div[1]";
  movementByXPath = this.movementTableXPath + "/tr[index]/td[5]/div[2]";

  expDatePageAmountDropdownXPath =
    '(//div[contains(@aria-haspopup, "listbox")])[1]';
  movementPageAmountDropdownXPath =
    '(//div[contains(@aria-haspopup, "listbox")])[2]';
  pageAmountDropdownOptions = 'ul[role="listbox"]';

  setExpDatePageAmount(value: string) {
    cy.xpath(this.expDatePageAmountDropdownXPath).click();
    cy.get(this.pageAmountDropdownOptions).contains(value).click();
  }
  setMovementPageAmount(value: string) {
    cy.xpath(this.movementPageAmountDropdownXPath).click();
    cy.get(this.pageAmountDropdownOptions).contains(value).click();
  }

  assertInventoryDetail() {
    cy.xpath(this.skuNameXPath).should("be.visible");
    cy.url().should("include", this.path);
  }

  assertSKUDataByInventoryList() {
    cy.get("@inventoryListSKUID").then((skuID) => {
      expect(cy.xpath(this.skuHeaderTitleXPath).should("contain", skuID));
    });
    cy.get("@inventoryListOwnership").then((ownership) => {
      expect(cy.xpath(this.skuHeaderTitleXPath).should("contain", ownership));
    });
    cy.get("@inventoryListProductName").then((text) => {
      cy.xpath(this.skuNameXPath)
        .invoke("text")
        .then((name) => {
          expect(text).to.contain(name);
        });
      cy.xpath(this.skuMeasurementXPath)
        .invoke("text")
        .then((uom) => {
          expect(text).to.contain(uom);
        });
    });

    cy.get("@inventoryListWarehouseStore").then((text) => {
      cy.xpath(this.storeNameXPath)
        .invoke("text")
        .then((store) => {
          expect(text).to.contain(store);
        });
      cy.xpath(this.warehouseNameXPath)
        .invoke("text")
        .then((warehouse) => {
          expect(text).to.contain(warehouse);
        });
    });

    cy.get("@inventoryListProductQty").then((productQty) => {
      expect(
        cy
          .xpath(
            this.utils.replaceElementIndex(
              this.movementInventoryFinalAmountXPath,
              1
            )
          )
          .should("contain", productQty)
      );
    });
    cy.get("@inventoryListLastUpdatedTime").then((lut) => {
      expect(
        cy
          .xpath(this.utils.replaceElementIndex(this.movementTimeXPath, 1))
          .should("contain", lut)
      );
    });
    cy.get("@inventoryListLastUpdatedBy").then((lutBy) => {
      expect(
        cy
          .xpath(this.utils.replaceElementIndex(this.movementByXPath, 1))
          .should("contain", lutBy)
      );
    });
  }
}
