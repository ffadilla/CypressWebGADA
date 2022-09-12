Feature: Inventory List - Search Inventory

  Background: 
    Given user "8408418423" is logged in
    And user creates seed inventory data
    And user visits inventory list page

  Scenario: User searches for inventory, multiple results
    When user types search inventory input field with "web automation"
    Then inventories with name containing "web automation" are displayed
    And user deletes test data
