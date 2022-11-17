export type warehousePlatforms = "dc" | "mitra";

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
    [key in warehousePlatforms]: {
      baseUrl: string;
      accounts: {
        [accountRole: string]: {
          email: string;
          password: string;
        };
      };
      warehouses: {
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
      };
    };
  };
};

export default Cypress.config() as unknown as config;
