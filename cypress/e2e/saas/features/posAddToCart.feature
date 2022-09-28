Feature: POS - Add to Cart

  Background: 
    Given user "8408418423" is logged in
    And user deletes test data
    And user prepares test data
    And user visits pos page

  Scenario: User edits item quantity on cart
    When user searches for "Web Automation Custom Inventory 1 (Single UOM)" on pos search input
    And user adds "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" to cart
    Then "1" is displayed on "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" on pos shopping cart
    And user types "5" on "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" quantity input field on pos inventory list
    Then "5" is displayed on "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" on pos shopping cart
    And user types "3" on "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" quantity input field on pos shopping cart
    Then "3" is displayed on "Web Automation Custom Inventory 1 (Single UOM)" unit "Pieces" on pos inventory list
    Then user deletes test data