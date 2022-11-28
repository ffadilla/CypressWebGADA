Feature: Bulk Add Inventory

Background:
    Given user "08408418423" is logged in
    And user visits bulk add inventory page

Scenario: User bulk adds 20 inventories with mandatory fields
    When user click nama barang atau scan barcode searchbox
    And user types "Kokola Kukis Kelapa 300 gr" on nama barang searchbox
    And user clicks on "Kokola Kukis Kelapa 300 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Kokola Kukis Kelapa 300 gr"
    And user clicks on "Pieces" buying uom checkbox
    And user clicks on "Pieces" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "12000" on input harga modal per unit cell
    And user types "14000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Madu TJ Super 250 gr" on nama barang searchbox
    And user clicks on "Madu TJ Super 250 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Madu TJ Super 250 gr"
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
    And user types "Pop Mie Rasa Ayam 60 gr" on nama barang searchbox
    And user clicks on "Pop Mie Rasa Ayam 60 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Pop Mie Rasa Ayam 60 gr"
    And user clicks on "Pieces" buying uom checkbox
    And user clicks on "Pieces" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "4000" on input harga modal per unit cell
    And user types "5000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Sakura Rasa Soto ayam 60 gr" on nama barang searchbox
    And user clicks on "Sakura Rasa Soto ayam 60 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Sakura Rasa Soto ayam 60 gr"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "214000" on input harga modal per unit cell
    And user types "220000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Sarimi Rasa Kaldu Ayam 60 gr" on nama barang searchbox
    And user clicks on "Sarimi Rasa Kaldu Ayam 60 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Sarimi Rasa Kaldu Ayam 60 gr"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "120" on input jumlah stock cell
    And user types "124000" on input harga modal per unit cell
    And user types "130000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Kopi WBS" on nama barang searchbox
    And user clicks on "Kopi WBS" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Kopi WBS"
    And user clicks on "Kilogram" buying uom checkbox
    And user clicks on "Kilogram" selling uom checkbox
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
    And user types "Torabika Kopi Bubuk 6 gr" on nama barang searchbox
    And user clicks on "Torabika Kopi Bubuk 6 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Torabika Kopi Bubuk 6 gr"
    And user clicks on "Renceng" buying uom checkbox
    And user clicks on "Renceng" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "11" on input jumlah stock cell
    And user types "22000" on input harga modal per unit cell
    And user types "24000" on input harga jual per unit cell
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
    And user types "Royco Rasa Ayam 460 gr" on nama barang searchbox
    And user clicks on "Royco Rasa Ayam 460 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Royco Rasa Ayam 460 gr"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "111" on input jumlah stock cell
    And user types "154000" on input harga modal per unit cell
    And user types "157000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Rangkiang Kaum Kopi Hitam 250 gr" on nama barang searchbox
    And user clicks on "Rangkiang Kaum Kopi Hitam 250 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Rangkiang Kaum Kopi Hitam 250 gr"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5" on input jumlah stock cell
    And user types "124000" on input harga modal per unit cell
    And user types "127000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Fresco Kopi Bubuk 158 gr" on nama barang searchbox
    And user clicks on "Fresco Kopi Bubuk 158 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Fresco Kopi Bubuk 158 gr"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "6" on input jumlah stock cell
    And user types "134000" on input harga modal per unit cell
    And user types "137000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Qtela Singkong Rasa Barbeque 30 gr" on nama barang searchbox
    And user clicks on "Qtela Singkong Rasa Barbeque 30 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Qtela Singkong Rasa Barbeque 30 gr"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5" on input jumlah stock cell
    And user types "34000" on input harga modal per unit cell
    And user types "37000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Beras Rojolele 5 Kg" on nama barang searchbox
    And user clicks on "Beras Rojolele 5 Kg" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Beras Rojolele 5 Kg"
    And user clicks on "Sak" buying uom checkbox
    And user clicks on "Sak" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5" on input jumlah stock cell
    And user types "534000" on input harga modal per unit cell
    And user types "537000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Beras Super Mama 25 kg" on nama barang searchbox
    And user clicks on "Beras Super Mama 25 kg" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Beras Super Mama 25 kg"
    And user clicks on "Sak" buying uom checkbox
    And user clicks on "Sak" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5" on input jumlah stock cell
    And user types "534000" on input harga modal per unit cell
    And user types "537000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Beras BSM 5 kg" on nama barang searchbox
    And user clicks on "Beras BSM 5 kg" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Beras BSM 5 kg"
    And user clicks on "Sak" buying uom checkbox
    And user clicks on "Sak" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5" on input jumlah stock cell
    And user types "834000" on input harga modal per unit cell
    And user types "837000" on input harga jual per unit cell
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
    And user types "Duff Filter Bold 20" on nama barang searchbox
    And user clicks on "Duff Filter Bold 20" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Duff Filter Bold 20"
    And user clicks on "Slop" buying uom checkbox
    And user clicks on "Slop" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5" on input jumlah stock cell
    And user types "3934000" on input harga modal per unit cell
    And user types "3937000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Kunci Biru Tepung Terigu" on nama barang searchbox
    And user clicks on "Kunci Biru Tepung Terigu" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Kunci Biru Tepung Terigu"
    And user clicks on "Sak" buying uom checkbox
    And user clicks on "Sak" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5" on input jumlah stock cell
    And user types "2334000" on input harga modal per unit cell
    And user types "2337000" on input harga jual per unit cell
    And user click simpan bulk add inventory
    And user click kembali ke halaman daftar barang button
    Then user deletes test data

