Feature: Bulk Add Inventory

Background:
    Given user "8408418423" is logged in
    And user deletes test data
    And user visits bulk add inventory page


Scenario: User bulk adds 20 inventories with mandatory fields
    When user click nama barang atau scan barcode searchbox
    And user types "kukis 300gr" on nama barang searchbox
    And user clicks on "kukis 300gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "kukis 300gr"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "120000" on input harga modal per unit cell
    And user types "140000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Madu TJ Murni 150 gr" on nama barang searchbox
    And user clicks on "Madu TJ Murni 150 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Madu TJ Murni 150 gr"
    And user clicks on "Pieces" buying uom checkbox
    And user clicks on "Pieces" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "14000" on input harga modal per unit cell
    And user types "18000" on input harga jual per unit cell
    And user click simpan bulk add inventory
    And user click kembali ke halaman daftar barang button
    Then user deletes test data