Feature: Inventory List - Search Inventory

  Background: 
    Given user "08408418423" is logged in
    And user prepares test data
    And user visits inventory list page

  Scenario: User searches for inventory, multiple results
    When user types search inventory input field with "web automation"
    Then inventories with name containing "web automation" are displayed
    And user deletes test data
