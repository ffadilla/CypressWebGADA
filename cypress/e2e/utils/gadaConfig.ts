type config = {
  google: {
    baseUrl: string;
  };
  saas: {
    baseUrl: string;
    baseApiUrl: string;
  };
  inventory: {
    baseApiUrl: string;
  };
  bms: {
    baseUrl: string;
  };
  warehouseMitra: {
    baseUrl: string;
    accounts: {
      [accountRole: string]: {
        email: string;
        password: string;
      };
    };
  };
};

export default Cypress.config() as unknown as config;
