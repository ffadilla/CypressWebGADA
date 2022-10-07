Feature: Cancel Inbound Source

  Background: 
    Given user already logged in to WMS as "superuser"
    And user redirects to inbound menu
    And user clicks create new inbound request button
    And user creates a new inbound Source Request
    And user applies "created Source ID" to find related inbound Request
    And user clicks the first data on inbound Request table
    And user clicks Source CTA button at inbound Request detail

  Scenario: User successfully cancels created inbound Source
    When user cancels Source at inbound Source detail
    Then user should be at inbound Request list
    And user should able to see "succeeded Source cancelation" snackbar at inbound Request list

    When user applies "canceled Source ID" to find related inbound Request
    Then user should able to see "canceled" Request at inbound Request list

    When user clicks the first data on inbound Request table
    Then user should be at "Dibatalkan" inbound Request detail page

    When user clicks Source CTA button at inbound Request detail
    Then user should be at inbound Source detail page with "Dibatalkan" Request

    When user logs out from WMS

