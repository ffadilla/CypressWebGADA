import {
  Given,
  Then,
  When,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/loginPage";
import * as types from "../common/types";
import * as enums from "../common/enums";

const loginPage = new LoginPage();

Given("user is in Business Management System Login page", () => {
  loginPage.navigate(loginPage.path);
});

And("user clicks on Masuk dengan Email button", () => {
  loginPage.clickButton(loginPage.loginWithEmailButton);
});

And("user selects {string} user email", (userRole: types.TUserRole) => {
  loginPage.selectUserEmail(enums.userRoleEmail[userRole]);
});

When("user clicks on Login button", () => {
  loginPage.clickButton(loginPage.loginButton);
});

Then("user logged in successfully", () => {
  loginPage.checkText(loginPage.bmsText, "Business Management System");
});

Given("user logged in as {string}", (userRole: types.TUserRole) => {
  loginPage.navigate(loginPage.path);
  loginPage.clickButton(loginPage.loginWithEmailButton);
  loginPage.selectUserEmail(enums.userRoleEmail[userRole]);
  loginPage.clickButton(loginPage.loginButton);
  loginPage.checkText(loginPage.bmsText, "Business Management System");
});

When("user clicks on logout button", () => {
  loginPage.clickButton(loginPage.accountSettingsButton);
  loginPage.clickButton(loginPage.logoutButton);
});
