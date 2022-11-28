import { assertQueryParam } from "../../../warehouse_core/common/assertions";
import { replaceElementIndex } from "../../../warehouse_core/common/utils";
import StatusChip from "../../../warehouse_core/component_objects/statusChip";
import MainPage from "../../../warehouse_core/page_objects/mainPage";

export default class ChangeStatusListPage extends MainPage {
  statusChip = new StatusChip();
  changeStatusItemListBodyXPath =
    '//tbody[contains(@class, "MuiTableBody-root")]';
  changeStatusItemStatusXPath =
    this.changeStatusItemListBodyXPath + "/tr[index]/td[6]/span/span[2]";

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
      case "status":
        element = this.changeStatusItemStatusXPath;
        break;
    }

    cy.xpath(this.changeStatusItemListBodyXPath).then(($list) => {
      for (let index = 1; index < $list.children().length; index++) {
        const changeStatusItemAttribute = replaceElementIndex(element, index);
        expect(cy.xpath(changeStatusItemAttribute).should("contain", value));
      }
    });
  }
}
