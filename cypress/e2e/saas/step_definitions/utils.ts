import gadaConfig from "../../../e2e/utils/gadaConfig";

export function deleteTestDataSequence() {
  setDefaultTaxAndCustomerDebtSettings();
  setDefaultRefundSettings();
  unlinkStore();
  deleteBankAccount();
  deleteCategoryTestData();
  deleteBrandTestData();
  deletePrincipalTestData();
  deleteSeedInventoryData();
  deleteCustomerTestData();
  deleteSupplierTestData();
}

export function insertTestDataSequence() {
  createSeedInventory();
  createSeedCustomer();
}

export function deleteCategoryTestData() {
  // delete category name prefix web automation (level 3)
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "product/category/list",
    failOnStatusCode: false,
    body: {
      page: 1,
      page_size: 100,
      name: "web automation",
      level: "3",
      store_id: gadaConfig.saas.testUserAccount.storeId,
      sort_by: "NAME",
      sort_type: "ASC",
    },
  }).then((resp) => {
    let data = resp.body.data;
    let categoryIdArray: Array<string> = [];
    for (let i = 0; i < data.length; i++) {
      categoryIdArray.push(data[i].id.toString());
    }

    for (let categoryId of categoryIdArray) {
      cy.request({
        method: "DELETE",
        headers: {
          channel: "SAAS",
        },
        url: gadaConfig.inventory.baseApiUrl + "product-categories/delete",
        failOnStatusCode: false,
        body: {
          product_category_id: categoryId,
        },
      });
    }
  });

  // delete category name prefix web automation (level 2)
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "product/category/list",
    failOnStatusCode: false,
    body: {
      page: 1,
      page_size: 100,
      name: "web automation",
      level: "2",
      store_id: gadaConfig.saas.testUserAccount.storeId,
      sort_by: "NAME",
      sort_type: "ASC",
    },
  }).then((resp) => {
    let data = resp.body.data;
    let categoryIdArray: Array<string> = [];
    for (let i = 0; i < data.length; i++) {
      categoryIdArray.push(data[i].id.toString());
    }

    for (let categoryId of categoryIdArray) {
      cy.request({
        method: "DELETE",
        headers: {
          channel: "SAAS",
        },
        url: gadaConfig.inventory.baseApiUrl + "product-categories/delete",
        failOnStatusCode: false,
        body: {
          product_category_id: categoryId,
        },
      });
    }
  });
}

export function deleteBrandTestData() {
  // delete brand with brand name prefix web automation
  cy.request({
    method: "GET",
    url: gadaConfig.saas.baseApiUrl + "product/brand",
    failOnStatusCode: false,
    qs: {
      page: 1,
      page_size: 100,
      query: "web automation brand",
      store_id: gadaConfig.saas.testUserAccount.storeId,
    },
  }).then((resp) => {
    let data = resp.body.data;
    let brandIdArray: Array<string> = [];
    for (let i = 0; i < data.length; i++) {
      brandIdArray.push(data[i].id.toString());
    }

    for (let brandId of brandIdArray) {
      cy.request({
        method: "DELETE",
        headers: {
          channel: "SAAS",
        },
        url: gadaConfig.inventory.baseApiUrl + "brands/delete",
        failOnStatusCode: false,
        body: {
          brand_id: brandId,
        },
      });
    }
  });
}

export function deletePrincipalTestData() {
  // delete principal with brand name prefix web automation
  cy.request({
    method: "GET",
    url: gadaConfig.saas.baseApiUrl + "product/principal",
    failOnStatusCode: false,
    qs: {
      page: 1,
      page_size: 100,
      query: "web automation principal",
      store_id: gadaConfig.saas.testUserAccount.storeId,
    },
  }).then((resp) => {
    let data = resp.body.data;
    let principalIdArray: Array<string> = [];
    for (let i = 0; i < data.length; i++) {
      principalIdArray.push(data[i].id.toString());
    }

    for (let principalId of principalIdArray) {
      cy.request({
        method: "DELETE",
        headers: {
          channel: "SAAS",
        },
        url: gadaConfig.inventory.baseApiUrl + "principals/delete",
        failOnStatusCode: false,
        body: {
          principal_id: principalId,
        },
      });
    }
  });
}

