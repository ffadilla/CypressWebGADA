import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InventoryListPage from "../../../e2e/saas/page_objects/inventoryListPage";
import InventoryDetail from "../../../e2e/saas/page_objects/inventoryDetailPage";
import * as utils from "./utils";
import gadaConfig from "../../utils/gadaConfig";

const inventoryListPage = new InventoryListPage();
const inventoryDetailPage = new InventoryDetail();

When("user visits inventory list page", () => {
  inventoryListPage.navigate(inventoryListPage.path);
});

When(
  "user types search inventory input field with {string}",
  (input: string) => {
    inventoryListPage.typeSearchInventoryInput(input);
    cy.get(inventoryListPage.searchInventoryInput).should("have.value", input);
  }
);

When("user clicks on inventory detail button of {string}", (input: string) => {
  inventoryListPage.clickSpecificNamaBarangButton(input);
  cy.wait(2000);
  cy.url().should(
    "contain",
    inventoryDetailPage.baseUrl + inventoryDetailPage.path + "edit"
  );
});

When("user clicks on add inventory button", () => {
  inventoryListPage.clickAddInventoryButton();
});

When("user clicks on add single inventory button", () => {
  inventoryListPage.clickAddSingleInventoryButton();
});

When("user clicks on first time add inventory button", () => {
  inventoryListPage.clickFirstTimeAddInventoryButton();
});

When(
  "user types add inventory search inventory input field with {string}",
  (input: string) => {
    inventoryListPage.typeAddInventorySearchInput(input);
    cy.get(inventoryListPage.addInventorySearchInput).should(
      "have.value",
      input
    );
  }
);

When("user clicks on add custom inventory button", () => {
  inventoryListPage.clickAddCustomInventoryButton();
});

When(
  "user clicks on add inventory button of inventory {string}",
  (input: string) => {
    inventoryListPage.clicksAddSpecificInventoryButton(input);
  }
);

When(
  "user clicks on stock edit button of inventory {string}",
  (input: string) => {
    utils.retrieveProductVariantId(input);
    cy.get("@productVariantId").then((pvId: any) => {
      cy.wait(1500);
      cy.get(inventoryListPage.namaBarangButton + pvId).trigger("mouseover");
      inventoryListPage.clickStockEditButton(pvId);
    });
    cy.wait(1500);
  }
);

When(
  "user clicks on close stock edit button of inventory {string}",
  (input: string) => {
    utils.retrieveProductVariantId(input);
    cy.get("@productVariantId").then((pvId: any) => {
      cy.get(inventoryListPage.namaBarangButton + pvId).trigger("click");
    });
  }
);

When(
  "user clicks on inventory more option button of {string}",
  (input: string) => {
    utils.retrieveProductVariantId(input);
    cy.get("@productVariantId").then((pvId: any) => {
      inventoryListPage.clickMoreOptionsButton(pvId);
    });
  }
);

When("user clicks on inventory list delete button", () => {
  inventoryListPage.clickDeleteInventoryButton();
});

When(
  "user clicks on barang rusak/kadaluwarsa/hilang delete reason input",
  () => {
    inventoryListPage.clickDeleteInventoryOtherReason();
  }
);

When("user clicks on ada kesalahan input delete reason input", () => {
  inventoryListPage.clickDeleteInventoryWrongInput();
});

When("user clicks on inventory list confirm delete button", () => {
  inventoryListPage.clickConfirmDeleteInventoryButton();
});

When(
  "user clicks on selling price edit button of inventory {string}",
  (input: string) => {
    cy.wait(500);
    utils.retrieveProductVariantId(input);
    cy.get("@productVariantId").then((pvId: any) => {
      cy.get(inventoryListPage.namaBarangButton + pvId).trigger("mouseover");
      inventoryListPage.clickSellingPriceEditButton(
        utils.convertNameToId(input)
      );
    });
  }
);

When(
  "user clicks on selling price edit button of inventory {string} unit {string}",
  (inventoryName: string, uomName: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      const id = utils.convertNameToId(inventoryName) + "_" + uomId;
      inventoryListPage.clickSellingPriceEditButton(id);
    });
  }
);

When("user closes popover", () => {
  cy.get("body").click(0, 0);
});

