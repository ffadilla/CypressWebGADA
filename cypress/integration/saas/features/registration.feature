Feature: Registration

    Background:
        Given SAAS - a user is on registration page

    Scenario: User registers a new, non-marketplace account
        When SAAS - user fills phone number with random phone number
        And SAAS - user clicks on lanjutkan button #no. handphone
        And SAAS - user selects whatsapp otp type
        And SAAS - user clicks on send otp button
        And SAAS - user fills the otp input with correct otp
        And SAAS - user clicks on submit otp button
        And SAAS - user fills name field with "WEB AUTOMATION USER"
        And SAAS - user fills email field with "web.automation@gudangada.com"
        And SAAS - user clicks on lanjutkan button #data diri
        And SAAS - user fills store name field with "WEB AUTOMATION STORE"
        And SAAS - user clicks on input address button
        And SAAS - user fills store address field with "Jakarta"
        And SAAS - user clicks on first store address search result
        And SAAS - user clicks on choose this location
        And SAAS - user clicks on daftar button
        Then SAAS - "Selamat datang" displayed after successfully logged in