export function deleteCustomerTestData() {
  // delete customer name prefix web automation
  cy.request({
    method: "GET",
    url: gadaConfig.saas.baseApiUrl + "customer",
    failOnStatusCode: false,
    qs: {
      page: 1,
      page_size: 100,
      keyword: "web automation customer",
      store_id: gadaConfig.saas.testUserAccount.storeId,
    },
  }).then((resp) => {
    let data = resp.body.data;
    let customerIdArray: Array<string> = [];
    for (let i = 0; i < data.length; i++) {
      customerIdArray.push(data[i].id.toString());
    }

    for (let customerId of customerIdArray) {
      cy.request({
        method: "DELETE",
        headers: {
          channel: "SAAS",
        },
        url:
          gadaConfig.saas.baseApiUrl +
          "customer" +
          "/" +
          customerId +
          "/" +
          gadaConfig.saas.testUserAccount.storeId,
        failOnStatusCode: false,
      });
    }
  });
}

export function deleteSeedInventoryData() {
  // delete custom inventories with prefix web automation
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "inventory/list",
    failOnStatusCode: false,
    body: {
      keyword: "web automation",
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
      cy.request({
        method: "DELETE",
        url:
          gadaConfig.saas.baseApiUrl +
          "product/variant/" +
          inventory +
          "/delete",
        failOnStatusCode: false,
        qs: {
          store_id: gadaConfig.saas.testUserAccount.storeId,
          variant_id: inventory,
        },
      });
    }
  });
  // delete inventory Onyx Sendok Nasi 8'5-7001 Official
  cy.request({
    method: "DELETE",
    url: gadaConfig.saas.baseApiUrl + "product/variant/" + 22277 + "/delete",
    failOnStatusCode: false,
    qs: {
      store_id: gadaConfig.saas.testUserAccount.storeId,
      variant_id: 22277,
    },
  });
  // delete inventory Hati Angsa Kecap Manis Sedang 600 ml
  cy.request({
    method: "DELETE",
    url: gadaConfig.saas.baseApiUrl + "product/variant/" + 22131 + "/delete",
    failOnStatusCode: false,
    qs: {
      store_id: gadaConfig.saas.testUserAccount.storeId,
      variant_id: 22131,
    },
  });
  // delete inventory Beras SLYP Medium Ramos Setra 50 Kg
  cy.request({
    method: "DELETE",
    url: gadaConfig.saas.baseApiUrl + "product/variant/" + 22157 + "/delete",
    failOnStatusCode: false,
    qs: {
      store_id: gadaConfig.saas.testUserAccount.storeId,
      variant_id: 22157,
    },
  });
}

export function createSeedCustomer() {
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "customer",
    failOnStatusCode: false,
    body: {
      phone_number: "81287730101",
      name: "Delete Pelanggan Automation",
      address: "Jalan Mawar 3",
      store_id: gadaConfig.saas.testUserAccount.storeId,
      top_duration: 0,
      cumulative_max_amount: 0,
      is_max_amount_active: false,
    },
  });
}

