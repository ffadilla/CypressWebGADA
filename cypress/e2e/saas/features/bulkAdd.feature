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
    And user click nama barang atau scan barcode searchbox
    And user types "Madu TJ Murni 250 gr" on nama barang searchbox
    And user clicks on "Madu TJ Murni 250 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Madu TJ Murni 250 gr"
    And user clicks on "Pieces" buying uom checkbox
    And user clicks on "Pieces" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "16000" on input harga modal per unit cell
    And user types "19000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "kopi caffino" on nama barang searchbox
    And user clicks on "kopi caffino" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "kopi caffino"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "234000" on input harga modal per unit cell
    And user types "250000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "kopi top skm" on nama barang searchbox
    And user clicks on "kopi top skm" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "kopi top skm"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "214000" on input harga modal per unit cell
    And user types "220000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "kopi top 165gr" on nama barang searchbox
    And user clicks on "kopi top 165gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "kopi top 165gr"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "120" on input jumlah stock cell
    And user types "124000" on input harga modal per unit cell
    And user types "130000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "kopi top white" on nama barang searchbox
    And user clicks on "kopi top white" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "kopi top white"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "80" on input jumlah stock cell
    And user types "104000" on input harga modal per unit cell
    And user types "110000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Warung Kopi 12" on nama barang searchbox
    And user clicks on "Warung Kopi 12" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Warung Kopi 12"
    And user clicks on "Slop" buying uom checkbox
    And user clicks on "Slop" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "10" on input jumlah stock cell
    And user types "84000" on input harga modal per unit cell
    And user types "98000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Kopi Toraja dua" on nama barang searchbox
    And user clicks on "Kopi Toraja dua" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Kopi Toraja dua"
    And user clicks on "Pieces" buying uom checkbox
    And user clicks on "Pieces" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "11" on input jumlah stock cell
    And user types "222000" on input harga modal per unit cell
    And user types "234000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Kopi Ya SP 60 gr" on nama barang searchbox
    And user clicks on "Kopi Ya SP 60 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Kopi Ya SP 60 gr"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "17" on input jumlah stock cell
    And user types "54000" on input harga modal per unit cell
    And user types "57000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "kopi fresco gula" on nama barang searchbox
    And user clicks on "kopi fresco gula" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "kopi fresco gula"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "111" on input jumlah stock cell
    And user types "154000" on input harga modal per unit cell
    And user types "157000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "kopi fresco moca" on nama barang searchbox
    And user clicks on "kopi fresco moca" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "kopi fresco moca"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5" on input jumlah stock cell
    And user types "124000" on input harga modal per unit cell
    And user types "127000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "kopi fresco susu" on nama barang searchbox
    And user clicks on "kopi fresco susu" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "kopi fresco susu"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "6" on input jumlah stock cell
    And user types "134000" on input harga modal per unit cell
    And user types "137000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "NA-Esse Pop 16 SLOP" on nama barang searchbox
    And user clicks on "NA-Esse Pop 16 SLOP" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "NA-Esse Pop 16 SLOP"
    And user clicks on "Slop" buying uom checkbox
    And user clicks on "Slop" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5" on input jumlah stock cell
    And user types "534000" on input harga modal per unit cell
    And user types "537000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Djarum Super 12 SLOP" on nama barang searchbox
    And user clicks on "Djarum Super 12 SLOP" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Djarum Super 12 SLOP"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5" on input jumlah stock cell
    And user types "1534000" on input harga modal per unit cell
    And user types "1537000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Marlboro Merah 20 SLOP" on nama barang searchbox
    And user clicks on "Marlboro Merah 20 SLOP" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Marlboro Merah 20 SLOP"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5" on input jumlah stock cell
    And user types "2534000" on input harga modal per unit cell
    And user types "2537000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Djarum Coklat 12" on nama barang searchbox
    And user clicks on "Djarum Coklat 12" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Djarum Coklat 12"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5" on input jumlah stock cell
    And user types "1834000" on input harga modal per unit cell
    And user types "1837000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Dji Sam Soe Magnum Mild 20 SLOP" on nama barang searchbox
    And user clicks on "Dji Sam Soe Magnum Mild 20 SLOP" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Dji Sam Soe Magnum Mild 20 SLOP"
    And user clicks on "Slop" buying uom checkbox
    And user clicks on "Slop" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5" on input jumlah stock cell
    And user types "1934000" on input harga modal per unit cell
    And user types "1937000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "NA-Dunhill Hitam Fine Cut Filter 16 SLOP" on nama barang searchbox
    And user clicks on "NA-Dunhill Hitam Fine Cut Filter 16 SLOP" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "NA-Dunhill Hitam Fine Cut Filter 16 SLOP"
    And user clicks on "Slop" buying uom checkbox
    And user clicks on "Slop" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5" on input jumlah stock cell
    And user types "3934000" on input harga modal per unit cell
    And user types "3937000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "A Volution Menthol 16s Slim Hijau SLOP" on nama barang searchbox
    And user clicks on "A Volution Menthol 16s Slim Hijau SLOP" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "A Volution Menthol 16s Slim Hijau SLOP"
    And user clicks on "Slop" buying uom checkbox
    And user clicks on "Slop" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5" on input jumlah stock cell
    And user types "2334000" on input harga modal per unit cell
    And user types "2337000" on input harga jual per unit cell
    And user click simpan bulk add inventory
    And user click kembali ke halaman daftar barang button
    Then user deletes test data