Scenario: User deletes all product item row
    When user click nama barang atau scan barcode searchbox
    And user types "Duff Filter Bold 20" on nama barang searchbox
    And user clicks on "Duff Filter Bold 20" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Duff Filter Bold 20"
    And user clicks on "Slop" buying uom checkbox
    And user clicks on "Slop" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "120000" on input harga modal per unit cell
    And user types "140000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Madu TJ Murni 250 gr" on nama barang searchbox
    And user clicks on "Madu TJ Murni 250 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Madu TJ Murni 250 gr"
    And user clicks on "Pieces" buying uom checkbox
    And user clicks on "Pieces" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "14000" on input harga modal per unit cell
    And user types "18000" on input harga jual per unit cell
    Then user delete all row on bulk add form

Scenario: User adds product to form, product is already added to form
    When user click nama barang atau scan barcode searchbox
    And user types "Dji Sam Soe Magnum Mild 20 SLOP" on nama barang searchbox
    And user clicks on "Dji Sam Soe Magnum Mild 20 SLOP" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Dji Sam Soe Magnum Mild 20 SLOP"
    And user clicks on "Slop" buying uom checkbox
    And user clicks on "Slop" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "120000" on input harga modal per unit cell
    And user types "140000" on input harga jual per unit cell
    Then user click nama barang atau scan barcode searchbox
    Then user types "Dji Sam Soe Magnum Mild 20 SLOP" on nama barang searchbox
    Then user can not clicks on "Dji Sam Soe Magnum Mild 20 SLOP" bulk add tambah barang input checkbox but disabled
    Then text barang sudah ada ditable is displayed on this item product

Scenario: User bulk adds inventories with missing mandatory fields on rows
    When user click nama barang atau scan barcode searchbox
    And user types "Beras BSM 5 kg" on nama barang searchbox
    And user clicks on "Beras BSM 5 kg" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Beras BSM 5 kg"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user click nama barang atau scan barcode searchbox
    And user types "Beras Super Mama 25 kg" on nama barang searchbox
    And user clicks on "Beras Super Mama 25 kg" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Beras Super Mama 25 kg"
    And user clicks on "Sak" buying uom checkbox
    And user clicks on "Sak" selling uom checkbox
    And user click lanjut on uom select popover
    And user click simpan bulk add inventory
    Then tooltip is displayed on some cell that no input

Scenario: User bulk adds inventories with multiple uom
    When user click nama barang atau scan barcode searchbox
    And user types "Torabika Kopi Bubuk 6 Gr" on nama barang searchbox
    And user clicks on "Torabika Kopi Bubuk 6 Gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Torabika Kopi Bubuk 6 Gr"
    And user clicks on "Karton","Renceng","Pieces" multiple buying uom checkbox
    And user clicks on "Karton","Renceng","Pieces" multiple selling uom checkbox
    And user click lanjut on uom select popover
    And user types "5","10","20","50" on multiple input jumlah stock cell
    And user types "1834000","834000","34000" on multiple input harga modal per unit cell
    And user types "1837000","837000","37000" on multiple input harga jual per unit cell
    And user click simpan bulk add inventory
    And user click kembali ke halaman daftar barang button
    Then user deletes test data

Scenario: User add some product to bulk add form, and set stock reminder
    When user click nama barang atau scan barcode searchbox
    And user types "Kokola Kukis Kelapa 300 gr" on nama barang searchbox
    And user clicks on "Kokola Kukis Kelapa 300 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Kokola Kukis Kelapa 300 gr"
    And user clicks on "Pieces" buying uom checkbox
    And user clicks on "Pieces" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "120000" on input harga modal per unit cell
    And user types "140000" on input harga jual per unit cell
    And user click on stock reminder toggle
    And user types "10" on batas stock textbox 
    And user click on simpan button stock reminder
    And user click nama barang atau scan barcode searchbox
    And user types "Madu TJ Murni 250 gr" on nama barang searchbox
    And user clicks on "Madu TJ Murni 250 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Madu TJ Murni 250 gr"
    And user clicks on "Pieces" buying uom checkbox
    And user clicks on "Pieces" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "14000" on input harga modal per unit cell
    And user types "18000" on input harga jual per unit cell
    And user click on stock reminder toggle
    And user types "3" on batas stock textbox 
    And user click on simpan button stock reminder
    Then user view on stock reminder toggle is enabled
    And user click simpan bulk add inventory
    And user click kembali ke halaman daftar barang button
    Then user deletes test data

