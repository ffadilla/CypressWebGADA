import {
  interceptAPI,
  replaceElementIndex,
} from "../../../warehouse_core/common/utils";
import MainPage from "../../../warehouse_core/page_objects/mainPage";

export default class InventoryDetailPage extends MainPage {
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
  expiryDateTableSortXpath =
    '(//span[contains(@class, "MuiTableSortLabel-root")])[index]';

  movementTableXPath = '(//tbody[contains(@class, "MuiTableBody-root")])[2]';
  movementTableEmptyInfoXpath =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[4]/div[3]/div';
  movementSearchbar = 'input[placeholder="Cari ID referensi dan kategori..."]';
  resetMovementSearchbar = 'svg[data-testid="CloseRoundedIcon"]';
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

  interceptExpiryBatchAPI() {
    interceptAPI(
      "GET",
      "/inventory/inventory-batch-detail/**",
      "expiryBatchAPI"
    );
  }

  interceptInventoryMovementAPI() {
    interceptAPI(
      "GET",
      "/inventory/inventory-detail/**",
      "inventoryMovementAPI"
    );
  }

  waitMovementTableRender() {
    cy.wait("@inventoryMovementAPI").then((API) => {
      const responseBody = API.response?.body;
      if (responseBody.total_data === 0)
        cy.xpath(this.movementTableEmptyInfoXpath).should("be.visible");
      else
        cy.xpath(replaceElementIndex(this.movementByXPath, 1)).should("exist");

      expect(API.response?.statusCode).to.eq(200);
    });
  }

  setExpDatePageAmount(value: string) {
    cy.xpath(this.expDatePageAmountDropdownXPath).click();
    cy.get(this.pageAmountDropdownOptions).contains(value).click();
  }

  sortExpiryBatchTable(value: string) {
    let element = "";
    switch (value) {
      case "quantity":
        element = replaceElementIndex(this.expiryDateTableSortXpath, 1);
        break;
      case "expiry_date":
        element = replaceElementIndex(this.expiryDateTableSortXpath, 2);
        break;
    }
    cy.xpath(element).click();
  }

  setMovementPageAmount(value: string) {
    cy.xpath(this.movementPageAmountDropdownXPath).click();
    cy.get(this.pageAmountDropdownOptions).contains(value).click();
  }

  setMovementKeyword(value: string) {
    cy.get(this.movementSearchbar).click().type(value).type("{enter}");
    cy.url().should(
      "contain",
      "invMoveLogsSearchVal=" + value.split(" ").join("+")
    );
  }

  resetMovementKeyword() {
    cy.get(this.resetMovementSearchbar).click();
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
          .xpath(replaceElementIndex(this.movementInventoryFinalAmountXPath, 1))
          .should("contain", productQty)
      );
    });
    cy.get("@inventoryListLastUpdatedTime").then((lut) => {
      expect(
        cy
          .xpath(replaceElementIndex(this.movementTimeXPath, 1))
          .should("contain", lut)
      );
    });
    cy.get("@inventoryListLastUpdatedBy").then((lutBy) => {
      expect(
        cy
          .xpath(replaceElementIndex(this.movementByXPath, 1))
          .should("contain", lutBy)
      );
    });
  }

  assertExpiryBatchAPI(sortValue: string, ascendingValue: string) {
    cy.wait("@expiryBatchAPI").then((api) => {
      cy.log(String(api.request));
      expect(api.request.url).to.include("order_by=" + sortValue);
      expect(api.request.url).to.include("ascending=" + ascendingValue);
      expect(api.response?.statusCode).to.eq(200);
    });
  }

  assertMovementTableByKeyword(attribute: string, keyword: string) {
    let element = "";
    switch (attribute) {
      case "reference id":
        element = this.movementReferenceIDXPath;
        break;
      case "category":
        element = this.movementCategoryXPath;
        break;
    }

    cy.xpath(this.movementTableXPath).then((table) => {
      for (let index = 1; index < table.find("tr").length + 1; index++) {
        cy.xpath(replaceElementIndex(element, index))
          .invoke("text")
          .then((text) => {
            switch (attribute) {
              case "reference id":
                expect(text).to.include(keyword);
                break;
              case "category":
                if (keyword === "REQUEST_IN") expect(text).to.eq("Order Masuk");
                break;
            }
          });
      }
    });
  }
}
