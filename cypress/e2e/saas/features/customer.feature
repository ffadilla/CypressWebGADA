Feature: Customer

  Background: 
    Given user "08408418423" is logged in
    And user prepares test data
    And user visits customer page

  
  Scenario: User adds new customer without piutang settings
    When user click tambah pelanggan button
    And user types "Web Automation Customer Non Piutang" on customer name input
    And user types phone number on customer phone input
    And user types "Jalan mawar 1" on customer address input
    And user click on simpan buttons
    Then pelanggan berhasil ditambahkan is displayed
    Then user deletes test data

  Scenario: User adds new customer with piutang settings
    When user click tambah pelanggan button
    And user types "Web Automation Customer With Piutang" on customer name input
    And user types phone number on customer phone input
    And user types "Jalan mawar 2" on customer address input
    And user click on duration switch
    And user type "15" on debt duration limit
    And user click limit amount switch
    And user types "700000" amount debt limit
    And user click on simpan buttons
    Then pelanggan berhasil ditambahkan is displayed
    Then user deletes test data

  Scenario: User updates customer name, address & phone number
    When user click customer name "Update Pelanggan Automation" on customer list
    And user click ubah text button
    And user type new customer name
    And user type new customer phone number
    And user type customer new address
    And user click on simpan buttons
    Then data pelanggan berhasil diubah is displayed

  Scenario: User deletes customer
    When user click customer name "Delete Pelanggan Automation" on customer list
    And user click ubah text button 
    And user click hapus button on edit customer modal
    And user click yes button on confirmation modal
    Then data pelanggan berhasil dihapus is displayed
    Then user deletes test data