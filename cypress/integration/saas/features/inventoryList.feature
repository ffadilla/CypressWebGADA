Feature: Inventory List

    Background:
        Given SAAS - a new user is registered
        And SAAS - user clicks on inventory list side menu button

    Scenario: User searches for inventory by name and clicks tambah barang
        When SAAS - user clicks add inventory button
        And SAAS - user clicks first time add inventory button
        And SAAS - user types inventory name field with "Web Automation Test Product"
        And SAAS - user clicks add custom inventory button
        Then SAAS - "Web Automation Test Product" is displayed as product variant name
