Feature: Create Inbound Source

  Background: 
    Given user already logged in to WMS as "superuser"
    And user redirects to inbound menu

  Scenario: Fail to create a new inbound Source/Request with null form
    And user clicks create new inbound request button
    And user clicks new inbound request form submission button
    Then empty error messages for single Request should appear at create new inbound Request form
    When user logs out from WMS

  Scenario: User successfully create a new inbound Source/Request
    And user clicks create new inbound request button
    And user fills inbound Source ID at new inbound request form
    And user selects the first options of <storeKeyword> on store name dropdown at new inbound request form
    And user selects <inboundType> as inbound type at new inbound request form
    And user selects the first options of <warehouseKeyword> on warehouse name dropdown at new inbound request form
    And user selects the first options of <targetStoreKeyword> on target store name dropdown at new inbound request form
    And user selects date <sourceDate> as Source date at new inbound request form
    And user selects date <deliveryDate> as delivery date at new inbound request form
    And user selects <deliveryMethod> as delivery method at new inbound request form
    And user selects the first options of <productName> as first product name at new inbound request form
    And user inputs <productQty> as first product amount at new inbound request form
    And user clicks new inbound request form submission button
    Then user should be at inbound Request list
    And user should able to see 'created' Request at inbound Request list

    When user clicks the first data on inbound Request table
    Then user should be at 'Belum Selesai' inbound Request detail page
    And user should see similar inbound Request data between detail page and inbound form

    When user clicks Source CTA button at inbound Request detail
    Then user should be at inbound Source detail page with 'Belum Selesai' Request
    And user should see similar inbound Source data between detail page and inbound form
    
    When user cancels Source at inbound Source detail
    And user logs out from WMS

    Examples:
      | inboundType | storeKeyword  | warehouseKeyword  | targetStoreKeyword  | sourceDate  | deliveryDate | deliveryMethod | productName | productQty |
      | "Pembelian" | "Faris"       | "Warehouse"       | "Faris"             | 11          | 22           | "SELF PICKUP"  | "Indo"      | 20         |