Feature: Inventory Detail - Update Inventory

  Background:
    Given user "8408418423" is logged in
    And user prepares test data
    And user visits inventory list page

  Scenario: User updates inventory - tambah stok baru and update selling price
    When user types search inventory input field with "Web Automation Custom Inventory 4 (Consign)"
    And user clicks on inventory detail button of "Web Automation Custom Inventory 4 (Consign)"
    And user clicks on update stock card ubah button
    And user clicks on tambah stok baru button
    And user clicks on tambah stok baru uom popover button
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "1" on tambah stok baru stok masuk input field of unit "Pieces"
    And user types "5" on tambah stok baru cogs input field of unit "Pieces"
    And user clicks on tambah stok baru submit button
    And user clicks on edit selling price button of unit "Pieces"
    And user types "2000" on unit selling price field
    And user clicks on save unit selling price button
    Then good stock of unit "Pieces" is "51"
    Then total stok fisik of unit "Pieces" is "51"
    Then total good stock of the product is "651 Pieces"
    Then total good stock yang sedang dipesan of the product is "(0 Pieces)"
    Then total good stock yang bisa dijual of the product is "651 Pieces"
    Then cogs of unit "Pieces" is "5"
    Then selling price of unit "Pieces" is "2.000"
    Then bisa dijual of unit "Pieces" is "651"
    And user deletes test data

  Scenario: User restocks curated consign inventory with new UOM
    When user types search inventory input field with "Hati Angsa Kecap Manis Sedang 600 ml"
    And user clicks on inventory detail button of "Hati Angsa Kecap Manis Sedang 600 ml"
    And user clicks on update stock card ubah button
    And user clicks on tambah stok baru button
    And user clicks on tambah stok baru uom popover button
    Then lainnya text is not displayed
    And user deletes test data

  Scenario: User restocks curated consign inventory with existing UOM
    When user types search inventory input field with "Hati Angsa Kecap Manis Sedang 600 ml"
    And user clicks on inventory detail button of "Hati Angsa Kecap Manis Sedang 600 ml"
    And user clicks on update stock card ubah button
    And user clicks on tambah stok baru button
    And user clicks on tambah stok baru uom popover button
    And user clicks on "Karton" unit checkbox
    And user clicks on choose unit button
    And user types "1" on tambah stok baru stok masuk input field of unit "Karton"
    And user types "11500" on tambah stok baru cogs input field of unit "Karton"
    And user clicks on tambah stok baru submit button
    Then good stock of unit "Karton" is "11"
    Then total stok fisik of unit "Karton" is "11"
    Then total good stock of the product is "11 Karton"
    Then total good stock yang sedang dipesan of the product is "(0 Karton)"
    Then total good stock yang bisa dijual of the product is "11 Karton"
    Then cogs of unit "Karton" is "11500"
    And user deletes test data

  Scenario: User restocks custom consign inventory with new UOM
    When user types search inventory input field with "Web Automation Custom Inventory 4 (Consign)"
    And user clicks on inventory detail button of "Web Automation Custom Inventory 4 (Consign)"
    And user clicks on update stock card ubah button
    And user clicks on tambah stok baru button
    And user clicks on tambah stok baru uom popover button
    And user types search unit field with "Karton"
    And user clicks on "Karton" unit checkbox
    And user clicks on choose unit button
    And user clicks on sort up button of unit "Karton"
    And user clicks on uom conversion next step button
    And user types "6" on unit "Pack" conversion field
    And user types "2" on unit "Karton" conversion field
    And user clicks on uom conversion save button
    And user types "10" on tambah stok baru stok masuk input field of unit "Karton"
    And user types "4444" on tambah stok baru cogs input field of unit "Karton"
    And user clicks on tambah stok baru submit button
    Then good stock of unit "Karton" is "10"
    Then good stock of unit "Pieces" is "50"
    Then good stock of unit "Pack" is "50"
    Then total stok fisik of unit "Karton" is "10"
    Then total stok fisik of unit "Pieces" is "50"
    Then total stok fisik of unit "Pack" is "50"
    Then total good stock of the product is "670 Pieces"
    Then total good stock yang sedang dipesan of the product is "(0 Pieces)"
    Then total good stock yang bisa dijual of the product is "670 Pieces"
    Then cogs of unit "Pieces" is "2000"
    Then cogs of unit "Karton" is "4444"
    Then cogs of unit "Pack" is "5000"
    And user deletes test data

  Scenario: User restocks custom consign inventory with existing UOM
    When user types search inventory input field with "Web Automation Custom Inventory 4 (Consign)"
    And user clicks on inventory detail button of "Web Automation Custom Inventory 4 (Consign)"
    And user clicks on update stock card ubah button
    And user clicks on tambah stok baru button
    And user clicks on tambah stok baru uom popover button
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "10" on tambah stok baru stok masuk input field of unit "Pieces"
    And user types "1900" on tambah stok baru cogs input field of unit "Pieces"
    And user clicks on tambah stok baru submit button
    Then good stock of unit "Pieces" is "60"
    Then total stok fisik of unit "Pieces" is "60"
    Then total good stock of the product is "660 Pieces"
    Then total good stock yang sedang dipesan of the product is "(0 Pieces)"
    Then total good stock yang bisa dijual of the product is "660 Pieces"
    Then cogs of unit "Pieces" is "1900"
    And user deletes test data

  Scenario: User restocks non consign inventory
    When user types search inventory input field with "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on inventory detail button of "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on update stock card ubah button
    Then restock button text is "Tambah Stok dari Pembelian"
    And user clicks on tambah stok baru button
    Then user is redirected to add purchase transaction page
    And user deletes test data

  Scenario: User views inventory details of non consign inventory
    When user types search inventory input field with "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on inventory detail button of "Web Automation Custom Inventory 1 (Single UOM)"
    Then is consign toggle button is not displayed
    And user deletes test data

  Scenario: User views inventory details of consign inventory
    When user types search inventory input field with "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on inventory detail button of "Web Automation Custom Inventory 1 (Single UOM)"
    Then is consign toggle button is displayed
    And user deletes test data