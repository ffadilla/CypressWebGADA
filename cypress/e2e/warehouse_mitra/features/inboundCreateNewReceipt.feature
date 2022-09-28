Feature: Get Inbound Receipt

  Background: 
    Given user already logged in to WMS as "superuser"
    And user redirects to inbound menu
    And user clicks create new inbound request button
    And user creates a new inbound Source Request
    And user applies "created Source ID" to find related inbound Request
    And user clicks the first data on inbound Request table

  Scenario Outline: User successfully creates new inbound receipt from request detail page
    When user click create Receipt data at inbound Request detail page
    Then user should be at "Belum Selesai" inbound Receipt detail page
    And user should see similar inbound Receipt data between detail page and Request data

    When user redirects to inbound menu
    And user clicks the first data on inbound Request table
    Then user should be at "Sedang Diproses" inbound Request detail page

    When user clicks Source CTA button at inbound Request detail
    And user cancels Source at inbound Source detail
    And user logs out from WMS

  Scenario Outline: User successfully creates new inbound receipt from create receipt popup
    When user retrieves data from inbound Request detail page 
    And user redirects to inbound menu
    And user clicks inbound Receipt list tab
    And user clicks create inbound Receipt button
    And user fills create inbound Receipt popup with 1 retrieved Request data
    Then user should be at "Belum Selesai" inbound Receipt detail page
    And user should see similar inbound Receipt data between detail page and Request data

    When user redirects to inbound menu
    And user clicks the first data on inbound Request table
    Then user should be at "Sedang Diproses" inbound Request detail page

    When user clicks Source CTA button at inbound Request detail
    And user cancels Source at inbound Source detail
    And user logs out from WMS