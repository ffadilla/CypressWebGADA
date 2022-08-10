import { Given, When } from "cypress-cucumber-preprocessor/steps";
import GooglePage from "../../../e2e/google/page_objects/googlePage";

const googlePage = new GooglePage();

Given("Google - user is in google page", () => {
  googlePage.navigate("");
});

When("Google - user could type in the search form", () => {
  googlePage.typeInMainForm("some text that want to be searched");
});
