Feature: Create Inbound Source

  Background: 
    Given user already logged in to WMS as "superuser"

  Scenario: Fail to create a new inbound Source/Request with null form
    When user redirects to inbound menu
    And user clicks create inbound request button
    And user selects new inbound request dropdown
    And user clicks new inbound request form submission button
    Then empty error messages for single Request should appear at create new inbound Request form
    When user logs out from WMS

  Scenario: User successfully create a new inbound Source/Request
    When user redirects to inbound menu
    And user clicks create inbound request button
    And user selects new inbound request dropdown
    And user fills inbound Source ID at new inbound request form
    And user selects "Pembelian" as inbound type at new inbound request form
    And user selects the first options of "Faris" on store name dropdown at new inbound request form
    And user selects the first options of "Warehouse" on warehouse name dropdown at new inbound request form
    And user selects the first options of "Faris" on target store name dropdown at new inbound request form
    And user selects date "11" as Source date at new inbound request form
    And user selects date "22" as delivery date at new inbound request form
    And user selects "SELF PICKUP" as delivery method at new inbound request form
    And user selects the first options of "Indo" as first product name at new inbound request form
    And user inputs "20" as first product amount at new inbound request form
    And user clicks new inbound request form submission button
    Then user should be at inbound Request list
    When user logs out from WMS