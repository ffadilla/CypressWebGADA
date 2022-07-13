Feature: Inventory Detail

    Background:
        Given SAAS - a new user is registered
        And SAAS - user clicks on inventory list side menu button

    Scenario: User adds custom inventory with mandatory fields
        When SAAS - user clicks on add inventory button
        And SAAS - user clicks on first time add inventory button
        And SAAS - user types inventory name field with "Web Automation Test Product"
        And SAAS - user clicks on add custom inventory button
        And SAAS - user clicks on choose expand stock unit button
        And SAAS - user types search stock unit field with "Pieces"
        And SAAS - user clicks on "Pieces" stock unit checkbox
        And SAAS - user clicks on choose stock unit button
        And SAAS - user types "1" on first unit stock quantity field
        And SAAS - user types "1234" on first unit price field
        And SAAS - user clicks on submit add inventory button
        Then SAAS - user is redirected to inventory list page
