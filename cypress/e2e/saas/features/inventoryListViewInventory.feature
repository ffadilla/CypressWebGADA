Feature: Inventory List

  Background: 
    Given user "8408418423" is logged in
    And user visits inventory list page
    And user created custom inventory with stock + selling uom

  Scenario: User clicks on edit stock button
    And user types search inventory input field with "web automation test product"
    And user clicks on stock edit button of inventory "web automation test product"
    Then stock edit options of inventory "web automation test product" are displayed
    And user visits inventory list page
    And user deletes inventory "web automation test product" with delete reason = wrong input