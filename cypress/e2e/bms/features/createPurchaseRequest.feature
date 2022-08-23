Feature: Create Purchase Request

  Background: 
    Given user logged in as "BM"

  Scenario Outline: Create purchase request
    And user is in Pengajuan Pembelian page
    And user selects <channel> as purchase request channel
    And user types search vendor input field with <vendor> and selects the 1st option
    And user types search buyer input field with "GADA" and selects the 1st option
    And user selects <deliveryMethod> as purchase request delivery method
    And user sets delivery request start date 0 days from today
    And user sets delivery request end date 7 days from today
    And user fills delivery fee input field with 5 digits random
    And user fills delivery fee discount input field with 4 digits random
    And user fills unloading fee input field with 5 digits random
    And user fills purchase discount input field with 4 digits random
    And user fills purchase reason input field with "Purchase reason testing"
    And user clicks on Lanjut button to add item stage
    And user clicks on Tambah Item Pembelian button
    And user types search item name input field with "Coklat"
    And user fills item quantity input field with 2 digits random
    And user fills item rate input field with 5 digits random
    And user fills internal <stepInputDiscount>
    And user fills principal <stepInputDiscount>
    And user fills distributor <stepInputDiscount>
    And user fills program <stepInputDiscount>
    And user clicks on Tambah button to add item
    And user clicks on Lanjut button to suggested selling price stage
    And user fills selling estimation days input field with 2 digits random
    And user selects <settingType> as selling price setting type
    And user clicks on Tambah UOM Penjualan button
    And user selects "PCS" as selling UOM
    And user clicks on Atur Harga button
    And user fills <stepInputSellingPriceOrMargin>
    And user clicks on Simpan button to UOM price tier input
    And user clicks on Lanjut button to purchase request preview
    And user clicks on Simpan button to create purchase request
    When user clicks on OK button to confirm purchase request creation
    Then purchase request created successfully

    Examples: 
      | channel       | vendor        | deliveryMethod        | settingType | stepInputSellingPriceOrMargin                          | stepInputDiscount                                |
      | "MARKETPLACE" | "GADA-rxski7" | "Gudang Ada Logistic" | "MARGIN"    | margin input field with 0.2 from minimum selling price | discount amount input field with 3 digits random |
      | "OFFLINE"     | "Testing"     | "Dikirim Penjual"     | "PRICE"     | price input field with 1000 + minimum selling price    | discount percentage input field with 0.5         |
