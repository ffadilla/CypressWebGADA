import BasePage from "./basePage";

export default class DashboardPage extends BasePage {
  path = "dashboard";
  logoutDropdown =
    "svg[class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-sox1i7']";
  logoutButton =
    "li[class='MuiMenuItem-root MuiMenuItem-gutters MuiButtonBase-root css-1k5yatp']";

  logout() {
    cy.get(this.logoutDropdown).click();
    cy.get(this.logoutButton).click();
  }
}
