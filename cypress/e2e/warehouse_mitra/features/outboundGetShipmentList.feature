Feature: Checking the shipment process list page

  Scenario: Login before test
    Given user already logged in to WMS as "superuser"
    And user chooses menu Barang Keluar

  Scenario: Check the default shipment process list
    When user selects menu Pengiriman Barang
    Then user will be "redirected" to the shipment process list page
    And the total "shipment process" shall be correct
    And the default search bar shall be empty
    And the default filter date shall be correct
    And the add shipment process button will be clickable
    And the previous page button will be disabled
    But the next page button will be clickable

  Scenario: Check the second page of the shipment process list
    When user goes to the "shipment process" second page
    Then user will be redirected to the second page of shipment process
    And the total "shipment process" on the next page shall be correct
    And the previous page button will be clickable
    And the next page button will be clickable
    And the default filter date shall be correct
    And the add shipment process button will be clickable
    And the default search bar shall be empty

  Scenario Outline: Check the total shipment process list per page
    When user chooses total <rows> data per page
    Then the total row of the shipment process list will be correct
  
  Examples:
    | rows  |
    | 15    |
    | 20    |
    | 25    |
    | 10    |

  Scenario: Check the searched shipment process list by valid outbound ID
    When user searches for the "current" shipment process
    Then the expected "shipment process" list will be showed

  Scenario: Check the searched shipment process list by invalid outbound ID
    When user searches for the "invalid" shipment process
    Then the error message "Pencarian Tidak Ditemukan" will be showed

  Scenario: Check the shipment process list after clearing the search bar
    When user selects menu Pengiriman Barang
    And user searches for the "invalid" shipment process
    Then the error message "Pencarian Tidak Ditemukan" will be showed
    
    When user clears the search input
    Then the default shipment process list will be showed
    And the default search bar shall be empty

  Scenario Outline: Check the filtered shipment process list by selected status
    When user filters status by <status>
    Then the shipment process list with status <status> will be showed
    And the total "shipment process" on the selected status shall be correct
  
  Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |

  Scenario Outline: Check the filtered shipment process list by selected delivery_date
    When user filters status by "Semua Status"
    And user filters delivery_date by <date>
    Then the shipment process list with delivery_date on <date> will be showed
    
  Examples:
    | date        |
    | "today"     |
    | "20"        |

  Scenario: Check the shipment process list after resetting the delivery_date filter
    When user resets the shipment delivery_date filter back to default
    And the default filter date shall be correct

  Scenario Outline: Check the filtered shipment process list by selected delivery_method
    When user filters delivery_method by <method>
    Then the shipment process list with delivery_method by <method> will be showed

  Examples:
    | method          |
    | "SELF PICKUP"   |
    | "STORE COURIER" |
    | "GADA LOGISTIC" |

  Scenario: Check the shipment process list after resetting the delivery_method filter
    When user changes delivery_method filter back to default
    Then the default query param for delivery_method will be "all"

  Scenario: Logout after test
    Then user should be logged out
