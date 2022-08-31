import {
  Given,
  Then,
  When,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import BasePage from "../page_objects/basePage";
import LoginPage from "../page_objects/loginPage";
import * as enums from "../common/enums";

const basePage = new BasePage();
const loginPage = new LoginPage();

type userRole =
  | "BM"
  | "SBM"
  | "VP"
  | "VP_OPS"
  | "TGA_OPS"
  | "FINANCE"
  | "VIEWER";

Given("user is in Business Management System Login page", () => {
  loginPage.visitPage(loginPage.path);
});

And("user clicks on Masuk dengan Email button", () => {
  loginPage.click(loginPage.selectors.loginWithEmailButton);
});

And("user selects {string} user email", (userRole: userRole) => {
  loginPage.selectUserEmail(enums.userRoleEmail[userRole]);
});

When("user clicks on Login button", () => {
  loginPage.click(loginPage.selectors.loginButton);
});

Then("user logged in successfully", () => {
  loginPage.assertTextContains(
    basePage.selectors.bmsText,
    "Business Management System"
  );
});

Given("user logged in as {string}", (userRole: userRole) => {
  loginPage.visitPage(loginPage.path);
  loginPage.click(loginPage.selectors.loginWithEmailButton);
  loginPage.selectUserEmail(enums.userRoleEmail[userRole]);
  loginPage.click(loginPage.selectors.loginButton);
  loginPage.assertTextContains(
    basePage.selectors.bmsText,
    "Business Management System"
  );
});

When("user clicks on logout button", () => {
  loginPage.click(basePage.selectors.accountSettingsButton);
  loginPage.click(basePage.selectors.logoutButton);
});
