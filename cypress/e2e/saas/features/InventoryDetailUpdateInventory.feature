Feature: Inventory Detail - Update Inventory

  Background:
    Given user "8408418423" is logged in
    And user visits inventory list page

  Scenario: User updates inventory - tambah stok baru and update selling price
    When user clicks on add inventory button
    And user clicks on add single inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "1" on "Pieces" unit stock quantity field
    And user types "1234" on "Pieces" unit price field
    And user clicks on expand selling unit button
    And user types "Pieces" on search unit field
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user clicks on add unit selling price button of "Pieces" unit
    And user types "12345" on unit selling price field
    And user clicks on save unit selling price button
    And user clicks on is consign toggle button
    And user clicks on choose supplier button
    And user types "Default Supplier" on input supplier search modal
    And user clicks on "Default Supplier" supplier checkbox
    And user clicks on submit add inventory button
    And user types search inventory input field with "web automation test product"
    And user clicks on inventory detail button of "web automation test product"
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
    Then good stock of unit "Pieces" is "2"
    Then total stok fisik of unit "Pieces" is "2"
    Then total good stock of the product is "2 Pieces"
    Then total good stock yang sedang dipesan of the product is "(0 Pieces)"
    Then total good stock yang bisa dijual of the product is "2 Pieces"
    Then cogs of unit "Pieces" is "5"
    Then selling price of unit "Pieces" is "2.000"
    Then bisa dijual of unit "Pieces" is "2"
    And user clicks on delete inventory button
    And user clicks on confirm delete inventory button

  Scenario: User restocks curated consign inventory with new UOM
    When user clicks on add inventory button
    And user clicks on add single inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "Beras SLYP Medium Ramos Setra 50 Kg"
    And user clicks on add inventory button of inventory "Beras SLYP Medium Ramos Setra 50 Kg"
    And user clicks on expand stock unit button
    And user types search unit field with "Sak"
    And user clicks on "Sak" unit checkbox
    And user clicks on choose unit button
    And user types "1" on "Sak" unit stock quantity field
    And user types "1234" on "Sak" unit price field
    And user clicks on is consign toggle button
    And user clicks on choose supplier button
    And user types "Default Supplier" on input supplier search modal
    And user clicks on "Default Supplier" supplier checkbox
    And user clicks on submit add inventory button
    # Update inventory
    And user types search inventory input field with "Beras SLYP Medium Ramos Setra 50 Kg"
    And user clicks on inventory detail button of "Beras SLYP Medium Ramos Setra 50 Kg"
    And user clicks on update stock card ubah button
    And user clicks on tambah stok baru button
    And user clicks on tambah stok baru uom popover button
    Then lainnya text is not displayed
    And user clicks on choose unit button
    And user clicks on tambah stok baru close modal button
    And user clicks on delete inventory button
    And user clicks on confirm delete inventory button

  Scenario: User restocks curated consign inventory with existing UOM
    When user clicks on add inventory button
    And user clicks on add single inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "Beras SLYP Medium Ramos Setra 50 Kg"
    And user clicks on add inventory button of inventory "Beras SLYP Medium Ramos Setra 50 Kg"
    And user clicks on expand stock unit button
    And user types search unit field with "Sak"
    And user clicks on "Sak" unit checkbox
    And user clicks on choose unit button
    And user types "1" on "Sak" unit stock quantity field
    And user types "1234" on "Sak" unit price field
    And user clicks on is consign toggle button
    And user clicks on choose supplier button
    And user types "Default Supplier" on input supplier search modal
    And user clicks on "Default Supplier" supplier checkbox
    And user clicks on submit add inventory button
    # Update inventory
    And user types search inventory input field with "Beras SLYP Medium Ramos Setra 50 Kg"
    And user clicks on inventory detail button of "Beras SLYP Medium Ramos Setra 50 Kg"
    And user clicks on update stock card ubah button
    And user clicks on tambah stok baru button
    And user clicks on tambah stok baru uom popover button
    And user clicks on "Sak" unit checkbox
    And user clicks on choose unit button
    And user types "1" on tambah stok baru stok masuk input field of unit "Sak"
    And user types "1232" on tambah stok baru cogs input field of unit "Sak"
    And user clicks on tambah stok baru submit button
    Then good stock of unit "Sak" is "2"
    Then total stok fisik of unit "Sak" is "2"
    Then total good stock of the product is "2 Sak"
    Then total good stock yang sedang dipesan of the product is "(0 Sak)"
    Then total good stock yang bisa dijual of the product is "2 Sak"
    Then cogs of unit "Sak" is "1232"
    And user clicks on delete inventory button
    And user clicks on confirm delete inventory button

  Scenario: User restocks custom consign inventory with new UOM
    When user clicks on add inventory button
    And user clicks on add single inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "1" on "Pieces" unit stock quantity field
    And user types "1234" on "Pieces" unit price field
    And user clicks on is consign toggle button
    And user clicks on choose supplier button
    And user types "Default Supplier" on input supplier search modal
    And user clicks on "Default Supplier" supplier checkbox
    And user clicks on submit add inventory button
    # Update inventory
    And user types search inventory input field with "web automation test product"
    And user clicks on inventory detail button of "web automation test product"
    And user clicks on update stock card ubah button
    And user clicks on tambah stok baru button
    And user clicks on tambah stok baru uom popover button
    And user types search unit field with "Karton"
    And user clicks on "Karton" unit checkbox
    And user clicks on choose unit button
    And user clicks on sort up button of unit "Karton"
    And user clicks on uom conversion next step button
    And user types "10" on unit "Karton" conversion field
    And user clicks on uom conversion save button
    And user types "10" on tambah stok baru stok masuk input field of unit "Karton"
    And user types "5555" on tambah stok baru cogs input field of unit "Karton"
    And user clicks on tambah stok baru submit button
    Then good stock of unit "Karton" is "10"
    Then good stock of unit "Pieces" is "1"
    Then total stok fisik of unit "Karton" is "10"
    Then total stok fisik of unit "Pieces" is "1"
    Then total good stock of the product is "101 Pieces"
    Then total good stock yang sedang dipesan of the product is "(0 Pieces)"
    Then total good stock yang bisa dijual of the product is "101 Pieces"
    Then cogs of unit "Pieces" is "1234"
    Then cogs of unit "Karton" is "5555"
    And user clicks on delete inventory button
    And user clicks on confirm delete inventory button

  Scenario: User restocks custom consign inventory with existing UOM
    When user clicks on add inventory button
    And user clicks on add single inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "1" on "Pieces" unit stock quantity field
    And user types "1234" on "Pieces" unit price field
    And user clicks on is consign toggle button
    And user clicks on choose supplier button
    And user types "Default Supplier" on input supplier search modal
    And user clicks on "Default Supplier" supplier checkbox
    And user clicks on submit add inventory button
    # Update inventory
    And user types search inventory input field with "web automation test product"
    And user clicks on inventory detail button of "web automation test product"
    And user clicks on update stock card ubah button
    And user clicks on tambah stok baru button
    And user clicks on tambah stok baru uom popover button

    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "10" on tambah stok baru stok masuk input field of unit "Pieces"
    And user types "1599" on tambah stok baru cogs input field of unit "Pieces"
    And user clicks on tambah stok baru submit button
    Then good stock of unit "Pieces" is "11"
    Then total stok fisik of unit "Pieces" is "11"
    Then total good stock of the product is "11 Pieces"
    Then total good stock yang sedang dipesan of the product is "(0 Pieces)"
    Then total good stock yang bisa dijual of the product is "11 Pieces"
    Then cogs of unit "Pieces" is "1599"
    And user clicks on delete inventory button
    And user clicks on confirm delete inventory button

  Scenario: User restocks non consign inventory
    When user clicks on add inventory button
    And user clicks on add single inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "1" on "Pieces" unit stock quantity field
    And user types "1234" on "Pieces" unit price field
    And user clicks on submit add inventory button
    # Update inventory
    And user types search inventory input field with "web automation test product"
    And user clicks on inventory detail button of "web automation test product"
    And user clicks on update stock card ubah button
    Then restock button text is "Tambah Stok dari Pembelian"
    And user clicks on tambah stok baru button
    Then user is redirected to add purchase transaction page
    And user visits inventory list page
    And user deletes inventory "web automation test product" with delete reason = wrong input

  Scenario: User views inventory details of non consign inventory
    When user clicks on add inventory button
    And user clicks on add single inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "1" on "Pieces" unit stock quantity field
    And user types "1234" on "Pieces" unit price field
    And user clicks on submit add inventory button
    # Update inventory
    And user types search inventory input field with "web automation test product"
    And user clicks on inventory detail button of "web automation test product"
    Then is consign toggle button is not displayed
    And user clicks on delete inventory button
    And user clicks on delete reason = "wrong input"
    And user clicks on confirm delete inventory button

  Scenario: User views inventory details of consign inventory
    When user clicks on add inventory button
    And user clicks on add single inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types search unit field with "Pieces"
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "1" on "Pieces" unit stock quantity field
    And user types "1234" on "Pieces" unit price field
    And user clicks on is consign toggle button
    And user clicks on choose supplier button
    And user types "Default Supplier" on input supplier search modal
    And user clicks on "Default Supplier" supplier checkbox
    And user clicks on submit add inventory button
    # Update inventory
    And user types search inventory input field with "web automation test product"
    And user clicks on inventory detail button of "web automation test product"
    Then is consign toggle button is displayed
    And user clicks on delete inventory button
    Then delete inventory options are not displayed
    And user clicks on confirm delete inventory button