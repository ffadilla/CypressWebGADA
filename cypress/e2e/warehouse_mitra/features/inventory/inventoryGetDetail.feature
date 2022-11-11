Feature: Get Inventory Detail

  Background: 
    Given user already logged in to WMS as "superuser"

  Scenario: User successfully redirects to inventory detail page
    When user redirects to inventory menu
    And user applies '15' as page amount at inventory list
    And user applies "Warehouse Mitra Cypress" and its store as global filters
    And user clicks any data on inventory list table
    Then user should see similar SKU data between detail page and inventory list
    And user should see disabled global filter dropdown

    When user logs out from WMS