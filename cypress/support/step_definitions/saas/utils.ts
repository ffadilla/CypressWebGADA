import * as uomIdMap from "../../resources/saas/development-uomNameToIdMapping.json";
import gadaConfig from "../../../e2e/utils/gadaConfig";

const uomObj = uomIdMap.data;

Cypress.Commands.add("login", (phoneNumber: string): any => {
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

Cypress.Commands.add("logout", (): any => {
  cy.request({
    method: "POST",
    url: gadaConfig.saas.baseApiUrl + "authentication/logout",
    body: {},
  });
});

export function retrieveUomId(uomName: string) {
  for (let i = 0; i < uomObj.length; i++) {
    if (uomObj[i].long_name === uomName) {
      return uomObj[i].id;
    }
  }
  return "";
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
