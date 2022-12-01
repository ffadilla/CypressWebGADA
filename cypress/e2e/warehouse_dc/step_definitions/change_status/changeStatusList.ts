import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import {
  assertDateQueryParam,
  assertQueryParam,
} from "../../../warehouse_core/common/assertions";
import ChangeStatusListPage from "../../page_objects/change_status/changeStatusListPage";

const changeStatusListPage = new ChangeStatusListPage("dc");

When(
  "user applies {string} and its store as global filters at Change Status list",
  (warehouse: string) => {
    changeStatusListPage.header.setGlobalFilter(warehouse);
    changeStatusListPage.waitSearchRender();
  }
);

When(
  "user applies {string} to find related Change Status task",
  (keyword: string) => {
    changeStatusListPage.setSearchKeyword(keyword);
    changeStatusListPage.waitSearchRender();
  }
);

When(
  "user applies {string} date, {string} month, {string} year as execution date filter at Change Status list",
  (executionDate: string, executionMonth: string, executionYear: string) => {
    changeStatusListPage.setExecutionDateFilter(
      executionDate,
      executionMonth,
      executionYear
    );
    changeStatusListPage.waitSearchRender();
  }
);

When(
  "user resets any applied delivery date filter at Change Status list",
  () => {
    changeStatusListPage.resetExecutionDate();
    changeStatusListPage.waitSearchRender();
  }
);

When(
  "user clicks {string} status chip at Change Status list",
  (status: string) => {
    changeStatusListPage.statusChip.clickStatusChip(status);
    changeStatusListPage.waitSearchRender();
  }
);

When(
  "user applies {string} as page amount at Change Status list",
  (value: string) => {
    changeStatusListPage.pagination.setPageAmount(value);
    changeStatusListPage.waitSearchRender();
  }
);

Then(
  "query param for {string} {string} should be added to Change Status list URL",
  (val: string, attribute: string) => {
    if (attribute === "status") {
      changeStatusListPage.assertStatusQueryParam(val);
    } else if (attribute === "execution_date") {
      assertDateQueryParam(attribute, val);
    } else {
      assertQueryParam(attribute, val);
    }
  }
);

Then(
  "user should only able to see Change Status task with {string} matched store of {string}",
  (attribute: string, value: string) => {
    changeStatusListPage.assertTableListBySearchFilter(attribute, value);
  }
);

Then(
  "user should only able to see Change Status task with {string} matched {string}",
  (attribute: string, value: string) => {
    changeStatusListPage.assertTableListBySearchFilter(attribute, value);
  }
);

Then(
  "user should only able to see Change Status task with {string} {string}",
  (value: string, attribute: string) => {
    changeStatusListPage.assertTableListBySearchFilter(attribute, value);
  }
);

Then(
  "user should only able to see {string} Change Status per page maximum",
  (value: string) => {
    changeStatusListPage.pagination.assertTotalPageAmount(value);
  }
);

Then(
  "user should able to see empty search filter result on Change Status list",
  () => {
    changeStatusListPage.assertNoResultList();
  }
);
