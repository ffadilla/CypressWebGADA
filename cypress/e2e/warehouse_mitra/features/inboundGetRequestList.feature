Feature: Get Inbound Request List

  Background: 
    Given user already logged in to WMS as "superuser"

  Scenario Outline: User successfully applies combination keyword and filter to see empty result at inbound request list
    When user redirects to inbound menu
    And user clicks <status> status chip at inbound Request list
    And user applies <keyword> to find related inbound Request
    And user applies <deliveryMethod> as delivery method filter at inbound Request list
    And user applies <deliveryDate> as delivery date filter at inbound Request list
    Then user should be at inbound Request list
    And query param for <status> "status" should be added to inbound Request list URL
    And query param for <keyword> "keyword" should be added to inbound Request list URL
    And query param for <deliveryMethod> "delivery method" should be added to inbound Request list URL
    And query param for <deliveryDate> "delivery date" should be added to inbound Request list URL
    And user should able to see empty inbound Requests list
    When user logs out from WMS
    Examples:
    | status         | keyword             | deliveryMethod   | deliveryDate  |
    | "Dibatalkan"   | "asDIUUWdNKxjcqdKo" | "STORE COURIER"  | "1"           |

  Scenario Outline: User successfully filters inbound request list by <status> status
    When user redirects to inbound menu
    And user clicks <status> status chip at inbound Request list
    Then user should be at inbound Request list
    And query param for <status> "status" should be added to inbound Request list URL
    And user should only able to see inbound Request with <status> "status"
    When user logs out from WMS

    Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |
    | "Dibatalkan"      |

  Scenario Outline: User successfully using <keyword> to search <searchTarget> for inbound request list
    When user redirects to inbound menu
    And user applies <keyword> to find related inbound Request
    Then user should be at inbound Request list
    And query param for <keyword> "keyword" should be added to inbound Request list URL
    And user should only able to see inbound Requests with <searchTarget> matched <keyword>
    When user logs out from WMS

    Examples:
    | keyword           | searchTarget    |
    | "Cyp-"            | "source ID"     |
    | "08220000"        | "request ID"    |
    | "Toko"            | "supplier store"|

  Scenario Outline: User successfully filters inbound request list by <deliveryMethod> deliveryMethod
    When user redirects to inbound menu
    And user applies <deliveryMethod> as delivery method filter at inbound Request list
    Then user should be at inbound Request list
    And query param for <deliveryMethod> "delivery method" should be added to inbound Request list URL
    And user should only able to see inbound Request with <deliveryMethod> "delivery method"
    When user logs out from WMS

    Examples:
    | deliveryMethod    |
    | "SELF PICKUP"     |
    | "GADA LOGISTIC"   |
    | "STORE COURIER"   |
    | "Semua Metode"    |

 Scenario Outline: User successfully filters inbound request list by <deliveryDate> deliveryDate
    //TODO: Precondition to create inbound Request with 22 as delivery date
    When user redirects to inbound menu
    And user applies <deliveryDate> as delivery date filter at inbound Request list
    Then user should be at inbound Request list
    And query param for <deliveryDate> "delivery date" should be added to inbound Request list URL
    And user should only able to see inbound Request with <deliveryDate> "delivery date"
    When user logs out from WMS

    Examples:
    | deliveryDate    |
    | "22"            |