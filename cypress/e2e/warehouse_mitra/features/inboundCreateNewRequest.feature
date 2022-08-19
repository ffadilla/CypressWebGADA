Feature: Create Inbound Source

  Background: 
    Given user "cypress_su@mail.com" already logged in to WMS with "warehouse" as password

  Scenario: Fail to create a new inbound Source/Request with null form
    When user redirects to inbound menu
    And user clicks create inbound request button
    And user selects new inbound request dropdown
    And user clicks submission button
    Then error messages should appear at create new inbound Request form
