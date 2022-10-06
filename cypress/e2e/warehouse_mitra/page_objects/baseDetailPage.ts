import BasePage from "./basePage";

export default class BaseDetailPage extends BasePage {
  attachmentKebabButton = '[data-testid="MoreVertIcon"]';
  popoverContainer = ".MuiPopover-paper";
  popoverItem = 'li[role="menuitem"]';

  downloadAttachment(fieldXPath: string, downloadAPI: string) {
    cy.xpath(fieldXPath)
      .click({ force: true })
      .within(() => {
        cy.get(this.attachmentKebabButton).click({ force: true });
      });
    cy.intercept("GET", downloadAPI).as("downloadAttachmentAPI");
    cy.get("body")
      .find(this.popoverContainer)
      .last()
      .find(this.popoverItem)
      .contains("Unduh")
      .click()
      .wait("@downloadAttachmentAPI")
      .then((API) => {
        expect(cy.wrap(API.response?.statusCode).should("equal", 200));
      });
  }
}
