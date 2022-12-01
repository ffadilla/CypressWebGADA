import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import CycleCountDetailPage from "../../page_objects/inventory/cycleCountDetailPage";

const cycleCountDetailPage = new CycleCountDetailPage();

Then("user should be redirected to the cycle count detail page", () => {
  cycleCountDetailPage.waitForDetailToBeRendered();
  cycleCountDetailPage.assertUserIsInCycleCountDetailPage();
});

And("user should see the shown detail data are correct", () => {
  cycleCountDetailPage.waitAndGetCycleCountDetailAPIResponse();
  cycleCountDetailPage.assertSingleProductVariantIsCorrect();
});
