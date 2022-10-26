import BasePage from "./basePage";

export default class BaseListPage extends BasePage {
  pageAmountDropdown = '[aria-haspopup="listbox"]';
  pageAmountDropdownOptions = 'ul[role="listbox"]';
  tablePaginationInfoContainer = ".MuiTablePagination-displayedRows";

  setPageAmount(value: string) {
    cy.get(this.pageAmountDropdown).click();
    cy.get(this.pageAmountDropdownOptions).contains(value).click();
  }

  assertTotalPageAmount(value: string) {
    expect(cy.get(this.pageAmountDropdown).should("contain", value));
    cy.get(this.tablePaginationInfoContainer)
      .invoke("text")
      .then((text) => {
        let dataPerPage = parseInt(text.split(" ")[1].split("-")[1]);
        expect(dataPerPage).to.be.lessThan(parseInt(value) + 1);
      });
  }
}
