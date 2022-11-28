Feature: Get Change Status List

  Background: 
    Given user already logged in to WMS as "superuser"

  Scenario Outline: User successfully filters Change Status list by <status> status
    When user redirects to Change Status menu
    And user clicks <status> status chip at Change Status list
    And query param for <status> "status" should be added to Change Status list URL
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
    #When user clicks "Sudah Selesai" status chip at Change Status list
    And user applies <keyword> to find related Change Status task
    And query param for <keyword> "search" should be added to Change Status list URL
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
    #When user clicks "Sudah Selesai" status chip at Change Status list
    And user applies <executionDate> date, <executionMonth> month, <executionYear> year as execution date filter at Change Status list
    And query param for <expectedDate> "execution_date" should be added to Change Status list URL
    
    When user resets any applied delivery date filter at Change Status list
    And user should only able to see Change Status task with <expectedDate> "execution date"
    
    And query param for "null" "execution_date" should be added to Change Status list URL

    When user logs out from WMS

    Examples:
    | executionDate | executionMonth | executionYear | expectedDate |
    | "11"          | "10"           | "2022"        | "2022-10-11" |