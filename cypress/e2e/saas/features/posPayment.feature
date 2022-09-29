Feature: POS - Payment

  Background: 
    Given user "8408418423" is logged in
    And user deletes test data
    And user prepares test data
    And user visits pos page

  Scenario: User submit cash with exact amount
    When user searches for "Web Automation Custom Inventory 1 (Single UOM)" on pos search input
    And user adds "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" to cart
    And user clicks on checkout button
    And user clicks on terima uang button
    Then transaksi berhasil message is displayed
    Then kembalian is not displayed
    Then user deletes test data

  Scenario: User submit cash with amount > total amount
    When user searches for "Web Automation Custom Inventory 1 (Single UOM)" on pos search input
    And user adds "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" to cart
    And user clicks on checkout button
    And user types "2500" on cash payment input
    And user clicks on terima uang button
    Then transaksi berhasil message is displayed
    Then kembalian "1500" is displayed
    Then user deletes test data

  Scenario: User submit cash with amount > total amount
    When user searches for "Web Automation Custom Inventory 1 (Single UOM)" on pos search input
    And user adds "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" to cart
    And user clicks on checkout button
    And user clicks on piutang payment method button
    And user clicks on select customer button
    And user clicks on customer "Default Customer" radio button
    And user clicks on down payment switch
    And user types "500" on down payment amount input
    And user clicks on down payment cash radio button
    And user clicks on terima uang button
    Then transaksi berhasil message is displayed
    Then sisa piutang "500" is displayed
    Then user deletes test data