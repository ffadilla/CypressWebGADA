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
      login(phoneNumber: string): Chainable<Element>;
      logout(): Chainable<Element>;
    }
  }
}
