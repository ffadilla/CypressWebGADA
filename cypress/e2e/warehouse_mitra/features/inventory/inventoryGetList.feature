Feature: Get Inventory List

  Background: 
    Given user already logged in to WMS as "superuser"

  Scenario Outline: User successfully using <keyword> to search <searchTarget> for inventory list
    When user redirects to inventory menu
    And user applies <keyword> to find related inventory
    Then query param for <keyword> "search" should be added to inventory list URL
    And user should only able to see SKU with <searchTarget> matched <keyword>

    When user resets any applied keyword filter at inventory list
    Then query param for "null" "search" should be added to inventory list URL
    
    When user logs out from WMS

    Examples:
    | keyword           | searchTarget     |
    | "13713"           | "SKU"            |
    | "Indomie"         | "product name"   |

   Scenario Outline: User successfully filters inventory list by <pageAmount> page amount
    When user redirects to inventory menu
    And user applies <pageAmount> as page amount at inventory list
    Then query param for <pageAmount> "rowsPerPage" should be added to inventory list URL
    And user should only able to see <pageAmount> SKU per page maximum
    
    When user logs out from WMS

    Examples:
    | pageAmount    |
    | "15"          |
    | "20"          |
    | "25"          |

   Scenario: User successfully turn off and on hide zero quantity toggle at inventory list
    When user redirects to inventory menu
    And user applies '25' as page amount at inventory list
    And user clicks hide zero quantity toggle at inventory list
    Then query param for "false" "hide_zero_qty" should be added to inventory list URL
    And user should only able to see SKU with "any" "quantity"

    When user clicks hide zero quantity toggle at inventory list
    Then query param for "true" "hide_zero_qty" should be added to inventory list URL
    And user should only able to see SKU with "non null" "quantity"
    
    When user logs out from WMS

   Scenario: User successfully filters inventory list based on latest movement date
    When user redirects to inbound Request menu
    And user clicks create new inbound request button
    And user creates a new inbound Source Request
    And user applies "created Source ID" to find related inbound Request
    And user clicks the first data on inbound Request table
    And user click create Receipt data at inbound Request detail page
    And user submits created inbound Receipt
    
    When user redirects to inventory menu
    And user applies "today's date" as filter date at inventory list
    Then query param for "input" "updated_at" should be added to inventory list URL
    And user should only able to see SKU with "today" "last updated"
    
    When user logs out from WMS