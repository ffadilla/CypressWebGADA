Feature: Get Inbound Receipt List

  Background: 
    Given user already logged in to WMS as "superuser"
@focus 
  Scenario Outline: User successfully applies combination keyword and filter to see empty result at inbound Receipt list
    When user redirects to inbound Receipt menu
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
    When user redirects to inbound Receipt menu
    And user clicks <status> status chip at inbound Receipt list
    Then user should be at inbound Receipt list
    And query param for <status> "status" should be added to inbound Receipt list URL
    And user should only able to see inbound Receipt with <status> "status"
    When user clicks "Semua Status" status chip at inbound Receipt list
    Then query param for "Semua Status" "status" should be added to inbound Receipt list URL
    When user logs out from WMS

    Examples:
    | status            |
    | "Belum Selesai"   |
    | "Sedang Diproses" |
    | "Sudah Selesai"   |

  Scenario Outline: User successfully using <keyword> to search <searchTarget> for inbound Receipt list
    When user redirects to inbound Receipt menu
    And user applies <keyword> to find related inbound Receipt
    Then user should be at inbound Receipt list
    And query param for <keyword> "keyword" should be added to inbound Receipt list URL
    And user should only able to see inbound Receipts with <searchTarget> matched <keyword>
    When user resets any applied keyword filter at inbound Receipt list
    Then query param for "null" "keyword" should be added to inbound Receipt list URL
    When user logs out from WMS

    Examples:
    | keyword           | searchTarget    |
    | "102200"          | "receipt ID"    |
    | "Toko"            | "supplier store"|

  Scenario Outline: User successfully filters inbound Receipt list by <deliveryMethod> deliveryMethod
    When user redirects to inbound Receipt menu
    And user applies <deliveryMethod> as delivery method filter at inbound Receipt list
    Then user should be at inbound Receipt list
    And query param for <deliveryMethod> "delivery method" should be added to inbound Receipt list URL
    And user should only able to see inbound Receipt with <deliveryMethod> "delivery method"
    When user applies "Semua Metode" as delivery method filter at inbound Receipt list
    Then query param for "Semua Metode" "delivery method" should be added to inbound Receipt list URL
    When user logs out from WMS

    Examples:
    | deliveryMethod    |
    | "SELF PICKUP"     |
    | "GADA LOGISTIC"   |
    | "STORE COURIER"   |

 Scenario Outline: User successfully filters inbound Receipt list by <deliveryDate> deliveryDate
    Given user redirects to inbound Request menu
    And user clicks create new inbound request button
    And user creates a new inbound Source Request
    And user applies "created Source ID" to find related inbound Request
    And user clicks the first data on inbound Request table
    And user click create Receipt data at inbound Request detail page

    When user redirects to inbound Receipt menu
    And user applies <deliveryDate> as delivery date filter at inbound Receipt list
    Then user should be at inbound Receipt list
    And query param for <deliveryDate> "delivery date" should be added to inbound Receipt list URL
    And user should only able to see inbound Receipt with <deliveryDate> "delivery date"
    
    When user resets any applied delivery date filter at inbound Receipt list
    Then query param for "null" "delivery date" should be added to inbound Receipt list URL
    
    When user redirects to inbound Request menu
    And user applies "created Source ID" to find related inbound Request
    And user clicks the first data on inbound Request table
    And user clicks Source CTA button at inbound Request detail
    And user cancels Source at inbound Source detail
    And user logs out from WMS

    Examples:
    | deliveryDate    |
    | "23"            |

   Scenario Outline: User successfully filters inbound Receipt list by <pageAmount> page amount
    When user redirects to inbound Receipt menu
    And user applies <pageAmount> as page amount at inbound Receipt list
    Then user should be at inbound Receipt list
    And query param for <pageAmount> "rowsPerPage" should be added to inbound Receipt list URL
    And user should only able to see <pageAmount> inbound Receipt per page maximum

    Examples:
    | pageAmount    |
    | "15"          |
    | "20"          |
    | "25"          |