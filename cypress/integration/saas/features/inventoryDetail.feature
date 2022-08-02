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
        And SAAS - user clicks on first stock unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user types "1" on first unit stock quantity field
        And SAAS - user types "1234" on first unit price field
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
        And SAAS - user types "1" on first unit stock quantity field
        And SAAS - user types "1234" on first unit price field
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
        And SAAS - user types "1" on first unit stock quantity field
        And SAAS - user types "1234" on first unit price field
        And SAAS - user clicks on expand selling unit button
        And SAAS - user types search unit field with "Pieces"
        And SAAS - user clicks on "Pieces" unit checkbox
        And SAAS - user clicks on choose unit button
        And SAAS - user clicks on add unit selling price button of unit "PIECES"
        And SAAS - user types "12345" on unit selling price field
        And SAAS - user clicks on save unit selling price button
        And SAAS - user clicks on submit add inventory button
        Then SAAS - user is redirected to inventory list page
        And SAAS - user deletes inventory "web automation test product" with delete reason = wrong input
