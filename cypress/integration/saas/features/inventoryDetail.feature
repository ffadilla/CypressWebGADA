Feature: Inventory Detail

    Background:
        Given SAAS - user "8408418423" is logged in
        And SAAS - user clicks on inventory list side menu button

    Scenario: User adds curated inventory with all mandatory fields
        When SAAS - user clicks on add inventory button
        And SAAS - user clicks on first time add inventory button
        And SAAS - user types inventory name field with "Beras SLYP Medium Ramos Setra 50 Kg"
        And SAAS - user clicks add inventory button of inventory "Beras SLYP Medium Ramos Setra 50 Kg"
        And SAAS - user clicks on expand stock unit button
        And SAAS - user types search unit field with "Sak"
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
        And SAAS - user types inventory name field with "web automation test product"
        And SAAS - user clicks on add custom inventory button
        And SAAS - user clicks on expand stock unit button
        And SAAS - user types search unit field with "Pieces"
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
        And SAAS - user types inventory name field with "web automation test product"
        And SAAS - user clicks on add custom inventory button
        And SAAS - user clicks on expand stock unit button
        And SAAS - user types search unit field with "Pieces"
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user types "1" on "Pieces" unit stock quantity field
        And SAAS - user types "1234" on "Pieces" unit price field
        And SAAS - user clicks on expand selling unit button
        And SAAS - user types search unit field with "Pieces"
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user clicks on add unit selling price button of unit "Pieces"
        And SAAS - user types "12345" on unit selling price field
        And SAAS - user clicks on save unit selling price button
        And SAAS - user clicks on submit add inventory button
        Then SAAS - user is redirected to inventory list page
        And SAAS - user deletes inventory "web automation test product" with delete reason = wrong input

    Scenario: User adds custom inventory with multiple stock UOMs & selling UOMs
        When SAAS - user clicks on add inventory button
        And SAAS - user clicks on first time add inventory button
        And SAAS - user types inventory name field with "web automation test product"
        And SAAS - user clicks on add custom inventory button
        And SAAS - user clicks on expand stock unit button
        And SAAS - user types search unit field with "Pieces"
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user types search unit field with "Karton"
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
        And SAAS - user types search unit field with "Pieces"
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user types search unit field with "Karton"
        And SAAS - user clicks on "Karton" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user clicks on add unit selling price button of unit "Pieces"
        And SAAS - user types "12345" on unit selling price field
        And SAAS - user clicks on save unit selling price button
        And SAAS - user clicks on add unit selling price button of unit "Karton"
        And SAAS - user types "23456" on unit selling price field
        And SAAS - user clicks on save unit selling price button
        And SAAS - user clicks on submit add inventory button
        Then SAAS - user is redirected to inventory list page
        And SAAS - user deletes inventory "web automation test product" with delete reason = wrong input
