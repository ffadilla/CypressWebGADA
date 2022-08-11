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
};

export default Cypress.config() as unknown as config;
