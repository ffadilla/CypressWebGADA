Feature: Checking the outbound request detail page

  Scenario: Login before test
    Given user already logged in to WMS as "superuser"

  Scenario: Check the outbound request detail data
    When user chooses menu Barang Keluar
    And user filters status by "Belum Selesai"
    And user wants to view the outbound detail data
    Then the outboundId shall be correct
    And the requestId shall be correct
    And the recipient name shall be correct
    And the delivery method shall be correct
    And the request status shall be correct
    And the shipment date on the outbound request list shall be correct

  Scenario: Back to outbound request list
    When user chooses menu Barang Keluar
    And user wants to view the outbound detail data
    And user goes back to the outbound request list page
    Then the outbound request default list will be showed

  Scenario: Logout after test
    Then user should be logged out
