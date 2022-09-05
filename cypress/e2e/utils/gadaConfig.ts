type config = {
  google: {
    baseUrl: string;
  };
  saas: {
    baseUrl: string;
    baseApiUrl: string;
  };
  bms: {
    baseUrl: string;
  };
  warehouseMitra: {
    baseUrl: string;
  };
};

export default Cypress.config() as unknown as config;
