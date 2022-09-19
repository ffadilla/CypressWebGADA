Feature: Checking the shipment process page

  Scenario: Login before test
    Given user already logged in to WMS as "superuser"

  Scenario: Check outbound shipment page
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    Then the total outbound shipment should be correct
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
    Then show total <rows> data shipment per page
  
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
    Then show valid shipmentId search result

  Scenario: Search invalid shipmentId
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user inputs ID "INVALID/00112233"
    Then show invalid ID search result "Pencarian Tidak Ditemukan"

  Scenario: Reset search shipmentId
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user inputs ID "INVALID/00112233"
    And user deletes the search input
    Then show the outbound shipment default list

  Scenario Outline: Filter outbound shipments by status <status>
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user filters status by <status>
    Then show outbound shipments result with status <status>
    And the total data with status <status> should be correct
  
  Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |

  Scenario Outline: Filter outbound shipment by selected delivery_date on <date>
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user filters delivery_date by <date>
    Then show outbound shipment delivery_date on <date>  
    
  Examples:
    | date        |
    | "today"     |
    | "yesterday" |
    | "10"        |

  Scenario: Reset the applied outbound shipment delivery_date filter
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user filters delivery_date by "today"
    And user resets the delivery_date filter back to default
    Then show default list with delivery_date filter as "Semua Hari"

  Scenario Outline: Filter outbound shipment delivery_method by <method>
    When user chooses menu Barang Keluar
    And user chooses Shipment Process page
    And user filters delivery_method by <method>
    Then show outbound shipment delivery_method by <method>

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
    Then show default list with delivery_method filter as "all"

  Scenario: Logout after test
    Then user should be logged out
