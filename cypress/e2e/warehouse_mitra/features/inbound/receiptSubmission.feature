Feature: Get Inbound Receipt

  Background: 
    Given user already logged in to WMS as "superuser"
    And user redirects to inbound menu
    And user applies "Cyp" to find related inbound Request
    And user clicks "Belum Selesai" status chip at inbound Request list
    And user clicks the first data on inbound Request table
    And user click create Receipt data at inbound Request detail page

  Scenario: Fail to submit new inbound Receipt with null form
    When user deletes allocated quantity on inbound Receipt form
    When user clicks submit inbound Receipt button
    Then user should be able to see error messages on mandatory fields
    
    When user logs out from WMS