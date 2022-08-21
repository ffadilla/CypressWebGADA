Feature: Search for specific request(s)

  Background: User login into WH Mitra
    Given Mitra - user is already logged in
    And Mitra - user is in menu Barang Keluar
      
  Scenario: Search valid requestId
    When Mitra - user inputs requestId "REQOUT/082200014"
    Then Mitra - show valid requestId search result "REQOUT/082200014"

  Scenario: Search invalid requestId
    When Mitra - user inputs requestId "INVALID/00112233"
    Then Mitra - show invalid requestId search result "Pencarian Tidak Ditemukan"

  Scenario Outline: Sort by outbound requests with status <status>
    When Mitra - user sorts outbound requests by <status>
    Then Mitra - show sorted outbound requests result with status <status>
  
  Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |
    | "Dibatalkan"      |

  Scenario: Search valid shipmentId
    When Mitra - user inputs shipmentId "OUT/082200001"
    Then Mitra - show valid shipmentId search result "OUT/082200001"

  Scenario: Search invalid shipmentId
    When Mitra - user inputs shipmentId "INVALID/00112233"
    Then Mitra - show invalid shipmentId search result "Pencarian Tidak Ditemukan"

  Scenario Outline: Sort by outbound shipments with status <status>
    When Mitra - user sorts outbound shipments by <status>
    Then Mitra - show sorted outbound shipments result with status <status>
  
  Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |

  Scenario: Logout after test
    When Mitra - user is on Dashboard page
    Then Mitra - user logs out
