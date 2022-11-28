import { assertQueryParam } from "../../../warehouse_core/common/assertions";
import {
  interceptAPI,
  reformatDate,
  replaceElementIndex,
} from "../../../warehouse_core/common/utils";
import Datepicker from "../../../warehouse_core/component_objects/datepicker";
import StatusChip from "../../../warehouse_core/component_objects/statusChip";
import MainPage from "../../../warehouse_core/page_objects/mainPage";

export default class ChangeStatusListPage extends MainPage {
  datepicker = new Datepicker();
  statusChip = new StatusChip();

  searchbox = 'input[placeholder="No. ubah status atau nama produk"]';
  dateFilter = 'input[placeholder="Tanggal"]';
  changeStatusTaskListBodyXPath =
    '//tbody[contains(@class, "MuiTableBody-root")]';
  changeStatusTaskIDXPath =
    this.changeStatusTaskListBodyXPath + "/tr[index]/td[1]/div[1]";
  changeStatusTaskCreatedAt =
    this.changeStatusTaskListBodyXPath + "/tr[index]/td[1]/div[2]";
  changeStatusTaskDateXPath =
    this.changeStatusTaskListBodyXPath + "/tr[index]/td[5]/div[1]";
  changeStatusTaskStatusXPath =
    this.changeStatusTaskListBodyXPath + "/tr[index]/td[6]/span/span[2]";
  noResultSearchFilterInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[2]/div[2]/div';

  waitSearchRender() {
    interceptAPI(
      "GET",
      "/move-inventory-bin/tasks/list/?*",
      "ChangeStatusListAPI"
    );
    cy.wait("@ChangeStatusListAPI").then((API) => {
      const responseBody = API.response?.body;
      if (responseBody.total_data === 0)
        cy.xpath(this.noResultSearchFilterInfo).should("be.visible");
      else
        cy.xpath(replaceElementIndex(this.changeStatusTaskCreatedAt, 1)).should(
          "be.visible"
        );
    });
  }

  setSearchKeyword(keyword: string) {
    cy.get(this.searchbox).type(keyword);
    cy.get(this.searchbox).type("{enter}");
  }

  setExecutionDateFilter(
    executionDate: string,
    executionMonth: string,
    executionYear: string
  ) {
    this.datepicker.setDatepicker(
      this.dateFilter,
      executionDate,
      executionMonth,
      executionYear
    );
  }

  resetExecutionDate() {
    this.datepicker.resetDate(this.dateFilter);
  }

  assertStatusQueryParam(value: string) {
    let expectedValue = "";
    switch (value) {
      case "Belum Selesai":
        expectedValue = "DRAFT";
        break;
      case "Menunggu Tindakan Admin":
        expectedValue = "WAITING_FOR_SUPERVISOR_ACTION";
        break;
      case "Sudah Sesuai":
        expectedValue = "COMPLETED";
        break;
      case "Semua Status":
        expectedValue = "";
    }
    assertQueryParam("status", expectedValue);
  }

  assertTableListBySearchFilter(target: string, value: string) {
    let element = "";

    switch (target) {
      case "change status ID":
        element = this.changeStatusTaskIDXPath;
        break;
      case "product name":
        // NOTE: skip assertion, because there's no component at Change Status list that contains product name
        return;
      case "execution date":
        element = this.changeStatusTaskDateXPath;
        value = reformatDate(value, "YYYY-MM-DD", "D MMM YYYY");
        break;
      case "status":
        element = this.changeStatusTaskStatusXPath;
        break;
    }

    cy.xpath(this.changeStatusTaskListBodyXPath).then(($list) => {
      for (let index = 1; index < $list.children().length + 1; index++) {
        const changeStatusItemAttribute = replaceElementIndex(element, index);
        expect(cy.xpath(changeStatusItemAttribute).should("contain", value));
      }
    });
  }
}
