Feature: Inventory Detail - Delete Inventory

  Background:
    Given user "8408418423" is logged in
    And user visits inventory list page

  Scenario: User deletes non consign inventory with smallest uom quantity > 0
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "1" on "Pieces" unit stock quantity field
    And user types "1234" on "Pieces" unit price field
    And user clicks on submit add inventory button
    And user types search inventory input field with "web automation test product"
    And user clicks on inventory detail button of "web automation test product"
    Then is consign toggle button is not displayed
    And user clicks on delete inventory button
    And user clicks on delete reason = "wrong input"
    And user clicks on confirm delete inventory button

  Scenario: User deletes consign inventory
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "1" on "Pieces" unit stock quantity field
    And user types "1234" on "Pieces" unit price field
    And user clicks on is consign toggle button
    And user clicks on choose supplier button
    And user types "Default Supplier" on input supplier search modal
    And user clicks on "Default Supplier" supplier checkbox
    And user clicks on supplier modal close button
    And user clicks on submit add inventory button
    And user types search inventory input field with "web automation test product"
    And user clicks on inventory detail button of "web automation test product"
    Then is consign toggle button is displayed
    And user clicks on delete inventory button
    Then delete inventory options are not displayed
    And user clicks on confirm delete inventory button
