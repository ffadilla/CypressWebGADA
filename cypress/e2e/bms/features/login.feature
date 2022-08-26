Feature: Login Bussiness Management System Dashboard

    Scenario: Login Bussiness Management System dashboard
        Given user is in Business Management System Login page
        And user clicks on Masuk dengan Email button
        And user selects "BM" user email
        When user clicks on Login button
        Then user logged in successfully

    Scenario: Logout Bussiness Management System dashboard
        When user clicks on logout button
