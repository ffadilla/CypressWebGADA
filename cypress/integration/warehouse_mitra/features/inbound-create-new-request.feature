Feature: Create Inbound Source

    Background:
        Given Mitra - user "cypress_su@mail.com" already logged in to WMS with "warehouse" as password

    Scenario: Fail to create a new inbound Source/Request with null form
        When Mitra - user redirects to inbound menu
        And Mitra - user clicks create inbound request button
        And Mitra - user selects new inbound request dropdown
        And Mitra - user clicks submission button
        Then Mitra - error messages should appear at create new inbound Request form 
@focus         
    Scenario: User successfully create a new inbound Source/Request
        When Mitra - user redirects to inbound menu
        And Mitra - user clicks create inbound request button
        And Mitra - user selects new inbound request dropdown
        And Mitra - user fills inbound Source ID
        And Mitra - user selects "Permintaan" inbound type
        And Mitra - user search "Faris" on store name dropdown
        And Mitra - user search "Warehouse Siraf" on warehouse name dropdown
        And Mitra - user search "Faris" on target store name dropdown
        And Mitra - user selects Source date
        And Mitra - user selects delivery date
        And Mitra - user selects "SELF PICKUP" delivery method
        And Mitra - user selects first product name
        And Mitra - user selects first product amount
        And Mitra - user selects second product name
        And Mitra - user selects second product amount
        And Mitra - user clicks submission button