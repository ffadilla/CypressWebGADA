Feature: Checking the menu outbound request page

  Scenario: Login before test
    Given user already logged in to WMS as "superuser"

  Scenario: Check outbound request page
    When user chooses menu Barang Keluar
    Then the total outbound request should be correct
    And the previous page button will be disabled
    But the next page button will be clickable

  Scenario: Check outbound request next page
    When user chooses menu Barang Keluar
    And user goes to the second page
    Then the previous page button will be clickable
    And the next page button will be clickable

  Scenario Outline: Check outbound request pagination by <rows>
    When user chooses menu Barang Keluar
    And user chooses total <rows> data per page
    Then show total <rows> data request per page

  Examples:
    | rows  |
    | 15    |
    | 20    |
    | 25    |
    | 10    |

  Scenario: Search valid requestId
    When user chooses menu Barang Keluar
    And user inputs valid requestId
    Then show valid requestId search result

  Scenario: Search invalid requestId
    When user chooses menu Barang Keluar
    And user inputs ID "INVALID/00112233"
    Then show invalid ID search result "Pencarian Tidak Ditemukan"

  Scenario: Reset search requestId
    When user chooses menu Barang Keluar
    And user inputs ID "INVALID/00112233"
    And user deletes the search input
    Then show the outbound request default list

  Scenario Outline: Filter outbound requests by status <status>
    When user chooses menu Barang Keluar
    And user filters status by <status>
    Then show outbound requests result with status <status>
    And the total data with status <status> should be correct
  
  Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |
    | "Dibatalkan"      |

  Scenario Outline: Filter outbound request by selected delivery_date on <date>
    When user chooses menu Barang Keluar
    And user filters delivery_date by <date>
    Then show outbound request delivery_date on <date>
  
  Examples:
    | date        |
    | "today"     |
    | "yesterday" |
    | "9"         |

  Scenario: Reset the applied outbound request delivery_date filter
    When user chooses menu Barang Keluar
    And user filters delivery_date by "yesterday"
    And user resets the delivery_date filter back to default
    Then show default list with delivery_date filter as "Semua Hari"

  Scenario Outline: Filter outbound request delivery_method by <method>
    When user chooses menu Barang Keluar
    And user filters delivery_method by <method>
    Then show outbound request delivery_method by <method>

  Examples:
    | method          |
    | "SELF PICKUP"   |
    | "STORE COURIER" |
    | "GADA LOGISTIC" |

  Scenario: Reset the applied outbound request delivery_method filter
    When user chooses menu Barang Keluar
    And user filters delivery_method by "GADA LOGISTIC"
    And user changes delivery_method filter back to default
    Then show default list with delivery_method filter as "all"

  Scenario: Logout after test
    Then user should be logged out
