Feature: Create Inbound Source

    Background:
        Given Mitra - user "cypress_su@mail.com" already logged in to WMS with "warehouse" as password

    Scenario: Fail to create a new inbound Source/Request with null form
        When Mitra - user redirects to inbound menu
        And Mitra - user clicks create inbound request button
        And Mitra - user selects new inbound request dropdown
        And Mitra - user clicks submission button
        Then Mitra - error messages should appear at create new inbound Request form 