export type wmsType = "dc" | "mitra";
export class wmsAccount {
  [accountRole: string]: {
    email: string;
    password: string;
  };
}
export class wmsWarehouse {
  [warehouseName: string]: {
    warehouseCode: string;
    warehouseUUID: string;
    stores: [
      {
        storeName: string;
        storeCode: string;
        storeUUID: string;
      }
    ];
  };
}

type config = {
  google: {
    baseUrl: string;
  };
  saas: {
    baseUrl: string;
    baseApiUrl: string;
    testUserAccount: {
      phoneNumber: string;
      canonicalId: string;
      storeId: string;
      userId: string;
    };
  };
  inventory: {
    baseApiUrl: string;
  };
  bms: {
    baseUrl: string;
  };
  warehouse: {
    [key in wmsType]: {
      baseUrl: string;
      accounts: wmsAccount;
      warehouses: wmsWarehouse;
    };
  };
};

export default Cypress.config() as unknown as config;
