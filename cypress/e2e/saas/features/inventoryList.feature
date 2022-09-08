Feature: Inventory List

  Background: 
    Given user "8408418423" is logged in
    And user visits inventory list page

  Scenario: User searches for inventory by name and clicks tambah barang
    When user clicks on add inventory button
    And user clicks on add single inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "Web Automation Test Product"
    And user clicks on add custom inventory button
    Then "Web Automation Test Product" is displayed as product variant name
