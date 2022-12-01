Feature: Get Change Status List

  Background: 
    Given user already logged in to WMS as "superuser"

  Scenario Outline: User successfully applies combination keyword and filter to see empty result at Change Status list
    When user redirects to Change Status menu
    And user clicks <status> status chip at Change Status list
    And user applies <keyword> to find related Change Status task
    And user applies <executionDate> date, <executionMonth> month, <executionYear> year as execution date filter at Change Status list
    And user applies "Warehouse DC FRS" and its store as global filters at Change Status list
    Then query param for <status> "status" should be added to Change Status list URL
    And query param for <keyword> "search" should be added to Change Status list URL
    And query param for <expectedDate> "execution_date" should be added to Change Status list URL
    And user should able to see empty search filter result on Change Status list
    
    When user logs out from WMS

    Examples:
    | status                        | keyword      | executionDate | executionMonth | executionYear | expectedDate |
    | "Sudah Selesai"               | "asdasdasda" | "22"          | "10"           | "1999"        | "1999-10-22" |

  Scenario Outline: User successfully applies warehouse and store global filter at Change Status list
    When user redirects to Change Status menu
    And user applies "15" as page amount at Change Status list
    And user applies "Warehouse DC FRS" and its store as global filters at Change Status list
    Then user should only able to see Change Status task with "store name" matched store of "Warehouse DC FRS"

    When user logs out from WMS

  Scenario Outline: User successfully filters Change Status list by <status> status
    When user redirects to Change Status menu
    And user clicks <status> status chip at Change Status list
    Then query param for <status> "status" should be added to Change Status list URL
    And user should only able to see Change Status task with <status> "status"

    When user clicks "Semua Status" status chip at Change Status list
    Then query param for "Semua Status" "status" should be added to Change Status list URL

    When user logs out from WMS

    Examples:
    | status                        |
    | "Belum Selesai"               |
    | "Menunggu Tindakan Admin"     |
    | "Sudah Selesai"               |

  Scenario Outline: User successfully using <keyword> to search <searchTarget> for Change Status list
    When user redirects to Change Status menu
    And user applies <keyword> to find related Change Status task
    Then query param for <keyword> "search" should be added to Change Status list URL
    And user should only able to see Change Status task with <searchTarget> matched <keyword>

    When user clicks "Semua Status" status chip at Change Status list
    And query param for <keyword> "search" should be added to Change Status list URL

    When user logs out from WMS

    Examples:
    | keyword           | searchTarget        |
    | "Expired"         | "change status ID"  |
    | "indomie"         | "product name"      |

  Scenario Outline: User successfully filters Change Status list by <executionDate> execution date
    When user redirects to Change Status menu
    And user applies <executionDate> date, <executionMonth> month, <executionYear> year as execution date filter at Change Status list
    Then query param for <expectedDate> "execution_date" should be added to Change Status list URL
    
    When user resets any applied delivery date filter at Change Status list
    And user should only able to see Change Status task with <expectedDate> "execution date"
    
    And query param for "null" "execution_date" should be added to Change Status list URL

    When user logs out from WMS

    Examples:
    | executionDate | executionMonth | executionYear | expectedDate |
    | "11"          | "10"           | "2022"        | "2022-10-11" |

   Scenario Outline: User successfully filters Change Status list by <pageAmount> page amount
    When user redirects to Change Status menu
    And user applies <pageAmount> as page amount at Change Status list
    Then query param for <pageAmount> "rowsPerPage" should be added to Change Status list URL
    And user should only able to see <pageAmount> Change Status per page maximum

    When user logs out from WMS

    Examples:
    | pageAmount    |
    | "15"          |
    | "20"          |
    | "25"          |