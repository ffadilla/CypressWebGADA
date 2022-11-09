import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import BulkAddPage from "../../../e2e/saas/page_objects/bulkAddPage";
import * as utils from "./utils";

const bulkAddPage = new BulkAddPage();
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
  let uomNameArr: Array<string> = uomName.replace(/"/g, "").split(",");
  for (let i = 0; i < uomNameArr.length; i++) {
    cy.wrap(uomNameArr[i]).as("uomName " + i);
    utils.retrieveUomId(uomNameArr[i]);
    cy.get("@uomId").then((uomId: any) => {
      bulkAddPage.clickBulkAddInputUomCheckboxBuying(
        utils.replaceWhiteSpace(uomId)
      );
      cy.wrap(uomId).as("uomId " + i);
    });
  }
});

When("user clicks on {} multiple selling uom checkbox", (uomName: string) => {
  let uomNameArr: Array<string> = uomName.replace(/"/g, "").split(",");
  for (let i = 0; i < uomNameArr.length; i++) {
    cy.wrap(uomNameArr[i]).as("uomName " + i);
    utils.retrieveUomId(uomNameArr[i]);
    cy.get("@uomId").then((uomId: any) => {
      bulkAddPage.clicklBulkAddInputUomCheckBoxSelling(
        utils.replaceWhiteSpace(uomId)
      );
      cy.wrap(uomId).as("uomId " + i);
    });
  }
});

When("user types {} on multiple input jumlah stock cell", (stock: string) => {
  let stockArr: Array<string> = stock.replace(/"/g, "").split(",");
  for (let i = 0; i < stockArr.length; i++) {
    cy.get("@inventoryName").then((inventoryName: any) => {
      cy.get(`@uomId ${i}`).then((uomId: any) => {
        bulkAddPage.typeBulkAddInputJumlahStok(
          stockArr[i],
          inventoryName,
          uomId
        );
        cy.get(
          bulkAddPage.bulkAddInputJumlahStok +
            utils.replaceWhiteSpace(inventoryName) +
            "_" +
            uomId
        ).should("have.value", stockArr[i]);
        cy.wrap(stockArr[i]).as("stock " + i);
      });
    });
  }
});

When(
  "user types {} on custom uom multiple input jumlah stock cell",
  (stock: string) => {
    let stockArr: Array<string> = stock.replace(/"/g, "").split(",");
    for (let i = 0; i < stockArr.length; i++) {
      for (let j = 0; j < customUomName.length; j++) {
        cy.get("@inventoryName").then((inventoryName: any) => {
          cy.get(`@uomId`).then((uomId: any) => {
            bulkAddPage.typeBulkAddInputJumlahStok(
              stockArr[j],
              inventoryName,
              uomId[j]
            );
            cy.get(
              bulkAddPage.bulkAddInputJumlahStok +
                utils.replaceWhiteSpace(inventoryName) +
                "_" +
                uomId
            ).should("have.value", stockArr[i]);
            cy.wrap(uomId[j]).as("stock " + j);
          });
        });
      }
    }
  }
);

When(
  "user types {} on multiple input harga modal per unit cell",
  (buying: string) => {
    let buyingArr: Array<string> = buying.replace(/"/g, "").split(",");
    for (let i = 0; i < buyingArr.length; i++) {
      cy.get("@inventoryName").then((inventoryName: any) => {
        cy.get(`@uomId ${i}`).then((uomId: any) => {
          bulkAddPage.typeBulkAddInputHargaModalPerUnit(
            buyingArr[i],
            inventoryName,
            uomId
          );
          cy.get(
            bulkAddPage.bulkAddInputHargaModalPerUnit +
              utils.replaceWhiteSpace(inventoryName) +
              "_" +
              uomId
          ).should(
            "have.value",
            "Rp " + utils.numberWithSeparators(buyingArr[i])
          );
          cy.wrap(buyingArr[i]).as("buying " + i);
        });
      });
    }
  }
);

When(
  "user types {} on multiple input harga jual per unit cell",
  (selling: string) => {
    let sellingArr: Array<string> = selling.replace(/"/g, "").split(",");
    for (let i = 0; i < sellingArr.length; i++) {
      cy.get("@inventoryName").then((inventoryName: any) => {
        cy.get(`@uomId ${i}`).then((uomId: any) => {
          bulkAddPage.typeBulkAddInputHargaJualPerUnit(
            sellingArr[i],
            inventoryName,
            uomId
          );
          cy.get(
            bulkAddPage.bulkAddInputHargaJualPerUnit +
              utils.replaceWhiteSpace(inventoryName) +
              "_" +
              uomId
          ).should(
            "have.value",
            "Rp " + utils.numberWithSeparators(sellingArr[i])
          );
          cy.wrap(sellingArr[i]).as("selling " + i);
        });
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
    bulkAddPage.clicklBulkAddInputUomCheckBoxSelling(
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
  let uomName = utils.generateRandomString(5);
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

When("user click on stock reminder toggle", () => {
  cy.get("@inventoryName").then((inventoryName: any) => {
    cy.wait(500);
    bulkAddPage.clickBulkAddButtonToggleIsStockReminderActive(
      utils.replaceWhiteSpace(inventoryName)
    );
    cy.wrap(inventoryName).as("inventoryName");
  });
});

When("user types {string} on batas stock textbox", (input: string) => {
  cy.get("@inventoryName").then((inventoryName: any) => {
    bulkAddPage.typeBulkAddInputBatasStock(input, inventoryName);
    cy.get(
      bulkAddPage.bulkAddInputBatasStock +
        utils.replaceWhiteSpace(inventoryName)
    ).should("have.value", input);
  });
});

When("user click on simpan button stock reminder", () => {
  bulkAddPage.clickBulkAddStockReminderSimpan();
});

When("user click on sell in MP gada toggle", () => {
  cy.get("@inventoryName").then((inventoryName: any) => {
    cy.get("@uomId").then((uomId: any) => {
      bulkAddPage.clickBulkAddButtonToggleOnlineSellingActive(
        inventoryName,
        uomId
      );
    });
  });
});

When("user types {string} on minimum pesanan textbox", (input: string) => {
  cy.get("@inventoryName").then((inventoryName: any) => {
    cy.get("@uomId").then((uomId: any) => {
      bulkAddPage.typeBulkAddInputMinimumPesanan(input, inventoryName, uomId);
      cy.get(
        bulkAddPage.bulkAddInputMinimumPesanan +
          utils.replaceWhiteSpace(inventoryName) +
          "_" +
          uomId
      ).should("have.value", input);
    });
  });
});

When("user types {string} on minimum stock text box", (input: string) => {
  cy.get("@inventoryName").then((inventoryName: any) => {
    cy.get("@uomId").then((uomId: any) => {
      bulkAddPage.typeBulkAddInputMinumumStock(input, inventoryName, uomId);
      cy.get(
        bulkAddPage.bulkAddInputMinumumStock +
          utils.replaceWhiteSpace(inventoryName) +
          "_" +
          uomId
      ).should("have.value", input);
    });
  });
});

When("user click on simpan button sell in MP", () => {
  bulkAddPage.clickBulkAddOnlineSellingSimpan();
});

When("user click on conversion button up", (uomName: string) => {
  cy.wrap(uomName).as("uomName");
  utils.retrieveUomId(uomName);
  cy.get("@uomId").then((uomId: any) => {
    bulkAddPage.clickBulkAddButtonConversionUp(utils.replaceWhiteSpace(uomId));
  });
});

When("user click on selanjutnya button", () => {
  bulkAddPage.clicBulkAddButtonSelanjutnyaConversion();
});

When("user types {string} on conversion uom input modal", (input: string) => {
  cy.get("@uomId").then((uomId: any) => {
    cy.get(
      bulkAddPage.bulkAddInputConversionModalUom +
        utils.replaceWhiteSpace(uomId)
    ).clear();
    bulkAddPage.typeBulkAddInputConversionModalUom(input, uomId);
    cy.get(
      bulkAddPage.bulkAddInputConversionModalUom +
        utils.replaceWhiteSpace(uomId)
    ).should("have.value", input);
    cy.wrap(uomId).as("uomId");
  });
});

When("user click simpan on conversion uom modal", () => {
  bulkAddPage.clickBulkAddConversionButtonSimpan();
});

When("user click clear search on buying uom searchbox", () => {
  bulkAddPage.clickBulkAddSeachButtonClearBuying();
});

When("user click clear search on selling uom searchbox", () => {
  bulkAddPage.clickBulkAddSeachButtonClearSelling();
});

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

Then("user view on stock reminder toggle is enabled", () => {
  cy.get("#button_toggle_is_stock_reminder_active_kukis_300gr").should(
    "be.enabled"
  );
  cy.get("#button_toggle_is_stock_reminder_active_madu_tj_murni_150_gr").should(
    "be.enabled"
  );
});

Then("user view on sell in mp toggle is enabled", () => {
  cy.get("#button_toggle_online_selling_active_djarum_super_12_slop_2").should(
    "be.enabled"
  );
  cy.get(
    "#button_toggle_online_selling_active_dji_sam_soe_magnum_mild_20_slop_8"
  ).should("be.enabled");
});
