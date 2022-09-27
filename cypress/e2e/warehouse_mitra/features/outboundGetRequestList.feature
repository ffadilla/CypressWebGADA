Feature: Checking the outbound request page

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
    Then the total row of the outbound request list will be <rows> rows per page

  Examples:
    | rows  |
    | 15    |
    | 20    |
    | 25    |
    | 10    |

  Scenario: Search valid requestId
    When user chooses menu Barang Keluar
    And user inputs valid requestId
    Then the requestId result will be showed

  Scenario: Search invalid requestId
    When user chooses menu Barang Keluar
    And user inputs ID "INVALID/00112233"
    Then the error message "Pencarian Tidak Ditemukan" will be showed

  Scenario: Reset search requestId
    When user chooses menu Barang Keluar
    And user inputs ID "INVALID/00112233"
    And user deletes the search input
    Then the outbound request default list will be showed

  Scenario Outline: Filter outbound requests by status <status>
    When user chooses menu Barang Keluar
    And user filters status by <status>
    Then show outbound requests result with status <status>
    And the total data with status <status> shall be correct
  
  Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |
    | "Dibatalkan"      |

  Scenario Outline: Filter outbound request by selected delivery_date on <date>
    When user chooses menu Barang Keluar
    And user filters delivery_date by <date>
    Then the outbound request delivery_date on <date> will be showed
  
  Examples:
    | date        |
    | "today"     |
    | "yesterday" |
    | "6"         |

  Scenario: Reset the applied outbound request delivery_date filter
    When user chooses menu Barang Keluar
    And user filters delivery_date by "yesterday"
    And user resets the delivery_date filter back to default
    Then the default list with delivery_date as "Semua Hari" for the "outbound request" will be showed

  Scenario Outline: Filter outbound request delivery_method by <method>
    When user chooses menu Barang Keluar
    And user filters delivery_method by <method>
    Then the outbound request delivery_method by <method> will be showed

  Examples:
    | method          |
    | "SELF PICKUP"   |
    | "STORE COURIER" |
    | "GADA LOGISTIC" |

  Scenario: Reset the applied outbound request delivery_method filter
    When user chooses menu Barang Keluar
    And user filters delivery_method by "GADA LOGISTIC"
    And user changes delivery_method filter back to default
    Then the default list with delivery_method filter as "all" for the "outbound request" will be showed

  Scenario: Logout after test
    Then user should be logged out
