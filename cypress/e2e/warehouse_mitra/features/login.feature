Feature: Login

  Background: 
    Given user is on log in page

  Scenario Outline: Fail to login with <title>
    When user fills email input with <email>
    And user fills password input with <password>
    And user click MASUK button
    Then "Email atau password salah" error message should appear

    Examples: 
      | title                | email                     | password     |
      | incorrect password   | "cypress_su@mail.com"     | "asdasdasd"  |
      | non existing account | "asdhbw91923e@asd123.asd" | "asdasdasda" |

  Scenario: Login successfully with existing account
    When user fills email input with "cypress_su@mail.com"
    And user fills password input with "warehouse"
    And user click MASUK button
    Then user should be on dashboard page
    When user logs out from WMS