export function createSeedInventory({
  limitCustomInv = 4,
  limitCuratedInv = 2,
  limitCuratedInvUom = 2,
}: {
  limitCustomInv?: number;
  limitCuratedInv?: number;
  limitCuratedInvUom?: number;
} = {}) {
  const customInvs = [
    {
      display_name: null,
      product_information: {
        brand_id: null,
        consignor_id: null,
        product_category_id: 179,
        image: null,
      },
      product_name: "Web Automation Custom Inventory 1 - Single UOM",
      store_id: gadaConfig.saas.testUserAccount.storeId,
      stock_reminder: {
        stock_reminder_amount: 1,
        stock_reminder_uom_id: null,
      },
      inventories: [
        {
          uom_id: 5,
          sellable: {
            barcode: "840841001",
            online_selling: false,
            online_selling_minimum_order: 1,
            price_tier: [
              {
                minimum_quantity: 1,
                unit_price: 1000,
              },
            ],
          },
          stock: {
            available_stock: 100,
            price: 400,
          },
          conversion: {
            smaller_unit_of_measurement_id: null,
            multiplier_to_unit_of_measurement: null,
          },
        },
      ],
    },
    {
      display_name: null,
      product_information: {
        brand_id: null,
        consignor_id: null,
        product_category_id: 320,
        image: null,
      },
      product_name: "Web Automation Custom Inventory 2 (Multi UOM)",
      store_id: gadaConfig.saas.testUserAccount.storeId,
      stock_reminder: {
        stock_reminder_amount: 1,
        stock_reminder_uom_id: null,
      },
      inventories: [
        {
          uom_id: 5,
          sellable: {
            barcode: "840841001",
            online_selling: false,
            online_selling_minimum_order: 1,
            price_tier: [
              {
                minimum_quantity: 1,
                unit_price: 500,
              },
            ],
          },
          stock: {
            available_stock: 100,
            price: 300,
          },
          conversion: {
            smaller_unit_of_measurement_id: null,
            multiplier_to_unit_of_measurement: null,
          },
        },
        {
          uom_id: 2,
          sellable: {
            barcode: "840841002",
            online_selling: false,
            online_selling_minimum_order: 1,
            price_tier: [
              {
                minimum_quantity: 1,
                unit_price: 10000,
              },
            ],
          },
          stock: {
            available_stock: 50,
            price: 5400,
          },
          conversion: {
            smaller_unit_of_measurement_id: 5,
            multiplier_to_unit_of_measurement: 20,
          },
        },
      ],
    },
    {
      display_name: null,
      product_information: {
        brand_id: null,
        consignor_id: null,
        product_category_id: null,
        image: null,
      },
      product_name: "Web Automation Custom Inventory 3 (Jual Rugi)",
      store_id: gadaConfig.saas.testUserAccount.storeId,
      stock_reminder: {
        stock_reminder_amount: 1,
        stock_reminder_uom_id: null,
      },
      inventories: [
        {
          uom_id: 5,
          sellable: {
            barcode: "840841003",
            online_selling: false,
            online_selling_minimum_order: 1,
            price_tier: [
              {
                minimum_quantity: 1,
                unit_price: 4000,
              },
            ],
          },
          stock: {
            available_stock: 200,
            price: 10000,
          },
          conversion: {
            smaller_unit_of_measurement_id: null,
            multiplier_to_unit_of_measurement: null,
          },
        },
      ],
    },
    {
      display_name: null,
      product_information: {
        brand_id: null,
        consignor_id: 315,
        product_category_id: 320,
        image: null,
      },
      product_name: "Web Automation Custom Inventory 4 (Consign)",
      store_id: gadaConfig.saas.testUserAccount.storeId,
      stock_reminder: {
        stock_reminder_amount: 1,
        stock_reminder_uom_id: null,
      },
      inventories: [
        {
          uom_id: 5,
          sellable: {
            barcode: "840841005",
            online_selling: false,
            online_selling_minimum_order: 1,
            price_tier: [
              {
                minimum_quantity: 1,
                unit_price: 3500,
              },
            ],
          },
          stock: {
            available_stock: 50,
            price: 2000,
          },
          conversion: {
            smaller_unit_of_measurement_id: null,
            multiplier_to_unit_of_measurement: null,
          },
        },
        {
          uom_id: 4,
          sellable: {
            barcode: "840841004",
            online_selling: false,
            online_selling_minimum_order: 1,
            price_tier: [
              {
                minimum_quantity: 1,
                unit_price: 7000,
              },
            ],
          },
          stock: {
            available_stock: 50,
            price: 5000,
          },
          conversion: {
            smaller_unit_of_measurement_id: 5,
            multiplier_to_unit_of_measurement: 12,
          },
        },
      ],
    },
  ];

  for (let index = 0; index < limitCustomInv; index++) {
    const customInv = customInvs[index];

    cy.request({
      method: "POST",
      url: gadaConfig.saas.baseApiUrl + "inventory/custom",
      failOnStatusCode: false,
      body: customInv,
    });
  }

  const curatedInvs = [
    {
      consignor_id: null,
      conversion: [],
      display_name: null,
      product_variant_id: 22277, // Onyx Sendok Nasi 8'5-7001 Official
      store_id: gadaConfig.saas.testUserAccount.storeId,
      stock_reminder: {
        stock_reminder_amount: 1,
        stock_reminder_uom_id: null,
      },
      inventories: [
        {
          uom_id: 5,
          product_unit_id: 43469,
          sellable: {
            barcode: "840841005",
            minimum_sellable_online_quantity: 0,
            online_selling: false,
            online_selling_minimum_order: 1,
            price_tier: [
              {
                minimum_quantity: 1,
                unit_price: 40000,
              },
            ],
          },
          stock: {
            available_stock: 30,
            price: 20000,
          },
        },
        {
          uom_id: 2,
          product_unit_id: 43468,
          sellable: {
            barcode: "840841005",
            minimum_sellable_online_quantity: 0,
            online_selling: false,
            online_selling_minimum_order: 1,
            price_tier: [
              {
                minimum_quantity: 1,
                unit_price: 300000,
              },
            ],
          },
          stock: {
            available_stock: 20,
            price: 220000,
          },
        },
      ],
    },
    {
      consignor_id: 315,
      conversion: [],
      display_name: null,
      product_variant_id: 22131, // Hati Angsa Kecap Manis Sedang 600 ml
      store_id: gadaConfig.saas.testUserAccount.storeId,
      stock_reminder: {
        stock_reminder_amount: 1,
        stock_reminder_uom_id: null,
      },
      inventories: [
        {
          uom_id: 2,
          product_unit_id: 43308,
          sellable: {
            barcode: "840841007",
            minimum_sellable_online_quantity: 0,
            online_selling: false,
            online_selling_minimum_order: 1,
            price_tier: [
              {
                minimum_quantity: 1,
                unit_price: 18000,
              },
            ],
          },
          stock: {
            available_stock: 10,
            price: 12000,
          },
        },
      ],
    },
  ];

  for (let index = 0; index < limitCuratedInv; index++) {
    const curatedInv = curatedInvs[index];
    const uoms = curatedInv.inventories.filter(
      (_, index) => index < limitCuratedInvUom
    );

    cy.request({
      method: "POST",
      url: gadaConfig.saas.baseApiUrl + "inventory",
      failOnStatusCode: false,
      body: { ...curatedInv, inventories: uoms },
    });
  }
}

