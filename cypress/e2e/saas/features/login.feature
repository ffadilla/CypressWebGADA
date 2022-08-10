Feature: Login

    Background:
        Given SAAS - a user is on log in page

    Scenario: Login successfully with whatsapp OTP
        When SAAS - user fills phone number input with "81296169288"
        And SAAS - user clicks on masuk button
        And SAAS - user selects whatsapp otp type
        And SAAS - user clicks on send otp button
        And SAAS - user fills the otp input with correct otp
        And SAAS - user clicks on submit otp button
        Then SAAS - "Selamat datang" displayed after successfully logged in

    Scenario: Login successfully with sms OTP
        When SAAS - user fills phone number input with "81296169288"
        And SAAS - user clicks on masuk button
        And SAAS - user selects sms otp type
        And SAAS - user clicks on send otp button
        And SAAS - user fills the otp input with correct otp
        And SAAS - user clicks on submit otp button
        Then SAAS - "Selamat datang" displayed after successfully logged in

    Scenario: Fail to login with wrong OTP
        When SAAS - user fills phone number input with "81234567890"
        And SAAS - user clicks on masuk button
        And SAAS - user selects sms otp type
        And SAAS - user clicks on send otp button
        And SAAS - user fills the otp input with wrong otp
        And SAAS - user clicks on submit otp button
        Then SAAS - "No. handphone atau kode OTP salah. Silakan coba kembali" displayed after submitting otp code
