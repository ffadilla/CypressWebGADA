import gadaConfig from "../../utils/gadaConfig";

export default class BaseCommads {
  baseURL = gadaConfig.bms.baseUrl;

  navigate(path: string) {
    cy.visit(this.baseURL + path);
  }

  typeString(selector: string, input: string, index: number = 0) {
    cy.get(selector).eq(index).type(input);
  }

  typeNumber(selector: string, input: number, index: number = 0) {
    cy.get(selector)
      .eq(index)
      .type(input + "");
  }

  clickButton(selector: string, index: number = 0) {
    cy.get(selector).eq(index).click({ force: true });
  }

  click(selector: string, index: number = 0) {
    cy.get(selector).eq(index).click({ force: true });
  }

  selectOption(selector: string, input: string, index: number = 0) {
    cy.get(selector + `:contains('${input}')`)
      .eq(index)
      .click();
  }

  selectRadioButton(selector: string, input: string, index: number = 0) {
    cy.get(selector + `[value='${input}']`)
      .eq(index)
      .click();
  }

  selectCheckbox(selector: string, input: string, index: number = 0) {
    cy.get(selector + `:contains('${input}')`)
      .eq(index)
      .click();
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
    cy.get(selector + `:contains('${message}')`)
      .eq(index)
      .should("be.visible");
  }
}
