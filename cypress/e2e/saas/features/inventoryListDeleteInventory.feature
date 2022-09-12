Feature: Inventory List - Delete Inventory

  Background:
    Given user "8408418423" is logged in
    And user creates seed inventory data
    And user visits inventory list page

  Scenario: User deletes consign inventory
    And user types search inventory input field with "Web Automation Custom Inventory 4 (Consign)"
    Then is consign label is displayed on "Web Automation Custom Inventory 4 (Consign)" status column
    And user clicks on inventory more option button of "Web Automation Custom Inventory 4 (Consign)"
    And user clicks on inventory list delete button
    Then delete reasons are not displayed
    And user clicks on inventory list confirm delete button

  Scenario: User deletes non consign inventory with smallest uom quantity > 0
    And user types search inventory input field with "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on inventory more option button of "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on inventory list delete button
    Then delete reasons are displayed
    And user clicks on ada kesalahan input delete reason input
    And user clicks on inventory list confirm delete button

  Scenario: User deletes non consign inventory with smallest uom quantity = 0
    And user types search inventory input field with "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on stock edit button of inventory "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on hitung ulang stok button
    And user types "0" on good stock input field of unit "Pieces"
    And user clicks on hitung ulang stok submit button
    And user clicks on inventory more option button of "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on inventory list delete button
    Then delete reasons are not displayed
    And user clicks on inventory list confirm delete button