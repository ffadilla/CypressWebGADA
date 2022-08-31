import { When } from "@badeball/cypress-cucumber-preprocessor";
import BasePage from "../page_objects/basePage";

const basePage = new BasePage();

//STEP
When("user logs out from WMS", () => {
  basePage.logout();
});
