Feature: Get Inbound Receipt

  Background: 
    Given user already logged in to WMS as "superuser"
    And user redirects to inbound Request menu
    And user clicks create new inbound request button
    And user creates a new inbound Source Request
    And user applies "created Source ID" to find related inbound Request
    And user clicks the first data on inbound Request table

  Scenario: User successfully creates new inbound receipt from request detail page
    When user click create Receipt data at inbound Request detail page
    Then user should be at "Belum Selesai" inbound Receipt detail page
    And user should see similar inbound Receipt data between detail page and Request data

    And user redirects to inbound Request menu
    And user clicks the first data on inbound Request table
    Then user should be at "Sedang Diproses" inbound Request detail page

    When user clicks Source CTA button at inbound Request detail
    And user cancels Source at inbound Source detail
    And user logs out from WMS

  Scenario: User successfully creates new inbound receipt from create receipt popup
    When user retrieves data from inbound Request detail page 
    And user redirects to inbound Receipt menu
    And user clicks create inbound Receipt button
    And user fills create inbound Receipt popup with 1 retrieved Request data
    Then user should be at "Belum Selesai" inbound Receipt detail page
    And user should see similar inbound Receipt data between detail page and Request data

    And user redirects to inbound Request menu
    And user clicks the first data on inbound Request table
    Then user should be at "Sedang Diproses" inbound Request detail page

    When user clicks Source CTA button at inbound Request detail
    And user cancels Source at inbound Source detail
    And user logs out from WMS

  Scenario: User successfully creates new inbound receipt from create receipt popup (with global filter applied)
    When user retrieves data from inbound Request detail page 
    And user redirects to inbound Receipt menu
    And user applies "25" as page amount at inbound Receipt list
    And user applies "Warehouse Mitra Cypress" and its store as global filters at inbound Receipt list
    And user clicks create inbound Receipt button
    Then user should see "Warehouse Mitra Cypress" applied as warehouse store dropdown on inbound Receipt popup
    
    When user fills create inbound Receipt popup with 1 retrieved Request data when global filter was applied
    Then user should be at "Belum Selesai" inbound Receipt detail page
    And user should see similar inbound Receipt data between detail page and Request data

    And user redirects to inbound Request menu
    And user clicks the first data on inbound Request table
    Then user should be at "Sedang Diproses" inbound Request detail page

    When user clicks Source CTA button at inbound Request detail
    And user cancels Source at inbound Source detail
    And user logs out from WMS