Scenario: User deletes all product item row
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
    Then user delete all row on bulk add form

Scenario: User adds product to form, product is already added to form
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
    Then user click nama barang atau scan barcode searchbox
    Then user types "kukis 300gr" on nama barang searchbox
    Then user can not clicks on "kukis 300gr" bulk add tambah barang input checkbox but disabled
    Then text barang sudah ada ditable is displayed on this item product

Scenario: User bulk adds inventories with missing mandatory fields on rows
    When user click nama barang atau scan barcode searchbox
    And user types "Marlboro Merah 20 SLOP" on nama barang searchbox
    And user clicks on "Marlboro Merah 20 SLOP" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Marlboro Merah 20 SLOP"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user click nama barang atau scan barcode searchbox
    And user types "Djarum Coklat 12" on nama barang searchbox
    And user clicks on "Djarum Coklat 12" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Djarum Coklat 12"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user click simpan bulk add inventory
    Then tooltip is displayed on some cell that no input

Scenario: User adds custom inventory with single stock and selling unit
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
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "120000" on input harga modal per unit cell
    And user types "140000" on input harga jual per unit cell
    And user click simpan bulk add inventory
    And user click kembali ke halaman daftar barang button
    Then user deletes test data

Scenario: User add some product to bulk add form, and set stock reminder
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
    And user click on stock reminder toggle
    And user types "10" on batas stock textbox 
    And user click on simpan button stock reminder
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
    And user click on stock reminder toggle
    And user types "3" on batas stock textbox 
    And user click on simpan button stock reminder
    And user click simpan bulk add inventory
    And user click kembali ke halaman daftar barang button
    Then user deletes test data

Scenario: User chooses sell in MP for an inventory
    When user click nama barang atau scan barcode searchbox
    And user types "Djarum Super 12 SLOP" on nama barang searchbox
    And user clicks on "Djarum Super 12 SLOP" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Djarum Super 12 SLOP"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "10" on input jumlah stock cell
    And user types "1120000" on input harga modal per unit cell
    And user types "1140000" on input harga jual per unit cell
    And user click on stock reminder toggle
    And user types "5" on batas stock textbox 
    And user click on simpan button stock reminder
    And user click on sell in MP gada toggle
    And user types "1" on minimum pesanan textbox
    And user types "5" on minimum stock text box
    And user click on simpan button sell in MP
    And user click nama barang atau scan barcode searchbox
    And user types "Dji Sam Soe Magnum Mild 20 SLOP" on nama barang searchbox
    And user clicks on "Dji Sam Soe Magnum Mild 20 SLOP" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Dji Sam Soe Magnum Mild 20 SLOP"
    And user clicks on "Slop" buying uom checkbox
    And user clicks on "Slop" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "10" on input jumlah stock cell
    And user types "414000" on input harga modal per unit cell
    And user types "518000" on input harga jual per unit cell
    And user click on stock reminder toggle
    And user types "1" on batas stock textbox 
    And user click on simpan button stock reminder
    And user click on sell in MP gada toggle
    And user types "5" on minimum pesanan textbox
    And user types "5" on minimum stock text box
    And user click on simpan button sell in MP
    And user click simpan bulk add inventory
    And user click kembali ke halaman daftar barang button
    Then user deletes test data