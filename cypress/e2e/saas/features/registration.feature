Feature: Registration

  Background: 
    Given a user is on registration page

  Scenario: User registers a new, non-marketplace account
    When user fills phone number with random phone number
    And user clicks on lanjutkan button #no. handphone
    And user selects whatsapp otp type
    And user clicks on send otp button
    And user fills the otp input with correct otp
    And user clicks on submit otp button
    And user fills name field with "WEB AUTOMATION USER"
    And user fills email field with "web.automation@gudangada.com"
    And user clicks on lanjutkan button #data diri
    And user fills store name field with "WEB AUTOMATION STORE"
    And user clicks on input address button
    And user fills store address field with "Jakarta"
    And user clicks on first store address search result
    And user clicks on choose this location
    And user clicks on daftar button
    Then "Selamat datang" displayed after successfully logged in
