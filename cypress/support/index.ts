// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// TODO: change any
import "cypress-xpath";
import gadaConfig from "../e2e/utils/gadaConfig";
import { generateCurrentDateOTP } from "../e2e/saas/step_definitions/utils";

// SAAS Custom Commands

Cypress.Commands.add("saasLogin", (phoneNumber: string): any => {
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "authentication/otp/start",
    body: {
      client_id: "zfS2K2_mgXnevZt0rO1No1OQm-8zZWbwwIuO",
      otp_type: "WHATSAPP",
      verification_type: "LOGIN",
      phone_number: phoneNumber,
    },
  });
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "authentication/oauth/token",
    body: {
      audience: "https://gudangada.com/saas-api",
      client_id: "zfS2K2_mgXnevZt0rO1No1OQm-8zZWbwwIuO",
      otp_type: "WHATSAPP",
      otp_code: generateCurrentDateOTP(),
      verification_type: "LOGIN",
      phone_number: phoneNumber,
    },
  }).then((resp) => {
    window.localStorage.setItem("AUTH_TOKEN", resp.body.data.access_token);
    window.localStorage.setItem("IS_LOGGED_IN", "true");
  });
});
