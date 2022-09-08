Feature: Inventory List - View Inventory

  Background: 
    Given user "8408418423" is logged in
    And user creates seed inventory data
    And user visits inventory list page

  Scenario: User clicks on edit stock button
    And user types search inventory input field with "Web Automation Custom Inventory 4 (Consign)"
    And user clicks on stock edit button of inventory "Web Automation Custom Inventory 4 (Consign)"
    Then stock edit options of consign inventory "Web Automation Custom Inventory 4 (Consign)" are displayed
    And user deletes test data