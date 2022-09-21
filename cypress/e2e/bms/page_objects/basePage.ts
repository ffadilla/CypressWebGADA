import gadaConfig from "../../utils/gadaConfig";

export default class BasePage {
  baseURL = gadaConfig.bms.baseUrl;
  snackBarAlert = ".SnackbarContent-root";
  text = ".MuiTypography-root";
  accountSettingsButton = "button[aria-label='Account settings']";
  logoutButton = ".MuiMenuItem-root:contains('Logout')";
  bmsText = ".MuiTypography-root";
  menuButton = ".MuiListItemButton-root";

  visitPage(path: string) {
    cy.visit(this.baseURL + path);
  }

  openPage(selector: string, menu: string, subMenu: string) {
    if (Cypress.$(selector + ` .isOpen:contains('${menu}')`).length > 0) {
      cy.contains(selector, subMenu);
    } else {
      cy.contains(selector, menu);
      cy.contains(selector, subMenu);
    }
  }

  assertValueIsNotEmpty(selector: string, field: string, index: number = 0) {
    cy.get(selector)
      .eq(index)
      .invoke("val")
      .should("not.be.empty")
      .then((value: any) => {
        return cy.wrap(value).as(field);
      });
  }

  assertValueEqualTo(
    selector: string,
    value: string | number,
    index: number = 0
  ) {
    cy.get(selector).eq(index).invoke("val").should("eq", value);
  }

  assertTextContains(selector: string, message: string, index: number = 0) {
    cy.contains(selector, message).eq(index).should("be.visible");
  }
}
