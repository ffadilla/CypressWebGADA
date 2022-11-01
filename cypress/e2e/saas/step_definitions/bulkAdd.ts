import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import BulkAddPage from "../../../e2e/saas/page_objects/bulkAddPage";
import * as utils from "./utils";

const bulkAddPage = new BulkAddPage();
let uomName: string;
let customUomName: string;

Given("user visits bulk add inventory page", () => {
  bulkAddPage.navigate(bulkAddPage.path);
});

When("user click nama barang atau scan barcode searchbox", () => {
  bulkAddPage.clickBulkAddNewItemPopOver();
});

When("user types {string} on nama barang searchbox", (input: string) => {
  bulkAddPage.typeBulkAddTambahBarangSearchbar(input);
  cy.get(bulkAddPage.bulkAddTambahBarangSearchbar).should("have.value", input);
  cy.wrap(input).as("inventoryName");
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

When("user clicks on {} multiple buying uom checkbox", (uomName: string) => {
  let uomNameArr: Array<string> = uomName.split(",");
  for (let i = 0; i < uomNameArr.length; i++) {
    cy.wrap(uomNameArr[i]).as("uomName " + i);
    utils.retrieveUomId(uomNameArr[i]);
    cy.get("@uomId").then((uomId: any) => {
      bulkAddPage.clickBulkAddInputUomCheckboxBuying(
        utils.replaceWhiteSpace(uomId)
      );
    });
  }
});

When("user clicks on {string} buying uom checkbox", (uomName: string) => {
  utils.retrieveUomId(uomName);
  cy.get("@uomId").then((uomId: any) => {
    bulkAddPage.cliclBulkAddInputUomCheckBoxSelling(
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
  cy.wait(1000);
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
  cy.wait(1000);
});

When("user click kembali ke halaman daftar barang button", () => {
  cy.wait(10000);
  bulkAddPage.clickBulkAddSuccessModalButtonPrimary();
});

When("user clicks on isi manual text button", () => {
  bulkAddPage.clickBulkAddIsiManualInventory();
});

When("user click tambah barang on nama barang option field", () => {
  bulkAddPage.clickBulkAddTambahCustomInventoryOption();
});

When("user click tambah unit baru", () => {
  bulkAddPage.clickBulkAddButtonCustomUomBuying();
});

When("user click tambah nama unit baru option", () => {
  bulkAddPage.clickbulkAddInputAddCustomUomBuyingOption();
});

When("user type {string} on search custom buying", () => {
  uomName = utils.generateRandomString(5);
  customUomName = uomName;
  bulkAddPage.typesBulkAddInputSearchCustomUomBuying("WebAutoUOM " + uomName);
  cy.get(bulkAddPage.bulkAddInputSearchCustomUomBuying).should(
    "have.value",
    "WebAutoUOM " + uomName
  );
});

When(
  "user types recently created custom unit selling name on search unit field",
  () => {
    bulkAddPage.typesBulkAddInputSearchCustomUomSelling(customUomName);
    cy.get(bulkAddPage.bulkAddInputSearchCustomUomSelling).should(
      "have.value",
      customUomName
    );
  }
);

When(
  "user clicks on {string} selling custom uom checkbox",
  (uomName: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      bulkAddPage.clickBulkAddInputUomPopoverChecboxSelling(
        utils.replaceWhiteSpace(uomId)
      );
    });
  }
);

When(
  "user uncheck on {string} bulk add custom inventory checkbox",
  (inventoryName: string) => {
    cy.wait(1000);
    bulkAddPage.uncheckBulkAddInputCheckboxTambahBarangOption(
      utils.replaceWhiteSpace(inventoryName)
    );
    cy.wrap(inventoryName).as("inventoryName");
  }
);

When(
  "user check on {string} bulk add custom inventory checkbox",
  (inventoryName: string) => {
    cy.wait(1000);
    bulkAddPage.checkBulkAddInputCheckboxTambahBarangOption(
      utils.replaceWhiteSpace(inventoryName)
    );
    cy.wrap(inventoryName).as("inventoryName");
  }
);

//Assertion

Then("user delete all row on bulk add form", (rowCount: number) => {
  if (rowCount < 1) return; // if no rows remain, terminate recursion
  cy.get("#button_0_0_remove", { timeout: 10000 })
    .first()
    .click({ force: true });
  cy.get("#button_0_0_remove", { timeout: 10000 })
    .first()
    .click({ force: true });
  cy.get("#button_bulk_add_simpan").should("be.disabled");
});

Then(
  "user can not clicks on {string} bulk add tambah barang input checkbox but disabled",
  (inventoryName: string) => {
    cy.wait(1000);
    cy.get(
      "#input_checkbox_tambah_barang_option_" +
        utils.replaceWhiteSpace(inventoryName)
    ).should("be.disabled");
    cy.wrap(inventoryName).as("inventoryName");
  }
);

Then("text barang sudah ada ditable is displayed on this item product", () => {
  cy.get('[for="input_checkbox_tambah_barang_option_kukis_300gr"]').should(
    "have.text",
    "kukis 300grSudah ditambahkan ke tabel"
  );
});

Then("tooltip is displayed on some cell that no input", () => {
  cy.get("td").eq(2).should("have.css", "border-color", "rgb(218, 56, 54)");
});
