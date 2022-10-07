Feature: Cancel Inbound Receipt

  Background: 
    Given user already logged in to WMS as "superuser"
    And user redirects to inbound menu
    And user applies "Cyp" to find related inbound Request
    And user clicks "Belum Selesai" status chip at inbound Request list
    And user clicks the first data on inbound Request table
    And user click create Receipt data at inbound Request detail page

  Scenario: User successfully cancels created inbound receipt
    When user cancels Receipt at inbound Receipt detail page
    Then user should be at inbound Receipt list
    Then user should able to see "succeeded Receipt cancelation" snackbar at inbound Receipt list

    When user redirects to the previous visited page
    Then user should be at 'Dibatalkan' inbound Receipt detail page

    When user logs out from WMS