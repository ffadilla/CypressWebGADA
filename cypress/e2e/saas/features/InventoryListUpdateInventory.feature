Feature: Inventory List - Update Inventory

  Background:
    Given user "8408418423" is logged in
    And user creates seed inventory data
    And user visits inventory list page

  Scenario: User restocks custom consign inventory with existing UOM
    When user types search inventory input field with "Web Automation Custom Inventory 4 (Consign)"
    And user clicks on stock edit button of inventory "Web Automation Custom Inventory 4 (Consign)"
    And user clicks on tambah stok baru button
    And user clicks on tambah stok baru uom popover button
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "1" on tambah stok baru stok masuk input field of unit "Pieces"
    And user types "5" on tambah stok baru cogs input field of unit "Pieces"
    And user clicks on tambah stok baru submit button
    Then current smallest stock quantity of "Web Automation Custom Inventory 4 (Consign)" is "651" "Pieces"
    And user deletes test data

  Scenario: User restocks non consign inventory
    When user types search inventory input field with "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on stock edit button of inventory "Web Automation Custom Inventory 1 (Single UOM)"
    Then restock button text is "Tambah Stok dari Pembelian"
    And user clicks on tambah stok baru button
    Then user is redirected to add purchase transaction page
    And user deletes test data

  Scenario: User restocks stock of multi uom inventory
    When user types search inventory input field with "Web Automation Custom Inventory 4 (Consign)"
    And user clicks on stock edit button of inventory "Web Automation Custom Inventory 4 (Consign)"
    And user clicks on tambah stok baru button
    And user clicks on tambah stok baru uom popover button
    And user clicks on "Pieces" unit checkbox
    And user clicks on "Pack" unit checkbox
    And user clicks on choose unit button
    And user types "5" on tambah stok baru stok masuk input field of unit "Pack"
    And user types "6000" on tambah stok baru cogs input field of unit "Pack"
    And user types "1" on tambah stok baru stok masuk input field of unit "Pieces"
    And user types "2100" on tambah stok baru cogs input field of unit "Pieces"
    And user clicks on tambah stok baru submit button
    Then current smallest stock quantity of "Web Automation Custom Inventory 4 (Consign)" is "711" "Pieces"
    Then current stock quantity of "Web Automation Custom Inventory 4 (Consign)" is "55 Pack + 51 Pieces"
    And user deletes test data

  Scenario: User updates selling price of multi uom inventory
    When user clicks on selling price edit button of inventory "Web Automation Custom Inventory 4 (Consign)"
    And user clicks on selling price edit button of inventory "Web Automation Custom Inventory 4 (Consign)" unit "Pieces"
    And user types "55555" on unit selling price field
    And user clicks on save unit selling price button
    Then selling price of "Web Automation Custom Inventory 4 (Consign)" is "Rp 55.555"
    And user deletes test data

  Scenario: User recounts stock -- good stock increases
    When user types search inventory input field with "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on stock edit button of inventory "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on hitung ulang stok button
    And user types "5" on good stock input field of unit "Pieces"
    And user clicks on hitung ulang stok submit button
    And user clicks on stock edit button of inventory "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on hitung ulang stok button
    Then current good stock of unit "Pieces" is "5"
    Then current bad stock kadaluwarsa of unit "Pieces" is "0"
    Then current bad stock rusak of unit "Pieces" is "0"
    And user visits inventory list page
    Then current smallest stock quantity of "Web Automation Custom Inventory 1 (Single UOM)" is "5" "Pieces"
    And user deletes test data

  Scenario: User recounts stock -- bad stock (kadaluwarsa) increases
    When user types search inventory input field with "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on stock edit button of inventory "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on hitung ulang stok button
    And user types "1" on good stock input field of unit "Pieces"
    And user types "5" on bad stock kadaluwarsa input field of unit "Pieces"
    And user clicks on hitung ulang stok submit button
    And user clicks on stock edit button of inventory "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on hitung ulang stok button
    Then current good stock of unit "Pieces" is "1"
    Then current bad stock kadaluwarsa of unit "Pieces" is "5"
    Then current bad stock rusak of unit "Pieces" is "0"
    And user visits inventory list page
    Then current smallest stock quantity of "Web Automation Custom Inventory 1 (Single UOM)" is "1" "Pieces"
    And user deletes test data

  Scenario: User recounts stock -- bad stock (rusak) increases
    When user types search inventory input field with "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on stock edit button of inventory "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on hitung ulang stok button
    And user types "1" on good stock input field of unit "Pieces"
    And user types "5" on bad stock rusak input field of unit "Pieces"
    And user clicks on hitung ulang stok submit button
    And user clicks on stock edit button of inventory "Web Automation Custom Inventory 1 (Single UOM)"
    And user clicks on hitung ulang stok button
    Then current good stock of unit "Pieces" is "1"
    Then current bad stock kadaluwarsa of unit "Pieces" is "0"
    Then current bad stock rusak of unit "Pieces" is "5"
    And user visits inventory list page
    Then current smallest stock quantity of "Web Automation Custom Inventory 1 (Single UOM)" is "1" "Pieces"
    And user deletes test data