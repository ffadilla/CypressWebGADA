Feature: Inventory Detail - Create Inventory

    Background:
        Given SAAS - user "8408418423" is logged in
        And SAAS - user visits inventory list page

    Scenario: User adds curated inventory with all mandatory fields
        When SAAS - user clicks on add inventory button
        And SAAS - user clicks on first time add inventory button
        And SAAS - user types "Beras SLYP Medium Ramos Setra 50 Kg" on search inventory input field
        And SAAS - user clicks add inventory button of inventory "Beras SLYP Medium Ramos Setra 50 Kg"
        And SAAS - user clicks on expand stock unit button
        And SAAS - user types "Sak" on search unit field
        And SAAS - user clicks on "Sak" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user types "1" on "Sak" unit stock quantity field
        And SAAS - user types "1234" on "Sak" unit price field
        And SAAS - user clicks on submit add inventory button
        Then SAAS - user is redirected to inventory list page
        And SAAS - user deletes inventory "Beras SLYP Medium Ramos Setra 50 Kg" with delete reason = wrong input

    Scenario: User adds custom inventory with all mandatory fields
        When SAAS - user clicks on add inventory button
        And SAAS - user clicks on first time add inventory button
        And SAAS - user types "web automation test product" on search inventory input field
        And SAAS - user clicks on add custom inventory button
        And SAAS - user clicks on expand stock unit button
        And SAAS - user types "Pieces" on search unit field
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user types "1" on "Pieces" unit stock quantity field
        And SAAS - user types "1234" on "Pieces" unit price field
        And SAAS - user clicks on submit add inventory button
        Then SAAS - user is redirected to inventory list page
        And SAAS - user deletes inventory "web automation test product" with delete reason = wrong input

    Scenario: User adds custom inventory with 1 stock UOM & 1 selling UOM
        When SAAS - user clicks on add inventory button
        And SAAS - user clicks on first time add inventory button
        And SAAS - user types "web automation test product" on search inventory input field
        And SAAS - user clicks on add custom inventory button
        And SAAS - user clicks on expand stock unit button
        And SAAS - user types "Pieces" on search unit field
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user types "1" on "Pieces" unit stock quantity field
        And SAAS - user types "1234" on "Pieces" unit price field
        And SAAS - user clicks on expand selling unit button
        And SAAS - user types "Pieces" on search unit field
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user clicks on add unit selling price button of "Pieces" unit
        And SAAS - user types "12345" on unit selling price field
        And SAAS - user clicks on save unit selling price button
        And SAAS - user clicks on submit add inventory button
        Then SAAS - user is redirected to inventory list page
        And SAAS - user deletes inventory "web automation test product" with delete reason = wrong input

    Scenario: User adds custom inventory with multiple stock UOMs & selling UOMs
        When SAAS - user clicks on add inventory button
        And SAAS - user clicks on first time add inventory button
        And SAAS - user types "web automation test product" on search inventory input field
        And SAAS - user clicks on add custom inventory button
        And SAAS - user clicks on expand stock unit button
        And SAAS - user types "Pieces" on search unit field
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user types "Karton" on search unit field
        And SAAS - user clicks on "Karton" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user clicks on sort up button of unit "Karton"
        And SAAS - user clicks on uom conversion next step button
        And SAAS - user types "10" on unit "Karton" conversion field
        And SAAS - user clicks on uom conversion save button
        And SAAS - user types "100" on "Pieces" unit stock quantity field
        And SAAS - user types "2000" on "Pieces" unit price field
        And SAAS - user types "200" on "Karton" unit stock quantity field
        And SAAS - user types "19000" on "Karton" unit price field
        And SAAS - user clicks on expand selling unit button
        And SAAS - user types "Pieces" on search unit field
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user types "Karton" on search unit field
        And SAAS - user clicks on "Karton" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user clicks on add unit selling price button of "Pieces" unit
        And SAAS - user types "12345" on unit selling price field
        And SAAS - user clicks on save unit selling price button
        And SAAS - user clicks on add unit selling price button of "Karton" unit
        And SAAS - user types "23456" on unit selling price field
        And SAAS - user clicks on save unit selling price button
        And SAAS - user clicks on submit add inventory button
        Then SAAS - user is redirected to inventory list page
        And SAAS - user deletes inventory "web automation test product" with delete reason = wrong input

    Scenario: User adds new custom UOM
        When SAAS - user clicks on add inventory button
        And SAAS - user clicks on first time add inventory button
        And SAAS - user types "web automation test product" on search inventory input field
        And SAAS - user clicks on add custom inventory button
        And SAAS - user clicks on expand stock unit button
        And SAAS - user types "random" on search unit field
        And SAAS - user clicks on add new unit button
        And SAAS - user clicks on choose unit button
        And SAAS - user types "100" on "recently created" unit stock quantity field
        And SAAS - user types "2000" on "recently created" unit price field
        And SAAS - user clicks on submit add inventory button
        Then SAAS - user is redirected to inventory list page
        And SAAS - user deletes inventory "web automation test product" with delete reason = wrong input

    Scenario: User adds product with multiple UOM and price of each UOM are combination of single price and price tiers
        When SAAS - user clicks on add inventory button
        And SAAS - user clicks on first time add inventory button
        And SAAS - user types "web automation test product" on search inventory input field
        And SAAS - user clicks on add custom inventory button
        And SAAS - user clicks on expand stock unit button
        And SAAS - user types "Pieces" on search unit field
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user types "Karton" on search unit field
        And SAAS - user clicks on "Karton" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user clicks on sort up button of unit "Karton"
        And SAAS - user clicks on uom conversion next step button
        And SAAS - user types "10" on unit "Karton" conversion field
        And SAAS - user clicks on uom conversion save button
        And SAAS - user types "100" on "Pieces" unit stock quantity field
        And SAAS - user types "2000" on "Pieces" unit price field
        And SAAS - user types "200" on "Karton" unit stock quantity field
        And SAAS - user types "19000" on "Karton" unit price field
        And SAAS - user clicks on expand selling unit button
        And SAAS - user types "Pieces" on search unit field
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user types "Karton" on search unit field
        And SAAS - user clicks on "Karton" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user clicks on add unit selling price button of "Pieces" unit
        And SAAS - user clicks on enable price tier button
        And SAAS - user types "1000" on "1st" price tier unit price field
        And SAAS - user clicks on add more price tier button
        And SAAS - user types "900" on "2nd" price tier unit price field
        And SAAS - user types "3" on "2nd" price tier minimum quantity field
        And SAAS - user clicks on save unit selling price button
        And SAAS - user clicks on add unit selling price button of "Karton" unit
        And SAAS - user types "23456" on unit selling price field
        And SAAS - user clicks on save unit selling price button
        And SAAS - user clicks on submit add inventory button
        Then SAAS - user is redirected to inventory list page
        And SAAS - user deletes inventory "web automation test product" with delete reason = wrong input

    Scenario: User adds inventory with barcode (manual input)
        When SAAS - user clicks on add inventory button
        And SAAS - user clicks on first time add inventory button
        And SAAS - user types "web automation test product" on search inventory input field
        And SAAS - user clicks on add custom inventory button
        And SAAS - user clicks on expand stock unit button
        And SAAS - user types "Pieces" on search unit field
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user types "1" on "Pieces" unit stock quantity field
        And SAAS - user types "1234" on "Pieces" unit price field
        And SAAS - user clicks on expand selling unit button
        And SAAS - user types "Pieces" on search unit field
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user clicks on add unit selling price button of "Pieces" unit
        And SAAS - user types "23456" on unit selling price field
        And SAAS - user clicks on save unit selling price button
        And SAAS - user clicks on add barcode button of "Pieces" unit
        And SAAS - user clicks on input barcode manually button
        And SAAS - user types "843842841" on barcode modal
        And SAAS - user clicks on save barcode button
        And SAAS - user clicks on submit add inventory button
        Then SAAS - user is redirected to inventory list page
        And SAAS - user deletes inventory "web automation test product" with delete reason = wrong input

    Scenario: User adds new principal
        When SAAS - user clicks on add inventory button
        And SAAS - user clicks on first time add inventory button
        And SAAS - user types "web automation test product" on search inventory input field
        And SAAS - user clicks on add custom inventory button
        And SAAS - user clicks on principal and brand button
        And SAAS - user types random principal name on principal searchbar input
        And SAAS - user clicks on add custom principal button
        And SAAS - user clicks on submit add custom principal or brand modal button
        And SAAS - user clicks on brand back button
        Then SAAS - new principal is displayed on the principal list

    Scenario: User adds new category with new subcategory
        When SAAS - user clicks on add inventory button
        And SAAS - user clicks on first time add inventory button
        And SAAS - user types "web automation test product" on search inventory input field
        And SAAS - user clicks on add custom inventory button
        And SAAS - user clicks on category and subcategory button
        And SAAS - user types random category name on category searchbar input
        And SAAS - user clicks on add custom category button
        And SAAS - user clicks on submit add custom category or subcategory modal button
        And SAAS - user types random subcategory name on subcategory searchbar input
        And SAAS - user clicks on add custom subcategory button
        And SAAS - user clicks on submit add custom category or subcategory modal button
        Then SAAS - new subcategory is displayed on the subcategory list
        And SAAS - user clicks on subcategory back button
        Then SAAS - new category is displayed on the category list

    Scenario: User adds new brand
        When SAAS - user clicks on add inventory button
        And SAAS - user clicks on first time add inventory button
        And SAAS - user types "web automation test product" on search inventory input field
        And SAAS - user clicks on add custom inventory button
        And SAAS - user clicks on principal and brand button
        And SAAS - user types random principal name on principal searchbar input
        And SAAS - user clicks on add custom principal button
        And SAAS - user clicks on submit add custom principal or brand modal button
        And SAAS - user types random brand name on brand searchbar input
        And SAAS - user clicks on add custom brand button
        And SAAS - user clicks on submit add custom principal or brand modal button
        Then SAAS - new brand is displayed on the brand list

    Scenario: User adds new custom inventory with selling UOM different with stock UOM
        When SAAS - user clicks on add inventory button
        And SAAS - user clicks on first time add inventory button
        And SAAS - user types "web automation test product" on search inventory input field
        And SAAS - user clicks on add custom inventory button
        And SAAS - user clicks on expand stock unit button
        And SAAS - user types "Pieces" on search unit field
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user types "Karton" on search unit field
        And SAAS - user clicks on "Karton" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user clicks on sort up button of unit "Karton"
        And SAAS - user clicks on uom conversion next step button
        And SAAS - user types "10" on unit "Karton" conversion field
        And SAAS - user clicks on uom conversion save button
        And SAAS - user types "100" on "Pieces" unit stock quantity field
        And SAAS - user types "2000" on "Pieces" unit price field
        And SAAS - user types "200" on "Karton" unit stock quantity field
        And SAAS - user types "19000" on "Karton" unit price field
        And SAAS - user clicks on expand selling unit button
        And SAAS - user types "Pieces" on search unit field
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user types "Pack" on search unit field
        And SAAS - user clicks on "Pack" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user clicks on sort up button of unit "Pack"
        And SAAS - user clicks on uom conversion next step button
        And SAAS - user types "2" on unit "Karton" conversion field
        And SAAS - user types "5" on unit "Pack" conversion field
        And SAAS - user clicks on uom conversion save button
        And SAAS - user clicks on add unit selling price button of "Pieces" unit
        And SAAS - user types "12345" on unit selling price field
        And SAAS - user clicks on save unit selling price button
        And SAAS - user clicks on add unit selling price button of "Pack" unit
        And SAAS - user types "23456" on unit selling price field
        And SAAS - user clicks on save unit selling price button
        And SAAS - user clicks on submit add inventory button
        Then SAAS - user is redirected to inventory list page
        And SAAS - user deletes inventory "web automation test product" with delete reason = wrong input

    Scenario: User adds curated inventory with different stock uom & selling uom (custom + curated uom)
        When SAAS - user clicks on add inventory button
        And SAAS - user clicks on first time add inventory button
        And SAAS - user types "web automation test product" on search inventory input field
        And SAAS - user clicks on add custom inventory button
        And SAAS - user clicks on expand stock unit button
        And SAAS - user types "Karton" on search unit field
        And SAAS - user clicks on "Karton" unit checkbox
        And SAAS - user types "Pieces" on search unit field
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user types "random" on search unit field
        And SAAS - user clicks on add new unit button
        And SAAS - user clicks on choose unit button
        And SAAS - user clicks on sort up button of recently created unit
        And SAAS - user clicks on uom conversion next step button
        And SAAS - user types "2" on unit "Karton" conversion field
        And SAAS - user types "3" on recently created unit conversion field
        And SAAS - user clicks on uom conversion save button
        And SAAS - user types "100" on "Pieces" unit stock quantity field
        And SAAS - user types "2000" on "Pieces" unit price field
        And SAAS - user types "200" on "recently created" unit stock quantity field
        And SAAS - user types "3000" on "recently created" unit price field
        And SAAS - user types "400" on "Karton" unit stock quantity field
        And SAAS - user types "5000" on "Karton" unit price field
        And SAAS - user clicks on expand selling unit button
        And SAAS - user types "Karton" on search unit field
        And SAAS - user clicks on "Karton" unit checkbox
        And SAAS - user types recently created unit name on search unit field
        And SAAS - user clicks on "recently created" unit checkbox
        And SAAS - user types "Pack" on search unit field
        And SAAS - user clicks on "Pack" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user clicks on sort up button of unit "Pack"
        And SAAS - user clicks on uom conversion next step button
        And SAAS - user types "2" on unit "Karton" conversion field
        And SAAS - user types "2" on recently created unit conversion field
        And SAAS - user types "2" on unit "Pack" conversion field
        And SAAS - user clicks on uom conversion save button
        And SAAS - user clicks on add unit selling price button of "Karton" unit
        And SAAS - user types "12345" on unit selling price field
        And SAAS - user clicks on save unit selling price button
        And SAAS - user clicks on add unit selling price button of "Pack" unit
        And SAAS - user types "23456" on unit selling price field
        And SAAS - user clicks on save unit selling price button
        And SAAS - user clicks on add unit selling price button of "recently created" unit
        And SAAS - user types "23456" on unit selling price field
        And SAAS - user clicks on save unit selling price button
        And SAAS - user clicks on submit add inventory button
        Then SAAS - user is redirected to inventory list page
        And SAAS - user deletes inventory "web automation test product" with delete reason = wrong input