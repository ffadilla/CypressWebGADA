Feature: Inventory Detail - Update Inventory

  Background:
    Given user "8408418423" is logged in
    And user visits inventory list page

  Scenario: User updates inventory - mandatory parameters only
    # Initially creates custom inventory with stock unit and selling unit, all input fields = 1
    When user created custom inventory with stock + selling uom
    And user types search inventory input field with "web automation test product"
    And user clicks on inventory detail button of "web automation test product"
    And user clicks on update stock card ubah button
    And user clicks on tambah stok baru button
    And user clicks on tambah stok baru uom popover button
    And user clicks on "Pieces" unit checkbox
    And user clicks on choose unit button
    And user types "1" on tambah stok baru stok masuk input field of unit "Pieces"
    And user types "5" on tambah stok baru cogs input field of unit "Pieces"
    And user clicks on tambah stok baru submit button
    And user clicks on edit selling price button of unit "Pieces"
    And user types "2000" on unit selling price field
    And user clicks on save unit selling price button
    Then good stock of unit "Pieces" is "2"
    Then total stok fisik of unit "Pieces" is "2"
    Then total good stock of the product is "2 Pieces"
    Then total good stock yang sedang dipesan of the product is "(0 Pieces)"
    Then total good stock yang bisa dijual of the product is "2 Pieces"
#    Then cogs of unit "Pieces" is "3"
#    Then selling price of unit "Pieces" is "2000"
#    Then bisa dijual of unit "Pieces" is "2"
    And user clicks on delete inventory button
    And user selects delete reason = "wrong input"