export function setDefaultTaxAndCustomerDebtSettings() {
  cy.request({
    method: "PATCH",
    url: gadaConfig.saas.baseApiUrl + "store/setting",
    body: {
      is_tax_active: true,
      is_tax_after_discount: false,
      is_tax_include_in_price: true,
      tax_percentage_amount: "10",
      store_id: gadaConfig.saas.testUserAccount.storeId,
      duration: 7,
      cumulative_max_amount: 0,
      invoice_max_amount: 0,
      is_max_amount_active: false,
      is_allow_multiple_top: false,
    },
  });
}

export function setCustomTaxSettings(
  taxType: string,
  taxBeforeDiscount: string,
  taxAmount: string
) {
  let taxTypeRes = false;
  let taxBeforeDiscountRes = true;
  if (taxType.toLowerCase() === "excluded") {
    taxTypeRes = false;
  } else if (taxType.toLowerCase() === "included") {
    taxTypeRes = true;
  }

  if (taxBeforeDiscount.toLowerCase() === "before discount") {
    taxBeforeDiscountRes = false;
  } else if (taxBeforeDiscount.toLowerCase() === "after discount") {
    taxBeforeDiscountRes = true;
  }

  cy.request({
    method: "PATCH",
    url: gadaConfig.saas.baseApiUrl + "store/setting",
    body: {
      is_tax_active: true,
      is_tax_after_discount: taxBeforeDiscountRes,
      is_tax_include_in_price: taxTypeRes,
      tax_percentage_amount: taxAmount,
      store_id: gadaConfig.saas.testUserAccount.storeId,
      duration: 7,
      cumulative_max_amount: 0,
      invoice_max_amount: 0,
      is_max_amount_active: false,
      is_allow_multiple_top: false,
    },
  });
}

