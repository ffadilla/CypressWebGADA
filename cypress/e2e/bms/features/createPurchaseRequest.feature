Feature: Create Purchase Request

  Background: 
    Given BMS - user logged in as "BM"

  Scenario Outline: Create purchase request
    And BMS - user is in Pengajuan Pembelian page
    And BMS - user selects <channel> as purchase request channel
    And BMS - user types search vendor input field with <vendor> and selects the 1st option
    And BMS - user types search buyer input field with "GADA" and selects the 1st option
    And BMS - user selects <deliveryMethod> as purchase request delivery method
    And BMS - user sets delivery request start date 0 days from today
    And BMS - user sets delivery request end date 7 days from today
    And BMS - user fills delivery fee input field with 5 digits random
    And BMS - user fills delivery fee discount input field with 4 digits random
    And BMS - user fills unloading fee input field with 5 digits random
    And BMS - user fills purchase discount input field with 4 digits random
    And BMS - user fills purchase reason input field with "Purchase reason testing"
    And BMS - user clicks on Lanjut button to add item stage
    And BMS - user clicks on Tambah Item Pembelian button
    And BMS - user types search item name input field with "Coklat"
    And BMS - user fills item quantity input field with 2 digits random
    And BMS - user fills item rate input field with 5 digits random
    And BMS - user fills internal <stepInputDiscount>
    And BMS - user fills principal <stepInputDiscount>
    And BMS - user fills distributor <stepInputDiscount>
    And BMS - user fills program <stepInputDiscount>
    And BMS - user clicks on Tambah button to add item
    And BMS - user clicks on Lanjut button to suggested selling price stage
    And BMS - user fills selling estimation days input field with 2 digits random
    And BMS - user selects <settingType> as selling price setting type
    And BMS - user clicks on Tambah UOM Penjualan button
    And BMS - user selects "PCS" as selling UOM
    And BMS - user clicks on Atur Harga button
    And BMS - user fills <stepInputSellingPriceOrMargin>
    And BMS - user clicks on Simpan button to UOM price tier input
    And BMS - user clicks on Lanjut button to purchase request preview
    And BMS - user clicks on Simpan button to create purchase request
    When BMS - user clicks on OK button to confirm purchase request creation
    Then BMS - purchase request created successfully

    Examples: 
      | channel       | vendor        | deliveryMethod        | settingType | stepInputSellingPriceOrMargin                          | stepInputDiscount                                |
      | "MARKETPLACE" | "GADA-rxski7" | "Gudang Ada Logistic" | "MARGIN"    | margin input field with 0.2 from minimum selling price | discount amount input field with 3 digits random |
      | "OFFLINE"     | "Testing"     | "Dikirim Penjual"     | "PRICE"     | price input field with 1000 + minimum selling price    | discount percentage input field with 0.5         |
