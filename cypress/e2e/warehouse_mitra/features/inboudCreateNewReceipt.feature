Feature: Get Inbound Receipt

  Background: 
    Given user already logged in to WMS as "superuser"

  Scenario Outline: User successfully creates new inbound receipt from request detail page
    When user redirects to inbound menu
    And user clicks "Belum Selesai" status chip at inbound Request list
    And user applies "Cyp" to find related inbound Request
    And user clicks the first data on inbound Request table
    And user click create Receipt data at inbound Request detail page
    Then user should be at "Belum Selesai" inbound Receipt detail page
    And user should see similar inbound Receipt data between detail page and Request data
    When user logs out from WMS