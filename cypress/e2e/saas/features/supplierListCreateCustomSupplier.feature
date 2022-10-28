Feature: Supplier List

  Background: 
    Given user "8408418423" is logged in
    And user visits supplier list page

  Scenario: User adds a new supplier by clicking Tambah Supplier button
    When user clicks on tambah supplier button
    And user types "Web Automation Test Supplier" in Nama Toko field
    And user types "Web Automation Test Supplier" in Nama Sales field
    And user types a random phone number in Nomor Handphone field
    And user clicks on supplier modal simpan button
    Then "Web Automation Test Supplier" is displayed in the list
    Then user deletes test data
