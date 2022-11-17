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
