import gadaConfig, { warehousePlatforms } from "../../utils/gadaConfig";

export class ConfigData {
  baseUrl: any;
  accountData: any;
  warehouseData: any;

  constructor(type: warehousePlatforms) {
    this.baseUrl = gadaConfig.warehouse[type].baseUrl;
    this.accountData = gadaConfig.warehouse[type].accounts;
    this.warehouseData = gadaConfig.warehouse[type].warehouses;
  }
}

let inbound = {
  source: {
    hasCompletedRequest: false,
  },
};

export function setHasCompletedRequest(status: boolean) {
  inbound.source.hasCompletedRequest = status;
}

export function hasCompletedRequest(): boolean {
  return inbound.source.hasCompletedRequest;
}
