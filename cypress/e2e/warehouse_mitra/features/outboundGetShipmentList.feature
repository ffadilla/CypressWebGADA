Feature: Checking the outbound shipment process page

  Scenario: Login before test
    Given user already logged in to WMS as "superuser"

  Scenario: Check outbound shipment page
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    Then the total outbound shipment shall be correct
    And the previous page button will be disabled
    But the next page button will be clickable

  Scenario: Check outbound shipment next page
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user goes to the second page
    Then the previous page button will be clickable
    And the next page button will be clickable

  Scenario Outline: Check outbound shipment pagination by <rows>
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user chooses total <rows> data per page
    Then the total row of the outbound shipment list will be <rows> rows per page
  
  Examples:
    | rows  |
    | 15    |
    | 20    |
    | 25    |
    | 10    |

  Scenario: Search valid shipmentId
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user inputs valid shipmentId
    Then the shipmentId result will be showed

  Scenario: Search invalid shipmentId
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user inputs ID "INVALID/00112233"
    Then the error message "Pencarian Tidak Ditemukan" will be showed

  Scenario: Reset search shipmentId
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user inputs ID "INVALID/00112233"
    And user deletes the search input
    Then the outbound shipment default list will be showed

  Scenario Outline: Filter outbound shipments by status <status>
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user filters status by <status>
    Then the outbound shipment result with status <status> will be showed
    And the total data with status <status> shall be correct
  
  Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |

  Scenario Outline: Filter outbound shipment by selected delivery_date on <date>
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user filters delivery_date by <date>
    Then the outbound shipment delivery_date on <date> will be showed
    
  Examples:
    | date        |
    | "today"     |
    | "yesterday" |
    | "8"        |

  Scenario: Reset the applied outbound shipment delivery_date filter
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user filters delivery_date by "today"
    And user resets the delivery_date filter back to default
    Then the default list with delivery_date as "Semua Hari" for the "outbound shipment" will be showed

  Scenario Outline: Filter outbound shipment delivery_method by <method>
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user filters delivery_method by <method>
    Then the outbound shipment delivery_method by <method> will be showed

  Examples:
    | method          |
    | "SELF PICKUP"   |
    | "STORE COURIER" |
    | "GADA LOGISTIC" |

  Scenario: Reset the applied outbound shipment delivery_method filter
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user filters delivery_method by "GADA LOGISTIC"
    And user changes delivery_method filter back to default
    Then the default list with delivery_method filter as "all" for the "outbound shipment" will be showed

  Scenario: Logout after test
    Then user should be logged out
