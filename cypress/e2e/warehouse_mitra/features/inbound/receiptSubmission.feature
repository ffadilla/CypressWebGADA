Feature: Get Inbound Receipt

  Background: 
    Given user already logged in to WMS as "superuser"
    And user redirects to inbound menu
    And user applies "Cyp" to find related inbound Request
    And user clicks "Belum Selesai" status chip at inbound Request list
    And user clicks the first data on inbound Request table
    And user click create Receipt data at inbound Request detail page

  Scenario: Fail to submit inbound Receipt with null form
    When user types " " on allocated quantity at inbound Receipt form
    When user clicks submit inbound Receipt button
    Then user should be able to see error messages on mandatory fields
    
    When user logs out from WMS

  Scenario: User successfully submits inbound Receipt
    When user downloads Berkas Serah Terima document on inbound Receipt form
    And user selects "Tidak tersedia" as expiry date on inbound Receipt form
    And user attaches downloaded document to "Surat Jalan" field on inbound Receipt form
    And user attaches downloaded document to "RPB" field on inbound Receipt form
    And user attaches downloaded document to "Plat Kendaraan" field on inbound Receipt form
    And user attaches downloaded document to "Kiriman Barang" field on inbound Receipt form
    And user attaches downloaded document to "Dokumen Lainnya" field on inbound Receipt form
    And user clicks submit inbound Receipt button
    And user confirm inbound Receipt submission popup
    Then user should be at inbound Receipt list
    And user should able to see "succeeded Receipt creation" snackbar at inbound Receipt list
    
    When user redirects to the previous visited page
    Then user should be at "Sudah Selesai" inbound Receipt detail page
    #TO DO: assert submitted data
    
    When user redirects to inbound menu
    And user applies "created Source ID" to find related inbound Request
    And user clicks the first data on inbound Request table
    Then user should be at "Sudah Selesai" inbound Request detail page
    #TO DO: assert submitted data
    #TO DO: add assertion for historical source data

    When user logs out from WMS