import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../e2e/warehouse_dc/page_objects/loginPage";

const loginPage = new LoginPage();

When("user redirects to login page", () => {
  loginPage.navigate(loginPage.path);
});

When("user fills email input with {string} at login page", (email: string) => {
  loginPage.setEmailField(email);
});

When(
  "user fills password input with {string} at login page",
  (password: string) => {
    loginPage.setPasswordField(password);
  }
);

When("user click MASUK button at login page", () => {
  loginPage.clickLoginButton();
});

Then(
  "{string} error message at login page should appear",
  (errorMessage: string) => {
    loginPage.assertErrorMessage(errorMessage);
  }
);
