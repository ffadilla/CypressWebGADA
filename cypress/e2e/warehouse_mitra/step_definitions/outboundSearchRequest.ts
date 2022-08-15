import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
// import DashboardPage from "../../../e2e/warehouse_mitra/page_objects/dashboardPage";
// import LoginPage from "../../../e2e/warehouse_mitra/page_objects/loginPage";
import OutboundRequestListPage from "../../../e2e/warehouse_mitra/page_objects/outboundRequestListPage";

// const loginPage = new LoginPage();
const outboundRequestListPage = new OutboundRequestListPage();
// const dashboardPage = new DashboardPage();

// before(() => {
//   loginPage.silentLogin();
// });

Given("Mitra - user is in menu Barang Keluar", () => {
  outboundRequestListPage.selectMenuOutbound();
});

When("Mitra - user inputs requestId {string}", (value: string) => {
  outboundRequestListPage.searchRequest(value);
});

When("Mitra - user sorts it by {string}", (value: string) => {
  outboundRequestListPage.clickTab(value);
});

Then("Mitra - show valid search result {string}", (value: string) => {
  cy.get(outboundRequestListPage.firstIndexData).should("contain.text", value);
});

Then("Mitra - show invalid search result {string}", (value: string) => {
  cy.xpath(outboundRequestListPage.notFoundMsg).should("contain.text", value);
});

Then("Mitra - show sorted result with status {string}", (value: string) => {
  cy.get(outboundRequestListPage.requestStatus)
    .invoke("text")
    .should("eql", value);
});

// after(() => {
//   dashboardPage.logout();
// });
