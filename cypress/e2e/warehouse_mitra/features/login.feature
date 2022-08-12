Feature: Login

    Background:
        Given Mitra - user is on log in page

    Scenario Outline: Fail to login with <title>
        When Mitra - user fills email input with <email>
        And Mitra - user fills password input with <password>
        And Mitra - user click MASUK button
        Then Mitra - "Email atau password salah" error message should appear 

    Examples:
        |title                  |email                      |password       |
        |incorrect password     |"cypress_su@mail.com"      |"asdasdasd"    |
        |non existing account   |"asdhbw91923e@asd123.asd"  |"asdasdasda"   |

    Scenario: Login successfully with existing account
        When Mitra - user fills email input with "cypress_su@mail.com"
        And Mitra - user fills password input with "warehouse"
        And Mitra - user click MASUK button
        Then Mitra - user is on dashboard page 