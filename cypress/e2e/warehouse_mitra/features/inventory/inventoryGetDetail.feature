Feature: Get Inventory Detail

  Background: 
    Given user already logged in to WMS as "superuser"

  Scenario: User successfully redirects to inventory detail page
    When user redirects to inventory menu
    And user applies '15' as page amount at inventory list
    And user applies "Warehouse Mitra Cypress" and its store as global filters
    And user clicks any data on inventory list table
    Then user should be at inventory detail page
    And user should see similar SKU data between detail page and inventory list
    And user should see disabled global filter dropdown

    When user logs out from WMS

  Scenario Outline: User successfully filters expiry batch table by <pageAmount> page amount at inventory detail page
    When user redirects to inventory menu
    And user clicks any data on inventory list table
    Then user should be at inventory detail page

    When user applies <pageAmount> as page amount of "expiry batch" table at inventory detail
    Then query param for <pageAmount> "invExpBatchRowsPerPage" should be added to inventory detail URL
    And user should see disabled global filter dropdown

    When user logs out from WMS
    
    Examples:
    | pageAmount    |
    | "15"          |
    | "20"          |
    | "25"          |

  Scenario Outline: User successfully filters inventory movement by <pageAmount> page amount at inventory detail page
    When user redirects to inventory menu
    And user clicks any data on inventory list table
    Then user should be at inventory detail page

    When user applies <pageAmount> as page amount of "inventory movement" table at inventory detail
    Then query param for <pageAmount> "invMoveLogsRowsPerPage" should be added to inventory detail URL
    And user should see disabled global filter dropdown

    When user logs out from WMS
    
    Examples:
    | pageAmount    |
    | "15"          |
    | "20"          |
    | "25"          |