export function setDefaultRefundSettings() {
  cy.request({
    method: "PUT",
    url: gadaConfig.saas.baseApiUrl + "refund/config",
    body: {
      store_id: gadaConfig.saas.testUserAccount.storeId,
      is_active: true,
      max_refund_range: 30,
    },
  });
}

export function unlinkStore() {
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "store/unlink",
    failOnStatusCode: false,
    body: {
      store_id: gadaConfig.saas.testUserAccount.storeId,
    },
  });
}

export function deleteBankAccount() {
  cy.request({
    method: "GET",
    url: gadaConfig.saas.baseApiUrl + "user/userinfo",
  }).then((resp) => {
    let bankAccountId = "";
    for (let i = 0; i < resp.body.data.user_store_list.length; i++) {
      if (
        resp.body.data.user_store_list[i].store_id ===
        gadaConfig.saas.testUserAccount.storeId
      ) {
        if (
          resp.body.data.user_store_list[i].store_bank_account_list.length > 0
        ) {
          for (
            let j = 0;
            j <
            resp.body.data.user_store_list[i].store_bank_account_list.length;
            j++
          ) {
            bankAccountId =
              resp.body.data.user_store_list[i].store_bank_account_list[j]
                .bank_account_id;
            cy.request({
              method: "DELETE",
              url: gadaConfig.saas.baseApiUrl + "store/bank/" + bankAccountId,
              qs: {
                bank_account_id: bankAccountId,
              },
            });
          }
        }
      }
    }

    let result = resp.body.data.user_info;
    cy.wrap(result).as("userInfo");
  });
}

export function retrieveUomId(uomName: string) {
  cy.wait(750);
  cy.request({
    method: "GET",
    url: gadaConfig.saas.baseApiUrl + "product/uom",
    qs: {
      page_size: 100,
      page: 1,
      query: uomName,
      store_id: gadaConfig.saas.testUserAccount.storeId,
    },
  }).then((resp) => {
    let uomId = resp.body.data[0].id;
    cy.wrap(uomId.toString()).as("uomId");
  });
}

export function retrieveSalesEmployeeId(salesName: string) {
  cy.request({
    method: "GET",
    url: gadaConfig.saas.baseApiUrl + "employee",
    qs: {
      page_size: 30,
      page: 1,
      query: salesName,
      store_id: gadaConfig.saas.testUserAccount.storeId,
    },
  }).then((resp) => {
    let data = resp.body.data;
    let salesId = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].name.toLowerCase() === salesName.toLowerCase()) {
        salesId = data[i].id;
      }
    }
    cy.wrap(salesId.toString()).as("salesId");
  });
}

export function retrieveBankAccountId(
  bankName: string,
  bankAccountNumber: string
) {
  cy.request({
    method: "GET",
    url: gadaConfig.saas.baseApiUrl + "user/userinfo",
  }).then((resp) => {
    let bankAccountId = "";
    let bankAccountList =
      resp.body.data.user_store_list[0].store_bank_account_list;
    for (let i = 0; i < bankAccountList.length; i++) {
      if (
        bankAccountList[i].bank.name.toLowerCase() === bankName &&
        bankAccountList[i].bank_account_number === bankAccountNumber
      ) {
        bankAccountId = bankAccountList[i].bank_account_id;
      }
    }
    cy.wrap(bankAccountId).as("bankAccountId");
  });
}

