Feature: Get Inbound Source History Data

  Background: 
    Given user already logged in to WMS as "superuser"
    And user redirects to inbound menu
    And user clicks "Sudah Selesai" status chip at inbound Request list
    And user applies "Cyp" to find related inbound Request
    When user clicks the first data on inbound Request table
    And user clicks Source CTA button at inbound Request detail

  Scenario: User successfully checks the historical receipt data at inbound Source detail page
    And user clicks historical reception button at inbound Source detail
    Then user should see similar inbound Source data between historical reception and request data
    And user should be able to download "Surat Jalan" document on inbound Source detail's history popup

    When user closes historical reception popup at inbound Source detail
    And user logs out from WMS