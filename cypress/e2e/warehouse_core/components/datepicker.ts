import { generateDateTime } from "../../warehouse_mitra/common/utils";

export default class Datepicker {
  dateQueryBaseFormat = "" + generateDateTime(0, "YYYY-MM-");

  datepickerItem = 'button[role="gridcell"]';
  monthpickerItem = "button.PrivatePickersMonth-root";
  yearpickerItem = "button.PrivatePickersYear-yearButton";
  currentDateItem = "button[aria-current=date]";
  button = "button";

  setDateOnly(element: string, date: string) {
    cy.get(element).click();
    switch (date) {
      case "today":
        cy.get(this.currentDateItem).click();
        break;
      default:
        cy.contains(this.datepickerItem, parseInt(date)).click();
    }
    cy.contains(this.button, "OK").click({ force: true });
  }

  setDatepicker(element: string, date: string, month: string, year: string) {
    cy.get(element).click();
    cy.get(this.datepickerItem)
      .eq(parseInt(date) - 1)
      .click();
    cy.get(this.monthpickerItem)
      .eq(parseInt(month) - 1)
      .click();
    cy.get(this.yearpickerItem).contains(year).click();
    /**
     * FE still renders wrong format
    cy.get(element)
      .should('have.value',
      this.utils.reformatDate(
        year+this.utils.padTo2Digits(parseInt(month))+this.utils.padTo2Digits(parseInt(date)),
        "YYYYMMDD",
        "D MMM YYYY"
      )
    );
     *
     */
  }
}
