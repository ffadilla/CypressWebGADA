Feature: Inventory List - Delete Inventory

  Background:
    Given user "8408418423" is logged in
    And user visits inventory list page

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
    Then is consign label is displayed on "web automation test product" status column
    And user clicks on inventory more option button of "web automation test product"
    And user clicks on inventory list delete button
    Then delete reasons are not displayed
    And user clicks on inventory list confirm delete button

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
    And user clicks on inventory more option button of "web automation test product"
    And user clicks on inventory list delete button
    Then delete reasons are displayed
    And user clicks on ada kesalahan input delete reason input
    And user clicks on inventory list confirm delete button

  Scenario: User deletes non consign inventory with smallest uom quantity = 0
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
    And user clicks on stock edit button of inventory "web automation test product"
    And user clicks on hitung ulang stok button of inventory "web automation test product"
    And user types "0" on good stock input field of unit "Pieces"
    And user clicks on hitung ulang stok submit button
    And user clicks on inventory more option button of "web automation test product"
    And user clicks on inventory list delete button
    Then delete reasons are not displayed
    And user clicks on inventory list confirm delete button