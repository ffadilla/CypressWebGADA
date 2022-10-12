Feature: Customer

  Background: 
    Given user "8408418423" is logged in
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

   