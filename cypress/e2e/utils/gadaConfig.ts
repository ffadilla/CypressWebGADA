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
    users: {
      [userRole: string]: {
        username: string;
        userImage: string;
        userEmail: string;
        authToken: string;
        userRole: string;
        userPermissions: [string];
      };
    };
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
