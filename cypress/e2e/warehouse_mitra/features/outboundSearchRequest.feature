Feature: Search for specific request(s)

  Background: User login into WH Mitra
    Given Mitra - user is in menu Barang Keluar
      
  Scenario: Search valid requestId
    When Mitra - user inputs requestId "REQOUT/082200014"
    Then Mitra - show valid search result "REQOUT/082200014"

  Scenario: Search invalid requestId
    When Mitra - user inputs requestId "INVALID/00112233"
    Then Mitra - show invalid search result "Pencarian Tidak Ditemukan"

  Scenario Outline: Sort by outbound requests with status <status>
    When Mitra - user sorts it by <status>
    Then Mitra - show sorted result with status <status>
  
  Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |
    | "Dibatalkan"      |
