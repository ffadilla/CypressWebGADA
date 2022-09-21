Feature: Store settings

  Background: 
    Given user "8408418423" is logged in
    And user deletes test data
    And user visits user account page

  Scenario: User chooses to sell online and sync existing marketplace store
    When user clicks on store settings button of store "Web Automation Store"
    And user clicks on link store button
    And user clicks on "Web Automation Store" radio button
    And user clicks on pilih & lanjutkan button
    And user clicks on hubungkan kedua toko button
    Then toko berhasil dihubungkan text is displayed
    And user clicks on selesai button
    Then store is linked to "Web Automation Store"
    Then link store button is not displayed
    Then user deletes test data

  Scenario: User creates adds bank account
    When user clicks on store settings button of store "Web Automation Store"
    And user clicks on show bank account switch
    And user clicks on tambah rekening baru button
    And user types "BANK CENTRAL ASIA" on bank name input
    And user clicks on first bank name option
    And user types "1435623213" on bank account number input
    And user types "Web Auto User" on bank account owner name input
    And user clicks on bank account modal simpan button
    Then correct bank account number is displayed
    Then correct bank account owner name is displayed
    Then user deletes test data