Feature: Get Change Status List

  Background: 
    Given user already logged in to WMS as "superuser"
  Scenario Outline: User successfully filters Change Status list by <status> status
    When user redirects to Change Status menu
    And user clicks <status> status chip at Change Status list
    And query param for <status> "status" should be added to Change Status list URL
    And user should only able to see Change Status with <status> "status"
    When user clicks "Semua Status" status chip at Change Status list
    Then query param for "Semua Status" "status" should be added to Change Status list URL
    When user logs out from WMS

    Examples:
    | status                        |
    | "Belum Selesai"               |
    | "Menunggu Tindakan Admin"     |
    | "Sudah Selesai"               |