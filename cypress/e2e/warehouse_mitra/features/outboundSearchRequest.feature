Feature: Search for specific request(s)

  Background: User login into WH Mitra
    Given user is already logged in
    And user is in menu Barang Keluar
      
  Scenario: Search valid requestId
    When user inputs requestId "REQOUT/082200014"
    Then show valid requestId search result "REQOUT/082200014"

  Scenario: Search invalid requestId
    When user inputs requestId "INVALID/00112233"
    Then show invalid requestId search result "Pencarian Tidak Ditemukan"

  Scenario Outline: Sort by outbound requests with status <status>
    When user sorts outbound requests by <status>
    Then show sorted outbound requests result with status <status>
  
  Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |
    | "Dibatalkan"      |

  Scenario: Search valid shipmentId
    When user inputs shipmentId "OUT/082200001"
    Then show valid shipmentId search result "OUT/082200001"

  Scenario: Search invalid shipmentId
    When user inputs shipmentId "INVALID/00112233"
    Then show invalid shipmentId search result "Pencarian Tidak Ditemukan"

  Scenario Outline: Sort by outbound shipments with status <status>
    When user sorts outbound shipments by <status>
    Then show sorted outbound shipments result with status <status>
  
  Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |

  Scenario: Logout after test
    When user is on Dashboard page
    Then user logs out