Scenario: User chooses sell in MP for an inventory
    When user click nama barang atau scan barcode searchbox
    And user types "Kokola Kukis Kelapa 300 gr" on nama barang searchbox
    And user clicks on "Kokola Kukis Kelapa 300 grP" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Kokola Kukis Kelapa 300 gr"
    And user clicks on "Pieces" buying uom checkbox
    And user clicks on "Pieces" selling uom checkbox
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
    Then user view on sell in mp toggle is enabled
    And user click simpan bulk add inventory
    And user click kembali ke halaman daftar barang button
    Then user deletes test data

Scenario: User navigates to other page, clicks on save button on confirmation popup
    When user click nama barang atau scan barcode searchbox
    And user types "Kokola Kukis Kelapa 300 gr" on nama barang searchbox
    And user clicks on "Kokola Kukis Kelapa 300 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Kokola Kukis Kelapa 300 gr"
    And user clicks on "Pieces" buying uom checkbox
    And user clicks on "Pieces" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "12000" on input harga modal per unit cell
    And user types "14000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Madu TJ Super 250 gr" on nama barang searchbox
    And user clicks on "Madu TJ Super 250 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Madu TJ Super 250 gr"
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
    And user types "Pop Mie Rasa Ayam 60 gr" on nama barang searchbox
    And user clicks on "Pop Mie Rasa Ayam 60 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Pop Mie Rasa Ayam 60 gr"
    And user clicks on "Pieces" buying uom checkbox
    And user clicks on "Pieces" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "4000" on input harga modal per unit cell
    And user types "5000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Sakura Rasa Soto ayam 60 gr" on nama barang searchbox
    And user clicks on "Sakura Rasa Soto ayam 60 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Sakura Rasa Soto ayam 60 gr"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "214000" on input harga modal per unit cell
    And user types "220000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Sarimi Rasa Kaldu Ayam 60 gr" on nama barang searchbox
    And user clicks on "Sarimi Rasa Kaldu Ayam 60 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Sarimi Rasa Kaldu Ayam 60 gr"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "120" on input jumlah stock cell
    And user types "124000" on input harga modal per unit cell
    And user types "130000" on input harga jual per unit cell
    And user click nama barang atau scan barcode searchbox
    And user types "Kopi WBS" on nama barang searchbox
    And user clicks on "Kopi WBS" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Kopi WBS"
    And user clicks on "Kilogram" buying uom checkbox
    And user clicks on "Kilogram" selling uom checkbox
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
    And user types "Torabika Kopi Bubuk 6 gr" on nama barang searchbox
    And user clicks on "Torabika Kopi Bubuk 6 gr" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Torabika Kopi Bubuk 6 gr"
    And user clicks on "Renceng" buying uom checkbox
    And user clicks on "Renceng" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "11" on input jumlah stock cell
    And user types "22000" on input harga modal per unit cell
    And user types "24000" on input harga jual per unit cell
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

Scenario: User adds consign curated inventory
    When user click nama barang atau scan barcode searchbox
    And user types "Lilin Cap Kuda Sakti" on nama barang searchbox
    And user clicks on "Lilin Cap Kuda Sakti" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Lilin Cap Kuda Sakti"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "120000" on input harga modal per unit cell
    And user types "140000" on input harga jual per unit cell
    And user click on stock reminder toggle
    And user types "5" on batas stock textbox 
    And user click on simpan button stock reminder
    And user click on sell in MP gada toggle
    And user types "1" on minimum pesanan textbox
    And user types "5" on minimum stock text box
    And user click on simpan button sell in MP
    And user click on consigned toggle
    And user click on supplier dropdown
    And user select "Default Supplier" on supplier dropdown
    Then user view on consign toggle is enabled
    And user click simpan bulk add inventory
    And user click kembali ke halaman daftar barang button
    Then user deletes test data

Scenario: User adds consign curated inventory and update supplier
    When user click nama barang atau scan barcode searchbox
    And user types "Lilin Cap Kuda Sakti" on nama barang searchbox
    And user clicks on "Lilin Cap Kuda Sakti" bulk add tambah barang input checkbox
    And user clicks on simpan button popover
    And user clicks on "empty" open uom select button of "Lilin Cap Kuda Sakti"
    And user clicks on "Karton" buying uom checkbox
    And user clicks on "Karton" selling uom checkbox
    And user click lanjut on uom select popover
    And user types "100" on input jumlah stock cell
    And user types "120000" on input harga modal per unit cell
    And user types "140000" on input harga jual per unit cell
    And user click on stock reminder toggle
    And user types "5" on batas stock textbox 
    And user click on simpan button stock reminder
    And user click on sell in MP gada toggle
    And user types "1" on minimum pesanan textbox
    And user types "5" on minimum stock text box
    And user click on simpan button sell in MP
    And user click on consigned toggle
    And user click on supplier dropdown
    And user click on edit supplier "Default Supplier" on supplier dropdown
    And user click close button on supplier modal
    And user click on edit supplier "Default Supplier" on supplier dropdown
    And user types a random phone number in nomor handphone field
    And user clicks on supplier popup modal simpan button
    Then user view on consign toggle is enabled
    And user click simpan bulk add inventory
    And user click kembali ke halaman daftar barang button
    Then user deletes test data