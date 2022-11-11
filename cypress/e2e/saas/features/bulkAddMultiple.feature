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

Scenario: User bulk adds custom inventories with multiple uom
    When user click nama barang atau scan barcode searchbox
    And user types "web automation" on nama barang searchbox
    And user clicks on isi manual text button
    And user click tambah barang on nama barang option field
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "web automation"
    And user type "WebAutoUom " on search custom buying
    And user click tambah unit baru 
    And user click tambah nama unit baru option
    And user types recently created custom unit selling name on search unit field
    And user clicks on "WebAutoUom" selling custom uom checkbox
    And user click clear search on buying uom searchbox
    And user type "WebAutoUom " on search custom buying
    And user click tambah unit baru 
    And user click tambah nama unit baru option
    And user click clear search on selling uom searchbox
    And user types recently created custom unit selling name on search unit field
    And user clicks on "WebAutoUom" selling custom uom checkbox
    And user click lanjut on uom select popover
    And user click on conversion button up
    And user click on selanjutnya button
    And user types "24" on conversion uom input modal
    And user click simpan on conversion uom modal
    And user types "5","10" on custom uom multiple input jumlah stock cell
    And user types "1134000","534000" on multiple input harga modal per unit cell
    And user types "1137000","537000" on multiple input harga jual per unit cell
    And user click simpan bulk add inventory
    And user click kembali ke halaman daftar barang button
    Then user deletes test data
