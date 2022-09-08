import gadaConfig from "../../../e2e/utils/gadaConfig";
import * as saasConfig from "../resources/development-saas.json";

export function deleteSeedInventoryData() {
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
      store_id: saasConfig.saasAutomationUser1StoreStoreId,
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
          store_id: saasConfig.saasAutomationUser1StoreStoreId,
          variant_id: inventory,
        },
      });
    }
  });

  cy.request({
    method: "DELETE",
    url: gadaConfig.saas.baseApiUrl + "product/variant/" + 22277 + "/delete",
    failOnStatusCode: false,
    qs: {
      store_id: saasConfig.saasAutomationUser1StoreStoreId,
      variant_id: 22277,
    },
  });
  cy.request({
    method: "DELETE",
    url: gadaConfig.saas.baseApiUrl + "product/variant/" + 22131 + "/delete",
    failOnStatusCode: false,
    qs: {
      store_id: saasConfig.saasAutomationUser1StoreStoreId,
      variant_id: 22131,
    },
  });
  cy.request({
    method: "DELETE",
    url: gadaConfig.saas.baseApiUrl + "product/variant/" + 22157 + "/delete",
    failOnStatusCode: false,
    qs: {
      store_id: saasConfig.saasAutomationUser1StoreStoreId,
      variant_id: 22157,
    },
  });
}

export function createSeedInventory() {
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "inventory/custom",
    failOnStatusCode: false,
    body: {
      display_name: null,
      product_information: {
        brand_id: null,
        consignor_id: null,
        product_category_id: 179,
        image: null,
      },
      product_name: "Web Automation Custom Inventory 1 (Single UOM)",
      store_id: saasConfig.saasAutomationUser1StoreStoreId,
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
  });
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "inventory/custom",
    failOnStatusCode: false,
    body: {
      display_name: null,
      product_information: {
        brand_id: null,
        consignor_id: null,
        product_category_id: 320,
        image: null,
      },
      product_name: "Web Automation Custom Inventory 2 (Multi UOM)",
      store_id: saasConfig.saasAutomationUser1StoreStoreId,
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
  });
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "inventory/custom",
    failOnStatusCode: false,
    body: {
      display_name: null,
      product_information: {
        brand_id: null,
        consignor_id: null,
        product_category_id: 179,
        image: null,
      },
      product_name: "Web Automation Custom Inventory 3 (Jual Rugi)",
      store_id: saasConfig.saasAutomationUser1StoreStoreId,
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
  });
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "inventory/custom",
    failOnStatusCode: false,
    body: {
      display_name: null,
      product_information: {
        brand_id: null,
        consignor_id: 315,
        product_category_id: 320,
        image: null,
      },
      product_name: "Web Automation Custom Inventory 4 (Consign)",
      store_id: saasConfig.saasAutomationUser1StoreStoreId,
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
  });
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "inventory",
    failOnStatusCode: false,
    body: {
      consignor_id: null,
      conversion: [],
      display_name: null,
      product_variant_id: 22277,
      store_id: saasConfig.saasAutomationUser1StoreStoreId,
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
  });
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "inventory",
    failOnStatusCode: false,
    body: {
      consignor_id: 315,
      conversion: [],
      display_name: null,
      product_variant_id: 22131,
      store_id: saasConfig.saasAutomationUser1StoreStoreId,
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
      store_id: saasConfig.saasAutomationUser1StoreStoreId,
    },
  }).then((resp) => {
    let uomId = resp.body.data[0].id;
    cy.wrap(uomId.toString()).as("uomId");
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
      store_id: saasConfig.saasAutomationUser1StoreStoreId,
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
      store_id: saasConfig.saasAutomationUser1StoreStoreId,
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

export function generateRandomNumber() {
  let random = Math.floor(100000000 + Math.random() * 900000000);
  return "8" + random + "";
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
