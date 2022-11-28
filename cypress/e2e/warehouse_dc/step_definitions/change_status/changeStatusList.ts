import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { assertQueryParam } from "../../../warehouse_core/common/assertions";
import ChangeStatusListPage from "../../page_objects/change_status/changeStatusListPage";

const changeStatusListPage = new ChangeStatusListPage("dc");

When(
  "user clicks {string} status chip at Change Status list",
  (status: string) => {
    changeStatusListPage.statusChip.clickStatusChip(status);
  }
);

Then(
  "query param for {string} {string} should be added to Change Status list URL",
  (val: string, attribute: string) => {
    if (attribute === "status") {
      changeStatusListPage.assertStatusQueryParam(val);
    } else {
      assertQueryParam(attribute, val);
    }
  }
);

Then(
  "user should only able to see Change Status with {string} {string}",
  (value: string, attribute: string) => {
    changeStatusListPage.assertTableListBySearchFilter(attribute, value);
  }
);
