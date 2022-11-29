Feature: Inventory Detail - Delete Inventory

  Background:
    Given user "08408418423" is logged in
    And user prepares test data
    And user visits inventory list page

  Scenario: User deletes non consign inventory with smallest uom quantity > 0
    And user types search inventory input field with "Web Automation Custom Inventory 1 - Single UOM"
    And user clicks on inventory detail button of "Web Automation Custom Inventory 1 - Single UOM"
    Then is consign toggle button is not displayed
    And user clicks on delete inventory button
    And user clicks on delete reason = "wrong input"
    And user clicks on confirm delete inventory button

  Scenario: User deletes consign inventory
    And user types search inventory input field with "Web Automation Custom Inventory 4 (Consign)"
    And user clicks on inventory detail button of "Web Automation Custom Inventory 4 (Consign)"
    Then is consign toggle button is displayed
    And user clicks on delete inventory button
    Then delete inventory options are not displayed
    And user clicks on confirm delete inventory button
