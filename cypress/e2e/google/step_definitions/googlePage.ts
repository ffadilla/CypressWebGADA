import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import GooglePage from "../page_objects/googlePage";

const googlePage = new GooglePage();

Given("user is in google page", () => {
  googlePage.navigate("");
});

When("user could type in the search form", () => {
  googlePage.typeInMainForm("some text that want to be searched");
});
