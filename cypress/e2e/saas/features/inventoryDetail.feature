Feature: Inventory Detail

  Background: 
    Given user "8408418423" is logged in
    And user clicks on inventory list side menu button

  Scenario: User adds curated inventory with all mandatory fields
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types search inventory input field with "Beras SLYP Medium Ramos Setra 50 Kg"
    And user clicks add inventory button of inventory "Beras SLYP Medium Ramos Setra 50 Kg"
    And user clicks on expand stock unit button
    And user types search unit field with "Sak"
    And user clicks on "Sak" unit checkbox
    And user clicks on choose unit button
    And user types "1" on "Sak" unit stock quantity field
    And user types "1234" on "Sak" unit price field
    And user clicks on submit add inventory button
    Then user is redirected to inventory list page
    And user deletes inventory "Beras SLYP Medium Ramos Setra 50 Kg" with delete reason = wrong input

  Scenario: User adds custom inventory with all mandatory fields
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "1" on "Pieces" unit stock quantity field
    And user types "1234" on "Pieces" unit price field
    And user clicks on submit add inventory button
    Then user is redirected to inventory list page
    And user deletes inventory "web automation test product" with delete reason = wrong input

  Scenario: User adds custom inventory with 1 stock UOM & 1 selling UOM
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "1" on "Pieces" unit stock quantity field
    And user types "1234" on "Pieces" unit price field
    And user clicks on expand selling unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user clicks on add unit selling price button of unit "Pieces"
    And user types "12345" on unit selling price field
    And user clicks on save unit selling price button
    And user clicks on submit add inventory button
    Then user is redirected to inventory list page
    And user deletes inventory "web automation test product" with delete reason = wrong input

  Scenario: User adds custom inventory with multiple stock UOMs & selling UOMs
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user types search unit field with "Karton"
    And user clicks on "Karton" unit checkbox
    And user clicks on choose unit button
    And user clicks on sort up button of unit "Karton"
    And user clicks on uom conversion next step button
    And user types "10" on unit "Karton" conversion field
    And user clicks on uom conversion save button
    And user types "100" on "Pieces" unit stock quantity field
    And user types "2000" on "Pieces" unit price field
    And user types "200" on "Karton" unit stock quantity field
    And user types "19000" on "Karton" unit price field
    And user clicks on expand selling unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user types search unit field with "Karton"
    And user clicks on "Karton" unit checkbox
    And user clicks on choose unit button
    And user clicks on add unit selling price button of unit "Pieces"
    And user types "12345" on unit selling price field
    And user clicks on save unit selling price button
    And user clicks on add unit selling price button of unit "Karton"
    And user types "23456" on unit selling price field
    And user clicks on save unit selling price button
    And user clicks on submit add inventory button
    Then user is redirected to inventory list page
    And user deletes inventory "web automation test product" with delete reason = wrong input

  Scenario: User adds new custom UOM
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types search unit field with random uom name
    And user clicks on add new unit button
    And user clicks on choose unit button
    And user types "100" on "first" unit stock quantity field
    And user types "2000" on "first" unit price field
    And user clicks on submit add inventory button
    Then user is redirected to inventory list page
    And user deletes inventory "web automation test product" with delete reason = wrong input

  Scenario: User adds product with multiple UOM and price of each UOM are combination of single price and price tiers
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user types search unit field with "Karton"
    And user clicks on "Karton" unit checkbox
    And user clicks on choose unit button
    And user clicks on sort up button of unit "Karton"
    And user clicks on uom conversion next step button
    And user types "10" on unit "Karton" conversion field
    And user clicks on uom conversion save button
    And user types "100" on "Pieces" unit stock quantity field
    And user types "2000" on "Pieces" unit price field
    And user types "200" on "Karton" unit stock quantity field
    And user types "19000" on "Karton" unit price field
    And user clicks on expand selling unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user types search unit field with "Karton"
    And user clicks on "Karton" unit checkbox
    And user clicks on choose unit button
    And user clicks on add unit selling price button of unit "Pieces"
    And user clicks enable price tier button
    And user types "1000" on "1st" price tier unit price field
    And user clicks on add more price tier button
    And user types "900" on "2nd" price tier unit price field
    And user types "3" on "2nd" price tier minimum quantity field
    And user clicks on save unit selling price button
    And user clicks on add unit selling price button of unit "Karton"
    And user types "23456" on unit selling price field
    And user clicks on save unit selling price button
    And user clicks on submit add inventory button
    Then user is redirected to inventory list page
    And user deletes inventory "web automation test product" with delete reason = wrong input

  Scenario: User adds product with multiple UOM and price of each UOM are combination of single price and price tiers
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user types search unit field with "Karton"
    And user clicks on "Karton" unit checkbox
    And user clicks on choose unit button
    And user clicks on sort up button of unit "Karton"
    And user clicks on uom conversion next step button
    And user types "10" on unit "Karton" conversion field
    And user clicks on uom conversion save button
    And user types "100" on "Pieces" unit stock quantity field
    And user types "2000" on "Pieces" unit price field
    And user types "200" on "Karton" unit stock quantity field
    And user types "19000" on "Karton" unit price field
    And user clicks on expand selling unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user types search unit field with "Karton"
    And user clicks on "Karton" unit checkbox
    And user clicks on choose unit button
    And user clicks on add unit selling price button of unit "Pieces"
    And user clicks enable price tier button
    And user types "1000" on "1st" price tier unit price field
    And user clicks on add more price tier button
    And user types "900" on "2nd" price tier unit price field
    And user types "3" on "2nd" price tier minimum quantity field
    And user clicks on save unit selling price button
    And user clicks on add unit selling price button of unit "Karton"
    And user types "23456" on unit selling price field
    And user clicks on save unit selling price button
    And user clicks on submit add inventory button
    Then user is redirected to inventory list page
    And user deletes inventory "web automation test product" with delete reason = wrong input
