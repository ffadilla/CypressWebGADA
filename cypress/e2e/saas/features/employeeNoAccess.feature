Feature: Employee No Access
  
  Background:
    Given user "08978889991" is logged in
  
  Scenario: User without Ubah Barang access tried to do Change Inventory, return to supplier, destroy bad stock, to do refund
    And user visits inventory list page
    And user click inventory item on inventory list
    Then inventory list menu is locked
    Then user clicks on x button