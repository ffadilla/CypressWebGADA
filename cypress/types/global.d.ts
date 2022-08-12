export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      randomNumber(length: number): Chainable<Element>;
      numberFormat(number: number): Chainable<Element>;
      // SAAS
      saasLogin(phoneNumber: string): Chainable<Element>;
    }
  }
}
