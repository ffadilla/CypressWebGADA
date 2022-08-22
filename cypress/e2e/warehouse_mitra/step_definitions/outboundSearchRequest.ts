import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import DashboardPage from "../../../e2e/warehouse_mitra/page_objects/dashboardPage";
import LoginPage from "../../../e2e/warehouse_mitra/page_objects/loginPage";
import OutboundRequestListPage from "../../../e2e/warehouse_mitra/page_objects/outboundRequestListPage";

const loginPage = new LoginPage();
const outboundRequestListPage = new OutboundRequestListPage();
const dashboardPage = new DashboardPage();

Given("user is already logged in", () => {
  loginPage.silentLogin();
});

And("user is in menu Barang Keluar", () => {
  outboundRequestListPage.selectMenuOutbound();
});

When("user inputs requestId {string}", (value: string) => {
  outboundRequestListPage.searchRequest(value);
});

When("user sorts outbound requests by {string}", (value: string) => {
  outboundRequestListPage.selectStatus(value);
});

When("user inputs shipmentId {string}", (value: string) => {
  outboundRequestListPage.selectShipment();
  outboundRequestListPage.searchRequest(value);
});

When("user sorts outbound shipments by {string}", (value: string) => {
  outboundRequestListPage.selectShipment();
  outboundRequestListPage.selectStatus(value);
});

When("user is on Dashboard page", () => {
  dashboardPage.visitDashboard();
});

Then("show valid requestId search result {string}", (value: string) => {
  cy.get(outboundRequestListPage.firstIndexReqData).should(
    "contain.text",
    value
  );
});

Then("show valid shipmentId search result {string}", (value: string) => {
  cy.get(outboundRequestListPage.firstIndexShipData).should(
    "contain.text",
    value
  );
});

Then("show invalid requestId search result {string}", (value: string) => {
  cy.xpath(outboundRequestListPage.xpathNotFoundMsg).should(
    "contain.text",
    value
  );
});

Then("show invalid shipmentId search result {string}", (value: string) => {
  cy.xpath(outboundRequestListPage.xpathNotFoundMsg).should(
    "contain.text",
    value
  );
});

Then(
  "show sorted outbound requests result with status {string}",
  (value: string) => {
    cy.get(outboundRequestListPage.requestStatus).should("contain.text", value);
  }
);

Then(
  "show sorted outbound shipments result with status {string}",
  (value: string) => {
    cy.xpath(outboundRequestListPage.xpathShipmentStatus).should(
      "contain.text",
      value
    );
  }
);

Then("user logs out", () => {
  dashboardPage.logout();
});
