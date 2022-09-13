Feature: Get Inbound Receipt List

  Background: 
    Given user already logged in to WMS as "superuser"

  Scenario Outline: User successfully applies combination keyword and filter to see empty result at inbound Receipt list
    When user redirects to inbound menu
    And user clicks inbound Receipt list tab
    And user clicks <status> status chip at inbound Receipt list
    And user applies <keyword> to find related inbound Receipt
    And user applies <deliveryMethod> as delivery method filter at inbound Receipt list
    And user applies <deliveryDate> as delivery date filter at inbound Receipt list
    Then user should be at inbound Receipt list
    And query param for <status> "status" should be added to inbound Receipt list URL
    And query param for <keyword> "keyword" should be added to inbound Receipt list URL
    And query param for <deliveryMethod> "delivery method" should be added to inbound Receipt list URL
    And query param for <deliveryDate> "delivery date" should be added to inbound Receipt list URL
    And user should able to see empty inbound Receipts list
    When user logs out from WMS
    Examples:
    | status            | keyword             | deliveryMethod   | deliveryDate  |
    | "Sedang Diproses" | "asDIUUWdNKxjcqdKo" | "STORE COURIER"  | "1"           |

  Scenario Outline: User successfully filters inbound Receipt list by <status> status
    When user redirects to inbound menu
    And user clicks inbound Receipt list tab
    And user clicks <status> status chip at inbound Receipt list
    Then user should be at inbound Receipt list
    And query param for <status> "status" should be added to inbound Receipt list URL
    And user should only able to see inbound Receipt with <status> "status"
    When user logs out from WMS

    Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |

  Scenario Outline: User successfully using <keyword> to search <searchTarget> for inbound Receipt list
    When user redirects to inbound menu
    And user clicks inbound Receipt list tab
    And user applies <keyword> to find related inbound Receipt
    Then user should be at inbound Receipt list
    And query param for <keyword> "keyword" should be added to inbound Receipt list URL
    And user should only able to see inbound Receipts with <searchTarget> matched <keyword>
    When user logs out from WMS

    Examples:
    | keyword           | searchTarget    |
    | "08220000"        | "receipt ID"    |
    | "Toko"            | "supplier store"|

  Scenario Outline: User successfully filters inbound Receipt list by <deliveryMethod> deliveryMethod
    When user redirects to inbound menu
    And user clicks inbound Receipt list tab
    And user applies <deliveryMethod> as delivery method filter at inbound Receipt list
    Then user should be at inbound Receipt list
    And query param for <deliveryMethod> "delivery method" should be added to inbound Receipt list URL
    And user should only able to see inbound Receipt with <deliveryMethod> "delivery method"
    When user logs out from WMS

    Examples:
    | deliveryMethod    |
    | "SELF PICKUP"     |
    | "GADA LOGISTIC"   |
    | "STORE COURIER"   |
    | "Semua Metode"    |

 Scenario Outline: User successfully filters inbound Receipt list by <deliveryDate> deliveryDate
    //TODO: Precondition to create inbound Receipt with 22 as delivery date
    When user redirects to inbound menu
    And user clicks inbound Receipt list tab
    And user applies <deliveryDate> as delivery date filter at inbound Receipt list
    Then user should be at inbound Receipt list
    And query param for <deliveryDate> "delivery date" should be added to inbound Receipt list URL
    And user should only able to see inbound Receipt with <deliveryDate> "delivery date"
    When user logs out from WMS

    Examples:
    | deliveryDate    |
    | "22"            |