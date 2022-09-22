Feature: Checking the outbound request detail page

  Scenario: Login before test
    Given user already logged in to WMS as "superuser"

  Scenario: Check the outbound request detail data
    When user chooses menu Barang Keluar
    And user wants to view the outbound detail data
    Then the outboundId should be correct
    And the requestId should be correct
    And the recipient name should be correct
    And the delivery method should be correct
    And the request status should be correct
    And the shipment date should be correct

  Scenario: Back to outbound request list
    When user chooses menu Barang Keluar
    And user wants to view the outbound detail data
    And user goes back to the outbound request list page
    Then show the outbound request default list

  Scenario: Logout after test
    Then user should be logged out
