Feature: Get Inbound Receipt Detail

  Background: 
    Given user already logged in to WMS as "superuser"
@focus 
  Scenario Outline: User successfully redirects to <status> detail page of inbound Receipt
    When user redirects to inbound Receipt menu
    And user clicks <status> status chip at inbound Receipt list
    And user clicks the first data on inbound Receipt table
    Then user should be at <status> inbound Receipt detail page
    And user should see similar inbound Receipt data between detail page and receipt list
    When user logs out from WMS

    Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sudah Selesai"   |