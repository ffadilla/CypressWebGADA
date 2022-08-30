import gadaConfig from "../../../e2e/utils/gadaConfig";
import * as saasConfig from "../resources/development-saas.json";

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
