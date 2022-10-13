Feature: Get Inventory List

  Background: 
    Given user already logged in to WMS as "superuser"
    And user redirects to inventory menu

  Scenario Outline: User successfully using <keyword> to search <searchTarget> for inventory list
    When user applies <keyword> to find related inventory
    Then query param for <keyword> "keyword" should be added to inventory list URL
    And user should only able to see inventory with <searchTarget> matched <keyword>

    When user resets any applied keyword filter at inventory list
    Then query param for "null" "keyword" should be added to inventory list URL
    When user logs out from WMS

    Examples:
    | keyword           | searchTarget     |
    | "13713"           | "SKU"            |
    | "Indomie"         | "product name"   |
