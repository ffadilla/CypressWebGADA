Feature: Bulk Add Inventory Multiple UOM

Background:
    Given user "8408418423" is logged in
    And user visits bulk add inventory page

Scenario: User bulk adds inventories with with multiple uom
    When user click nama barang atau scan barcode searchbox
    And user types "Djarum Coklat 12" on nama barang searchbox
    And user clicks on "Djarum Coklat 12" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Djarum Coklat 12"
    And user clicks on "Karton","Bal","Slop","Pieces" multiple buying uom checkbox
    And user clicks on "Karton","Bal","Slop","Pieces" multiple selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5","10","20","50" on multiple input jumlah stock cell
    And user types "1834000","834000","534000","34000" on multiple input harga modal per unit cell
    And user types "1837000","837000","537000","37000" on multiple input harga jual per unit cell
    And user click simpan bulk add inventory
    And user click kembali ke halaman daftar barang button
    Then user deletes test data