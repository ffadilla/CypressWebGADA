import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import DashboardPage from "../../../e2e/warehouse_mitra/page_objects/dashboardPage";
import LoginPage from "../../../e2e/warehouse_mitra/page_objects/loginPage";
import OutboundRequestListPage from "../../../e2e/warehouse_mitra/page_objects/outboundRequestListPage";

const loginPage = new LoginPage();
const outboundRequestListPage = new OutboundRequestListPage();
const dashboardPage = new DashboardPage();

Given("Mitra - user is already logged in", () => {
  loginPage.silentLogin();
});

And("Mitra - user is in menu Barang Keluar", () => {
  outboundRequestListPage.selectMenuOutbound();
});

When("Mitra - user inputs requestId {string}", (value: string) => {
  outboundRequestListPage.searchRequest(value);
});

When("Mitra - user sorts outbound requests by {string}", (value: string) => {
  outboundRequestListPage.selectStatus(value);
});

When("Mitra - user inputs shipmentId {string}", (value: string) => {
  outboundRequestListPage.selectShipment();
  outboundRequestListPage.searchRequest(value);
});

When("Mitra - user sorts outbound shipments by {string}", (value: string) => {
  outboundRequestListPage.selectShipment();
  outboundRequestListPage.selectStatus(value);
});

When("Mitra - user is on Dashboard page", () => {
  dashboardPage.visitDashboard();
});

Then("Mitra - show valid requestId search result {string}", (value: string) => {
  cy.get(outboundRequestListPage.firstIndexReqData).should(
    "contain.text",
    value
  );
});

Then(
  "Mitra - show valid shipmentId search result {string}",
  (value: string) => {
    cy.get(outboundRequestListPage.firstIndexShipData).should(
      "contain.text",
      value
    );
  }
);

Then(
  "Mitra - show invalid requestId search result {string}",
  (value: string) => {
    cy.xpath(outboundRequestListPage.notFoundMsg).should("contain.text", value);
  }
);

Then(
  "Mitra - show invalid shipmentId search result {string}",
  (value: string) => {
    cy.xpath(outboundRequestListPage.notFoundMsg).should("contain.text", value);
  }
);

Then(
  "Mitra - show sorted outbound requests result with status {string}",
  (value: string) => {
    cy.get(outboundRequestListPage.requestStatus).should("contain.text", value);
  }
);

Then(
  "Mitra - show sorted outbound shipments result with status {string}",
  (value: string) => {
    cy.xpath(outboundRequestListPage.shipmentStatus).should(
      "contain.text",
      value
    );
  }
);

Then("Mitra - user logs out", () => {
  dashboardPage.logout();
});
