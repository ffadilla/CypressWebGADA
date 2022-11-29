Feature: Supplier List

  Background: 
    Given user "08408418423" is logged in
    And user visits supplier list page

  Scenario: User adds a new supplier by clicking Tambah Supplier button
    When user clicks on tambah supplier button
    And user types "Web Automation Test Supplier" in Nama Toko field
    And user types "Web Automation Test Supplier Sales" in Nama Sales field
    And user types a random phone number in Nomor Handphone field
    And user types "Jalan Mawar Raya No 27" on alamat field
    And user types "Supplier Sembako" on catatan field
    And user click on bank name dropdown
    And user select on bank bca syariah on option number three
    And user types random account number on account number field
    And user types "Web Automation Test Supplier" in account holder name
    And user clicks on supplier modal simpan button
    Then user view supplier berhasil ditambahkan is displayed
    Then "Web Automation Test Supplier" is displayed in the list
    Then user deletes test data