export function retrieveSupplierId(supplierName: string) {
  cy.request({
    method: "GET",
    url: gadaConfig.saas.baseApiUrl + "consignor",
    qs: {
      page_size: 30,
      page: 1,
      query: supplierName,
      store_id: gadaConfig.saas.testUserAccount.storeId,
    },
  }).then((resp) => {
    let supplierId = resp.body.data[0].id;
    cy.wrap(supplierId.toString()).as("supplierId");
  });
}

export function retrieveProductVariantId(query: string) {
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "inventory/list",
    body: {
      keyword: query,
      page_size: 30,
      page: 1,
      store_id: gadaConfig.saas.testUserAccount.storeId,
      include_delete: false,
      sort_by: "RECENTLY_MODIFIED",
      sort_type: "asc",
      exclude_empty_price_tiers: false,
    },
  }).then((resp) => {
    let supplierId = resp.body.data[0].product_variant_id;
    cy.wrap(supplierId.toString()).as("productVariantId");
  });
}

export function retrieveInventoryId(
  productVariantName: string,
  uomName: string
) {
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "inventory/list",
    body: {
      keyword: productVariantName,
      page_size: 30,
      page: 1,
      store_id: gadaConfig.saas.testUserAccount.storeId,
      include_delete: false,
      sort_by: "RECENTLY_MODIFIED",
      sort_type: "asc",
      exclude_empty_price_tiers: false,
    },
  }).then((resp) => {
    let listResp = resp.body;
    cy.request({
      method: "GET",
      url: gadaConfig.saas.baseApiUrl + "product/uom",
      qs: {
        page_size: 100,
        page: 1,
        query: uomName,
        store_id: gadaConfig.saas.testUserAccount.storeId,
      },
    }).then((resp) => {
      let inventoryId = "";
      let uomId = resp.body.data[0].id;
      for (let i = 0; i < listResp.data.length; i++) {
        if (
          listResp.data[i].product_variant_name.toLowerCase() ===
          productVariantName.toLowerCase()
        ) {
          for (let j = 0; j < listResp.data[i].inventories.length; j++) {
            if (
              listResp.data[i].inventories[
                j
              ].unit_of_measurement.id.toString() === uomId.toString()
            ) {
              inventoryId = listResp.data[i].inventories[j].inventory_id;
              cy.wrap(inventoryId.toString()).as("inventoryId");
            }
          }
        }
      }
    });
  });
}

export function retrieveUserInfo() {
  cy.request({
    method: "GET",
    url: gadaConfig.saas.baseApiUrl + "user/userinfo",
  }).then((resp) => {
    let result = resp.body.data.user_info;
    cy.wrap(result).as("userInfo");
  });
}

export function retrieveCustomerId(customerName: string) {
  cy.request({
    method: "GET",
    url: gadaConfig.saas.baseApiUrl + "customer",
    qs: {
      keyword: customerName,
      page_size: 30,
      page: 1,
      store_id: gadaConfig.saas.testUserAccount.storeId,
    },
  }).then((resp) => {
    let result = resp.body.data[0].id;
    cy.wrap(result).as("customerId");
  });
}

export function retrieveStoreId(storeName: string) {
  cy.request({
    method: "GET",
    url: gadaConfig.saas.baseApiUrl + "user/userinfo",
  }).then((resp) => {
    let data = resp.body.data.user_store_list;
    let storeId = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].store_name.toLowerCase() === storeName.toLowerCase()) {
        storeId = data[i].store_id.toString();
      }
    }
    cy.wrap(storeId.toString()).as("storeId");
  });
}

