export default class StatusChip {
  chipContainer = "#chips-container";

  clickStatusChip(status: string) {
    cy.get(this.chipContainer).contains(status).click();
  }
}