When(
  "user deletes inventory {string} with delete reason = wrong input",
  (input: string) => {
    inventoryListPage.clickSpecificInventoryMoreOptionButton(input);
    inventoryListPage.clickDeleteInventoryButton();
    inventoryListPage.clickDeleteInventoryWrongInput();
    inventoryListPage.clickConfirmDeleteInventoryButton();
  }
);

When(
  "user deletes inventory {string} without delete reason",
  (input: string) => {
    inventoryListPage.clickSpecificInventoryMoreOptionButton(input);
    inventoryListPage.clickDeleteInventoryButton();
    inventoryListPage.clickConfirmDeleteInventoryButton();
  }
);

// assertions

Then("{string} is displayed as product variant name", (expected: string) => {
  expect(
    cy
      .get(inventoryDetailPage.productVariantNameInput)
      .should("have.value", expected)
  );
});

Then("stock edit options of consign inventory {string} are displayed", () => {
  cy.contains("Terima Stok Baru").should("exist");
  cy.contains("Hitung Ulang Stok").should("exist");
  cy.contains("Ubah Status").should("exist");
});

Then(
  "stock edit options of non consign inventory {string} are displayed",
  () => {
    cy.contains("Tambah Stok dari Pembelian").should("exist");
    cy.contains("Hitung Ulang Stok").should("exist");
    cy.contains("Ubah Status").should("exist");
  }
);

Then(
  "is consign label is displayed on {string} status column",
  (input: string) => {
    utils.retrieveProductVariantId(input);
    cy.get("@productVariantId").then((pvId: any) => {
      cy.get(inventoryListPage.isConsignLabel + pvId + "']").should(
        "be.visible"
      );
    });
  }
);

Then("delete reasons are not displayed", () => {
  cy.get("input[name='deleteReason']").should("not.exist");
});

Then("delete reasons are displayed", () => {
  cy.get("input[name='deleteReason']").should("exist");
});

Then(
  "current smallest stock quantity of {string} is {string} {string}",
  (inventoryName: string, input: string, uomName: string) => {
    utils.retrieveProductVariantId(inventoryName);
    cy.get("@productVariantId").then((pvId: any) => {
      cy.get(inventoryListPage.namaBarangButton + pvId)
        .parent("td")
        .next()
        .children()
        .first()
        .children()
        .first()
        .children("span")
        .should("have.text", input + " ")
        .next()
        .should("have.text", uomName);
    });
  }
);

Then(
  "current stock quantity of {string} is {string}",
  (inventoryName: string, input: string) => {
    utils.retrieveProductVariantId(inventoryName);
    cy.get("@productVariantId").then((pvId: any) => {
      cy.get(inventoryListPage.namaBarangButton + pvId)
        .parent("td")
        .next()
        .children()
        .first()
        .children()
        .first()
        .children("span")
        .next()
        .next()
        .should("have.text", input);
    });
  }
);

Then(
  "selling price of {string} is {string}",
  (inventoryName: string, input: string) => {
    utils.retrieveProductVariantId(inventoryName);
    cy.get("@productVariantId").then((pvId: any) => {
      cy.get(inventoryListPage.moreOptionsButton + pvId)
        .parent("td")
        .prev()
        .prev()
        .children()
        .first()
        .children("span")
        .should("contain", utils.numberWithSeparators(input));
    });
  }
);

Then(
  "inventories with name containing {string} are displayed",
  (input: string) => {
    cy.request({
      method: "POST",
      url: gadaConfig.saas.baseApiUrl + "inventory/list",
      failOnStatusCode: false,
      body: {
        keyword: input,
        page: 1,
        page_size: 20,
        principal_ids: [],
        sort_by: "RECENTLY_MODIFIED",
        sort_type: "desc",
        store_id: gadaConfig.saas.testUserAccount.storeId,
        uom_id: [],
      },
    }).then((resp) => {
      let data = resp.body.data;
      let pvIdArray: Array<string> = [];
      for (let i = 0; i < data.length; i++) {
        pvIdArray.push(data[i].product_variant_id.toString());
      }

      for (let inventory of pvIdArray) {
        cy.get(inventoryListPage.namaBarangButton + inventory).should("exist");
      }
    });
  }
);
