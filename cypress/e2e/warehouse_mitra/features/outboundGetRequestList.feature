Feature: Checking the outbound request list Page

  Scenario: Login before test
    Given user already logged in to WMS as "superuser"
    And user chooses menu Barang Keluar

  Scenario: Check the default outbound request list
    When user selects menu Permintaan Barang
    Then user will be "redirected" to the outbound request list page
    And the total outbound request shall be correct
    And the default search bar shall be empty
    And the default filter date shall be "Semua Hari"
    And the add outbound request button will be clickable
    And the previous page button will be disabled
    But the next page button will be clickable

  Scenario: Check the second page of the outbound request list
    When user goes to the outbound second page
    Then the total outbound request on the next page shall be correct
    And the previous page button will be clickable
    And the next page button will be clickable
    And the default filter date shall be "Semua Hari"
    And the add outbound request button will be clickable
    And the default search bar shall be empty

  Scenario Outline: Check the total outbound request list per page
    When user chooses total <rows> data per page
    Then the total row of the outbound request list will be <rows> rows per page

  Examples:
    | rows  |
    | 15    |
    | 20    |
    | 25    |
    | 10    |

  Scenario: Check the searched outbound request list by valid outbound ID
    When user searches for an outbound current valid outboundId
    Then the expected "outbound request" list will be showed

  Scenario: Check the searched outbound request list by invalid outbound ID
    When user searches for an outbound invalid outboundId
    Then the error message "Pencarian Tidak Ditemukan" will be showed

  Scenario: Check the outbound request list after clearing the search bar
    When user selects menu Permintaan Barang
    And user searches for an outbound invalid outboundId
    Then the error message "Pencarian Tidak Ditemukan" will be showed

    When user clears the search input
    Then the default outbound request list will be showed
    And the default search bar shall be empty

  Scenario Outline: Check the filtered outbound request list by selected status
    When user filters status by <status>
    Then the outbound request list with status <status> will be showed
    And the total outbound request on status shall be correct
  
  Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |
    | "Dibatalkan"      |

  Scenario Outline: Check the filtered outbound request list by selected delivery_date
    When user filters status by "Semua Status"
    And user filters outbound delivery_date by <date>
    Then the outbound request list with delivery_date on <date> will be showed
  
  Examples:
    | date        |
    | "today"     |
    | "15"         |

  Scenario: Check the outbound request list after resetting the delivery_date filter
    When user resets the delivery_date filter back to default
    Then the default filter date shall be "Semua Hari"

  Scenario Outline: Check the filtered outbound request list by selected delivery_method
    When user filters delivery_method by <method>
    Then the outbound request list with delivery_method by <method> will be showed

  Examples:
    | method          |
    | "SELF PICKUP"   |
    | "STORE COURIER" |
    | "GADA LOGISTIC" |

  Scenario: Check the outbound request list after resetting the delivery_method filter
    When user changes delivery_method filter back to default
    Then the default query param for delivery_method will be "all"

  Scenario: Logout after test
    Then user should be logged out