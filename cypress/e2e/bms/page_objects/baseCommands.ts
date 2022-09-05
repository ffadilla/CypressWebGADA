import gadaConfig from "../../utils/gadaConfig";

export default class BaseCommands {
  baseURL = gadaConfig.bms.baseUrl;

  visitPage(path: string) {
    cy.visit(this.baseURL + path);
  }

  click(selector: string, index: number = 0) {
    cy.get(selector).eq(index).click({ force: true });
  }

  openPage(selector: string, menu: string, subMenu: string) {
    if (Cypress.$(selector + ` .isOpen:contains('${menu}')`).length > 0) {
      this.click(selector + `:contains('${subMenu}')`);
    } else {
      this.click(selector + `:contains('${menu}')`);
      this.click(selector + `:contains('${subMenu}')`);
    }
  }

  typeString(selector: string, input: string, index: number = 0) {
    cy.get(selector).eq(index).type(input);
  }

  typeNumber(selector: string, input: number, index: number = 0) {
    cy.get(selector)
      .eq(index)
      .type(input + "");
  }

  selectOption(selector: string, input: string, index: number = 0) {
    cy.contains(selector, input).eq(index).click();
  }

  selectRadioButton(selector: string, input: string, index: number = 0) {
    cy.get(selector + `[value='${input}']`)
      .eq(index)
      .click();
  }

  selectCheckbox(selector: string, input: string, index: number = 0) {
    cy.contains(selector, input).eq(index).click();
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
