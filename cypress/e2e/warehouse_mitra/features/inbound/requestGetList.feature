Feature: Get Inbound Request List

  Background: 
    Given user already logged in to WMS as "superuser"
@focus 
  Scenario Outline: User successfully applies combination keyword and filter to see empty result at inbound request list
    When user redirects to inbound Request menu
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
    When user redirects to inbound Request menu
    And user clicks <status> status chip at inbound Request list
    Then user should be at inbound Request list
    And query param for <status> "status" should be added to inbound Request list URL
    And user should only able to see inbound Request with <status> "status"
    When user clicks "Semua Status" status chip at inbound Request list
    Then query param for "Semua Status" "status" should be added to inbound Request list URL
    When user logs out from WMS

    Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |
    | "Dibatalkan"      |

  Scenario Outline: User successfully using <keyword> to search <searchTarget> for inbound request list
    When user redirects to inbound Request menu
    And user applies <keyword> to find related inbound Request
    Then user should be at inbound Request list
    And query param for <keyword> "keyword" should be added to inbound Request list URL
    And user should only able to see inbound Requests with <searchTarget> matched <keyword>
    When user resets any applied keyword filter at inbound Request list
    Then query param for "null" "keyword" should be added to inbound Request list URL
    When user logs out from WMS

    Examples:
    | keyword           | searchTarget    |
    | "Cyp-"            | "source ID"     |
    | "08220000"        | "request ID"    |
    | "Toko"            | "supplier store"|

  Scenario Outline: User successfully filters inbound request list by <deliveryMethod> deliveryMethod
    When user redirects to inbound Request menu
    And user applies <deliveryMethod> as delivery method filter at inbound Request list
    Then user should be at inbound Request list
    And query param for <deliveryMethod> "delivery method" should be added to inbound Request list URL
    And user should only able to see inbound Request with <deliveryMethod> "delivery method"
    When user applies "Semua Metode" as delivery method filter at inbound Request list
    Then query param for "Semua Metode" "delivery method" should be added to inbound Request list URL
    When user logs out from WMS

    Examples:
    | deliveryMethod    |
    | "SELF PICKUP"     |
    | "GADA LOGISTIC"   |
    | "STORE COURIER"   |
@focus 
 Scenario Outline: User successfully filters inbound request list by <deliveryDate> deliveryDate
    Given user redirects to inbound Request menu
    And user clicks create new inbound request button
    And user creates a new inbound Source Request
    
    When user applies <deliveryDate> as delivery date filter at inbound Request list
    Then user should be at inbound Request list
    And query param for <deliveryDate> "delivery date" should be added to inbound Request list URL
    And user should only able to see inbound Request with <deliveryDate> "delivery date"
    
    When user resets any applied delivery date filter at inbound Request list
    Then query param for "null" "delivery date" should be added to inbound Request list URL

    When user applies "created Source ID" to find related inbound Request
    And user clicks the first data on inbound Request table
    And user clicks Source CTA button at inbound Request detail
    And user cancels Source at inbound Source detail
    And user logs out from WMS

    Examples:
    | deliveryDate    |
    | "23"            |

   Scenario Outline: User successfully filters inbound Request list by <pageAmount> page amount
    When user redirects to inbound Request menu
    And user applies <pageAmount> as page amount at inbound Request list
    Then user should be at inbound Request list
    And query param for <pageAmount> "rowsPerPage" should be added to inbound Request list URL
    And user should only able to see <pageAmount> inbound Request per page maximum

    Examples:
    | pageAmount    |
    | "15"          |
    | "20"          |
    | "25"          |