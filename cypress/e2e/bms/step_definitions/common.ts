import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import BasePage from "../page_objects/basePage";

const basePage = new BasePage();

Given(
  "user is in {string} - {string} page",
  (menu: string, subMenu: string) => {
    basePage.openPage(basePage.selectors.menuButton, menu, subMenu);
  }
);

When("user clicks on logout button", () => {
  basePage.click(basePage.selectors.accountSettingsButton);
  basePage.click(basePage.selectors.logoutButton);
});
