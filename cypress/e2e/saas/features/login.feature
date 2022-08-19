Feature: Login

  Background: 
    Given a user is on log in page

  Scenario: Login successfully with whatsapp OTP
    When user fills phone number input with "81296169288"
    And user clicks on masuk button
    And user selects whatsapp otp type
    And user clicks on send otp button
    And user fills the otp input with correct otp
    And user clicks on submit otp button
    Then "Selamat datang" displayed after successfully logged in

  Scenario: Login successfully with sms OTP
    When user fills phone number input with "81296169288"
    And user clicks on masuk button
    And user selects sms otp type
    And user clicks on send otp button
    And user fills the otp input with correct otp
    And user clicks on submit otp button
    Then "Selamat datang" displayed after successfully logged in

  Scenario: Fail to login with wrong OTP
    When user fills phone number input with "81234567890"
    And user clicks on masuk button
    And user selects sms otp type
    And user clicks on send otp button
    And user fills the otp input with wrong otp
    And user clicks on submit otp button
    Then "No. handphone atau kode OTP salah. Silakan coba kembali" displayed after submitting otp code
