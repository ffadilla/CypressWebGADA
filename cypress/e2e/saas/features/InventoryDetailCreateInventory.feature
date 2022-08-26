Feature: Inventory Detail - Create Inventory

  Background:
    Given user "8408418423" is logged in
    And user visits inventory list page

  Scenario: User adds curated inventory with all mandatory fields
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "Beras SLYP Medium Ramos Setra 50 Kg"
    And user clicks on add inventory button of inventory "Beras SLYP Medium Ramos Setra 50 Kg"
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
    And user types add inventory search inventory input field with "web automation test product"
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
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types "Pieces" on search unit field
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "1" on "Pieces" unit stock quantity field
    And user types "1234" on "Pieces" unit price field
    And user clicks on expand selling unit button
    And user types "Pieces" on search unit field
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user clicks on add unit selling price button of "Pieces" unit
    And user types "12345" on unit selling price field
    And user clicks on save unit selling price button
    And user clicks on submit add inventory button
    Then user is redirected to inventory list page
    And user deletes inventory "web automation test product" with delete reason = wrong input

  Scenario: User adds custom inventory with multiple stock UOMs & selling UOMs
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types "Pieces" on search unit field
    And user clicks on "Pieces" unit checkbox
    And user types "Karton" on search unit field
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
    And user types "Pieces" on search unit field
    And user clicks on "Pieces" unit checkbox
    And user types "Karton" on search unit field
    And user clicks on "Karton" unit checkbox
    And user clicks on choose unit button
    And user clicks on add unit selling price button of "Pieces" unit
    And user types "12345" on unit selling price field
    And user clicks on save unit selling price button
    And user clicks on add unit selling price button of "Karton" unit
    And user types "23456" on unit selling price field
    And user clicks on save unit selling price button
    And user clicks on submit add inventory button
    Then user is redirected to inventory list page
    And user deletes inventory "web automation test product" with delete reason = wrong input

  Scenario: User adds new custom UOM
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types "random" on search unit field
    And user clicks on add new unit button
    And user clicks on choose unit button
    And user types "100" on "recently created" unit stock quantity field
    And user types "2000" on "recently created" unit price field
    And user clicks on submit add inventory button
    Then user is redirected to inventory list page
    And user deletes inventory "web automation test product" with delete reason = wrong input

  Scenario: User adds product with multiple UOM and price of each UOM are combination of single price and price tiers
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types "Pieces" on search unit field
    And user clicks on "Pieces" unit checkbox
    And user types "Karton" on search unit field
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
    And user types "Pieces" on search unit field
    And user clicks on "Pieces" unit checkbox
    And user types "Karton" on search unit field
    And user clicks on "Karton" unit checkbox
    And user clicks on choose unit button
    And user clicks on add unit selling price button of "Pieces" unit
    And user clicks on enable price tier button
    And user types "1000" on "1st" price tier unit price field
    And user clicks on add more price tier button
    And user types "900" on "2nd" price tier unit price field
    And user types "3" on "2nd" price tier minimum quantity field
    And user clicks on save unit selling price button
    And user clicks on add unit selling price button of "Karton" unit
    And user types "23456" on unit selling price field
    And user clicks on save unit selling price button
    And user clicks on submit add inventory button
    Then user is redirected to inventory list page
    And user deletes inventory "web automation test product" with delete reason = wrong input

  Scenario: User adds inventory with barcode (manual input)
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types "Pieces" on search unit field
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "1" on "Pieces" unit stock quantity field
    And user types "1234" on "Pieces" unit price field
    And user clicks on expand selling unit button
    And user types "Pieces" on search unit field
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user clicks on add unit selling price button of "Pieces" unit
    And user types "23456" on unit selling price field
    And user clicks on save unit selling price button
    And user clicks on add barcode button of "Pieces" unit
    And user clicks on input barcode manually button
    And user types "843842841" on barcode modal
    And user clicks on save barcode button
    And user clicks on submit add inventory button
    Then user is redirected to inventory list page
    And user deletes inventory "web automation test product" with delete reason = wrong input

  Scenario: User adds new principal
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on principal and brand button
    And user types random principal name on principal searchbar input
    And user clicks on add custom principal button
    And user clicks on submit add custom principal or brand modal button
    And user clicks on brand back button
    Then new principal is displayed on the principal list

  Scenario: User adds new category with new subcategory
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on category and subcategory button
    And user types random category name on category searchbar input
    And user clicks on add custom category button
    And user clicks on submit add custom category or subcategory modal button
    And user types random subcategory name on subcategory searchbar input
    And user clicks on add custom subcategory button
    And user clicks on submit add custom category or subcategory modal button
    Then new subcategory is displayed on the subcategory list
    And user clicks on subcategory back button
    Then new category is displayed on the category list

  Scenario: User adds new brand
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on principal and brand button
    And user types random principal name on principal searchbar input
    And user clicks on add custom principal button
    And user clicks on submit add custom principal or brand modal button
    And user types random brand name on brand searchbar input
    And user clicks on add custom brand button
    And user clicks on submit add custom principal or brand modal button
    Then new brand is displayed on the brand list

  Scenario: User adds new custom inventory with selling UOM different with stock UOM
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types "Pieces" on search unit field
    And user clicks on "Pieces" unit checkbox
    And user types "Karton" on search unit field
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
    And user types "Pieces" on search unit field
    And user clicks on "Pieces" unit checkbox
    And user types "Pack" on search unit field
    And user clicks on "Pack" unit checkbox
    And user clicks on choose unit button
    And user clicks on sort up button of unit "Pack"
    And user clicks on uom conversion next step button
    And user types "2" on unit "Karton" conversion field
    And user types "5" on unit "Pack" conversion field
    And user clicks on uom conversion save button
    And user clicks on add unit selling price button of "Pieces" unit
    And user types "12345" on unit selling price field
    And user clicks on save unit selling price button
    And user clicks on add unit selling price button of "Pack" unit
    And user types "23456" on unit selling price field
    And user clicks on save unit selling price button
    And user clicks on submit add inventory button
    Then user is redirected to inventory list page
    And user deletes inventory "web automation test product" with delete reason = wrong input

  Scenario: User adds curated inventory with different stock uom & selling uom (custom + curated uom)
    When user clicks on add inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types "Karton" on search unit field
    And user clicks on "Karton" unit checkbox
    And user types "Pieces" on search unit field
    And user clicks on "Pieces" unit checkbox
    And user types "random" on search unit field
    And user clicks on add new unit button
    And user clicks on choose unit button
    And user clicks on sort up button of recently created unit
    And user clicks on uom conversion next step button
    And user types "2" on unit "Karton" conversion field
    And user types "3" on recently created unit conversion field
    And user clicks on uom conversion save button
    And user types "100" on "Pieces" unit stock quantity field
    And user types "2000" on "Pieces" unit price field
    And user types "200" on "recently created" unit stock quantity field
    And user types "3000" on "recently created" unit price field
    And user types "400" on "Karton" unit stock quantity field
    And user types "5000" on "Karton" unit price field
    And user clicks on expand selling unit button
    And user types "Karton" on search unit field
    And user clicks on "Karton" unit checkbox
    And user types recently created unit name on search unit field
    And user clicks on "recently created" unit checkbox
    And user types "Pack" on search unit field
    And user clicks on "Pack" unit checkbox
    And user clicks on choose unit button
    And user clicks on sort up button of unit "Pack"
    And user clicks on uom conversion next step button
    And user types "2" on unit "Karton" conversion field
    And user types "2" on recently created unit conversion field
    And user types "2" on unit "Pack" conversion field
    And user clicks on uom conversion save button
    And user clicks on add unit selling price button of "Karton" unit
    And user types "12345" on unit selling price field
    And user clicks on save unit selling price button
    And user clicks on add unit selling price button of "Pack" unit
    And user types "23456" on unit selling price field
    And user clicks on save unit selling price button
    And user clicks on add unit selling price button of "recently created" unit
    And user types "23456" on unit selling price field
    And user clicks on save unit selling price button
    And user clicks on submit add inventory button
    Then user is redirected to inventory list page
    And user deletes inventory "web automation test product" with delete reason = wrong input