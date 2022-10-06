Feature: Get Inbound Receipt

  Background: 
    Given user already logged in to WMS as "superuser"
    And user redirects to inbound menu
    And user applies "Silverqueen" to find related inbound Request
    And user clicks "Belum Selesai" status chip at inbound Request list
    And user clicks the first data on inbound Request table
    And user click create Receipt data at inbound Request detail page

  Scenario: Fail to submit inbound Receipt with null form
    When user types " " on allocated quantity at inbound Receipt form
    When user clicks submit inbound Receipt button
    Then user should be able to see error messages on mandatory fields
    
    When user cancels Receipt at inbound Receipt detail page
    Then user should be at inbound Receipt list
    And user logs out from WMS

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
    And user should see similar inbound Receipt data between detail page and submitted data
    And user should see "unchecked" partial checkbox on inbound Receipt form
    And user should be able to download "Surat Jalan" document on inbound Receipt form
    And user should be able to download "RPB" document on inbound Receipt form
    And user should be able to download "Plat Kendaraan" document on inbound Receipt form
    And user should be able to download "Kiriman Barang" document on inbound Receipt form
    And user should be able to download "Dokumen Lainnya" document on inbound Receipt form
    
    When user redirects to the previous visited page
    Then user should be at "Sudah Selesai" inbound Request detail page
    And user should see similar inbound Request data between detail page and submitted data

    When user clicks Source CTA button at inbound Request detail
    And user clicks historical reception button at inbound Source detail
    Then user should see similar inbound Source data between historical reception and submitted Receipt data
    And user should be able to download "Surat Jalan" document on inbound Source detail's history popup
    And user should be able to download "RPB" document on inbound Source detail's history popup
    And user should be able to download "Plat Kendaraan" document on inbound Source detail's history popup
    And user should be able to download "Kiriman Barang" document on inbound Source detail's history popup
    And user should be able to download "Dokumen Lainnya" document on inbound Source detail's history popup

    When user closes historical reception popup at inbound Source detail
    And user logs out from WMS

  Scenario: User successfully submits inbound Receipt with is_partial flag
    When user downloads Berkas Serah Terima document on inbound Receipt form
    And user reduces allocated quantity on inbound Receipt form
    And user selects "Tidak tersedia" as expiry date on inbound Receipt form
    And user applies "Cypress Remark" as discrepancy remarks on inbound Receipt form
    And user checks partial checkbox on inbound Receipt form
    And user attaches downloaded document to "Surat Jalan" field on inbound Receipt form
    And user clicks submit inbound Receipt button
    And user confirm inbound Receipt submission popup
    Then user should be at inbound Receipt list
    And user should able to see "succeeded Receipt creation" snackbar at inbound Receipt list
    
    When user redirects to the previous visited page
    Then user should be at "Sudah Selesai" inbound Receipt detail page
    And user should see similar inbound Receipt data between detail page and submitted data
    And user should see "checked" partial checkbox on inbound Receipt form
    And user should be able to download "Surat Jalan" document on inbound Receipt form
    
    When user redirects to the previous visited page
    Then user should be at "Sudah Selesai" inbound Request detail page
    And user should see similar inbound Request data between detail page and submitted data

    When user clicks Source CTA button at inbound Request detail
    And user clicks historical reception button at inbound Source detail
    And user should be able to download "Surat Jalan" document on inbound Source detail's history popup
    Then user should see similar inbound Source data between historical reception and submitted Receipt data

    When user closes historical reception popup at inbound Source detail
    And user logs out from WMS