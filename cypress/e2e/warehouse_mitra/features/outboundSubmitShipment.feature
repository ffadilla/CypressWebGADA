Feature: Completing the outbound shipment process from Incomplete to Complete

  Scenario: Login before test
    Given user already logged in to WMS as "superuser"

  Scenario: Confirm and submit the outbound shipment process
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user filters status by "Belum Selesai"
    And user wants to view the shipment detail data
    And user confirms the first total outbound list for shipment process
    And user confirms all the total outbound
    And user downloads the travel document file
    And user attaches the travel document file
    And user submits the shipment process
    Then the shipment status will be changed to "Sudah Selesai"

  Scenario: Logout after test
    Then user should be logged out