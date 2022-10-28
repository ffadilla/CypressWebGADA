import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import BulkAddPage from "../../../e2e/saas/page_objects/bulkAddPage";
import * as utils from "./utils";

const bulkAddPage = new BulkAddPage();

Given("user visits bulk add inventory page", () => {
  bulkAddPage.navigate(bulkAddPage.path);
});

When("user click nama barang atau scan barcode searchbox", () => {
  bulkAddPage.clickBulkAddNewItemPopOver();
});

When("user types {string} on nama barang searchbox", (input: string) => {
  bulkAddPage.typeBulkAddTambahBarangSearchbar(input);
  cy.get(bulkAddPage.bulkAddTambahBarangSearchbar).should("have.value", input);
});

When(
  "user clicks on {string} bulk add tambah barang input checkbox",
  (inventoryName: string) => {
    cy.wait(1000);
    bulkAddPage.clickBulkAddTambahBarangInputCheckbox(
      utils.replaceWhiteSpace(inventoryName)
    );
    cy.wrap(inventoryName).as("inventoryName");
  }
);

When("user clicks on simpan button popover", () => {
  bulkAddPage.clickBulkAddSimpanBarangInventoryPopover();
});

When(
  "user clicks on {string} open uom select button of {string}",
  (uomName: string, inventoryName: string) => {
    if (uomName.toLowerCase() === "empty") {
      bulkAddPage.clickBulkAddOpenUomSelectButton(
        utils.replaceWhiteSpace(inventoryName),
        "-1"
      );
    } else {
      utils.retrieveUomId(uomName);
      cy.get("@uomId").then((uomId: any) => {
        bulkAddPage.clickBulkAddOpenUomSelectButton(
          utils.replaceWhiteSpace(inventoryName),
          uomId
        );
        cy.wrap(uomId).as("uomId");
      });
    }
  }
);

When("user clicks on {string} buying uom checkbox", (uomName: string) => {
  utils.retrieveUomId(uomName);
  cy.get("@uomId").then((uomId: any) => {
    bulkAddPage.clickBulkAddInputUomCheckboxBuying(
      utils.replaceWhiteSpace(uomId)
    );
  });
});

When("user clicks on {string} selling uom checkbox", (uomName: string) => {
  utils.retrieveUomId(uomName);
  cy.get("@uomId").then((uomId: any) => {
    bulkAddPage.cliclBulkAddInputUomCheckBoxSelling(
      utils.replaceWhiteSpace(uomId)
    );
  });
});

When("user click lanjut on uom select popover", () => {
  cy.wait(2000);
  bulkAddPage.clickBulkAddLanjutButtonSelectUom();
});

When("user types {string} on input jumlah stock cell", (input: string) => {
  cy.get("@inventoryName").then((inventoryName: any) => {
    cy.get("@uomId").then((uomId: any) => {
      bulkAddPage.typeBulkAddInputJumlahStok(input, inventoryName, uomId);
      cy.get(
        bulkAddPage.bulkAddInputJumlahStok +
          utils.replaceWhiteSpace(inventoryName) +
          "_" +
          uomId
      ).should("have.value", input);
    });
  });
});

When(
  "user types {string} on input harga modal per unit cell",
  (input: string) => {
    cy.get("@inventoryName").then((inventoryName: any) => {
      cy.get("@uomId").then((uomId: any) => {
        bulkAddPage.typeBulkAddInputHargaModalPerUnit(
          input,
          inventoryName,
          uomId
        );
        cy.get(
          bulkAddPage.bulkAddInputHargaModalPerUnit +
            utils.replaceWhiteSpace(inventoryName) +
            "_" +
            uomId
        ).should("have.value", "Rp " + utils.numberWithSeparators(input));
      });
    });
  }
);

When(
  "user types {string} on input harga jual per unit cell",
  (input: string) => {
    cy.get("@inventoryName").then((inventoryName: any) => {
      cy.get("@uomId").then((uomId: any) => {
        bulkAddPage.typeBulkAddInputHargaJualPerUnit(
          input,
          inventoryName,
          uomId
        );
        cy.get(
          bulkAddPage.bulkAddInputHargaJualPerUnit +
            utils.replaceWhiteSpace(inventoryName) +
            "_" +
            uomId
        ).should("have.value", "Rp " + utils.numberWithSeparators(input));
      });
    });
  }
);

When("user click simpan bulk add inventory", () => {
  cy.wait(1000);
  bulkAddPage.clickBulkAddSimpanButton();
  cy.wait(2000);
});

When("user click kembali ke halaman daftar barang button", () => {
  cy.wait(2000);
  bulkAddPage.clickBulkAddSuccessModalButtonPrimary();
});
