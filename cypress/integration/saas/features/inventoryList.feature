Feature: Inventory List

    Background:
        Given SAAS - user "8408418423" is logged in
        And SAAS - user clicks on inventory list side menu button

    Scenario: User searches for inventory by name and clicks tambah barang
        When SAAS - user clicks on add inventory button
        And SAAS - user clicks on first time add inventory button
        And SAAS - user types inventory name field with "Web Automation Test Product"
        And SAAS - user clicks on add custom inventory button
        Then SAAS - "Web Automation Test Product" is displayed as product variant name
