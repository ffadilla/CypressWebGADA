Feature: Get Inbound Source Detail

  Background: 
    Given user already logged in to WMS as "superuser"

  Scenario Outline: User successfully redirects to inbound Source detail page from <status> Request
    When user redirects to inbound Request menu
    And user clicks <status> status chip at inbound Request list
    And user applies "Cyp" to find related inbound Request
    And user clicks the first data on inbound Request table
    And user clicks Source CTA button at inbound Request detail
    Then user should be at inbound Source detail page with <status> Request
    And user should see similar inbound Source data between detail page and <status> Request
    When user logs out from WMS

    Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |
    | "Dibatalkan"      |