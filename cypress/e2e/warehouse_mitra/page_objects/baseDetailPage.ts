import { interceptAPI } from "../../warehouse_core/common/utils";
import MainPage from "../../warehouse_core/page_objects/mainPage";

export default class BaseDetailPage extends MainPage {
  attachmentKebabButton = '[data-testid="MoreVertIcon"]';
  popoverContainer = ".MuiPopover-paper";
  popoverItem = 'li[role="menuitem"]';

  downloadAttachment(fieldXPath: string, downloadAPI: string) {
    cy.xpath(fieldXPath)
      .click({ force: true })
      .within(() => {
        cy.get(this.attachmentKebabButton).click({ force: true });
      });
    interceptAPI("GET", downloadAPI, "downloadAttachmentAPI");
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
