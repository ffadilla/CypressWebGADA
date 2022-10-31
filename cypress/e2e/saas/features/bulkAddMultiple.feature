Feature: Bulk Add Inventory Multiple UOM

Background:
    Given user "8408418423" is logged in
    And user deletes test data
    And user visits bulk add inventory page

Scenario: User bulk adds inventories with with multiple uom
    When user click nama barang atau scan barcode searchbox
    And user types "Djarum Coklat 12" on nama barang searchbox
    And user clicks on "Djarum Coklat 12" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Djarum Coklat 12"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user clicks on "Bal" buying uom checkbox
    And user clicks on "Bal" selling uom checkbox
    And user clicks on "Slop" buying uom checkbox
    And user clicks on "Slop" selling uom checkbox
    And user clicks on "Pieces" buying uom checkbox
    And user clicks on "Pieces" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5" on input jumlah stock cell
    And user types "1834000" on input harga modal per unit cell
    And user types "1837000" on input harga jual per unit cell
    And user types "10" on input jumlah stock cell
    And user types "834000" on input harga modal per unit cell
    And user types "837000" on input harga jual per unit cell
    And user types "20" on input jumlah stock cell
    And user types "534000" on input harga modal per unit cell
    And user types "537000" on input harga jual per unit cell
    And user types "50" on input jumlah stock cell
    And user types "34000" on input harga modal per unit cell
    And user types "37000" on input harga jual per unit cell
    And user click simpan bulk add inventory
    And user click kembali ke halaman daftar barang button
    Then user deletes test data