export function retrieveMarketplaceStoreId(storeName: string) {
  cy.request({
    method: "GET",
    url: gadaConfig.saas.baseApiUrl + "store/marketplace",
  }).then((resp) => {
    let data = resp.body.data;
    let marketplaceStoreId = "";
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].marketplace_store_name.toLowerCase() === storeName.toLowerCase()
      ) {
        marketplaceStoreId = data[i].marketplace_store_id.toString();
      }
    }
    cy.wrap(marketplaceStoreId.toString()).as("marketplaceStoreId");
  });
}

export function createOrder(
  orderObjectArray: {
    productVariantName: string;
    uomName: string;
    quantity: string;
  }[],
  payAmount: string,
  paymentType: string
) {
  // create new cart
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "api/cart",
    body: {
      store_id: gadaConfig.saas.testUserAccount.storeId,
      cashier_id: gadaConfig.saas.testUserAccount.userId,
    },
  }).then((resp) => {
    let cartId = resp.body.data.id;
    cy.wrap(cartId.toString()).as("cartId");

    // put item(s) to cart
    for (let i = 0; i < orderObjectArray.length; i++) {
      retrieveInventoryId(
        orderObjectArray[i].productVariantName,
        orderObjectArray[i].uomName
      );
      cy.get("@inventoryId").then((inventoryId: any) => {
        cy.request({
          method: "PUT",
          url: gadaConfig.saas.baseApiUrl + "cart/item",
          body: {
            store_id: gadaConfig.saas.testUserAccount.storeId,
            cart_id: cartId,
            inventory_id: inventoryId,
            quantity: orderObjectArray[i].quantity,
          },
        });
      });
    }

    // checkout cart
    cy.request({
      method: "POST",
      url: gadaConfig.saas.baseApiUrl + "cart/checkout",
      body: {
        store_id: gadaConfig.saas.testUserAccount.storeId,
        cart_id: cartId,
      },
    });

    // payment
    cy.request({
      method: "POST",
      url: gadaConfig.saas.baseApiUrl + "order",
      body: {
        store_id: gadaConfig.saas.testUserAccount.storeId,
        cart_id: cartId,
        amount: payAmount,
        currency: "IDR",
        customer_id: null,
        sales_person_id: null,
        payment_type: paymentType,
        store_bank_account_id: null,
      },
    });
  });
}

export function generateRandomNumber() {
  let random = Math.floor(100000000 + Math.random() * 900000000);
  return "8" + random + "";
}

export function generateInvoiceNumber() {
  let random = Math.floor(100000000 + Math.random() * 900000000);
  return "INV-5" + random + "";
}

export function generateCurrentDateOTP() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  return mm + dd;
}

export function generateRandomString(length: number) {
  let result = "";
  let characters = "abcdefghijklmnopqrstuvwxyz";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function convertOrdinalToCardinalNumber(input: any) {
  input = input.substring(0, input.length - 2);
  input = parseInt(input) - 1;

  return input.toString();
}

export function numberWithSeparators(input: any) {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function deleteSupplierTestData() {
  cy.request({
    method: "GET",
    url: gadaConfig.saas.baseApiUrl + "consignor",
    failOnStatusCode: false,
    qs: {
      page: 1,
      page_size: 100,
      name: "Web Automation Test Supplier",
      store_id: gadaConfig.saas.testUserAccount.storeId,
      sort_by: "NAME",
      sort_type: "asc",
    },
  }).then((resp) => {
    const data = resp.body.data;
    const supplierIds: string[] = [];

    for (let i = 0; i < data.length; i++) {
      supplierIds.push(data[i].id.toString());
    }

    for (let supplierId of supplierIds) {
      cy.request({
        method: "DELETE",
        url: gadaConfig.saas.baseApiUrl + "consignor/" + supplierId,
        failOnStatusCode: false,
        qs: {
          store_id: gadaConfig.saas.testUserAccount.storeId,
        },
      });
    }
  });

  cy.reload(true);
}

export const convertNameToId = (name?: string): string => {
  return (
    name
      ?.trim()
      .toLowerCase()
      .replace(/[ '()]/g, "_") || ""
  );
};
