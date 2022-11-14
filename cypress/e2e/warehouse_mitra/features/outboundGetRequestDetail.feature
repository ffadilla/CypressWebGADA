Feature: Checking the outbound request detail page

  Scenario: Login before test
    Given user already logged in to WMS as "superuser"
    When user chooses menu Barang Keluar

  Scenario: Check the outbound request detail
    When user selects menu Permintaan Barang
    Then user will be "redirected" to the outbound request list page

    When user filters status by "Belum Selesai"
    Then the outbound request list with status "Belum Selesai" will be showed

    When user selects the current outbound request
    Then user will be redirected to the outbound request detail page
    And user will see similar data between data on the outbound request list page and data on the detail page
    And the send outbound button will be enabled
    And the back button will be visible

  Scenario: Back to the outbound request list
    When user chooses to go back
    Then user will be "redirected back" to the outbound request list page

  Scenario: Logout after test
    Then user should be logged out