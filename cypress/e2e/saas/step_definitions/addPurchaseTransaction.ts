import { Then } from "@badeball/cypress-cucumber-preprocessor";
import AddPurchaseTransactionPage from "../page_objects/addPurchaseTransactionPage";

const addPurchaseTransactionPage = new AddPurchaseTransactionPage();

Then("user is redirected to add purchase transaction page", () => {
  cy.url().should("eq", addPurchaseTransactionPage.baseUrl + "purchase/add");
});
