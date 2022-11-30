Feature: Create a new cycle count task

  Scenario: Login before test
    Given user already logged in to WMS as "superuser"
  
  Scenario: Create a new single product task
    When user chooses menu Stock Opname
    And user should be redirected to the cycle count list page
    And user clicks add new cycle count task
    And user chooses "Warehouse Indra VIP" for the warehouse location
    And user chooses "Toko Indra WMS" for the store name
    And user chooses product 4 to be inspected
    And user submits the new cycle count task
    Then user should be redirected to the cycle count detail page
    And user should see the shown detail data are correct
  
  Scenario: Logout after test
    Then user logs out from WMS
