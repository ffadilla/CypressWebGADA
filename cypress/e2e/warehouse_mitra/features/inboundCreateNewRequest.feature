Feature: Create Inbound Source

  Background: 
    Given user "cypress_su@mail.com" already logged in to WMS with "warehouse" as password

  Scenario: Fail to create a new inbound Source/Request with null form
    When user redirects to inbound menu
    And user clicks create inbound request button
    And user selects new inbound request dropdown
    And user clicks submission button
    Then error messages should appear at create new inbound Request form

    Scenario: User successfully create a new inbound Source/Request
        When user redirects to inbound menu
        And user clicks create inbound request button
        And user selects new inbound request dropdown
        And user fills inbound Source ID
        And user selects "Pembelian" as inbound type
        And user selects the first options of "Faris" on store name dropdown
        And user selects the first options of "Warehouse" on warehouse name dropdown
        And user selects the first options of "Faris" on target store name dropdown
        And user selects date "11" as Source date
        And user selects date "22" as delivery date
        And user selects "SELF PICKUP" as delivery method
        And user selects the first options of "Indo" as first product name
        And user inputs "20" as first product amount
    And user clicks submission button