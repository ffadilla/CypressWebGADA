Feature: Purchase

  Background:
    Given user "8408418423" is logged in
    And user visits inventory list page

  Scenario: User views purchase transaction details
    When user visits purchase list page
    And user clicks on first supplier row
    Then user checks if drawer opened correctly

  # DONE - No stock added though
  
  Scenario: User adds stock (custom uom) to custom inventory on purchase transaction
    When user prepares test data
    And user visits inventory list page
    And user clicks on stock edit button of inventory "Web Automation Custom Inventory 1 - Single UOM"
    And user clicks on Tambah Stok dari Pembelian button
    And user clicks select supplier button
    And user clicks on "Default Supplier" supplier checkbox
    And user types random inside invoice number field
    And user adds uom "WebAutoUOM ecwro" for inventory "Web Automation Custom Inventory 1 - Single UOM", on uom row "initial"
    And user clicks on uom conversion next step button
    And user types "12" on unit "Pieces" conversion field
    And user clicks on uom conversion save button
    And user adds Jumlah amount "1200" for inventory "Web Automation Custom Inventory 1 - Single UOM", on uom row "WebAutoUOM ecwro"
    And user adds Harga Unit amount "1200" for inventory "Web Automation Custom Inventory 1 - Single UOM", on uom row "WebAutoUOM ecwro"
    And user adds Potongan amount "1200" for inventory "Web Automation Custom Inventory 1 - Single UOM", on uom row "WebAutoUOM ecwro"
    And user clicks Harga Jual button for inventory "Web Automation Custom Inventory 1 - Single UOM", on uom row "WebAutoUOM ecwro"
    And user clicks on selling price edit button of inventory "Web Automation Custom Inventory 1 - Single UOM" unit "WebAutoUOM ecwro"
    And user types "1200" on unit selling price field
    And user clicks on save unit selling price button
    And user closes popover
    And user click simpan button
    And user visits inventory list page

  
  Scenario: User adds stock (existing uom) to curated inventory on purchase transaction
    When user prepares test data
    And user visits inventory list page
    And user clicks on stock edit button of inventory "Onyx Sendok Nasi 8'5-7001 Official"
    And user clicks on Tambah Stok dari Pembelian button
    And user clicks select supplier button
    And user clicks on "Default Supplier" supplier checkbox
    And user types random inside invoice number field
    And user adds uom "Karton" for inventory "Onyx Sendok Nasi 8'5-7001 Official", on uom row "initial"
    And user adds Jumlah amount "12" for inventory "Onyx Sendok Nasi 8'5-7001 Official", on uom row "Karton"
    And user adds Harga Unit amount "12" for inventory "Onyx Sendok Nasi 8'5-7001 Official", on uom row "Karton"
    And user adds Potongan amount "12" for inventory "Onyx Sendok Nasi 8'5-7001 Official", on uom row "Karton"
    And user clicks Harga Jual button for inventory "Onyx Sendok Nasi 8'5-7001 Official", on uom row "Karton"
    And user clicks on selling price edit button of inventory "Onyx Sendok Nasi 8'5-7001 Official" unit "Karton"
    And user types "12" on unit selling price field
    And user clicks on save unit selling price button
    And user closes popover
    And user click simpan button

  #  Done
  
  Scenario: User adds custom inventory from purchase transaction
    When user visits purchase add page
    And user clicks select supplier button
    And user clicks on "Default Supplier" supplier checkbox
    And user types random inside invoice number field
    And user adds new custom inventory "Web Automation Custom Inventory 1"
    And user adds uom "WebAutoUOM ecwro" for inventory "Web Automation Custom Inventory 1", on uom row "initial"
    And user adds Jumlah amount "12" for inventory "Web Automation Custom Inventory 1", on uom row "WebAutoUOM ecwro"
    And user adds Harga Unit amount "12" for inventory "Web Automation Custom Inventory 1", on uom row "WebAutoUOM ecwro"
    And user adds Potongan amount "12" for inventory "Web Automation Custom Inventory 1", on uom row "WebAutoUOM ecwro"
    And user clicks Harga Jual button for inventory "Web Automation Custom Inventory 1", on uom row "WebAutoUOM ecwro"
    And user clicks on selling price edit button of inventory "Web Automation Custom Inventory 1" unit "WebAutoUOM ecwro"
    And user types "12" on unit selling price field
    And user clicks on save unit selling price button
    And user closes popover
    And user click simpan button

  # DONE
  
  Scenario: User pays unpaid debt with pay amount = debt amount
    And user visits purchase add page
    And user clicks select supplier button
    And user clicks on "Default Supplier" supplier checkbox
    And user types random inside invoice number field
    And user selects new curated inventory "Onyx Sendok Nasi 8'5-7001 Official"
    And user adds uom "Karton" for inventory "Onyx Sendok Nasi 8'5-7001 Official", on uom row "initial"
    And user adds Jumlah amount "12" for inventory "Onyx Sendok Nasi 8'5-7001 Official", on uom row "Karton"
    And user adds Harga Unit amount "12" for inventory "Onyx Sendok Nasi 8'5-7001 Official", on uom row "Karton"
    And user adds Potongan amount "12" for inventory "Onyx Sendok Nasi 8'5-7001 Official", on uom row "Karton"
    And user clicks Harga Jual button for inventory "Onyx Sendok Nasi 8'5-7001 Official", on uom row "Karton"
    And user clicks on selling price edit button of inventory "Onyx Sendok Nasi 8'5-7001 Official" unit "Karton"
    And user types "12" on unit selling price field
    And user clicks on save unit selling price button
    And user closes popover
    And user selects payment status "Belum Lunas"
    And user adds paid amount "12"
    And user selects payment status "Tunai"
    And user selects current date for Tanggal Jatuh Tempo
    And user click simpan button
    And user searches for debt supplier row
    And user clicks on debt supplier row
    And user clicks Catat Pembayaran button
    And user pays total amount of debt
    And user closes popover
    And user deletes test data
    Then check if debt has been paid

  # Done
 
  Scenario: User adds curated inventory from purchase transaction
    And user visits purchase add page
    And user clicks select supplier button
    And user clicks on "Default Supplier" supplier checkbox
    And user types random inside invoice number field
    And user selects new curated inventory "Onyx Sendok Nasi 8'5-7001 Official"
    And user adds uom "Karton" for inventory "Onyx Sendok Nasi 8'5-7001 Official", on uom row "initial"
    And user adds Jumlah amount "12" for inventory "Onyx Sendok Nasi 8'5-7001 Official", on uom row "Karton"
    And user adds Harga Unit amount "12" for inventory "Onyx Sendok Nasi 8'5-7001 Official", on uom row "Karton"
    And user adds Potongan amount "12" for inventory "Onyx Sendok Nasi 8'5-7001 Official", on uom row "Karton"
    And user clicks Harga Jual button for inventory "Onyx Sendok Nasi 8'5-7001 Official", on uom row "Karton"
    And user clicks on selling price edit button of inventory "Onyx Sendok Nasi 8'5-7001 Official" unit "Karton"
    And user types "12" on unit selling price field
    And user clicks on save unit selling price button
    And user closes popover
    And user click simpan button
    And user visits inventory list page

  # Done
  
  Scenario: User adds stock (existing uom) to custom inventory on purchase transaction
    When user prepares test data
    And user visits inventory list page
    And user clicks on stock edit button of inventory "Web Automation Custom Inventory 1 - Single UOM"
    And user clicks on Tambah Stok dari Pembelian button
    And user clicks select supplier button
    And user clicks on "Default Supplier" supplier checkbox
    And user types random inside invoice number field
    And user adds uom "Pieces" for inventory "Web Automation Custom Inventory 1 - Single UOM", on uom row "initial"
    And user adds Jumlah amount "1200" for inventory "Web Automation Custom Inventory 1 - Single UOM", on uom row "Pieces"
    And user adds Harga Unit amount "1200" for inventory "Web Automation Custom Inventory 1 - Single UOM", on uom row "Pieces"
    And user adds Potongan amount "1200" for inventory "Web Automation Custom Inventory 1 - Single UOM", on uom row "Pieces"
    And user clicks Harga Jual button for inventory "Web Automation Custom Inventory 1 - Single UOM", on uom row "Pieces"
    And user clicks on selling price edit button of inventory "Web Automation Custom Inventory 1 - Single UOM" unit "Pieces"
    And user types "1200" on unit selling price field
    And user clicks on save unit selling price button
    And user closes popover
    And user click simpan button
    And user visits inventory list page

