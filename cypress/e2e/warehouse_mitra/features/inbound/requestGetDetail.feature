Feature: Get Inbound Request Detail

  Background: 
    Given user already logged in to WMS as "superuser"

  Scenario Outline: User successfully redirects to <status> detail page of inbound Request
    When user redirects to inbound Request menu
    And user clicks <status> status chip at inbound Request list
    And user clicks the first data on inbound Request table
    Then user should be at <status> inbound Request detail page
    And user should see similar inbound Request data between detail page and request list
    And user should see disabled global filter dropdown
    When user logs out from WMS

    Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |
    | "Dibatalkan"      |