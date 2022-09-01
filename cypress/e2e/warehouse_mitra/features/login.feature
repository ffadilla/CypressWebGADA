Feature: Login

  Background: 
    Given user is at login page

  Scenario Outline: Fail to login with <title>
    When user fills email input with <email> at login page
    And user fills password input with <password> at login page
    And user click MASUK button at login page
    Then "Email atau password salah" error message at login page should appear

    Examples: 
      | title                | email                     | password     |
      | incorrect password   | "cypress_su@mail.com"     | "asdasdasd"  |
      | non existing account | "asdhbw91923e@asd123.asd" | "asdasdasda" |

  Scenario: Login successfully with existing account
    When user fills email input with "cypress_su@mail.com" at login page
    And user fills password input with "warehouse" at login page
    And user click MASUK button at login page
    Then user should be at dashboard page
    When user logs out from WMS