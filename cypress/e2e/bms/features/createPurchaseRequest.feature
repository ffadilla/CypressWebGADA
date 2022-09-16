Feature: Create Purchase Request

  Background:
    Given user logged in as "BM"

  Scenario Outline: Create purchase request
    And user is in "Purchase Order" - "Pengajuan Pembelian" page
    And user selects <channel> as purchase request channel
    And user types search vendor input field with <vendor>
    And user types search buyer input field with "GADA-TNG7"
    And user selects <deliveryMethod> as purchase request delivery method
    And user sets delivery request start date 0 days from today
    And user sets delivery request end date 7 days from today
    And user fills "deliveryFee" input field with 5 digits random integer
    And user fills "deliveryFeeDiscount" input field with 4 digits random integer
    And user fills "unloadingFee" input field with 5 digits random integer
    And user fills "purchaseDiscount" input field with 4 digits random integer
    And user fills purchase reason input field with "Purchase reason testing"
    And user clicks on Lanjut button to add item stage
    And user clicks on Tambah Item Pembelian button
    And user types search item name input field with "Coklat"
    And user fills item quantity input field with 2 digits random
    And user fills item rate input field with 5 digits random
    And user fills rate discount input fields with 3 digits random integer
    # Todo: discount improvement project
    # And user fills "internal" discount <discountType> input field with 3 digits random <randomType>
    # And user fills "principal" discount <discountType> input field with 3 digits random <randomType>
    # And user fills "distributor" discount <discountType> input field with 3 digits random <randomType>
    # And user fills "program" discount <discountType> input field with 3 digits random <randomType>
    And user clicks on Tambah button to add item
    And user clicks on Lanjut button to suggested selling price stage
    And user fills selling estimation days input field with 2 digits random integer
    And user selects <settingType> as selling price setting type
    And user clicks on Tambah UOM Penjualan button
    And user selects "PCS" as selling UOM
    And user clicks on Atur Harga button
    And user fills <settingType> input field with 3 digits random <randomType> from minimum selling price
    And user clicks on Simpan button to UOM price tier input
    And user clicks on Lanjut button to purchase request preview
    And user clicks on Simpan button to create purchase request
    When user clicks on OK button to confirm purchase request creation
    Then purchase request created successfully

    Examples:
      | channel       | vendor        | deliveryMethod        | settingType | discountType | randomType |
      | "Marketplace" | "GADA-rxski7" | "Gudang Ada Logistic" | "margin"    | "amount"     | "integer"  |
      | "Offline"     | "Testing"     | "Dikirim Penjual"     | "price"     | "percentage" | "decimal"  |
