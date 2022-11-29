Feature: Checking the shipment process detail page

  Scenario: Login before test
    Given user already logged in to WMS as "superuser"
    When user chooses menu Barang Keluar

  Scenario: Check the shipment process detail data
    When user selects menu Pengiriman Barang
    Then user will be "redirected" to the shipment process list page

    When user filters status by "Belum Selesai"
    Then the shipment process list with status "Belum Selesai" will be showed

    When user searches for the "current" shipment process
    Then the expected "shipment process" list will be showed

    When user selects the current shipment process
    Then user will be redirected to the shipment process detail page
    And the CTA download outbound list will be enabled
    And user will see similar data between data on the shipment process list page and data on the detail page
    And the subtract button will be enabled
    And the add button will be disabled
    And the add other UOM button will be enabled
    And the default soon-to-be sent "amount" shall be correct
    And the default soon-to-be sent "UOM" shall be correct
    And there will be no discrepancy amount
    And the CTA Lihat Expiry Date text link will be enabled
    And the default discrepancy reason will be "-"
    And the button confirmation will be enabled
    And the checkbox for the next shipment will be disabled
    And the button all items confirmation should be disabled
    And the CTA upload travel document will be enabled
    And the submit button will be disabled
    And the CTA shipment cancelation text link will be enabled

  Scenario: Logout after test
    Then user should be logged out
