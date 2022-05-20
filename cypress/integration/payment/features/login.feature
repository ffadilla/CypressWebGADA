Feature: Login

    Scenario: Login successfully
        Given i open login Page
        When i click on login button
        Then i see "Payment Dashboard" displayed after successfully logged in
