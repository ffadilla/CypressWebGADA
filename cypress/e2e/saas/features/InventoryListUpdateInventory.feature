Feature: Inventory List - Update Inventory

  Background:
    Given user "8408418423" is logged in
    And user visits inventory list page

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
    And user types search inventory input field with "web automation test product"
    And user clicks on stock edit button of inventory "web automation test product"
    And user clicks on tambah stok baru button
    And user clicks on tambah stok baru uom popover button
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "1" on tambah stok baru stok masuk input field of unit "Pieces"
    And user types "5" on tambah stok baru cogs input field of unit "Pieces"
    And user clicks on tambah stok baru submit button
    Then current smallest stock quantity of "web automation test product" is "2" "Pieces"
    And user deletes inventory "web automation test product" without delete reason

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
    And user types search inventory input field with "web automation test product"
    And user clicks on stock edit button of inventory "web automation test product"
    Then restock button text is "Tambah Stok dari Pembelian"
    And user clicks on tambah stok baru button
    Then user is redirected to add purchase transaction page
    And user visits inventory list page
    And user deletes inventory "web automation test product" with delete reason = wrong input

  Scenario: User restocks stock of multi uom inventory
    When user clicks on add inventory button
    And user clicks on add single inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types "Pieces" on search unit field
    And user clicks on "Pieces" unit checkbox
    And user types "Karton" on search unit field
    And user clicks on "Karton" unit checkbox
    And user clicks on choose unit button
    And user clicks on sort up button of unit "Karton"
    And user clicks on uom conversion next step button
    And user types "10" on unit "Karton" conversion field
    And user clicks on uom conversion save button
    And user types "10" on "Pieces" unit stock quantity field
    And user types "2000" on "Pieces" unit price field
    And user types "2" on "Karton" unit stock quantity field
    And user types "19000" on "Karton" unit price field
    And user clicks on is consign toggle button
    And user clicks on choose supplier button
    And user types "Default Supplier" on input supplier search modal
    And user clicks on "Default Supplier" supplier checkbox
    And user clicks on submit add inventory button
    And user types search inventory input field with "web automation test product"
    And user clicks on stock edit button of inventory "web automation test product"
    And user clicks on tambah stok baru button
    And user clicks on tambah stok baru uom popover button
    And user clicks on "Pieces" unit checkbox
    And user clicks on "Karton" unit checkbox
    And user clicks on choose unit button
    And user types "5" on tambah stok baru stok masuk input field of unit "Karton"
    And user types "19000" on tambah stok baru cogs input field of unit "Karton"
    And user types "1" on tambah stok baru stok masuk input field of unit "Pieces"
    And user types "2000" on tambah stok baru cogs input field of unit "Pieces"
    And user clicks on tambah stok baru submit button
    Then current smallest stock quantity of "web automation test product" is "81" "Pieces"
    Then current stock quantity of "web automation test product" is "7 Karton + 11 Pieces"
    And user deletes inventory "web automation test product" without delete reason

  Scenario: User updates selling price of multi uom inventory
    When user clicks on add inventory button
    And user clicks on add single inventory button
    And user clicks on first time add inventory button
    And user types add inventory search inventory input field with "web automation test product"
    And user clicks on add custom inventory button
    And user clicks on expand stock unit button
    And user types "Pieces" on search unit field
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
    And user clicks on submit add inventory button
    And user clicks on selling price edit button of inventory "web automation test product"
    And user clicks on selling price edit button of inventory "web automation test product" unit "Pieces"
    And user types "55555" on unit selling price field
    And user clicks on save unit selling price button
    Then selling price of "web automation test product" is "Rp 55.555"
    And user deletes inventory "web automation test product" with delete reason = wrong input

  Scenario: User recounts stock -- good stock increases
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
    And user types search inventory input field with "web automation test product"
    And user clicks on stock edit button of inventory "web automation test product"
    And user clicks on hitung ulang stok button
    And user types "5" on good stock input field of unit "Pieces"
    And user clicks on hitung ulang stok submit button
    And user clicks on stock edit button of inventory "web automation test product"
    And user clicks on hitung ulang stok button
    Then current good stock of unit "Pieces" is "5"
    Then current bad stock kadaluwarsa of unit "Pieces" is "0"
    Then current bad stock rusak of unit "Pieces" is "0"
    And user visits inventory list page
    Then current smallest stock quantity of "web automation test product" is "5" "Pieces"
    And user deletes inventory "web automation test product" with delete reason = wrong input

  Scenario: User recounts stock -- bad stock (kadaluwarsa) increases
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
    And user types search inventory input field with "web automation test product"
    And user clicks on stock edit button of inventory "web automation test product"
    And user clicks on hitung ulang stok button
    And user types "1" on good stock input field of unit "Pieces"
    And user types "5" on bad stock kadaluwarsa input field of unit "Pieces"
    And user clicks on hitung ulang stok submit button
    And user clicks on stock edit button of inventory "web automation test product"
    And user clicks on hitung ulang stok button
    Then current good stock of unit "Pieces" is "1"
    Then current bad stock kadaluwarsa of unit "Pieces" is "5"
    Then current bad stock rusak of unit "Pieces" is "0"
    And user visits inventory list page
    Then current smallest stock quantity of "web automation test product" is "1" "Pieces"
    And user deletes inventory "web automation test product" with delete reason = wrong input

  Scenario: User recounts stock -- bad stock (rusak) increases
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
    And user types search inventory input field with "web automation test product"
    And user clicks on stock edit button of inventory "web automation test product"
    And user clicks on hitung ulang stok button
    And user types "1" on good stock input field of unit "Pieces"
    And user types "5" on bad stock rusak input field of unit "Pieces"
    And user clicks on hitung ulang stok submit button
    And user clicks on stock edit button of inventory "web automation test product"
    And user clicks on hitung ulang stok button
    Then current good stock of unit "Pieces" is "1"
    Then current bad stock kadaluwarsa of unit "Pieces" is "0"
    Then current bad stock rusak of unit "Pieces" is "5"
    And user visits inventory list page
    Then current smallest stock quantity of "web automation test product" is "1" "Pieces"
    And user deletes inventory "web automation test product" with delete reason = wrong input