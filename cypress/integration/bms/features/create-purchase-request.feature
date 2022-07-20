Feature: Create Purchase Request

    Background:
        Given BMS - user logged in as "BDM"

    Scenario: Create purchase request with multiple items
        And BMS - user is in Pengajuan Pembelian page
        And BMS - user selects purchase request channel: "MARKETPLACE"
        And BMS - user search vendor code: "GADA-rxski7"
        And BMS - user search buyer code: "GADA"
        And BMS - user selects delivery method: "Gudang Ada Logistic"
        And BMS - user sets delivery request start date: 0 days from today
        And BMS - user sets delivery request end date: 7 days from today
        And BMS - user fills delivery fee: 5 digits random
        And BMS - user fills delivery fee discount: 4 digits random
        And BMS - user fills unloading fee: 5 digits random
        And BMS - user fills purchase discount: 4 digits random
        And BMS - user fills purchase reason: "Purchase reason testing"
        And BMS - user clicks Lanjut button to add item stage
        And BMS - user add 10 purchase items with random product
        And BMS - user clicks Lanjut button to suggested selling price stage

    Scenario Outline: Create purchase request
        And BMS - user is in Pengajuan Pembelian page
        And BMS - user selects purchase request channel: "MARKETPLACE"
        And BMS - user search vendor code: "GADA-rxski7"
        And BMS - user search buyer code: "GADA"
        And BMS - user selects delivery method: <deliveryMethod>
        And BMS - user sets delivery request start date: 0 days from today
        And BMS - user sets delivery request end date: 7 days from today
        And BMS - user fills delivery fee: 5 digits random
        And BMS - user fills delivery fee discount: 4 digits random
        And BMS - user fills unloading fee: 5 digits random
        And BMS - user fills purchase discount: 4 digits random
        And BMS - user fills purchase reason: "Purchase reason testing"
        And BMS - user clicks Lanjut button to add item stage
        And BMS - user clicks Tambah Item Pembelian button
        And BMS - user search item name: "Coklat"
        And BMS - user selects tax type: <taxType>
        And BMS - user fills item quantity: 2 digits random
        And BMS - user fills item rate: 5 digits random
        And BMS - user fills item rate discount: 4 digits random
        And BMS - user clicks Tambah button to add item
        And BMS - user clicks Lanjut button to suggested selling price stage
        And BMS - user fills selling estimation days: 2 digits random
        And BMS - user selects setting type: <settingType>
        And BMS - user clicks Tambah UOM Penjualan button
        And BMS - user selects UOM: "PCS"
        And BMS - user clicks Atur Harga button
        And BMS - user fills <stepInputSellingPriceOrMargin>
        And BMS - user clicks Simpan button to UOM price tier
        And BMS - user clicks Lanjut button to purchase request preview
        And BMS - user clicks Simpan button to create purchase request
        When BMS - user clicks OK button to confirm purchase request creation
        Then BMS - purchase request created successfully

        Examples:
            | deliveryMethod        | taxType   | settingType | stepInputSellingPriceOrMargin          |
            | "Gudang Ada Logistic" | "PPN"     | "MARGIN"    | margin: 0.2 from minimum selling price |
            | "Dikirim Penjual"     | "Non PPN" | "PRICE"     | price: 1000 + minimum selling price    |
