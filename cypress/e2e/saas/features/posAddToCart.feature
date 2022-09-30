Feature: POS - Add to Cart

  Background: 
    Given user "8408418423" is logged in
    And user deletes test data
    And user prepares test data
    And user visits pos page

  Scenario: User adds item to cart through add product to cart
    When user searches for "Web Automation Custom Inventory 1 (Single UOM)" on pos search input
    And user adds "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" to cart
    Then "1" is displayed on "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" on pos shopping cart
    Then user deletes test data

  Scenario: User removes items from cart
    When user searches for "Web Automation Custom Inventory 1 (Single UOM)" on pos search input
    And user adds "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" to cart
    Then "1" is displayed on "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" on pos shopping cart
    And user removes "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" from cart
    Then "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" is not displayed on shopping cart
    Then user deletes test data

  Scenario: User adds item quantity on cart to maximum available quantity + 1
    When user searches for "Web Automation Custom Inventory 1 (Single UOM)" on pos search input
    And user adds "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" to cart
    And user types "101" on "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" quantity input field on pos inventory list
    Then "Stok Tidak Cukup" is displayed
    Then user deletes test data

  Scenario: User deducts item quantity on cart
    When user searches for "Web Automation Custom Inventory 1 (Single UOM)" on pos search input
    And user adds "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" to cart
    Then "1" is displayed on "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" on pos shopping cart
    And user types "15" on "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" quantity input field on pos inventory list
    And user clicks on inventory list decrement button of "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces"
    Then "14" is displayed on "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" on pos inventory list
    Then user deletes test data

  Scenario: User edits item quantity on cart
    When user searches for "Web Automation Custom Inventory 1 (Single UOM)" on pos search input
    And user adds "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" to cart
    Then "1" is displayed on "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" on pos shopping cart
    And user types "15" on "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" quantity input field on pos inventory list
    Then "15" is displayed on "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" on pos shopping cart
    And user types "13" on "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" quantity input field on pos shopping cart
    Then "13" is displayed on "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" on pos inventory list
    Then user deletes test data

  Scenario: User checks out items on cart
    When user searches for "Web Automation Custom Inventory 1 (Single UOM)" on pos search input
    And user adds "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" to cart
    And user clicks on checkout button
    Then user is redirected to payment page
    Then user deletes test data
#
  Scenario: User adds transaction discount -- fixed amount
    When user searches for "Web Automation Custom Inventory 1 (Single UOM)" on pos search input
    And user adds "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" to cart
    And user clicks on secondary cart button
    And user types "100" on transaction discount amount input
    And user types "trx dsc" on transaction discount name input
    And user clicks on transaction discount submit button
    Then "Diskon Transaksi" is displayed
    Then " - trx dsc" is displayed
    Then "100" transaction discount is displayed
    Then user deletes test data
