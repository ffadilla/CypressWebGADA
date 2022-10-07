Feature: Checking the shipment process detail page

  Scenario: Login before test
    Given user already logged in to WMS as "superuser"

  Scenario: Check the shipment process detail data
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user filters status by "Belum Selesai"
    And user wants to view the shipment detail data
    Then the shipmentId shall be correct
    And the outbound type shall be correct
    And the shipment date on the outbound shipment list shall be correct
    And the shipment recipient name shall be correct
    And the shipment method shall be correct
    And the outboundId shall be corect
    And the outbound request date shall be correct
    And the shipment status shall be correct
    And the total outbound request shall be correct
    And the submit button will be disabled
    And the CTA shipment cancelation text link will be enabled

  Scenario: Download the outbound list
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user filters status by "Belum Selesai"
    And user wants to view the shipment detail data
    And user downloads the travel document file
    Then the outbound list file shall be downloaded successfully

  Scenario: Logout after test
    Then user should be logged out
